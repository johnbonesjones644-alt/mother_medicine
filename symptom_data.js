// General information only; not medical advice. Review with a clinician before publishing changes.
// Sources of general guidance: ACOG, NHS, Mayo Clinic, CDC, MotherToBaby (OTIS), NICE.
// Schema: name, keywords (search terms), about (what/why it happens),
// treatments [{ name, why }], avoid [strings], seeDoctor (warning signs).
const t = (name, why) => ({ name, why });

const SYMPTOMS = [
  {
    name: "Headache",
    keywords: ["head", "migraine", "head pain"],
    about: "Common in pregnancy, often from hormonal shifts, increased blood volume, dehydration, low blood sugar, poor sleep, or tension.",
    treatments: [
      t("Rest in a dark, quiet room", "Reduces sensory stimulation that worsens tension and migraine pain."),
      t("Cold or warm compress", "Cold numbs and constricts blood vessels; warmth relaxes tight neck and shoulder muscles."),
      t("Drink water and eat regular meals", "Dehydration and low blood sugar are frequent, easily fixed triggers."),
      t("Paracetamol/acetaminophen at the lowest effective dose, only if your doctor agrees", "Has the longest safety record for pain relief in pregnancy.")
    ],
    avoid: ["Ibuprofen, naproxen and aspirin (unless prescribed)", "Combination migraine medicines"],
    seeDoctor: "Severe or sudden headache, vision changes, or swelling (possible pre-eclampsia)."
  },
  {
    name: "Nausea / morning sickness",
    keywords: ["nausea", "vomiting", "morning sickness", "sick", "queasy"],
    about: "Affects most pregnancies, usually weeks 6-14, linked to rising hCG and estrogen and a heightened sense of smell. It can occur at any time of day.",
    treatments: [
      t("Small, frequent meals", "An empty stomach increases stomach acid and nausea; steady food keeps blood sugar stable."),
      t("Ginger (tea or biscuits)", "Studies suggest ginger reduces nausea; it is thought to speed stomach emptying."),
      t("Vitamin B6, if approved by your doctor", "Shown in trials to reduce nausea severity; often combined with doxylamine under medical guidance."),
      t("Dry crackers before getting up", "Bland carbohydrate absorbs stomach acid and raises blood sugar before you move."),
      t("Avoid trigger smells and eat cold foods", "Cold foods give off fewer odours, which are a major trigger.")
    ],
    avoid: ["Herbal remedies not approved by your doctor", "Taking iron-containing prenatal vitamins on an empty stomach (try at night or with food)"],
    seeDoctor: "You cannot keep fluids down, lose weight, or feel dizzy (possible hyperemesis gravidarum)."
  },
  {
    name: "Heartburn / indigestion",
    keywords: ["heartburn", "acid reflux", "reflux", "indigestion", "gerd"],
    about: "Progesterone relaxes the valve at the top of the stomach and the growing uterus pushes stomach contents upward, letting acid rise.",
    treatments: [
      t("Smaller meals; avoid lying down after eating", "Less stomach volume and gravity keep acid from rising."),
      t("Raise the head of your bed", "Elevation reduces night-time reflux."),
      t("Calcium-based antacids, if approved by your doctor", "Neutralise stomach acid and are minimally absorbed."),
      t("Identify and limit trigger foods (spicy, fatty, citrus, caffeine)", "These relax the valve or increase acid production."),
      t("Wear loose clothing around the waist", "Reduces pressure on the stomach.")
    ],
    avoid: ["Antacids high in sodium or containing aspirin", "Bismuth subsalicylate"],
    seeDoctor: "Symptoms are severe, persistent, or come with upper-abdominal pain."
  },
  {
    name: "Constipation",
    keywords: ["constipated", "bowel", "stool", "constipation"],
    about: "Progesterone slows gut movement, and iron supplements and reduced activity add to it.",
    treatments: [
      t("More fibre (fruit, vegetables, whole grains)", "Adds bulk and softens stool so it passes more easily."),
      t("Drink plenty of water", "Fibre needs fluid to work; water keeps stool soft."),
      t("Gentle exercise such as walking", "Movement stimulates the bowel."),
      t("Prunes or prune juice", "Contain sorbitol and fibre, which draw water into the bowel."),
      t("Ask your doctor about a stool softener or fibre supplement", "Bulk-forming and softening products are barely absorbed, so are generally considered safe.")
    ],
    avoid: ["Stimulant laxatives and castor oil unless advised by your doctor", "Mineral oil"],
    seeDoctor: "Severe pain or blood in stool."
  },
  {
    name: "Diarrhea",
    keywords: ["diarrhea", "diarrhoea", "loose stool", "loose stools", "stomach bug"],
    about: "Can come from diet changes, prenatal vitamins, or infection. Fluid loss matters more in pregnancy.",
    treatments: [
      t("Oral rehydration solution and plenty of fluids", "Replaces lost water and salts, which helps prevent dehydration."),
      t("Bland foods (rice, banana, toast, plain potatoes)", "Easy to digest and help firm stools."),
      t("Rest and good hand washing", "Rest aids recovery; hygiene reduces spread of infection.")
    ],
    avoid: ["Anti-diarrhea medicines unless your doctor advises", "Caffeine, greasy and very sugary foods"],
    seeDoctor: "Lasts over 2 days, blood or mucus in stool, fever, severe cramping, or signs of dehydration."
  },
  {
    name: "Bloating and gas",
    keywords: ["bloating", "bloated", "gas", "wind", "flatulence", "belching"],
    about: "Progesterone slows digestion so gas builds up, and the uterus crowds the intestines.",
    treatments: [
      t("Eat slowly and in smaller portions", "Less swallowed air and less load on a slowed gut."),
      t("Limit gas-producing foods (beans, cabbage, carbonated drinks)", "These ferment in the gut and produce gas."),
      t("Gentle walking", "Activity helps move gas through the intestines."),
      t("Drink water and eat fibre gradually", "Keeps bowels moving without a sudden fibre spike that worsens gas.")
    ],
    avoid: ["Chewing gum and fizzy drinks in excess", "Medicines for gas unless approved by your doctor"],
    seeDoctor: "Bloating with severe pain, vomiting, or bleeding."
  },
  {
    name: "Cold / stuffy nose",
    keywords: ["cold", "congestion", "runny nose", "sinus", "stuffy", "nosebleed", "cough", "sore throat"],
    about: "Pregnancy hormones swell nasal membranes (pregnancy rhinitis), and immune changes make colds more likely.",
    treatments: [
      t("Rest and fluids", "Support your immune system and thin mucus."),
      t("Saline nasal spray or rinse", "Moistens and clears mucus without medication."),
      t("Humidifier or steam", "Moist air loosens congestion and soothes dry nasal lining, which also helps nosebleeds."),
      t("Honey and warm water for throat", "Coats and soothes the throat and may ease coughing."),
      t("Extra pillows at night", "Raised head helps sinuses drain.")
    ],
    avoid: ["Decongestants such as pseudoephedrine, especially in the first trimester", "Multi-symptom cold products"],
    seeDoctor: "Fever, trouble breathing, or symptoms lasting over a week."
  },
  {
    name: "Back pain",
    keywords: ["back", "backache", "pelvic pain", "sciatica", "pelvic girdle", "hip pain"],
    about: "Weight gain, a shifting centre of gravity, and the hormone relaxin loosening ligaments strain the spine and pelvis.",
    treatments: [
      t("Warm (not hot) compress", "Relaxes tight muscles and improves blood flow."),
      t("Prenatal yoga or stretching", "Strengthens support muscles and improves flexibility."),
      t("Supportive shoes and pregnancy support belt", "Distribute weight and relieve pressure on the lower back and pelvis."),
      t("Sleep on your side with a pillow between your knees", "Keeps the spine and hips aligned."),
      t("Prenatal physiotherapy or massage", "Targeted exercises and treatment address pelvic girdle pain and sciatica.")
    ],
    avoid: ["Ibuprofen and aspirin", "Heavy lifting and high heels", "Hot tubs or heat pads on the belly"],
    seeDoctor: "Pain is severe, rhythmic, or comes with bleeding, fever, or burning urination."
  },
  {
    name: "Round ligament pain",
    keywords: ["round ligament", "groin", "side pain", "sharp pain", "belly pain", "abdominal pain", "stomach pain", "lower abdomen"],
    about: "Sharp, brief pain in the lower belly or groin as ligaments supporting the uterus stretch, typically in the second trimester.",
    treatments: [
      t("Change positions slowly", "Sudden movements make the ligaments contract sharply."),
      t("Bend toward the pain when sneezing or coughing", "Reduces pull on the stretched ligament."),
      t("Warm bath or warm compress", "Relaxes the muscles and ligaments."),
      t("Prenatal stretches and a support belt", "Take weight off the ligaments.")
    ],
    avoid: ["Sudden twisting movements", "Anti-inflammatory painkillers unless prescribed"],
    seeDoctor: "Pain that is constant, severe, with bleeding, fever, chills, or painful urination."
  },
  {
    name: "Leg cramps",
    keywords: ["cramp", "cramps", "leg", "calf"],
    about: "Common at night in the second and third trimesters; possible causes include extra weight, circulation changes and low magnesium or calcium.",
    treatments: [
      t("Gentle calf stretches before bed", "Lengthen muscles that tend to spasm overnight."),
      t("Stay hydrated", "Dehydration makes muscles more prone to cramping."),
      t("Warm bath or massage", "Heat and massage relax the muscle and improve blood flow."),
      t("Ask your doctor about magnesium", "Evidence is mixed but may reduce frequency; dose should be guided by a clinician."),
      t("Flex your foot toward your shin when a cramp hits", "Stretches the calf and breaks the spasm.")
    ],
    avoid: ["Pointing your toes while stretching", "Long periods sitting still"],
    seeDoctor: "One swollen, red, or painful leg (possible blood clot)."
  },
  {
    name: "Restless legs",
    keywords: ["restless legs", "restless leg", "rls", "twitching", "jumpy legs"],
    about: "An urge to move the legs, worse at night; linked to low iron or folate, hormones and sleep loss.",
    treatments: [
      t("Moderate daily exercise", "Improves circulation and reduces symptoms for many people."),
      t("Leg massage or warm bath before bed", "Relaxes muscles and calms nerve sensations."),
      t("Ask your doctor to check iron and folate levels", "Low iron is a well-established contributor and is treatable."),
      t("Limit caffeine", "Caffeine can worsen symptoms.")
    ],
    avoid: ["Taking iron without testing first", "Medicines for RLS unless prescribed"],
    seeDoctor: "Symptoms severely disrupt sleep or come with leg swelling or pain."
  },
  {
    name: "Trouble sleeping",
    keywords: ["insomnia", "sleep", "sleeping", "tired", "fatigue", "exhausted", "exhaustion", "tiredness"],
    about: "Fatigue is strong in the first and third trimesters (progesterone, higher metabolic demand); insomnia comes from discomfort, bathroom trips and worry.",
    treatments: [
      t("Regular bedtime routine", "Consistent timing cues your body to wind down."),
      t("Pregnancy pillow", "Supports your belly, back and knees so side sleeping is comfortable."),
      t("Limit caffeine and late fluids", "Fewer stimulants and fewer night-time bathroom trips."),
      t("Warm bath", "A drop in body temperature after a bath promotes sleepiness."),
      t("Short daytime naps and iron-rich foods", "Naps offset lost sleep; iron-rich food helps prevent anaemia-related tiredness."),
      t("Light daily exercise", "Improves sleep quality if not done close to bedtime.")
    ],
    avoid: ["Sleep aids and herbal sleep supplements unless approved by your doctor", "Sleeping flat on your back in late pregnancy"],
    seeDoctor: "Persistent insomnia, low mood, anxiety, or extreme fatigue with pallor or dizziness (possible anaemia)."
  },
  {
    name: "Snoring and sleep apnea",
    keywords: ["snoring", "snore", "sleep apnea", "apnea", "stop breathing"],
    about: "Nasal swelling and weight gain narrow the airway; it is linked to higher blood pressure risk.",
    treatments: [
      t("Sleep on your side with your head raised", "Keeps the airway more open."),
      t("Saline spray or nasal strips", "Open swollen nasal passages."),
      t("Healthy weight gain within recommended range", "Less tissue crowding the throat.")
    ],
    avoid: ["Sedatives or alcohol", "Sleeping flat on your back"],
    seeDoctor: "Loud snoring with gasping, pauses in breathing, or high blood pressure."
  },
  {
    name: "Allergies / hay fever",
    keywords: ["allergy", "allergies", "hay fever", "itchy eyes", "sneezing"],
    about: "Allergies can worsen, improve or stay the same in pregnancy.",
    treatments: [
      t("Saline nasal rinse", "Washes pollen and allergens out of the nose."),
      t("Avoid known triggers", "Prevents the immune reaction at the source."),
      t("Ask your doctor about loratadine or cetirizine", "Second-generation antihistamines with reassuring safety data that block histamine."),
      t("Shower after being outdoors and keep windows closed in high-pollen season", "Removes pollen from skin and hair.")
    ],
    avoid: ["Decongestant allergy products (the \"-D\" varieties)"],
    seeDoctor: "Wheezing or trouble breathing."
  },
  {
    name: "Swollen feet",
    keywords: ["swelling", "edema", "oedema", "ankles", "feet", "swollen"],
    about: "Extra body fluid and pressure from the uterus on veins make fluid pool in the legs, especially late in pregnancy and in heat.",
    treatments: [
      t("Elevate your feet", "Gravity helps drain pooled fluid back toward the heart."),
      t("Rest on your left side", "Takes pressure off the large vein returning blood from the legs."),
      t("Comfortable shoes", "Avoid pressure on swollen feet."),
      t("Stay hydrated", "Adequate water helps the body shed excess fluid and sodium."),
      t("Swimming or standing in water", "Water pressure pushes fluid out of the tissues.")
    ],
    avoid: ["Diuretics unless prescribed", "Long periods standing, tight socks or rings"],
    seeDoctor: "Sudden swelling of face or hands, or with headache or vision changes (possible pre-eclampsia)."
  },
  {
    name: "Frequent urination",
    keywords: ["urination", "pee", "urinate", "bladder", "frequent urination", "leaking", "incontinence"],
    about: "Higher blood volume, kidney output and uterine pressure on the bladder; leaking urine with coughing or sneezing is common.",
    treatments: [
      t("Empty your bladder fully; lean forward when you pee", "Leaning helps release the last urine and reduces return trips."),
      t("Drink plenty of fluids during the day, less before bed", "Keeps you hydrated while limiting night-time trips."),
      t("Pelvic floor (Kegel) exercises", "Strengthen muscles that control the bladder and reduce leakage."),
      t("Limit caffeine", "Caffeine is a bladder irritant and diuretic.")
    ],
    avoid: ["Cutting back on water overall", "Holding in urine for long"],
    seeDoctor: "Burning, pain, blood in urine, or fever (possible urinary tract infection)."
  },
  {
    name: "Urinary tract infection (UTI) symptoms",
    keywords: ["uti", "burning urination", "burning pee", "painful urination", "urinary tract infection", "cystitis"],
    about: "Pregnancy makes UTIs more likely and they can reach the kidneys, so they always need treatment.",
    treatments: [
      t("See your doctor for urine testing and pregnancy-safe antibiotics", "Antibiotics are the effective treatment and prevent kidney infection and preterm labour."),
      t("Drink plenty of water", "Flushes bacteria from the urinary tract."),
      t("Urinate after sex and wipe front to back", "Reduces bacteria entering the urethra.")
    ],
    avoid: ["Waiting it out or self-treating", "Over-the-counter urinary products unless approved"],
    seeDoctor: "Any burning, urgency, or blood in urine; fever, back pain or chills mean urgent care."
  },
  {
    name: "Vaginal discharge",
    keywords: ["discharge", "vaginal discharge", "leukorrhea", "yeast", "yeast infection", "thrush", "vaginal itching"],
    about: "A thin, milky, mild-smelling discharge is normal due to higher estrogen and blood flow. Yeast infections are also more common.",
    treatments: [
      t("Wear cotton underwear and change panty liners", "Breathable fabric keeps the area dry and limits yeast growth."),
      t("Gentle washing with water only", "Soap and cleansers upset the natural balance."),
      t("Ask your doctor about vaginal antifungal cream for yeast", "Topical azole creams are preferred because little reaches the baby.")
    ],
    avoid: ["Douching and scented products", "Oral fluconazole unless your doctor prescribes it", "Tampons"],
    seeDoctor: "Green, grey or foul-smelling discharge, itching, pain, or watery leaking of fluid."
  },
  {
    name: "Breast tenderness",
    keywords: ["breast", "breasts", "sore breasts", "tender", "nipple"],
    about: "Often one of the earliest signs, from rising hormones and increased blood flow and growth in breast tissue.",
    treatments: [
      t("Wear a well-fitting, supportive bra", "Reduces movement and pulling on sensitive tissue."),
      t("Warm or cool compress", "Warmth eases aching; cold reduces swelling."),
      t("Sleep in a soft support bra", "Gives comfort and limits movement overnight.")
    ],
    avoid: ["Underwire or tight bras", "Hot water directly on nipples"],
    seeDoctor: "A lump, redness, or fever."
  },
  {
    name: "Food cravings and aversions",
    keywords: ["craving", "cravings", "aversion", "aversions", "food cravings", "food aversions", "smell"],
    about: "Driven by hormones and a stronger sense of smell and taste.",
    treatments: [
      t("Eat balanced meals and keep healthy snacks handy", "Stable blood sugar lowers intense cravings."),
      t("Choose cold or bland foods if smells bother you", "They release fewer odour molecules."),
      t("Satisfy cravings in moderation", "Avoids restriction while keeping nutrition balanced.")
    ],
    avoid: ["Non-food cravings (e.g. chalk, dirt, ice in excess)—mention to your doctor", "Raw or undercooked foods and unpasteurised dairy"],
    seeDoctor: "You crave non-food items (pica, which can signal anaemia) or cannot keep enough food down."
  },
  {
    name: "Increased appetite / weight gain",
    keywords: ["hungry", "appetite", "weight gain", "weight", "eating a lot"],
    about: "Your body needs about 300-450 extra calories a day in the second and third trimesters.",
    treatments: [
      t("Choose nutrient-dense snacks (nuts, yoghurt, fruit)", "Provide protein and fibre that keep you full and supply nutrients."),
      t("Eat regular meals including protein", "Prevents big hunger swings."),
      t("Track gain against your recommended range with your care team", "The healthy range depends on your pre-pregnancy BMI.")
    ],
    avoid: ["Crash diets", "Skipping meals"],
    seeDoctor: "Very rapid weight gain or sudden swelling."
  },
  {
    name: "Excess saliva / metallic taste",
    keywords: ["saliva", "drooling", "ptyalism", "metallic taste", "bad taste", "taste"],
    about: "A metallic taste (dysgeusia) and extra saliva are common in early pregnancy, tied to hormones and nausea.",
    treatments: [
      t("Sugar-free gum or mints, or sour candy", "Stimulate swallowing and mask the taste."),
      t("Brush teeth and tongue often, use a mild rinse", "Removes taste residue and freshens the mouth."),
      t("Try plastic utensils and cold foods", "Reduces the metallic effect of cutlery.")
    ],
    avoid: ["Foods that trigger nausea"],
    seeDoctor: "Heavy drooling with persistent vomiting."
  },
  {
    name: "Mood swings",
    keywords: ["mood", "mood swings", "anxiety", "irritable", "emotional", "crying", "stress", "worry"],
    about: "Hormone changes plus fatigue, physical changes and life worries can make emotions swing.",
    treatments: [
      t("Rest and regular sleep", "Sleep loss amplifies emotional reactivity."),
      t("Light exercise such as walking", "Releases endorphins and lowers stress hormones."),
      t("Talk to a partner, friend or support group", "Shared worries feel lighter and support lowers stress."),
      t("Eat regular meals", "Low blood sugar can worsen irritability."),
      t("Relaxation, breathing or mindfulness", "Calms the stress response.")
    ],
    avoid: ["Herbal mood supplements unless approved by your doctor", "Alcohol"],
    seeDoctor: "Persistent sadness, anxiety, or thoughts of harming yourself or the baby."
  },
  {
    name: "Depression",
    keywords: ["depression", "depressed", "sad", "low mood", "hopeless", "perinatal depression"],
    about: "Around 1 in 7 women experience depression in pregnancy or after birth. It is a medical condition, not a weakness, and is treatable.",
    treatments: [
      t("Talk to your doctor or midwife", "Screening and early treatment improve outcomes for you and baby."),
      t("Talking therapy (CBT or interpersonal therapy)", "Evidence-based and drug-free first-line treatment."),
      t("Social support, sleep and activity", "Protective factors that ease symptoms."),
      t("Discuss medication options with your doctor", "Benefits and risks can be weighed; stopping suddenly on your own is not advised.")
    ],
    avoid: ["Stopping prescribed medication without advice", "St John's wort without medical advice", "Isolating yourself"],
    seeDoctor: "Low mood for over two weeks, or any thoughts of self-harm — seek help urgently."
  },
  {
    name: "Shortness of breath",
    keywords: ["breath", "breathless", "breathing", "short of breath"],
    about: "Progesterone makes you breathe deeper and the uterus pushes up on the diaphragm, especially in the third trimester.",
    treatments: [
      t("Slow down and rest", "Reduces oxygen demand."),
      t("Good posture; sit upright", "Gives the lungs more room to expand."),
      t("Sleep propped up with pillows", "Takes weight of the uterus off the diaphragm."),
      t("Gentle prenatal exercise", "Builds breathing efficiency and fitness.")
    ],
    avoid: ["Overexertion", "Smoke and strong fumes"],
    seeDoctor: "Sudden or severe breathlessness, chest pain, fast heartbeat, or blue lips."
  },
  {
    name: "Dizziness / fainting",
    keywords: ["dizzy", "dizziness", "faint", "fainting", "lightheaded", "light-headed", "vertigo"],
    about: "Blood vessels widen and blood pressure drops in early pregnancy; later the uterus can compress veins when lying flat.",
    treatments: [
      t("Stand up slowly", "Gives blood pressure time to adjust."),
      t("Eat small regular meals and stay hydrated", "Prevents low blood sugar and low blood volume."),
      t("Lie on your left side", "Frees the veins that return blood to the heart."),
      t("Avoid overheating and standing still too long", "Heat and pooled blood lower blood pressure."),
      t("Ask about an iron check", "Anaemia causes lightheadedness.")
    ],
    avoid: ["Lying flat on your back in late pregnancy", "Hot baths and crowded hot places"],
    seeDoctor: "Fainting, with chest pain, palpitations, vision changes, or bleeding."
  },
  {
    name: "Palpitations / racing heart",
    keywords: ["palpitations", "racing heart", "heart racing", "heartbeat", "fast heartbeat", "heart pounding"],
    about: "Heart rate rises 10-20 beats per minute as blood volume increases by up to 50%.",
    treatments: [
      t("Rest and slow breathing", "Calms the nervous system."),
      t("Limit caffeine", "Caffeine can trigger extra beats."),
      t("Stay hydrated", "Low fluid makes the heart work harder.")
    ],
    avoid: ["Stimulants and energy drinks"],
    seeDoctor: "Chest pain, fainting, severe breathlessness, or very fast heartbeat that does not settle."
  },
  {
    name: "Anemia (low iron) symptoms",
    keywords: ["anemia", "anaemia", "iron", "pale", "weak", "weakness"],
    about: "Blood volume expands faster than red cells, so iron needs roughly double.",
    treatments: [
      t("Iron-rich foods (lean meat, beans, leafy greens, fortified cereals)", "Supply the iron needed to build red blood cells."),
      t("Pair iron with vitamin C (citrus, peppers)", "Vitamin C boosts iron absorption."),
      t("Ask your doctor about a blood test and iron supplement", "Confirms the need and sets a proper dose.")
    ],
    avoid: ["Taking iron with tea, coffee or calcium", "Self-dosing high iron"],
    seeDoctor: "Extreme tiredness, pallor, breathlessness, or heart racing."
  },
  {
    name: "Spotting",
    keywords: ["spotting", "bleeding", "implantation bleeding"],
    about: "Light spotting is common in early pregnancy, but bleeding can sometimes signal a problem and should be checked.",
    treatments: [
      t("Rest and note the amount and colour", "Gives your doctor useful information."),
      t("Use a pad (not a tampon)", "Lets you track flow and avoids introducing infection.")
    ],
    avoid: ["Tampons and intercourse until checked"],
    seeDoctor: "Any bleeding, especially with pain or cramping—contact your doctor promptly."
  },
  {
    name: "Early pregnancy cramping",
    keywords: ["cramping", "uterine cramps", "period-like cramps", "twinges"],
    about: "Mild cramps can occur as the uterus stretches and the embryo implants.",
    treatments: [
      t("Rest and lie down", "Relaxes the uterus."),
      t("Warm bath (not hot) or warm compress", "Eases muscle tension."),
      t("Drink water and empty your bladder", "Dehydration and a full bladder worsen cramps.")
    ],
    avoid: ["Hot tubs", "NSAIDs"],
    seeDoctor: "Strong or one-sided pain, bleeding, dizziness or shoulder pain (possible ectopic pregnancy)."
  },
  {
    name: "Braxton Hicks contractions",
    keywords: ["braxton hicks", "contractions", "tightening", "practice contractions", "false labor", "false labour"],
    about: "Irregular, painless tightening of the uterus, common from the second trimester.",
    treatments: [
      t("Change position or walk", "Often stops the tightening."),
      t("Drink water", "Dehydration is a common trigger."),
      t("Warm bath and rest", "Relaxes the uterus.")
    ],
    avoid: ["Overexertion and dehydration"],
    seeDoctor: "Regular contractions before 37 weeks, fluid leaking, bleeding, or reduced baby movement."
  },
  {
    name: "Stretch marks and itchy skin",
    keywords: ["stretch marks", "itch", "itchy", "skin", "dry skin"],
    about: "Skin stretches rapidly and gets dry; genetics largely determine stretch marks.",
    treatments: [
      t("Moisturise regularly with fragrance-free lotion", "Keeps skin supple and reduces itch."),
      t("Lukewarm (not hot) baths", "Hot water strips skin oils and worsens itch."),
      t("Wear loose cotton clothing", "Reduces friction and heat.")
    ],
    avoid: ["Retinoid creams", "Hot baths and harsh soaps"],
    seeDoctor: "Severe itching, especially on palms and soles (possible cholestasis)."
  },
  {
    name: "Acne and skin changes",
    keywords: ["acne", "pimples", "breakouts", "pigmentation", "melasma", "dark patches", "linea nigra", "mask of pregnancy"],
    about: "Hormones increase oil production and pigment; melasma and linea nigra usually fade after birth.",
    treatments: [
      t("Wash gently twice a day with a mild cleanser", "Removes oil without over-drying."),
      t("Use sunscreen (SPF 30+ mineral) and a hat", "Sun worsens melasma."),
      t("Ask your doctor about azelaic acid or topical benzoyl peroxide", "Considered low-risk options for acne.")
    ],
    avoid: ["Isotretinoin and oral/topical retinoids", "Salicylic acid in high amounts", "Hydroquinone unless advised"],
    seeDoctor: "Severe cystic acne or rapidly changing moles."
  },
  {
    name: "Varicose veins and hemorrhoids",
    keywords: ["varicose", "veins", "hemorrhoids", "haemorrhoids", "piles"],
    about: "Pressure from the uterus and relaxed vein walls cause pooling in leg and rectal veins.",
    treatments: [
      t("Elevate your legs", "Drains blood back toward the heart."),
      t("Compression stockings", "Support the veins to prevent pooling."),
      t("High-fibre diet and fluids", "Soft stool reduces straining on rectal veins."),
      t("Warm sitz baths", "Soothe and reduce swelling of hemorrhoids.")
    ],
    avoid: ["Straining on the toilet", "Standing or sitting for long periods"],
    seeDoctor: "Heavy rectal bleeding, severe pain, or a hard painful lump in a leg."
  },
  {
    name: "Carpal tunnel / tingling hands",
    keywords: ["carpal tunnel", "tingling", "numbness", "numb hands", "pins and needles", "wrist pain"],
    about: "Fluid retention swells tissue around the median nerve at the wrist.",
    treatments: [
      t("Wrist splints at night", "Keep the wrist neutral so the nerve is not compressed."),
      t("Rest and avoid repetitive wrist strain", "Reduces nerve irritation."),
      t("Elevate hands and shake them out", "Drains fluid from the wrist."),
      t("Cold compress", "Reduces swelling.")
    ],
    avoid: ["Sleeping with wrists bent"],
    seeDoctor: "Weakness, constant numbness, or tingling with sudden swelling or headaches."
  },
  {
    name: "Dental and gum problems",
    keywords: ["gums", "gum bleeding", "bleeding gums", "teeth", "dental", "gingivitis", "toothache"],
    about: "Hormones and increased blood flow make gums swollen and prone to bleeding (pregnancy gingivitis).",
    treatments: [
      t("Brush twice daily with a soft brush and floss gently", "Removes plaque that drives gum inflammation."),
      t("Dental check-up and cleaning", "Dental care is safe in pregnancy and treats gum disease linked to preterm birth."),
      t("Rinse with water after vomiting", "Protects enamel from stomach acid; wait before brushing.")
    ],
    avoid: ["Skipping the dentist", "Brushing right after vomiting"],
    seeDoctor: "Swelling of the face, fever, or severe tooth pain."
  },
  {
    name: "Hair and nail changes",
    keywords: ["hair", "hair loss", "hair growth", "nails", "brittle nails", "thinning"],
    about: "Hair often thickens in pregnancy, then sheds after birth; nails may grow faster or turn brittle.",
    treatments: [
      t("Balanced diet with protein, iron and biotin foods", "Provides building blocks for hair and nails."),
      t("Gentle hair care", "Less breakage."),
      t("Keep taking prenatal vitamins", "Fill nutrient gaps.")
    ],
    avoid: ["Hair-growth supplements", "Harsh chemical treatments"],
    seeDoctor: "Sudden severe hair loss or very pale, brittle nails."
  },
  {
    name: "Vision changes / dry eyes",
    keywords: ["vision", "blurry", "blurred vision", "dry eyes", "eyes", "eye", "spots"],
    about: "Fluid retention and hormones can change the eye's shape and tear production.",
    treatments: [
      t("Lubricating eye drops", "Replace tears that are lacking."),
      t("Postpone new glasses prescription", "Vision usually returns to normal after birth."),
      t("Rest your eyes from screens", "Reduces strain.")
    ],
    avoid: ["Wearing contact lenses if they are uncomfortable"],
    seeDoctor: "Sudden blurred vision, flashing lights or spots (possible pre-eclampsia)."
  },
  {
    name: "Hot flushes / sweating",
    keywords: ["hot", "sweating", "night sweats", "overheating", "flushed", "heat"],
    about: "Increased blood flow and metabolism raise body temperature.",
    treatments: [
      t("Wear light layers and cotton", "Lets heat and sweat escape."),
      t("Drink cool water; use a fan", "Cools the body and replaces lost fluids."),
      t("Lukewarm shower", "Lowers body temperature safely.")
    ],
    avoid: ["Hot tubs, saunas, and exercising in heat"],
    seeDoctor: "Fever of 38°C (100.4°F) or higher."
  },
  {
    name: "Fever / flu",
    keywords: ["fever", "flu", "influenza", "temperature", "chills", "body aches"],
    about: "A fever in pregnancy needs attention, especially early on. Flu vaccination is recommended.",
    treatments: [
      t("Rest and plenty of fluids", "Help the body fight infection and avoid dehydration."),
      t("Paracetamol/acetaminophen, if your doctor agrees", "Lowers fever with the best safety record."),
      t("Lukewarm sponge down", "Brings down temperature gently.")
    ],
    avoid: ["Ibuprofen and aspirin", "Hot baths"],
    seeDoctor: "Fever of 38°C (100.4°F) or higher—call your doctor the same day; flu may need antivirals."
  },
  {
    name: "Pelvic pressure and low pelvic pain",
    keywords: ["pelvic pressure", "lightning crotch", "symphysis", "pubic pain", "vaginal pain", "pressure"],
    about: "As the baby drops, pressure and sharp zaps may hit the pelvis, vagina or rectum; relaxin loosens the pelvic joints.",
    treatments: [
      t("Pelvic tilts and gentle exercise", "Strengthen pelvic support."),
      t("Warm bath and rest", "Relax muscles."),
      t("Maternity support belt", "Lifts and supports the belly weight.")
    ],
    avoid: ["Wide-legged movements", "Climbing stairs repeatedly"],
    seeDoctor: "Regular pressure before 37 weeks, bleeding, or fluid leakage."
  },
  {
    name: "Clumsiness / forgetfulness",
    keywords: ["clumsy", "forgetful", "forgetfulness", "pregnancy brain", "brain fog", "concentrate", "concentration"],
    about: "Often called pregnancy brain; sleep loss, hormones and a shifting centre of gravity all play a part.",
    treatments: [
      t("Write lists and use reminders", "Offload memory demands."),
      t("Prioritise sleep", "Sleep consolidates memory."),
      t("Eat regular meals and stay hydrated", "Stable energy supports focus.")
    ],
    avoid: ["Overloading your schedule"],
    seeDoctor: "Severe confusion, headaches or vision changes."
  },
  {
    name: "Low libido / intimacy changes",
    keywords: ["libido", "sex", "sex drive", "intercourse", "intimacy"],
    about: "Desire can rise or fall with hormones, fatigue, nausea or body image; sex is generally safe in a normal pregnancy.",
    treatments: [
      t("Talk openly with your partner", "Reduces anxiety and builds closeness."),
      t("Try comfortable positions and non-penetrative intimacy", "Takes pressure off your belly and body."),
      t("Water-based lubricant", "Relieves dryness.")
    ],
    avoid: ["Intercourse if your doctor advised against it (e.g. placenta previa, bleeding)"],
    seeDoctor: "Bleeding, pain or leaking fluid after sex."
  },
  {
    name: "Reduced baby movement",
    keywords: ["baby movement", "fetal movement", "kicks", "baby not moving", "less movement", "movement"],
    about: "Most women feel movement from 16-25 weeks; patterns matter after 28 weeks.",
    treatments: [
      t("Lie on your left side and count movements", "A calm focused period makes movements easier to notice."),
      t("Have a cold drink or snack", "May prompt movement while you count."),
      t("Contact your maternity unit without delay", "Reduced movement can signal a problem and needs checking.")
    ],
    avoid: ["Waiting until the next day", "Using home dopplers for reassurance"],
    seeDoctor: "Fewer than 10 movements in 2 hours, or any noticeable change—call right away."
  },
  {
    name: "High blood pressure / pre-eclampsia signs",
    keywords: ["blood pressure", "preeclampsia", "pre-eclampsia", "high blood pressure", "hypertension", "upper right pain"],
    about: "Can appear after 20 weeks; it is serious but treatable when found early.",
    treatments: [
      t("Attend all antenatal blood pressure checks", "Early detection prevents complications."),
      t("Rest and reduce stress", "Helps keep blood pressure lower."),
      t("Follow your doctor's plan, including medication if prescribed", "Controls pressure safely for you and baby.")
    ],
    avoid: ["Ignoring symptoms", "NSAIDs"],
    seeDoctor: "Severe headache, vision changes, upper right belly pain, sudden swelling, or vomiting—seek urgent care."
  },
  {
    name: "Gestational diabetes symptoms",
    keywords: ["diabetes", "gestational diabetes", "thirsty", "thirst", "blood sugar", "glucose"],
    about: "Placental hormones can make insulin less effective; it is usually screened for at 24-28 weeks.",
    treatments: [
      t("Attend glucose screening", "Detects it before it causes harm."),
      t("Balanced, lower-glycaemic meals", "Smoothes blood sugar peaks."),
      t("Walk after meals", "Muscles take up glucose, lowering blood sugar."),
      t("Follow your care team's insulin or medication plan", "Keeps sugars in target range.")
    ],
    avoid: ["Sugary drinks and juices", "Skipping meals"],
    seeDoctor: "Extreme thirst, frequent urination, or blurred vision."
  },
  {
    name: "Itchy palms and soles (cholestasis)",
    keywords: ["cholestasis", "itchy hands", "itchy palms", "itchy feet", "itching at night", "icp"],
    about: "Obstetric cholestasis involves bile acid build-up and needs medical monitoring.",
    treatments: [
      t("Seek a liver function and bile acid blood test", "Confirms or rules out the condition."),
      t("Follow your doctor's monitoring and treatment plan", "Reduces risk to the baby."),
      t("Cool showers and loose clothing", "Ease itch while waiting for review.")
    ],
    avoid: ["Self-treating with antihistamines to hide symptoms"],
    seeDoctor: "Persistent itching with no rash, especially at night—call within 24 hours."
  },
  {
    name: "Hyperemesis (severe vomiting)",
    keywords: ["hyperemesis", "severe vomiting", "can't keep food down", "dehydrated", "hyperemesis gravidarum"],
    about: "A severe form of morning sickness affecting about 1-3% of pregnancies and often needing treatment.",
    treatments: [
      t("Seek medical care early", "Prompt treatment prevents dehydration and weight loss."),
      t("Sip fluids and oral rehydration", "Replaces lost fluids."),
      t("Ask about prescription anti-sickness medicines and IV fluids", "Effective and pregnancy-safe options exist.")
    ],
    avoid: ["Suffering in silence"],
    seeDoctor: "Vomiting several times a day, weight loss, dark urine or dizziness."
  },
  {
    name: "Rashes and hives",
    keywords: ["rash", "hives", "pupps", "eczema", "heat rash", "red bumps"],
    about: "Skin conditions like PUPPS or eczema may flare in pregnancy, often on the belly.",
    treatments: [
      t("Cool compresses and oatmeal baths", "Calm inflamed skin."),
      t("Fragrance-free moisturiser", "Repairs the skin barrier."),
      t("Ask your doctor about mild topical steroids or an antihistamine", "Controls itch under supervision.")
    ],
    avoid: ["Scratching", "Scented soaps and hot water"],
    seeDoctor: "Widespread rash, fever, blisters, or rash with itching on palms and soles."
  },
  {
    name: "Anxiety about labour and birth",
    keywords: ["birth anxiety", "fear of birth", "labor anxiety", "labour anxiety", "panic", "panic attacks", "tokophobia", "nervous"],
    about: "Worry about childbirth is common, especially in the third trimester.",
    treatments: [
      t("Antenatal classes", "Knowledge reduces fear."),
      t("Breathing and relaxation practice", "Gives you coping tools."),
      t("Create a birth plan and talk with your midwife", "Increases a sense of control.")
    ],
    avoid: ["Horror stories online"],
    seeDoctor: "Panic attacks, intrusive thoughts, or anxiety that interferes with daily life."
  }
];
