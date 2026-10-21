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
    card.appendChild(el("h3", "Options commonly considered pregnancy-friendly"));
    card.appendChild(list(s.treatments));
    if (s.avoid.length) {
      const a = el("div", null, "avoid");
      a.appendChild(el("h3", "Generally avoid"));
      a.appendChild(list(s.avoid));
      card.appendChild(a);
    }
    const w = el("div", null, "warn");
    w.appendChild(el("p", "Contact your doctor promptly if: " + s.seeDoctor));
    card.appendChild(w);
    card.appendChild(el("p", "Not medical advice. Consult your doctor before taking any medication or treatment.", "note"));
    results.appendChild(card);
  });
}

const COMMON = ["Nausea", "Fatigue", "Frequent urination", "Breast tenderness", "Heartburn", "Constipation", "Bloating", "Back pain", "Headache", "Dizziness", "Leg cramps", "Food cravings", "Food aversions", "Mood swings", "Swollen feet", "Trouble sleeping", "Shortness of breath", "Belly pain", "Spotting", "Stretch marks", "Varicose veins", "Hemorrhoids"];
const selected = [];
const selectedEl = document.getElementById("selected");
const suggestionsEl = document.getElementById("suggestions");
let searchSeq = 0;

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
  return v.split(/[,\s]+/).filter(Boolean);
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

// MedlinePlus Web Service (NIH/NLM): free, no API key.
// The endpoint does not reliably send CORS headers, so browsers may block a direct call;
// fall back to a public CORS proxy if the direct request fails.
const MEDLINE = "https://wsearch.nlm.nih.gov/ws/query?db=healthTopics&retmax=3&term=";
async function fetchMedlineXml(term) {
  const url = MEDLINE + encodeURIComponent(term);
  const attempts = [url, "https://api.allorigins.win/raw?url=" + encodeURIComponent(url)];
  let lastErr;
  for (const u of attempts) {
    try {
      const res = await fetch(u);
      if (!res.ok) throw new Error("MedlinePlus request failed: " + res.status);
      return await res.text();
    } catch (err) { lastErr = err; }
  }
  throw lastErr;
}
async function medlineSearch(term) {
  const doc = new DOMParser().parseFromString(await fetchMedlineXml(term), "text/xml");
  return [...doc.querySelectorAll("document")].map(d => {
    const get = n => { const c = [...d.querySelectorAll("content")].find(x => x.getAttribute("name") === n); return c ? c.textContent.replace(/<[^>]+>/g, "") : ""; };
    return { title: get("title"), summary: get("FullSummary") || get("snippet"), url: d.getAttribute("url") };
  }).filter(r => /^https:\/\/medlineplus\.gov\//.test(r.url));
}

async function renderMedline(list_, seq) {
  const box = el("section", null, "card medline");
  box.appendChild(el("h2", "More information from MedlinePlus"));
  const status = el("p", "Loading\u2026");
  box.appendChild(status);
  results.appendChild(box);
  try {
    const settled = await Promise.allSettled(list_.map(medlineSearch));
    if (settled.every(r => r.status === "rejected")) throw settled[0].reason;
    const found = settled.filter(r => r.status === "fulfilled").flatMap(r => r.value);
    if (seq !== searchSeq) return;
    status.remove();
    if (!found.length) { box.appendChild(el("p", "No additional articles found.")); return; }
    const seen = new Set();
    found.filter(r => !seen.has(r.url) && seen.add(r.url)).forEach(r => {
      const a = el("a", r.title); a.href = r.url; a.target = "_blank"; a.rel = "noopener noreferrer";
      const h = el("h3"); h.appendChild(a);
      box.appendChild(h);
      if (r.summary) box.appendChild(el("p", r.summary.length > 300 ? r.summary.slice(0, 300) + "\u2026" : r.summary));
    });
    box.appendChild(el("p", "Source: MedlinePlus, U.S. National Library of Medicine.", "note"));
  } catch (err) {
    if (seq === searchSeq) {
      status.textContent = "Could not load MedlinePlus results right now. ";
      const a = el("a", "Search MedlinePlus directly");
      a.href = "https://medlineplus.gov/search/?query=" + encodeURIComponent(list_.join(" "));
      a.target = "_blank"; a.rel = "noopener noreferrer";
      status.appendChild(a);
    }
  }
}

let timer;
function update() {
  renderChips();
  const all = terms();
  const seq = ++searchSeq;
  results.replaceChildren();
  if (!all.length) return;
  const found = SYMPTOMS.filter(s => all.some(t => matches(s, t)));
  if (!found.length) results.appendChild(el("p", "No curated results found. Please speak with your doctor or midwife about this symptom."));
  render(null, found);
  clearTimeout(timer);
  timer = setTimeout(() => renderMedline(all, seq), 400);
}

document.getElementById("search-form").addEventListener("submit", e => { e.preventDefault(); addTyped(); });
searchInput.addEventListener("input", () => { if (/[,\s]$/.test(searchInput.value)) addTyped(); else update(); });
searchInput.addEventListener("keydown", e => {
  if (e.key === "Backspace" && !searchInput.value && selected.length) { selected.pop(); update(); }
});
renderChips();
