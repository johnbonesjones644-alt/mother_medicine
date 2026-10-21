const searchInput = document.getElementById("search");
const results = document.getElementById("results");

function el(tag, text, cls) {
  const e = document.createElement(tag);
  if (text) e.textContent = text;
  if (cls) e.className = cls;
  return e;
}

function matches(symptom, query) {
  const q = query.trim().toLowerCase();
  if (!q) return false;
  if (SYNONYMS[q] === symptom.name) return true;
  return [symptom.name, ...symptom.keywords].some(t => t.toLowerCase().includes(q));
}

function list(items) {
  const ul = el("ul");
  items.forEach(i => ul.appendChild(el("li", i)));
  return ul;
}

function render(_unused, found) {
  found.forEach(s => {
    const card = el("section", null, "card");
    card.appendChild(el("h2", s.name));
    if (trimester && !TRIMESTERS[s.name]) card.appendChild(el("p", "Can occur in any trimester.", "tri-note"));
    if (s.urgent) {
      const u = el("div", null, "urgent");
      u.setAttribute("role", "alert");
      u.appendChild(el("strong", "Seek care promptly if: "));
      u.appendChild(document.createTextNode(s.seeDoctor + " If severe, call your emergency number."));
      card.appendChild(u);
    }
    if (s.about) card.appendChild(el("p", s.about, "about"));
    card.appendChild(el("h3", "Options often discussed with healthcare providers"));
    const ul = el("ul");
    s.treatments.forEach(t => {
      const li = el("li", t.name);
      if (t.why) {
        li.appendChild(el("br"));
        li.appendChild(el("small", "Why it helps: " + t.why, "why"));
      }
      ul.appendChild(li);
    });
    card.appendChild(ul);
    if (s.avoid.length) {
      const a = el("div", null, "avoid");
      a.appendChild(el("h3", "Generally avoid"));
      a.appendChild(list(s.avoid));
      card.appendChild(a);
    }
    const w = el("div", null, "warn");
    w.appendChild(el("p", "Contact your doctor promptly if: " + s.seeDoctor));
    card.appendChild(w);
    card.appendChild(el("p", "Not medical advice. Always check with your doctor, midwife or pharmacist before taking anything.", "note"));
    results.appendChild(card);
  });
}

const COMMON = SYMPTOMS.slice(0, 24).map(s => s.name);
const selected = [];
let trimester = 0;
const selectedEl = document.getElementById("selected");
const suggestionsEl = document.getElementById("suggestions");

function renderChips() {
  selectedEl.replaceChildren();
  selected.forEach(name => {
    const chip = el("span", null, "chip selected");
    chip.appendChild(el("span", name));
    const x = el("button", "\u00d7", "x");
    x.type = "button";
    x.setAttribute("aria-label", "Remove " + name);
    x.addEventListener("click", () => { selected.splice(selected.indexOf(name), 1); update(); });
    chip.appendChild(x);
    selectedEl.appendChild(chip);
  });
  suggestionsEl.replaceChildren();
  COMMON.filter(n => !selected.includes(n)).forEach(name => {
    const b = el("button", name, "chip");
    b.type = "button";
    b.addEventListener("click", () => { selected.push(name); update(); });
    suggestionsEl.appendChild(b);
  });
}

function splitTerms(v) {
  return v.split(/,/).map(x => x.trim()).filter(Boolean);
}

function terms() {
  const out = [...selected];
  splitTerms(searchInput.value).forEach(t => { if (!out.some(n => n.toLowerCase() === t.toLowerCase())) out.push(t); });
  return out;
}

function addTyped() {
  splitTerms(searchInput.value).forEach(t => {
    if (!selected.some(n => n.toLowerCase() === t.toLowerCase())) selected.push(t);
  });
  searchInput.value = "";
  update();
}

