// General information only; not medical advice. Review with a clinician before publishing changes.
const SYMPTOMS = [
  {
    name: "Headache",
    keywords: ["head", "migraine", "head pain"],
    treatments: ["Rest in a dark, quiet room", "Cold or warm compress", "Drink water and eat regular meals", "Paracetamol/acetaminophen at the lowest effective dose, only if your doctor agrees"],
    avoid: ["Ibuprofen, naproxen and aspirin (unless prescribed)", "Combination migraine medicines"],
    seeDoctor: "Severe or sudden headache, vision changes, or swelling (possible pre-eclampsia)."
  },
  {
    name: "Nausea / morning sickness",
    keywords: ["nausea", "vomiting", "morning sickness", "sick"],
    treatments: ["Small, frequent meals", "Ginger (tea or biscuits)", "Vitamin B6, if approved by your doctor", "Dry crackers before getting up"],
    avoid: ["Herbal remedies not approved by your doctor"],
    seeDoctor: "You cannot keep fluids down, lose weight, or feel dizzy."
  },
  {
    name: "Heartburn / indigestion",
    keywords: ["heartburn", "acid reflux", "reflux", "indigestion"],
    treatments: ["Smaller meals; avoid lying down after eating", "Raise the head of your bed", "Calcium-based antacids, if approved by your doctor"],
    avoid: ["Antacids high in sodium or containing aspirin", "Bismuth subsalicylate"],
    seeDoctor: "Symptoms are severe, persistent, or come with upper-abdominal pain."
  },
  {
    name: "Constipation",
    keywords: ["constipated", "bowel", "stool"],
    treatments: ["More fibre (fruit, vegetables, whole grains)", "Drink plenty of water", "Gentle exercise such as walking", "Ask your doctor about a stool softener or fibre supplement"],
    avoid: ["Stimulant laxatives and castor oil unless advised by your doctor"],
    seeDoctor: "Severe pain or blood in stool."
  },
  {
    name: "Cold / stuffy nose",
    keywords: ["cold", "congestion", "runny nose", "sinus", "stuffy"],
    treatments: ["Rest and fluids", "Saline nasal spray or rinse", "Humidifier or steam", "Honey and warm water for throat"],
    avoid: ["Decongestants such as pseudoephedrine, especially in the first trimester", "Multi-symptom cold products"],
    seeDoctor: "Fever, trouble breathing, or symptoms lasting over a week."
  },
  {
    name: "Back pain",
    keywords: ["back", "backache", "pelvic pain", "sciatica"],
    treatments: ["Warm (not hot) compress", "Prenatal yoga or stretching", "Supportive shoes and pregnancy support belt", "Sleep on your side with a pillow between your knees"],
    avoid: ["Ibuprofen and aspirin"],
    seeDoctor: "Pain is severe, rhythmic, or comes with bleeding or fever."
  },
  {
    name: "Leg cramps",
    keywords: ["cramp", "cramps", "leg"],
    treatments: ["Gentle calf stretches before bed", "Stay hydrated", "Warm bath or massage", "Ask your doctor about magnesium"],
    avoid: [],
    seeDoctor: "One swollen, red, or painful leg (possible blood clot)."
  },
  {
    name: "Trouble sleeping",
    keywords: ["insomnia", "sleep", "tired", "fatigue"],
    treatments: ["Regular bedtime routine", "Pregnancy pillow", "Limit caffeine and late fluids", "Warm bath"],
    avoid: ["Sleep aids and herbal sleep supplements unless approved by your doctor"],
    seeDoctor: "Persistent insomnia, low mood, or anxiety."
  },
  {
    name: "Allergies / hay fever",
    keywords: ["allergy", "hay fever", "itchy eyes", "sneezing"],
    treatments: ["Saline nasal rinse", "Avoid known triggers", "Ask your doctor about loratadine or cetirizine"],
    avoid: ["Decongestant allergy products (the \"-D\" varieties)"],
    seeDoctor: "Wheezing or trouble breathing."
  },
  {
    name: "Swollen feet",
    keywords: ["swelling", "edema", "ankles", "feet"],
    treatments: ["Elevate your feet", "Rest on your left side", "Comfortable shoes", "Stay hydrated"],
    avoid: ["Diuretics unless prescribed"],
    seeDoctor: "Sudden swelling of face or hands, or with headache or vision changes."
  }
];
