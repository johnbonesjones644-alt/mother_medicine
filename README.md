# mother_medicine

Website for pregnant women to search their medical symptoms and see pregnancy-friendly treatment options.

> Not medical advice. Always consult a doctor, midwife, or pharmacist.

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge).
- Optional, for a local server: Python 3 **or** Node.js (any recent version).

The site is plain static HTML/CSS/JavaScript (`index.html`, `styles.css`, `app.js`, `symptom_data.js`). There is no build step and no dependencies to install.

## Run locally

1. Clone the repo:
   ```
   git clone https://github.com/johnbonesjones644-alt/mother_medicine.git
   cd mother_medicine
   ```
2. Either open `index.html` directly in your browser, or serve it:
   ```
   python3 -m http.server 8000
   ```
   or
   ```
   npx serve .
   ```
3. Visit http://localhost:8000 (for `npx serve`, use the URL it prints).

## Project structure

- `index.html` – page markup
- `styles.css` – styling
- `app.js` – search logic, rendering, and MedlinePlus API requests
- `symptom_data.js` – symptom and treatment data

## API research

See `api_research.txt` for public medical APIs. The site queries the MedlinePlus Web Service for each symptom and displays matching article summaries inline.
