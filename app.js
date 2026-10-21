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

function render(query) {
  results.replaceChildren();
  if (!query.trim()) return;
  const found = SYMPTOMS.filter(s => matches(s, query));
  if (!found.length) {
    results.appendChild(el("p", "No results found. Please speak with your doctor or midwife about this symptom."));
    return;
  }
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

document.getElementById("search-form").addEventListener("submit", e => { e.preventDefault(); render(searchInput.value); });
searchInput.addEventListener("input", () => render(searchInput.value));
