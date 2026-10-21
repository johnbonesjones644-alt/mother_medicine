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
  },
  {
    name: "Frequent urination",
    keywords: ["urination", "pee", "urinate", "bladder", "frequent urination"],
    treatments: ["Empty your bladder fully; lean forward when you pee", "Drink plenty of fluids during the day, less before bed", "Pelvic floor (Kegel) exercises", "Limit caffeine"],
    avoid: ["Cutting back on water overall"],
    seeDoctor: "Burning, pain, blood in urine, or fever (possible urinary tract infection)."
  },
  {
    name: "Breast tenderness",
    keywords: ["breast", "breasts", "sore breasts", "tender"],
    treatments: ["Wear a well-fitting, supportive bra", "Warm or cool compress", "Sleep in a soft support bra"],
    avoid: [],
    seeDoctor: "A lump, redness, or fever."
  },
  {
    name: "Food cravings and aversions",
    keywords: ["craving", "cravings", "aversion", "aversions", "food cravings", "food aversions", "smell"],
    treatments: ["Eat balanced meals and keep healthy snacks handy", "Choose cold or bland foods if smells bother you", "Satisfy cravings in moderation"],
    avoid: ["Non-food cravings (e.g. chalk, dirt, ice in excess)—mention to your doctor", "Raw or undercooked foods and unpasteurised dairy"],
    seeDoctor: "You crave non-food items or cannot keep enough food down."
  },
  {
    name: "Mood swings",
    keywords: ["mood", "mood swings", "anxiety", "irritable", "emotional", "crying"],
    treatments: ["Rest and regular sleep", "Light exercise such as walking", "Talk to a partner, friend or support group", "Eat regular meals"],
    avoid: ["Herbal mood supplements unless approved by your doctor"],
    seeDoctor: "Persistent sadness, anxiety, or thoughts of harming yourself or the baby."
  },
  {
    name: "Shortness of breath",
    keywords: ["breath", "breathless", "breathing", "short of breath"],
    treatments: ["Slow down and rest", "Good posture; sit upright", "Sleep propped up with pillows", "Gentle prenatal exercise"],
    avoid: [],
    seeDoctor: "Sudden or severe breathlessness, chest pain, fast heartbeat, or blue lips."
  },
  {
    name: "Spotting",
    keywords: ["spotting", "bleeding", "discharge"],
    treatments: ["Rest and note the amount and colour", "Use a pad (not a tampon)"],
    avoid: ["Tampons and intercourse until checked"],
    seeDoctor: "Any bleeding, especially with pain or cramping—contact your doctor promptly."
  },
  {
    name: "Stretch marks and itchy skin",
    keywords: ["stretch marks", "itch", "itchy", "skin"],
    treatments: ["Moisturise regularly with fragrance-free lotion", "Lukewarm (not hot) baths", "Wear loose cotton clothing"],
    avoid: ["Retinoid creams"],
    seeDoctor: "Severe itching, especially on palms and soles (possible cholestasis)."
  },
  {
    name: "Varicose veins and hemorrhoids",
    keywords: ["varicose", "veins", "hemorrhoids", "haemorrhoids", "piles"],
    treatments: ["Elevate your legs", "Compression stockings", "High-fibre diet and fluids", "Warm sitz baths"],
    avoid: ["Straining on the toilet", "Standing or sitting for long periods"],
    seeDoctor: "Heavy rectal bleeding, severe pain, or a hard painful lump in a leg."
  }
];