function renderMedline(list_) {
  const box = el("section", null, "card medline");
  box.appendChild(el("h2", "More information"));
  const p = el("p", "Read more on ");
  const a = el("a", "MedlinePlus (U.S. National Library of Medicine)");
  a.href = "https://medlineplus.gov/search/?query=" + encodeURIComponent(list_.join(" ") + " pregnancy");
  a.target = "_blank"; a.rel = "noopener noreferrer";
  p.appendChild(a);
  p.appendChild(document.createTextNode(". This opens an external site; your search terms are sent to it only if you click."));
  box.appendChild(p);
  results.appendChild(box);
}

function syncUrl(all) {
  const q = all.join(",");
  try { history.replaceState(null, "", q ? "?q=" + encodeURIComponent(q) : location.pathname); } catch (e) {}
}

function buildPrompt(all) {
  const tri = trimester ? "I am in my " + ["", "first", "second", "third"][trimester] + " trimester of pregnancy." : "I am pregnant (trimester not specified).";
  return [
    tri,
    "My symptoms: " + all.join(", ") + ".",
    "Please explain in plain language: (1) common causes, (2) self-care options generally considered safe in pregnancy, (3) which medicines or remedies to avoid, and (4) warning signs that need urgent medical care.",
    "Cite reputable sources (e.g. NHS, ACOG, MotherToBaby), say if anything is uncertain, and remind me to confirm with my doctor or midwife. This is not a substitute for medical advice."
  ].join("\n\n");
}

function renderPromptButton(all) {
  const box = el("section", null, "card ai-prompt");
  box.appendChild(el("h2", "Ask an AI assistant"));
  box.appendChild(el("p", "Copy this prompt and paste it into your preferred AI assistant. AI can be wrong; always confirm with your doctor or midwife. Don\u2019t include your name or other personal details."));
  const ta = el("textarea");
  ta.readOnly = true; ta.rows = 9; ta.value = buildPrompt(all);
  ta.setAttribute("aria-label", "Generated AI prompt");
  const btn = el("button", "Copy prompt", "copy-btn");
  btn.setAttribute("aria-live", "polite");
  btn.type = "button";
  btn.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(ta.value); btn.textContent = "Copied!"; }
    catch (e) { ta.select(); btn.textContent = "Press Ctrl/Cmd+C to copy"; }
    setTimeout(() => { btn.textContent = "Copy prompt"; }, 2500);
  });
  box.appendChild(ta); box.appendChild(btn);
  results.appendChild(box);
}

function update() {
  renderChips();
  const all = terms();
  results.replaceChildren();
  syncUrl(all);
  if (!all.length) return;
  const matched = SYMPTOMS.filter(s => all.some(t => matches(s, t)));
  const found = trimester ? matched.filter(s => s.urgent || !TRIMESTERS[s.name] || TRIMESTERS[s.name].includes(trimester)) : matched;
  const hidden = matched.length - found.length;
  if (trimester) results.appendChild(el("p", TRIMESTER_NOTES[trimester], "tri-note"));
  if (!found.length) results.appendChild(el("p", "No curated results found. Please speak with your doctor or midwife about this symptom. If you have heavy bleeding, severe pain, or reduced baby movement, call your emergency number or maternity unit now.", "no-match"));
  render(null, found);
  if (hidden) results.appendChild(el("p", hidden + " symptom(s) not usually seen in this trimester are hidden. Choose \u201cAny trimester\u201d to see them.", "tri-note"));
  renderMedline(all);
  renderPromptButton(all);
}

document.getElementById("search-form").addEventListener("submit", e => { e.preventDefault(); addTyped(); });
searchInput.addEventListener("input", () => { if (/,$/.test(searchInput.value)) addTyped(); else update(); });
searchInput.addEventListener("keydown", e => {
  if (e.key === "Backspace" && !searchInput.value && selected.length) { selected.pop(); update(); }
});
document.getElementById("trimester").addEventListener("change", e => { trimester = Number(e.target.value); update(); });
const initial = new URLSearchParams(location.search).get("q");
if (initial) splitTerms(initial).slice(0, 10).forEach(t => selected.push(t.slice(0, 80)));
update();
