import React from "react";
import { assets } from "../../assets/assets";
import { useParams } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function DigestiveDetail() {
  const { disorderId } = useParams(); // Get disorderId from URL
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();
  const disorders = [
    {
      id: "anorexia-nervosa",
      title: "Anorexia Nervosa",
      description:
        "Anorexia Nervosa is a serious eating disorder characterized by an intense fear of gaining weight, a distorted body image, and severe calorie restriction, leading to extreme weight loss and malnutrition. People with anorexia may starve themselves, exercise excessively, or use laxatives to control their weight. This condition affects both physical and mental health, leading to weakness, digestive disorders, hormonal imbalance, and even life-threatening complications.",
      symptoms: [
        "Extreme weight loss or low body weight",
        "Obsession with calorie counting, dieting, and food restrictions",
        "Fear of eating in public or skipping meals",
        "Excessive exercising despite being underweight",
        "Depression, anxiety, or social withdrawal",
        "Weakness, dizziness, and hair loss due to malnutrition",
        "Digestive issues like bloating, constipation, and acid reflux",
      ],
      ayurvedicDiscription: [
        "Ayurveda uses appetite-stimulating and digestive-boosting herbs to restore normal eating patterns and improve nutrient absorption. Some effective Ayurvedic remedies include:",
      ],
      ayurvedicApproach: [
        "Ashwagandha – Reduces stress and promotes weight gain.",
        "Brahmi – Supports brain function and calms the mind.",
        "Shatavari – Nourishes the body and regulates hormones.",
        "Ajwain (Carom Seeds) – Enhances digestion and relieves bloating.",
        "Trikatu (Ginger, Black Pepper, Long Pepper) – Improves digestion.",
        "Aloe Vera Juice – Stimulates appetite and soothes digestive issues.",
        "Hing (Asafoetida) – Helps relieve indigestion and gas while enhancing appetite.",
      ],
      dietRecommendations: {
        discription: [
          "Since Anorexia Nervosa affects both physical and mental health, following a nourishing diet and a balanced lifestyle is essential for recovery.",
        ],
        recommended: [
          "Warm, easily digestible foods such as soups, stews, and porridge",
          "Ghee and healthy fats to improve nutrient absorption",
          "Fresh fruits and vegetables for vitamins and minerals",
          "Whole grains like brown rice, quinoa, and oats",
          "Herbal teas (ginger tea, chamomile tea, etc.) for relaxation",
        ],
        avoid: [
          "Spicy, fried, and processed foods",
          "Excessive caffeine and carbonated drinks",
          "Cold and raw foods that slow down digestion",
          "Sugary snacks and artificial sweeteners",
        ],
      },
      lifestyleTips: [
        "Eat in a calm and relaxed environment.",
        "Practice Yoga and Meditation to manage stress.",
        "Massage with warm herbal oils (like sesame oil).",
        "Avoid excessive exercise and focus on gentle movements.",
        "Maintain a regular sleep schedule to regulate appetite and metabolism.",
      ],
    },
    {
      id: "chronic-gastritis",
      title: "Chronic Gastritis",
      description:
        "Chronic Gastritis is a long-term inflammation of the stomach lining, caused by infection, prolonged use of NSAIDs, excessive alcohol consumption, stress, or autoimmune disorders. It results in digestive discomfort, bloating, nausea, loss of appetite, and a burning sensation in the stomach. If left untreated, it can lead to ulcers, vitamin deficiencies, and an increased risk of stomach cancer.",
      symptoms: [
        "Persistent burning pain in the upper abdomen",
        "Nausea and vomiting",
        "Loss of appetite and unintentional weight loss",
        "Acid reflux and bloating",
        "Indigestion and early fullness during meals",
        "Weakness and fatigue due to poor nutrient absorption",
      ],
      ayurvedicApproach: [
        "Virechana (Purgation Therapy) – Removes excess Pitta toxins from the liver and intestines, reducing acidity and inflammation.",
        "Basti (Medicated Enema Therapy) – Strengthens the digestive system and regulates metabolism.",
        "Takradhara (Medicated Buttermilk Therapy) – Cools the nervous system and reduces stress-related gastritis.",
        "Shirodhara (Oil Therapy for the Head) – Helps reduce mental stress and anxiety, which are major triggers of gastritis.",
        "Pitta-Pacifying Abhyanga (Oil Massage) – Uses cooling herbal oils to relieve stress and improve digestion.",
        "Sheetali & Sheetkari Pranayama (Cooling Breathing Techniques) – Neutralizes stomach acid and reduces burning sensations.",
      ],
      dietRecommendations: {
        discription: [
          "In Ayurveda, Chronic Gastritis is linked to an imbalance in Pitta dosha, leading to excessive stomach acid and inflammation. Ayurveda focuses on cooling and healing the stomach lining, balancing digestion, and detoxifying the body using Panchakarma therapies, herbal remedies, and a Pitta-pacifying diet. Panchakarma therapies help in removing toxins (Ama), soothing the digestive tract, and strengthening Agni (digestive fire). The following therapies are highly effective for Chronic Gastritis: ",
        ],
        recommended: [
          "Cooling foods like coconut water, ghee, milk, and fresh fruits",
          "Easily digestible grains like rice, oats, and wheat",
          "Vegetables like bottle gourd, cucumber, and pumpkin",
          "Buttermilk and fresh yogurt to promote gut health",
          "Herbal teas like chamomile, licorice, and fennel tea",
        ],
        avoid: [
          "Spicy, oily, and processed foods",
          "Excessive coffee, tea, and carbonated drinks",
          "Sour and fermented foods like vinegar and pickles",
          "Excessive salt and fried foods",
          "Heavy dairy products like cheese and butter",
        ],
      },
      lifestyleTips: [
        "Eat smaller, frequent meals instead of large portions.",
        "Avoid stress and practice yoga or meditation to keep digestion balanced.",
        "Drink lukewarm water in the morning to cleanse the stomach.",
        "Avoid eating late at night to prevent acid buildup.",
        "Walk after meals to aid digestion.",
      ],
    },
    {
      id: "coeliac-disease",
      title: "Coeliac Disease",
      description:
        "Coeliac Disease is an autoimmune disorder where the ingestion of gluten (a protein found in wheat, barley, and rye) triggers an immune response that damages the small intestine lining. This leads to malabsorption of nutrients, causing various digestive and systemic issues. The condition is chronic and lifelong, requiring strict gluten-free dietary management.",
      symptoms: [
        "Chronic diarrhea or constipation",
        "Bloating, gas, and abdominal pain",
        "Unexplained weight loss",
        "Fatigue and weakness due to nutrient deficiencies",
        "Iron-deficiency anemia",
        "Bone pain and osteoporosis",
        "Skin rashes (Dermatitis Herpetiformis)",
        "Neurological issues like headaches and brain fog",
      ],
      ayurvedicApproach: [
        "Virechana (Therapeutic Purgation) – Removes Ama toxins and reduces inflammation.",
        "Basti (Medicated Enema Therapy) – Helps in gut healing and balancing Vata-Pitta dosha.",
        "Takradhara (Medicated Buttermilk Therapy) – Cools gut inflammation.",
        "Abhyanga (Full Body Oil Massage) – Strengthens digestion and immunity.",
        "Shirodhara (Oil Therapy for the Head) – Reduces stress and anxiety.",
        "Pinda Sweda (Herbal Bolus Therapy) – Relieves joint pain and nutrient deficiencies.",
      ],
      dietRecommendations: {
        discription: [
          "A gluten-free and Pitta-balancing diet is essential for managing Coeliac Disease.",
        ],
        recommended: [
          "Gluten-free grains like rice, millet, quinoa, and buckwheat",
          "Easily digestible vegetables like pumpkin, bottle gourd, and carrots",
          "Herbal teas like ginger, chamomile, and fennel tea",
          "Ghee to strengthen digestion",
          "Fresh dairy like buttermilk and homemade yogurt",
          "Fruits like bananas, apples, and papaya",
        ],
        avoid: [
          "All gluten-containing grains",
          "Processed foods with hidden gluten",
          "Spicy, acidic, and fermented foods",
          "Deep-fried and heavy foods",
        ],
      },
      lifestyleTips: [
        "Eat at regular intervals.",
        "Drink warm water in the morning.",
        "Practice yoga and meditation.",
        "Avoid excessive caffeine and alcohol.",
      ],
    },
    {
      id: "acid-reflux",
      title: "Acid Reflux (Gastroesophageal Reflux Disease - GERD)",
      description:
        "Acid reflux, commonly known as Gastroesophageal Reflux Disease (GERD), is a condition where stomach acid flows back into the esophagus, causing irritation and discomfort. This happens when the lower esophageal sphincter (LES), a muscular valve between the stomach and esophagus, weakens or relaxes inappropriately.",
      symptoms: [
        "Burning sensation (heartburn) in the chest",
        "Regurgitation of sour or bitter liquid into the throat",
        "Difficulty swallowing (dysphagia)",
        "Chronic cough or throat irritation",
        "Feeling of a lump in the throat",
        "Bad breath and excessive burping",
        "Worsening symptoms when lying down or after heavy meals",
      ],
      ayurvedicApproach: [
        "Virechana (Therapeutic Purgation) – Helps eliminate excess Pitta toxins, reducing acid production and balancing digestion.",
        "Takradhara (Buttermilk Therapy) – Calms the nervous system and reduces stress-induced acidity.",
        "Basti (Medicated Enema Therapy) – Cleanses toxins and improves gut health.",
        "Shirodhara (Oil Therapy for the Head) – Relieves stress, a major trigger for GERD symptoms.",
        "Abhyanga (Full Body Oil Massage) – Strengthens digestion and mitigates lifestyle-induced acidity.",
      ],
      dietRecommendations: {
        discription: [
          "To manage Acid Reflux, it is essential to adopt a Pitta-balancing diet and lifestyle.",
        ],
        recommended: [
          "Warm, light, and easily digestible meals",
          "Coconut water and buttermilk to soothe acidity",
          "Fruits like bananas, melons, and pears",
          "Cooked vegetables like bottle gourd, pumpkin, and carrots",
          "Whole grains like rice, oats, and quinoa",
          "Ghee (clarified butter) for gut healing",
        ],
        avoid: [
          "Spicy, oily, and deep-fried foods",
          "Citrus fruits (oranges, lemons, tomatoes) that aggravate acidity",
          "Caffeinated drinks (tea, coffee, cola)",
          "Alcohol and smoking",
          "Processed and packaged foods",
        ],
      },
      lifestyleTips: [
        "Eat small, frequent meals instead of large portions.",
        "Avoid eating late at night and lying down immediately after meals.",
        "Practice yoga and meditation to reduce stress.",
        "Sleep with your head elevated to prevent acid from flowing back up.",
        "Drink warm water in the morning to support digestion.",
      ],
    },
    {
      id: "ulcerative-colitis",
      title: "Ulcerative Colitis",
      description:
        "Ulcerative Colitis (UC) is a chronic inflammatory bowel disease (IBD) that affects the inner lining of the colon and rectum, causing ulcers, inflammation, and discomfort. It is an autoimmune disorder where the immune system mistakenly attacks the digestive tract, leading to persistent diarrhea, abdominal pain, rectal bleeding, and weight loss.",
      symptoms: [
        "Frequent diarrhea with blood and mucus",
        "Severe abdominal cramps and pain",
        "Unexplained weight loss",
        "Fatigue and weakness",
        "Loss of appetite",
        "Anemia due to blood loss",
        "Frequent urge to pass stool",
      ],
      ayurvedicApproach: [
        "Virechana (Therapeutic Purgation) – A detoxification therapy that helps remove excess Pitta and toxins from the liver and intestines, reducing inflammation.",
        "Basti (Medicated Enema Therapy) – Special herbal enemas soothe the inflamed colon, promote healing, and balance Vata and Pitta doshas.",
        "Takradhara (Medicated Buttermilk Therapy) – Cooling therapy that reduces inflammation in the intestines, strengthens digestion, and relieves stress.",
        "Pichu (Oil Soaked Cotton Application) – Medicated oils are applied to the abdomen to heal the mucosal lining of the intestines and reduce ulcer formation.",
        "Shirodhara (Oil Therapy for the Head) – Helps in managing stress, which is a key trigger for UC flare-ups.",
        "Abhyanga (Ayurvedic Massage) – Relaxes the body, reduces stress, and enhances digestion.",
      ],
      herbalRemedies: [
        "Bilva (Bael Fruit) – Soothes the intestines and helps in the natural healing of ulcers.",
        "Kutaj (Holarrhena Antidysenterica) – A powerful anti-inflammatory herb that controls diarrhea and reduces intestinal inflammation.",
        "Aloe Vera Juice – Promotes gut healing and reduces burning sensations.",
        "Mulethi (Licorice) – Helps in repairing the intestinal lining and reducing acidity.",
        "Giloy (Guduchi) – Strengthens the immune system and reduces autoimmune inflammation.",
        "Pomegranate Juice – Provides cooling effects and prevents dehydration.",
        "Turmeric (Curcumin) – A natural anti-inflammatory agent that reduces gut swelling and prevents flare-ups.",
      ],
      dietRecommendations: {
        discription: [
          "Diet plays a crucial role in managing Ulcerative Colitis, as certain foods can trigger flare-ups.",
        ],
        recommended: [
          "Easily digestible foods like khichdi, moong dal, and steamed vegetables",
          "Homemade fresh buttermilk",
          "Boiled rice with cow’s ghee",
          "Coconut water to hydrate the body",
          "Pomegranate juice to soothe the intestines",
        ],
        avoid: [
          "Spicy, fried, and processed foods",
          "Dairy products (if lactose intolerant)",
          "Caffeine, alcohol, and carbonated drinks",
          "Raw salads, nuts, and high-fiber foods during flare-ups",
        ],
      },
      lifestyleTips: [
        "Follow a meal routine and eat light, warm, and nourishing foods.",
        "Stay hydrated and avoid excessive spicy and sour foods.",
        "Practice yoga, pranayama, and meditation to reduce stress.",
        "Get adequate sleep to support gut healing.",
        "Avoid excessive use of painkillers (NSAIDs), as they can worsen symptoms.",
      ],
    },
    {
      id: "ibs",
      title: "Irritable Bowel Syndrome (IBS)",
      description:
        "Irritable Bowel Syndrome (IBS) is a chronic digestive disorder affecting the large intestine, causing discomfort, bloating, irregular bowel movements, and abdominal pain. IBS is a functional gastrointestinal disorder, meaning it affects the function of the digestive system without any visible structural damage.",
      symptoms: [
        "Abdominal pain or cramps",
        "Alternating diarrhea and constipation",
        "Bloating and excessive gas",
        "Mucus in the stool",
        "Urgency in bowel movements",
        "Incomplete evacuation feeling",
        "Worsening symptoms with stress and certain foods",
      ],
      ayurvedicApproach: [
        "Virechana (Therapeutic Purgation) – Detoxifies the liver and intestines, helping to balance Pitta and remove excess toxins (Ama) from the digestive tract.",
        "Basti (Medicated Enema Therapy) – The most effective therapy for IBS, Basti treatment nourishes and lubricates the intestines, balancing Vata dosha and improving digestion.",
        "Takradhara (Buttermilk Therapy) – Cooling therapy that helps reduce gut inflammation, relieves stress, and strengthens digestion.",
        "Abhyanga (Ayurvedic Full Body Massage) – Helps in calming the nervous system, reducing stress-related IBS triggers.",
        "Shirodhara (Oil Therapy for the Head) – Effective for stress-induced IBS, as it calms the mind and balances the nervous system.",
        "Udwartana (Herbal Powder Massage) – Stimulates metabolism and improves circulation to the digestive organs.",
      ],
      dietRecommendations: {
        discription: [
          "Since IBS is a gut-mind disorder, managing diet and stress is key to long-term relief.",
        ],
        recommended: [
          "Easily digestible, home-cooked meals",
          "Warm, light foods like khichdi, moong dal soup, and steamed vegetables",
          "Hydrating foods like coconut water and buttermilk",
          "Ghee (clarified butter) to lubricate the intestines",
          "Soaked flaxseeds and fennel seeds to improve digestion",
        ],
        avoid: [
          "Spicy, fried, and processed foods",
          "Dairy products (if lactose intolerant)",
          "Carbonated drinks and caffeine",
          "Artificial sweeteners and preservatives",
          "Heavy, raw, and cold foods",
        ],
      },
      lifestyleTips: [
        "Eat meals at regular times and avoid skipping meals.",
        "Chew food properly to aid digestion.",
        "Stay hydrated but avoid drinking too much water immediately after meals.",
        "Practice yoga and meditation to reduce stress-related IBS symptoms.",
        "Follow a proper sleep routine, as poor sleep can worsen IBS.",
      ],
    },
    {
      id: "peptic-ulcer",
      title: "Peptic Ulcer",
      description:
        "A Peptic Ulcer is a sore or lesion that forms in the lining of the stomach, small intestine, or esophagus due to excessive acid production. It occurs when the protective mucus layer of the digestive tract is weakened, allowing stomach acid to damage the inner tissues. Peptic ulcers are categorized into: Gastric Ulcers (stomach lining), Duodenal Ulcers (upper small intestine), and Esophageal Ulcers (esophagus, often due to acid reflux).",
      symptoms: [
        "Burning pain in the stomach (especially on an empty stomach).",
        "Nausea, bloating, and indigestion.",
        "Loss of appetite and unintentional weight loss.",
        "Vomiting blood or black stools (in severe cases).",
        "Acid reflux and excessive belching.",
      ],
      ayurvedicApproach: [
        "Virechana (Therapeutic Purgation) – Eliminates excess Pitta and toxins from the digestive system, reducing inflammation and acidity.",
        "Basti (Medicated Enema Therapy) – Helps in soothing the intestines, reducing acid reflux, and promoting gut healing.",
        "Takradhara (Medicated Buttermilk Therapy) – Cooling therapy that calms Pitta, soothes ulcers, and strengthens digestion.",
        "Pichu (Oil Application on Abdomen) – Helps in repairing the stomach lining and reducing ulcer pain.",
        "Shirodhara (Oil Therapy for the Head) – Reduces stress, which is a major trigger for ulcers.",
        "Abhyanga (Ayurvedic Massage) – Improves digestion and reduces acid build-up.",
      ],
      dietRecommendations: {
        discription: [
          "A balanced diet plays a crucial role in managing peptic ulcers and preventing further damage.",
        ],
        recommended: [
          "Easily digestible foods like khichdi, moong dal, and rice with ghee",
          "Coconut water and fresh buttermilk",
          "Boiled vegetables and cooling fruits like bananas and melons",
          "Amla juice or herbal teas to soothe the stomach",
        ],
        avoid: [
          "Spicy, fried, and acidic foods",
          "Caffeine, alcohol, and carbonated drinks",
          "Tomatoes, citrus fruits, and vinegar-based foods",
          "Processed and high-sodium foods",
        ],
      },
      lifestyleTips: [
        "Eat small and frequent meals to prevent excess acid build-up.",
        "Practice stress management techniques like meditation and yoga.",
        "Avoid smoking and excessive alcohol consumption.",
        "Get adequate sleep and avoid late-night eating.",
      ],
    },
    {
      id: "constipation",
      title: "Constipation",
      description:
        "Constipation is a common digestive disorder characterized by infrequent, difficult, or painful bowel movements. It occurs when the colon absorbs too much water from food, making stools hard and dry. Chronic constipation can lead to complications like hemorrhoids, anal fissures, and toxin accumulation in the body.",
      symptoms: [
        "Hard, dry, or lumpy stools",
        "Less than three bowel movements per week",
        "Straining during bowel movements",
        "A feeling of incomplete evacuation",
        "Bloating, gas, and abdominal discomfort",
      ],
      ayurvedicApproach: [
        "Basti (Medicated Enema Therapy) – Lubricates the intestines, softens stools, and promotes regular bowel movements.",
        "Virechana (Therapeutic Purgation) – A gentle detox that flushes out toxins, relieves chronic constipation, and enhances digestion.",
        "Abhyanga (Ayurvedic Massage) – Warm oil massage stimulates bowel movements and reduces dryness in the intestines.",
        "Shirodhara (Oil Therapy for the Head) – Helps in relieving stress-related constipation and promoting relaxation.",
        "Pichu (Oil Application on Abdomen) – Reduces abdominal tension, softens stools, and aids in smoother elimination.",
      ],
      dietRecommendations: {
        description: [
          "A proper diet and active lifestyle can prevent and manage constipation effectively.",
        ],
        recommended: [
          "High-fiber foods like whole grains, fresh fruits, and vegetables",
          "Plenty of warm fluids, including herbal teas",
          "Healthy fats like ghee and sesame oil to lubricate intestines",
          "Soaked raisins, figs, and prunes for natural laxative effects",
        ],
        avoid: [
          "Processed and refined foods (white bread, pasta, junk food)",
          "Excessive dairy and red meat, which slow digestion",
          "Dehydrating drinks like coffee, alcohol, and carbonated beverages",
        ],
      },
      lifestyleTips: [
        "Drink warm water with lemon every morning to stimulate digestion.",
        "Practice yoga postures like Pawanmuktasana and Malasana for better bowel movement.",
        "Establish a regular toilet routine to train your body.",
        "Reduce stress through meditation and deep breathing exercises.",
      ],
    },
    {
      id: "diarrhea",
      title: "Diarrhea (Atisara)",
      description:
        "Diarrhea, known as Atisara in Ayurveda, is a condition characterized by frequent, loose, or watery stools. It occurs due to an imbalance in the digestive fire (Agni), often triggered by infections, poor diet, or stress. If left untreated, it can lead to dehydration, weakness, and nutrient loss.",
      symptoms: [
        "Frequent loose or watery stools",
        "Abdominal cramps and discomfort",
        "Dehydration and excessive thirst",
        "Nausea and vomiting",
        "Fever and weakness in severe cases",
      ],
      ayurvedicApproach: [
        "Grahi Chikitsa (Absorbent Therapy) – Herbs like Bilva, Kutaja, and Musta help absorb excess fluids and balance digestion.",
        "Deepana & Pachana (Digestive & Metabolic Stimulation) – Improves digestive fire using herbal formulations like Trikatu and Hingvashtak Churna.",
        "Takra Therapy (Buttermilk Therapy) – Strengthens gut flora and restores digestive balance.",
        "Dahana Karma (Cauterization Therapy) – Used in chronic cases to reduce excessive fluid loss and restore gut health.",
        "Basti (Medicated Enema) – In certain cases, herbal enemas help strengthen the intestines and correct imbalances.",
      ],
      dietRecommendations: {
        description: [
          "A light, easily digestible diet is crucial to manage and recover from diarrhea.",
        ],
        recommended: [
          "Soft, bland foods like rice, moong dal, and khichdi",
          "Buttermilk with roasted cumin for gut health",
          "Pomegranate juice and ripe bananas to reduce frequency",
          "Coconut water to replenish lost electrolytes",
        ],
        avoid: [
          "Spicy, oily, and heavy foods that irritate digestion",
          "Raw vegetables and salads, which can worsen symptoms",
          "Dairy products (except buttermilk) that can trigger lactose intolerance",
          "Caffeinated and carbonated drinks that cause dehydration",
        ],
      },
      lifestyleTips: [
        "Drink boiled and cooled water to prevent dehydration.",
        "Practice rest and avoid strenuous activities to conserve energy.",
        "Consume herbal teas with ginger or fennel to soothe digestion.",
        "Follow a stress-free routine with meditation and adequate sleep.",
      ],
    },
    {
      id: "hemorrhoids",
      title: "Hemorrhoids (Arsha)",
      description:
        "Hemorrhoids, commonly known as piles, are swollen and inflamed veins in the rectum and anus that cause pain, discomfort, itching, and bleeding. They are classified into two types: Internal Hemorrhoids, which are located inside the rectum and usually painless but may cause bleeding, and External Hemorrhoids, which are found under the skin around the anus and can be painful, itchy, and may form blood clots.",
      symptoms: [
        "Pain, discomfort, and itching around the anus",
        "Bleeding during bowel movements",
        "Swelling and lumps near the anal region",
        "Mucous discharge and irritation",
        "Difficulty in sitting for long periods",
      ],
      ayurvedicApproach: [
        "Virechana (Therapeutic Purgation) – Detoxifies the liver and clears excessive Pitta toxins, reducing inflammation in hemorrhoidal veins.",
        "Basti (Medicated Enema Therapy) – Soothes rectal tissues, softens stools, and prevents further irritation.",
        "Kshara Karma (Ayurvedic Cauterization) – A specialized treatment that shrinks hemorrhoids using herbal alkaline preparations.",
        "Agnikarma (Thermal Cautery) – An effective treatment for bleeding and prolapsed hemorrhoids using controlled heat therapy.",
        "Sitz Bath with Herbal Decoctions – Relieves itching, pain, and swelling in the anal region.",
        "Lepana (Herbal Paste Application) – Application of medicated herbal pastes to reduce inflammation and pain.",
      ],
      dietRecommendations: {
        description: [
          "A healthy diet and lifestyle changes are essential for preventing and managing hemorrhoids effectively.",
        ],
        recommended: [
          "High-fiber foods like whole grains, leafy greens, legumes, and fresh fruits.",
          "Plenty of fluids to prevent hard stools and constipation.",
          "Buttermilk, ghee, and warm herbal teas to aid digestion.",
          "Soaked raisins and figs for natural laxative effects.",
        ],
        avoid: [
          "Spicy, fried, and processed foods that trigger inflammation.",
          "Caffeine and alcohol, which dehydrate the body and cause constipation.",
          "Red meat and dairy, which are heavy to digest.",
        ],
      },
      lifestyleTips: [
        "Avoid prolonged sitting; take breaks to move around.",
        "Do not strain while passing stools; practice regular bowel habits.",
        "Use herbal sitz baths to soothe pain and irritation.",
        "Practice yoga poses like Malasana, Vajrasana, and Pawanmuktasana for better digestion.",
      ],
    },
    {
      id: "dysentery",
      title: "Dysentery (Pravahika)",
      description:
        "Dysentery, known as Pravahika in Ayurveda, is a severe intestinal infection that causes frequent, painful diarrhea with mucus or blood in the stools. It results from bacterial or amoebic infections, poor hygiene, or weak digestion. If left untreated, it can lead to dehydration, malnutrition, and severe weakness.",
      symptoms: [
        "Frequent loose stools with mucus or blood",
        "Severe abdominal cramps and pain",
        "Urgency and straining during bowel movements",
        "Nausea, vomiting, and fever",
        "Dehydration, weakness, and loss of appetite",
      ],
      ayurvedicApproach: [
        "Deepana & Pachana (Digestive & Metabolic Stimulation) – Herbs like Trikatu and Musta enhance digestion and reduce Ama (toxins).",
        "Grahi Chikitsa (Absorbent Therapy) – Herbal formulations like Bilva, Kutaja, and Nagarmotha help absorb excess fluids and strengthen digestion.",
        "Takra Therapy (Buttermilk Therapy) – Restores gut flora and helps combat infections naturally.",
        "Virechana (Therapeutic Purgation) – Eliminates accumulated toxins from the digestive tract, balancing Pitta and Kapha doshas.",
        "Pichu (Herbal Oil Application on Abdomen) – Reduces abdominal cramps and soothes irritated intestinal walls.",
      ],
      dietRecommendations: {
        description: [
          "A simple, easily digestible diet is crucial for managing dysentery and promoting recovery.",
        ],
        recommended: [
          "Soft foods like rice gruel, khichdi, and moong dal soup.",
          "Buttermilk with roasted cumin for gut health.",
          "Pomegranate juice and honey to reduce inflammation.",
          "Coconut water and electrolyte-rich fluids to prevent dehydration.",
        ],
        avoid: [
          "Spicy, oily, and fried foods that irritate digestion.",
          "Raw vegetables and salads that can worsen symptoms.",
          "Heavy dairy products (except buttermilk) that may aggravate mucus production.",
          "Caffeinated, carbonated, and alcoholic beverages that cause dehydration.",
        ],
      },
      lifestyleTips: [
        "Drink boiled and cooled water to prevent infections.",
        "Maintain good hygiene and wash hands frequently.",
        "Get adequate rest and avoid stressful activities during recovery.",
        "Practice gentle yoga poses like Vajrasana and Supta Baddha Konasana to aid digestion.",
      ],
    },
    {
      id: "barretts-esophagus",
      title: "Barrett's Esophagus",
      description:
        "Barrett's esophagus is a condition where the normal tissue lining the esophagus is replaced by abnormal tissue due to chronic acid reflux (GERD). This occurs when stomach acids repeatedly flow back into the esophagus, irritating and damaging the lining. Over time, the cells in the esophagus change, increasing the risk of esophageal cancer.",
      symptoms: [
        "Frequent heartburn or acid reflux",
        "Regurgitation of food or sour liquid",
        "Difficulty swallowing (dysphagia)",
        "Chest pain or discomfort",
        "Chronic cough or hoarseness",
        "Sensation of a lump in the throat",
      ],
      ayurvedicApproach: [
        "Virechana (Purgation Therapy) – Detoxifies the digestive system, eliminates excess Pitta, and restores balance, reducing acid reflux.",
        "Shirodhara (Oil Therapy for the Head) – Helps relieve stress, which can exacerbate acid reflux, and promotes relaxation.",
        "Basti (Medicated Enema) – Removes excess toxins and balances Vata dosha, improving overall digestive health.",
        "Nasya (Nasal Therapy) – Clears excess Pitta in the head and throat area, easing burning sensations and improving respiratory function.",
        "Udvartan (Herbal Powder Massage) – Stimulates blood circulation, detoxifies the body, and balances digestive fluids.",
        "Abhyanga (Full Body Massage) – A warm oil massage that reduces stress, balances Pitta, and improves digestion.",
      ],
      dietRecommendations: {
        description: [
          "Proper dietary adjustments and lifestyle changes are crucial for managing Barrett's esophagus and preventing complications.",
        ],
        recommended: [
          "Non-acidic, cooling foods such as bananas, melons, and cucumbers.",
          "Fiber-rich foods like whole grains, vegetables, and legumes to aid digestion.",
          "Healthy fats like ghee, olive oil, and coconut oil.",
          "Anti-inflammatory foods like turmeric, ginger, and green leafy vegetables.",
          "Herbal teas such as chamomile, ginger, or licorice tea to calm the digestive tract.",
        ],
        avoid: [
          "Spicy, oily, or fried foods that irritate the digestive system.",
          "Citrus fruits and tomatoes, which are acidic and can trigger reflux.",
          "Caffeinated beverages and carbonated drinks that can aggravate symptoms.",
          "Dairy products (if intolerant) and processed foods.",
        ],
      },
      lifestyleTips: [
        "Eat smaller, more frequent meals to prevent overeating and reduce the risk of acid reflux.",
        "Avoid lying down immediately after meals and wait for at least 2-3 hours before sleeping.",
        "Maintain a healthy weight, as excess weight can increase stomach pressure and worsen reflux.",
        "Avoid stress and practice relaxation techniques such as meditation, yoga, and deep breathing exercises.",
        "Elevate the head of the bed to prevent acid reflux at night.",
      ],
    },
    {
      id: "dyspepsia",
      title: "Dyspepsia (Agnimandya)",
      description:
        "Dyspepsia, known as Agnimandya in Ayurveda, refers to indigestion caused by weakened digestive fire (Agni). It results in discomfort, bloating, and an inability to properly digest food, often due to improper eating habits, stress, or imbalances in the doshas, primarily Pitta and Kapha.",
      symptoms: [
        "Fullness and discomfort in the upper abdomen after eating",
        "Bloating and excessive gas",
        "Burning sensation in the stomach",
        "Nausea or occasional vomiting",
        "Loss of appetite",
        "Acid reflux or belching",
      ],
      ayurvedicApproach: [
        "Deepana & Pachana (Digestive Stimulation) – Herbs like Trikatu and Ajwain enhance digestion and burn Ama (toxins).",
        "Vamana (Therapeutic Emesis) – A detoxification therapy that removes excess Kapha and clears blockages in digestion.",
        "Virechana (Purgation Therapy) – Helps eliminate excessive Pitta toxins that cause hyperacidity and indigestion.",
        "Abhyanga (Ayurvedic Oil Massage) – Reduces stress and improves circulation, supporting better digestion.",
        "Takra Dhara (Buttermilk Therapy) – Soothes the digestive tract, balances Pitta, and improves gut health.",
        "Agnikarma (Thermal Cautery) – Helps relieve chronic digestive discomfort and acidity.",
      ],
      dietRecommendations: {
        description: [
          "A light, easily digestible diet is key to managing dyspepsia and strengthening Agni.",
        ],
        recommended: [
          "Warm, freshly cooked foods like soups, khichdi, and moong dal.",
          "Spices like ginger, cumin, fennel, and black pepper to stimulate digestion.",
          "Buttermilk with roasted cumin to aid digestion.",
          "Herbal teas like ginger, mint, or licorice for soothing stomach discomfort.",
          "Fruits like pomegranates and papaya for natural digestive support.",
        ],
        avoid: [
          "Cold, stale, and processed foods that weaken Agni.",
          "Heavy dairy products, red meat, and fried foods that slow digestion.",
          "Carbonated drinks, caffeine, and alcohol that aggravate Pitta.",
          "Overeating and late-night meals, which strain digestion.",
        ],
      },
      lifestyleTips: [
        "Eat at regular times and avoid skipping meals to maintain digestive balance.",
        "Chew food properly to aid digestion and absorption of nutrients.",
        "Drink warm water throughout the day to support Agni and prevent bloating.",
        "Practice yoga postures like Vajrasana and Pawanmuktasana after meals.",
        "Reduce stress through meditation and mindful eating habits.",
      ],
    },
    {
      id: "bloating-and-gas",
      title: "Bloating & Gas",
      description:
        "Bloating and gas are common digestive issues caused by excess gas buildup in the stomach and intestines, leading to discomfort, heaviness, and abdominal distension. It occurs when undigested food ferments in the gut, producing gas that may cause burping, flatulence, and stomach cramps.",
      symptoms: [
        "Overeating or eating too quickly",
        "Consumption of gas-producing foods like beans, lentils, dairy, and carbonated drinks",
        "Weak Agni (digestive fire) and Ama (toxins) accumulation",
        "Imbalance in Vata dosha, leading to air retention in the gut",
        "Stress and anxiety, affecting digestion",
        "Low fiber intake or dehydration, causing slow digestion",
      ],
      ayurvedicApproach: [
        "Vamana (Therapeutic Emesis) – Clears excess Kapha and undigested toxins from the stomach, improving digestion.",
        "Virechana (Purgation Therapy) – Eliminates Pitta toxins from the intestines, reducing bloating and acidity.",
        "Basti (Medicated Enema Therapy) – The most effective therapy for Vata disorders, Basti helps in regulating bowel movements, reducing gas buildup, and improving gut health.",
        "Udavartana (Herbal Powder Massage) – Stimulates circulation and metabolism, helping to reduce bloating and water retention.",
        "Nasya (Nasal Therapy) – Clears toxins affecting digestion and balances Vata dosha, preventing gas formation.",
        "Abhyanga (Herbal Oil Massage) – Relaxes the abdominal muscles and stimulates better digestion and absorption of nutrients.",
        "Swedana (Steam Therapy) – Opens body channels, aiding in removal of trapped gases and toxins.",
      ],
      dietRecommendations: {
        description: [
          "Adopting an Ayurvedic diet and lifestyle can help prevent bloating and gas naturally.",
        ],
        recommended: [
          "Warm, light, and easily digestible meals like soups, khichdi, and steamed vegetables.",
          "Coconut water and buttermilk, which help in digestion.",
          "Herbal teas with ginger, fennel, or cumin.",
          "Drinking warm water with lemon to cleanse the digestive tract.",
        ],
        avoid: [
          "Heavy, fried, and processed foods that slow digestion.",
          "Carbonated drinks, caffeine, and alcohol, which cause bloating.",
          "Dairy products, if lactose intolerance is an issue.",
          "Raw and cold foods, which disturb Vata balance.",
        ],
      },
      lifestyleTips: [
        "Eat mindfully and chew food properly to avoid swallowing air.",
        "Avoid lying down immediately after meals.",
        "Practice yoga and deep breathing exercises to reduce stress-related bloating.",
        "Stay hydrated and drink warm water throughout the day.",
      ],
    },
    {
      id: "flatulence",
      title: "Flatulence (Adhmana – Excessive Gas & Bloating)",
      description:
        "Flatulence, known as Adhmana in Ayurveda, refers to excessive gas accumulation in the digestive system, causing bloating, abdominal discomfort, and frequent passing of gas. It occurs due to improper digestion, weak digestive fire (Agni), and an imbalance in Vata dosha, leading to air retention in the intestines.",
      symptoms: [
        "Weak digestive fire (Mandagni) leading to incomplete digestion",
        "Overeating or eating incompatible food combinations",
        "Excessive consumption of gas-producing foods like beans, lentils, cabbage, and carbonated drinks",
        "Lack of physical activity and sedentary lifestyle",
        "Indigestion due to heavy, fried, or oily foods",
        "Stress and anxiety affecting digestion",
        "Lactose intolerance or food allergies",
      ],
      ayurvedicApproach: [
        "Virechana (Purgation Therapy) – Eliminates excess Pitta and Ama (toxins) from the intestines, improving digestion.",
        "Basti (Medicated Enema Therapy) – The most effective therapy for Vata disorders, helping regulate bowel movements and expel trapped gas.",
        "Vamana (Therapeutic Emesis) – Removes undigested toxins from the stomach and clears the digestive tract.",
        "Swedana (Steam Therapy) – Opens body channels, promoting the removal of trapped gases.",
        "Nasya (Nasal Therapy) – Aids in balancing Vata and clearing toxins affecting digestion.",
        "Abhyanga (Herbal Oil Massage) – Relaxes abdominal muscles, stimulates circulation, and enhances digestion.",
        "Agnikarma (Heat Therapy) – Helps balance digestive fire and reduce bloating.",
      ],
      dietRecommendations: {
        description:
          "Following an Ayurvedic diet can prevent excessive gas and promote healthy digestion.",
        recommended: [
          "Light, easily digestible foods like khichdi, soups, and steamed vegetables.",
          "Herbal teas with ginger, fennel, or cumin to aid digestion.",
          "Warm water with lemon to cleanse the digestive tract and reduce gas buildup.",
          "Coconut water and buttermilk to support gut health.",
        ],
        avoid: [
          "Heavy, fried, and processed foods that slow digestion.",
          "Gas-producing foods like beans, lentils, cauliflower, cabbage, and broccoli.",
          "Carbonated drinks, caffeine, and alcohol, which contribute to bloating.",
          "Dairy products (if lactose intolerance is suspected).",
        ],
      },
      lifestyleTips: [
        "Eat meals at regular times and chew food properly to aid digestion.",
        "Avoid eating too late at night to prevent fermentation and gas buildup.",
        "Stay physically active and practice yoga poses like Pawanmuktasana to release trapped gas.",
        "Drink warm water throughout the day to aid digestion.",
        "Manage stress through meditation and breathing exercises to support gut health.",
      ],
    },
    {
      id: "hyperacidity",
      title: "Hyperacidity (Amlapitta)",
      description:
        "Hyperacidity, known as Amlapitta in Ayurveda, occurs due to an imbalance in Pitta dosha, leading to excessive production of stomach acid. This results in acid reflux, heartburn, indigestion, nausea, and irritation in the digestive tract.",
      symptoms: [
        "Excessive consumption of spicy, oily, and fried foods",
        "Irregular eating habits and overeating",
        "High intake of caffeine, alcohol, and carbonated drinks",
        "Mental stress, anxiety, and lack of sleep",
        "Long gaps between meals leading to increased stomach acid",
        "Frequent consumption of processed and fast food",
        "Excessive use of painkillers and other medications affecting digestion",
      ],
      ayurvedicApproach: [
        "Virechana (Purgation Therapy) – Eliminates excess Pitta and toxins from the body, balancing stomach acid levels.",
        "Basti (Medicated Enema) – Helps in detoxifying the intestines and balancing digestion.",
        "Shirodhara (Oil Therapy) – Calms the nervous system and reduces stress-induced acidity.",
        "Nasya (Nasal Therapy) – Clears excess Pitta from the head and throat region, reducing symptoms of acidity.",
        "Abhyanga (Oil Massage) – Soothes the digestive system and balances Pitta dosha.",
        "Takra Dhara (Buttermilk Therapy) – Cools the digestive tract and relieves hyperacidity.",
        "Agnikarma (Heat Therapy) – Helps regulate digestive fire and prevents excessive acid production.",
      ],
      dietRecommendations: {
        description:
          "Maintaining a Pitta-balancing diet is essential to prevent hyperacidity and promote digestive health.",
        recommended: [
          "Cooling foods such as cucumbers, melons, coconut water, and leafy greens.",
          "Warm, light meals like khichdi and soups to aid digestion.",
          "Herbal teas with licorice, coriander, and fennel to soothe acidity.",
          "Small, frequent meals to prevent acid buildup.",
        ],
        avoid: [
          "Spicy, oily, and fried foods that increase stomach acid.",
          "Caffeinated drinks, carbonated sodas, and alcohol.",
          "Citrus fruits, tomatoes, and vinegar, which can trigger acid reflux.",
          "Processed and fast foods that disrupt digestion.",
        ],
      },
      lifestyleTips: [
        "Eat meals at regular intervals and avoid skipping meals.",
        "Do not lie down immediately after eating; wait at least 2-3 hours before sleeping.",
        "Practice yoga and meditation to reduce stress-related acidity.",
        "Stay hydrated and drink warm water throughout the day.",
        "Chew food properly to aid digestion and prevent acid reflux.",
        "Avoid excessive screen time and mental stress while eating.",
      ],
    },
    {
      id: "pyorrhea",
      title: "Pyorrhea (Periodontitis)",
      description:
        "Pyorrhea, also known as periodontitis, is a severe gum infection that damages the soft tissues and bone supporting the teeth. It is caused by bacterial buildup due to poor oral hygiene, leading to swollen, bleeding gums, bad breath, and eventually tooth loss if left untreated.",
      symptoms: [
        "Poor oral hygiene leading to plaque and tartar buildup",
        "Chronic bacterial infections in the gums",
        "Uncontrolled diabetes and weakened immune system",
        "Smoking and excessive alcohol consumption",
        "Deficiency of vitamins C and D",
        "Hormonal imbalances and pregnancy-related gum issues",
        "Genetic predisposition to gum diseases",
      ],
      ayurvedicApproach: [
        "Gandusha (Oil Pulling) – Swishing medicated oils like sesame or coconut oil in the mouth to remove toxins and strengthen gums.",
        "Kavala (Gargling Therapy) – Using herbal decoctions like Triphala or neem water to cleanse the mouth and reduce inflammation.",
        "Nasya (Nasal Therapy) – Application of medicated oils in the nostrils to strengthen oral tissues and remove toxins.",
        "Danta Dhavana (Herbal Tooth Powder) – Brushing with herbal powders containing neem, clove, and babool to prevent bacterial infections.",
        "Pratisarana (Herbal Gum Massage) – Massaging the gums with herbal pastes like Triphala or turmeric to reduce swelling and bleeding.",
        "Virechana (Purgation Therapy) – Detoxification to remove excess Pitta and Kapha doshas that contribute to gum inflammation.",
        "Abhyanga (Oil Massage) – Helps in improving overall circulation, reducing inflammation, and promoting oral health.",
      ],
      dietRecommendations: {
        description:
          "A nutrient-rich diet is essential for maintaining healthy gums and preventing pyorrhea.",
        recommended: [
          "Vitamin C-rich foods like citrus fruits, guava, and amla to strengthen gums.",
          "Green leafy vegetables and whole grains to provide essential nutrients.",
          "Calcium-rich foods like dairy, sesame seeds, and almonds for strong teeth.",
          "Turmeric milk or herbal teas to reduce gum inflammation.",
        ],
        avoid: [
          "Sugary and processed foods that contribute to bacterial growth.",
          "Acidic foods and carbonated drinks that weaken enamel and gums.",
          "Excessive coffee and tea, which stain teeth and reduce gum strength.",
          "Tobacco and alcohol, which increase the risk of gum disease.",
        ],
      },
      lifestyleTips: [
        "Brush twice a day with herbal toothpaste or powders.",
        "Floss regularly to remove food particles and prevent bacterial buildup.",
        "Perform oil pulling with coconut or sesame oil daily.",
        "Massage gums with herbal pastes like Triphala or turmeric.",
        "Stay hydrated to maintain saliva production and oral health.",
        "Avoid smoking and excessive alcohol consumption, which weaken gums.",
        "Visit a dentist regularly for professional cleaning and check-ups.",
      ],
    },
    {
      id: "ulcerative_colitis",
      title: "Ulcerative Colitis",
      description:
        "Ulcerative Colitis (UC) is a chronic inflammatory bowel disease (IBD) that affects the lining of the colon (large intestine) and rectum. It leads to inflammation, ulcers, and irritation, resulting in frequent bowel movements, abdominal pain, and bleeding. In Ayurveda, UC is known as Grahani Roga and is mainly caused by an imbalance in Pitta and Vata doshas, leading to excessive heat and inflammation in the digestive tract.",
      symptoms: [
        "Frequent diarrhea with blood and mucus",
        "Abdominal cramps and pain",
        "Urgent bowel movements",
        "Fatigue and weight loss",
        "Loss of appetite",
        "Weakness due to nutrient malabsorption",
      ],
      ayurvedicApproach: [
        "Virechana (Purgation Therapy) – A detoxification process that helps eliminate excess Pitta from the liver and intestines, reducing inflammation.",
        "Basti (Medicated Enema Therapy) – Administering herbal enemas with medicated oils like Dashmool, Bala, or Yashtimadhu, which soothe and heal the colon.",
        "Takra Basti (Buttermilk Enema) – Helps cool down inflammation and improves gut flora, promoting digestion.",
        "Shirodhara (Stress Reduction Therapy) – Pouring warm medicated oil on the forehead to reduce stress, a key trigger for UC flare-ups.",
        "Abhyanga (Full Body Massage with Medicated Oils) – Relieves Vata imbalance, promoting relaxation and digestive harmony.",
        "Peya (Light Diet Therapy) – Includes rice gruel, khichdi, and light soups to allow gut healing without burdening digestion.",
      ],
      dietRecommendations: {
        description:
          "A Pitta-pacifying diet is essential for reducing inflammation and promoting gut healing.",
        recommended: [
          "Moong dal khichdi, rice gruel, and well-cooked vegetables",
          "Buttermilk with turmeric and mint",
          "Coconut water and pomegranate juice",
          "Fennel and coriander-infused water",
          "Cow’s ghee to nourish intestinal walls",
        ],
        avoid: [
          "Spicy, oily, and processed foods",
          "Dairy products (except buttermilk and ghee)",
          "Caffeine, alcohol, and carbonated drinks",
          "Raw vegetables, heavy legumes, and fermented foods",
        ],
      },
      lifestyleTips: [
        "Practice meditation and Pranayama to reduce stress and flare-ups.",
        "Avoid long gaps between meals to stabilize digestion.",
        "Stay hydrated and get proper rest for gut healing.",
        "Follow a regular eating schedule to maintain digestive balance.",
      ],
    },
    {
      id: "gastritis",
      title: "Gastritis",
      description:
        "Gastritis is an inflammation of the stomach lining, which can cause discomfort, pain, and digestive issues. It occurs due to an imbalance in the Pitta dosha, leading to excessive heat and acid production in the stomach. Prolonged gastritis can result in ulcers and severe digestive disorders.",
      symptoms: [
        "Burning sensation in the stomach",
        "Nausea and vomiting",
        "Acid reflux and bloating",
        "Loss of appetite",
        "Indigestion and discomfort after meals",
      ],
      ayurvedicApproach: [
        "Virechana (Purgation Therapy) – Helps flush out excess Pitta (heat) from the digestive system, reducing acidity and inflammation.",
        "Basti (Medicated Enema) – Balances Vata and Pitta doshas, improving digestion and reducing gastric discomfort.",
        "Takra Dhara (Buttermilk Therapy) – Cooling therapy that soothes the stomach lining and reduces inflammation.",
        "Shirodhara (Stress Reduction Therapy) – Helps relieve stress-related gastritis by calming the nervous system.",
        "Abhyanga (Full Body Oil Massage) – Helps in detoxification and improves metabolism.",
        "Peya (Diet Therapy) – A specialized Ayurvedic diet that includes light, cooling, and easily digestible foods.",
      ],
      dietRecommendations: {
        description:
          "A Pitta-pacifying diet helps in reducing acidity and soothing the digestive system.",
        recommended: [
          "Warm cooked meals with minimal spices",
          "Moong dal, rice gruel, and steamed vegetables",
          "Buttermilk and coconut water for cooling effects",
          "Fennel and coriander-infused water",
          "Cow’s ghee to nourish the digestive system",
        ],
        avoid: [
          "Spicy, fried, and fermented foods",
          "Caffeine, alcohol, and carbonated drinks",
          "Tomatoes, citrus fruits, and excess salt",
          "Overeating or skipping meals",
        ],
      },
      lifestyleTips: [
        "Eat at regular intervals to maintain digestive balance.",
        "Avoid stress and practice meditation to prevent acid flare-ups.",
        "Stay hydrated and avoid excessive sun exposure.",
      ],
    },
    {
      id: "gastroenteritis",
      title: "Gastroenteritis",
      description:
        "Gastroenteritis, commonly known as the stomach flu, is the inflammation of the stomach and intestines. It is usually caused by viral, bacterial, or parasitic infections and can lead to symptoms such as diarrhea, vomiting, abdominal cramps, and fever. Gastroenteritis disrupts the digestive system, leading to the loss of fluids, electrolytes, and essential nutrients, resulting in dehydration and overall weakness. It primarily affects the Kapha dosha, causing imbalance and accumulation of toxins in the body.",
      symptoms: [
        "Diarrhea (frequent, watery stools)",
        "Vomiting and nausea",
        "Abdominal cramps and pain",
        "Fever and chills",
        "Dehydration, weakness, and fatigue",
        "Loss of appetite",
      ],
      ayurvedicApproach: [
        "Virechana (Purgation Therapy) – Effective in eliminating toxins from the gastrointestinal tract, helping clear out excess Pitta (heat) and restore balance.",
        "Basti (Medicated Enema) – Helps detoxify the body, cleanse the intestines, and balance the doshas (particularly Vata and Pitta).",
        "Nasya (Nasal Therapy) – Helps clear out accumulated toxins in the upper respiratory tract and reduces inflammation in the body.",
        "Shirodhara (Stress Relief Therapy) – Helps calm the nervous system, which plays a role in digestive health, especially when stress aggravates digestive disorders.",
        "Udvarthanam (Herbal Powder Massage) – Stimulates circulation, removes Ama (toxins), and improves digestion.",
        "Abhyanga (Full Body Massage) – Balances Vata dosha and enhances digestion by improving lymphatic flow.",
      ],
      dietRecommendations: {
        description:
          "A light and soothing diet is essential to aid digestion and prevent dehydration.",
        recommended: [
          "Warm liquid foods like soups, broths, and rice water",
          "Steamed vegetables like carrots, zucchini, and potatoes",
          "Yogurt to restore gut health",
          "Herbal teas made from ginger, peppermint, or chamomile for nausea relief",
          "Coconut water and electrolyte-rich fluids to stay hydrated",
        ],
        avoid: [
          "Spicy, greasy, and fried foods",
          "Dairy products, especially when they are heavy and hard to digest",
          "Caffeine and alcohol",
          "Sugary or processed foods",
        ],
      },
      lifestyleTips: [
        "Rest and allow the body to heal.",
        "Stay hydrated, sipping fluids regularly throughout the day.",
        "Avoid stress and practice deep breathing exercises.",
        "Once symptoms improve, gradually reintroduce solid foods.",
      ],
    },
    {
      id: "celiac-disease",
      title: "Celiac Disease",
      description:
        "Celiac disease is an autoimmune disorder in which the ingestion of gluten (a protein found in wheat, barley, and rye) causes the immune system to attack the small intestine. This leads to inflammation and damage to the intestinal lining, impairing the body's ability to absorb nutrients. The disorder can cause a variety of digestive issues, including diarrhea, bloating, abdominal pain, and fatigue. Celiac disease is believed to be related to Vata and Pitta imbalances, resulting in digestive dysfunction and toxin buildup (Ama) within the body.",
      symptoms: [
        "Diarrhea or constipation",
        "Abdominal bloating and cramps",
        "Fatigue and weakness",
        "Unexplained weight loss",
        "Iron-deficiency anemia",
        "Skin rash (dermatitis herpetiformis)",
        "Bone pain and joint issues",
        "Nutrient deficiencies (Vitamin D, B12, calcium, etc.)",
      ],
      ayurvedicApproach: [
        "Virechana (Purgation Therapy) – Clears toxins from the body, especially Pitta and Ama, while purging accumulated waste from the digestive system.",
        "Basti (Medicated Enema) – Helps detoxify the intestines, restore the balance of Vata, and improve digestion.",
        "Nasya (Nasal Therapy) – Aids in cleansing the upper respiratory system and reducing inflammation, which can help ease digestive issues related to Celiac disease.",
        "Shirodhara (Oil Therapy for the Head) – Soothes the nervous system, alleviating stress-related symptoms and improving digestion by calming the Vata dosha.",
        "Abhyanga (Full Body Massage) – Stimulates the body’s channels and improves circulation, helping to flush out toxins and enhance digestive function.",
        "Udvartana (Herbal Powder Massage) – Improves metabolism, reduces Ama, and rejuvenates the body, assisting with the healing process.",
      ],
      dietRecommendations: {
        description:
          "Managing Celiac disease requires following a strict gluten-free diet while maintaining digestive health and immune balance.",
        recommended: [
          "Fresh fruits and vegetables (except those that may cause inflammation)",
          "Gluten-free grains like quinoa, rice, buckwheat, and millet",
          "Lean meats, fish, and legumes",
          "Dairy alternatives, such as almond milk or coconut milk",
          "Herbal teas like ginger or peppermint for digestive support",
        ],
        avoid: [
          "Wheat, barley, rye, and products containing gluten",
          "Processed or packaged foods that may contain hidden gluten",
          "Refined sugars and foods high in artificial additives",
          "Dairy, if lactose intolerance is also present",
        ],
      },
      lifestyleTips: [
        "Strictly avoid gluten in all forms to prevent inflammation and intestinal damage.",
        "Stay hydrated by drinking plenty of water and herbal teas to support the digestive process.",
        "Practice yoga and meditation to help manage stress and maintain mental clarity.",
        "Include digestive herbs like cumin and fenugreek to support better digestion.",
        "Rest and allow the body to heal by maintaining a healthy balance of work and relaxation.",
      ],
    },
    {
      id: "crohns-disease",
      title: "Crohn’s Disease",
      description:
        "Crohn's disease is a type of inflammatory bowel disease (IBD) that causes chronic inflammation of the gastrointestinal (GI) tract. It can affect any part of the GI tract from the mouth to the anus, but it most commonly impacts the small intestine and large intestine. The inflammation in Crohn's disease can cause painful ulcers, bloody diarrhea, weight loss, and fatigue. In Ayurveda, Crohn's disease is often associated with an imbalance in Pitta dosha and Agni (digestive fire), which results in inflammation, digestive disturbance, and toxin accumulation (Ama) in the body.",
      symptoms: [
        "Abdominal pain and cramping",
        "Chronic diarrhea, often with blood or mucus",
        "Fatigue and malaise",
        "Unexplained weight loss",
        "Reduced appetite",
        "Nausea and vomiting",
        "Fever during flare-ups",
        "Nutrient deficiencies due to malabsorption",
        "Skin conditions (rashes or sores)",
      ],
      ayurvedicApproach: [
        "Virechana (Purgation Therapy) – Effective for eliminating Pitta toxins and excess heat from the body, thus helping to calm inflammation in the digestive tract.",
        "Basti (Medicated Enema) – A key treatment for Vata dosha imbalance, which can help cleanse the intestines, reduce bloating, and restore digestive health.",
        "Nasya (Nasal Therapy) – Helps reduce the toxins in the upper respiratory system, which can impact the gut, and improve digestion and absorption.",
        "Shirodhara (Oil Therapy for the Head) – Reduces stress and calms the mind, which is beneficial for managing the emotional aspect of chronic disease and preventing flare-ups.",
        "Abhyanga (Full Body Massage) – Reduces toxins (Ama) in the body and relieves muscle tension, providing relaxation and improving circulation.",
        "Udvartana (Herbal Powder Massage) – Improves digestion, relieves Ama, and helps stimulate circulation, contributing to the healing of the digestive system.",
      ],
      dietRecommendations: {
        description:
          "Managing Crohn’s disease requires a combination of strict dietary control, Panchakarma treatments, and lifestyle changes to reduce inflammation and improve digestion.",
        recommended: [
          "Easily digestible foods, such as cooked vegetables, rice, and soups",
          "Gluten-free grains, including quinoa, millet, and rice",
          "Lean proteins, such as chicken, turkey, and fish",
          "Fermented foods, like yogurt or kefir, for gut health",
          "Herbal teas, like peppermint and ginger, to aid digestion",
          "Nutrient-dense smoothies with ingredients like bananas, spinach, and almond milk",
        ],
        avoid: [
          "Spicy foods, fried foods, and processed meats that may irritate the intestines",
          "Dairy products, particularly if lactose intolerant",
          "Caffeinated beverages and alcohol, which may worsen symptoms",
          "Refined sugars and artificial sweeteners that can cause bloating and gas",
        ],
      },
      lifestyleTips: [
        "Avoid stress through meditation, yoga, or deep breathing exercises.",
        "Eat smaller, more frequent meals to prevent overloading the digestive system.",
        "Stay hydrated and drink plenty of water throughout the day.",
        "Practice gentle yoga and physical activity to improve digestion and circulation.",
        "Get enough sleep to support the body's healing process.",
      ],
    },
    {
      id: "fecal-incontinence",
      title: "Fecal Incontinence",
      description:
        "Fecal incontinence is the inability to control bowel movements, leading to unintentional leakage of stool. This condition can be embarrassing and distressing, significantly impacting a person’s quality of life. It may result from various causes, such as muscle damage, nerve damage, chronic constipation, diarrhea, or pelvic floor dysfunction. In Ayurveda, fecal incontinence is often associated with Vata dosha imbalances, which affect the nervous system and digestive functions, leading to an inability to control bowel movements.",
      symptoms: [
        "Involuntary leakage of stool, ranging from occasional to frequent",
        "Urgent need to pass stool, but inability to reach the bathroom in time",
        "Stool accidents or leakage while sleeping or during physical activity",
        "A sensation of incomplete evacuation after a bowel movement",
        "Abdominal bloating or discomfort",
        "Constipation and diarrhea cycles",
      ],
      ayurvedicApproach: [
        "Virechana (Purgation Therapy) – Helps eliminate excess Pitta and Ama (toxins), reducing internal blockages and promoting smooth bowel movements.",
        "Basti (Medicated Enema) – One of the most important treatments for Vata dosha, this therapy helps restore bowel function, reduces constipation, and strengthens the pelvic floor muscles.",
        "Nasya (Nasal Therapy) – Helps balance Vata and improve nerve function, which can support better bowel control.",
        "Shirodhara (Oil Therapy for the Head) – A calming treatment that reduces stress and anxiety, which often exacerbates digestive issues, helping to promote better bowel control.",
        "Abhyanga (Full Body Massage) – Improves circulation, calms Vata dosha, and stimulates the digestive system, promoting regular bowel movements.",
        "Udvartana (Herbal Powder Massage) – Encourages digestion, improves circulation, and helps remove Ama, contributing to overall digestive health.",
        "Swedana (Steam Therapy) – Helps detoxify the body, relax muscles, and promote smooth functioning of the digestive system.",
      ],
      dietRecommendations: {
        description:
          "Proper dietary choices and lifestyle adjustments can support healing and improve bowel control in individuals with fecal incontinence.",
        recommended: [
          "Warm, cooked foods that are easy to digest, such as soups, stews, and porridges",
          "Whole grains, such as quinoa, oats, and brown rice",
          "Vegetables like pumpkin, spinach, and carrots that promote easy digestion",
          "Herbal teas like ginger tea or peppermint tea, which soothe the digestive tract",
          "Probiotic-rich foods, such as yogurt or fermented vegetables, to support healthy gut bacteria",
          "Light proteins such as chicken, fish, and lentils",
        ],
        avoid: [
          "Spicy and fried foods that can irritate the digestive system",
          "Dairy products, especially if lactose intolerant",
          "Processed foods, which can contribute to bloating and gas",
          "Caffeinated beverages that can trigger the need for frequent bowel movements",
          "Sugar and artificial sweeteners that can worsen diarrhea or constipation",
        ],
      },
      lifestyleTips: [
        "Practice mindful eating, eating smaller meals more frequently to reduce stress on the digestive system.",
        "Stay hydrated to help maintain normal bowel function.",
        "Exercise regularly to improve digestion and muscle tone.",
        "Manage stress through practices like yoga, meditation, and deep breathing exercises.",
        "Ensure proper sleep to support overall well-being and promote a balanced digestive system.",
      ],
    },
    {
      id: "lactose-intolerance",
      title: "Lactose Incontinence",
      description:
        "Lactose incontinence refers to the inability to digest lactose, a sugar found in milk and dairy products, due to a deficiency of the enzyme lactase in the digestive system. This condition leads to gas, bloating, diarrhea, and cramps after the consumption of dairy. In Ayurveda, lactose intolerance can be linked to an imbalance in Vata and Pitta dosha, leading to disturbed digestion (Agni) and an inability to properly digest dairy, resulting in discomfort and digestive disturbances.",
      symptoms: [
        "Diarrhea or loose stools after consuming dairy",
        "Bloating and excessive gas",
        "Cramps in the stomach or abdomen",
        "Nausea or vomiting",
        "Fatigue or feeling unwell after dairy consumption",
      ],
      ayurvedicApproach: [
        "Virechana (Purgation Therapy) – This treatment helps eliminate toxins (Ama) from the digestive system, balances Pitta dosha, and restores digestive function, which is crucial for better lactose digestion.",
        "Basti (Medicated Enema) – Strengthens Vata and Pitta dosha, nourishes the intestinal walls, and improves the digestive system’s ability to break down lactose and other foods.",
        "Nasya (Nasal Therapy) – Helps in balancing Vata and improving the body’s nervous system and digestive function, supporting overall digestion, including lactose digestion.",
        "Abhyanga (Full Body Massage) – Promotes circulation, relaxes the body, and calms Vata, which may help improve digestive capacity and reduce the symptoms of lactose intolerance.",
        "Shirodhara (Oil Therapy for the Head) – Reduces stress and anxiety that may exacerbate digestive issues, allowing for better digestion and tolerance of lactose.",
        "Udvartana (Herbal Powder Massage) – Encourages proper digestion and promotes the removal of toxins, improving the body’s ability to process and absorb nutrients, including lactose.",
        "Swedana (Steam Therapy) – Detoxifies the body, supports digestive function, and helps in improving overall digestive health, which can assist in better tolerance of dairy.",
      ],
      dietRecommendations: {
        description:
          "To manage lactose intolerance effectively, it’s essential to make dietary adjustments and follow a lifestyle that promotes a healthy digestive system.",
        recommended: [
          "Lactose-free dairy products, such as lactose-free milk, cheese, and yogurt",
          "Plant-based milk alternatives, like almond, oat, and coconut milk",
          "Herbal teas like ginger tea or peppermint tea to soothe digestion",
          "Whole grains, such as rice, quinoa, and barley",
          "Vegetables like spinach, carrots, and sweet potatoes that are easy to digest",
          "Probiotics like yogurt (if tolerated) and fermented foods like sauerkraut to support gut health",
        ],
        avoid: [
          "Regular dairy products such as milk, cream, butter, and certain cheeses",
          "Spicy or fried foods, which can irritate the digestive system",
          "Carbonated drinks or soda, which can cause bloating and gas",
          "Sugar and processed foods that can irritate the digestive system",
          "Caffeinated beverages that can increase acid production and worsen digestive problems",
        ],
      },
      lifestyleTips: [
        "Eat slowly and mindfully, chewing food thoroughly to aid in better digestion.",
        "Practice regular yoga or meditation to reduce stress, which can affect digestion.",
        "Avoid large meals; instead, eat smaller, more frequent meals to reduce the digestive load.",
        "Stay hydrated to maintain healthy bowel function.",
        "Use digestive aids such as ginger or peppermint before meals to stimulate the digestive process.",
      ],
    },
    {
      id: "hirschsprung-disease",
      title: "Hirschsprung Disease",
      description:
        "Hirschsprung disease is a congenital condition where certain nerve cells (ganglion cells) are absent in parts of the colon, leading to intestinal obstruction and impaired bowel movements. This condition causes difficulty in passing stool, constipation, abdominal distention, and in severe cases, intestinal infections. It primarily affects newborns and infants but can also be diagnosed later in life. In Ayurveda, Hirschsprung disease is linked to an imbalance in Vata dosha, which governs the movement of bodily functions, including digestion and excretion. This imbalance disrupts the flow of bodily wastes, leading to constipation and difficulty in passing stool.",
      symptoms: [
        "Severe constipation or inability to pass stool",
        "Abdominal distension or bloating",
        "Vomiting or nausea",
        "Failure to thrive in infants (poor growth)",
        "Diarrhea or foul-smelling stools when passed",
        "Delayed meconium passage in newborns",
      ],
      ayurvedicApproach: [
        "Basti (Medicated Enema) – A key treatment for Hirschsprung disease, Basti nourishes the colon, regulates Vata dosha, and stimulates peristalsis, improving the body’s ability to pass stool.",
        "Virechana (Purgation Therapy) – Virechana helps to flush out toxins from the body, purging excess Pitta and promoting healthy bowel movement by enhancing the digestive system's function.",
        "Abhyanga (Full Body Massage) – Helps to relieve tension, stimulate circulation, and regulate the nervous system, which can improve the motility of the digestive tract.",
        "Shirodhara (Oil Therapy for the Head) – Reduces mental stress, calms Vata dosha, and enhances the body’s ability to regulate functions like digestion and elimination.",
        "Nasya (Nasal Therapy) – Balances Vata and supports the nervous system, improving coordination between the brain and digestive functions.",
        "Udvartan (Herbal Powder Massage) – Helps with digestion, removes toxins (Ama), and enhances circulation in the gastrointestinal tract, promoting overall digestive health.",
        "Swedana (Steam Therapy) – Stimulates circulation, relieves tension, and encourages the proper movement of digestive waste through the body.",
      ],
      dietRecommendations: {
        description:
          "Dietary modifications and lifestyle changes are essential for managing Hirschsprung disease and improving bowel movements.",
        recommended: [
          "Easily digestible foods such as broths, rice porridge, and cooked vegetables",
          "Fiber-rich foods such as fruits, vegetables, and whole grains to improve stool consistency",
          "Probiotic-rich foods, like yogurt and fermented vegetables, to support gut health",
          "Warm water and herbal teas like ginger tea to soothe the digestive system",
        ],
        avoid: [
          "Hard-to-digest foods like raw vegetables, fried foods, and processed meats",
          "Dairy products if there’s any sensitivity to lactose",
          "Caffeinated beverages or carbonated drinks that can irritate the gut",
          "Excessive sugar, which can exacerbate bloating and discomfort",
        ],
      },
      lifestyleTips: [
        "Eat small, frequent meals to avoid overloading the digestive system.",
        "Chew food thoroughly to support digestion and enhance nutrient absorption.",
        "Engage in gentle yoga or abdominal massages to stimulate peristalsis and support digestive health.",
        "Stay hydrated with warm liquids throughout the day to keep stools soft and easy to pass.",
        "Avoid stress as it can aggravate Vata imbalances and impact digestion; practices like meditation and deep breathing can help reduce stress levels.",
      ],
    },
    {
      id: "abdominal-adhesions",
      title: "Abdominal Adhesions",
      description:
        "Abdominal adhesions are bands of scar tissue that form between internal organs and tissues, often following surgery or inflammation. These adhesions can cause the organs to stick together, leading to pain, discomfort, and sometimes obstructions in the intestines. They may form after surgeries like appendectomy, C-section, or other abdominal procedures. In Ayurveda, abdominal adhesions are seen as a disruption in the natural flow of Prana (vital life force), leading to blockages in the digestive system that prevent proper digestion and elimination.",
      symptoms: [
        "Chronic abdominal pain or discomfort",
        "Bloating or feeling of fullness in the abdomen",
        "Constipation or difficulty passing stool",
        "Nausea and vomiting, especially if there is intestinal obstruction",
        "Difficulty moving bowels or a sensation of tightness in the abdomen",
      ],
      ayurvedicApproach: [
        "Basti (Medicated Enema) – Helps release toxins (Ama) from the body, lubricate the intestines, and break down scar tissue by enhancing the flow of digestive fluids and circulation.",
        "Udvartan (Herbal Powder Massage) – Detoxifies the body by using herbal powders to exfoliate the skin, stimulate circulation, and reduce stagnation in the abdominal area.",
        "Abhyanga (Full Body Massage) – Uses medicated oils to improve circulation and alleviate muscular tension, reducing stiffness in the abdomen caused by adhesions.",
        "Virechana (Purgation Therapy) – Eliminates excess Pitta and Ama (toxins) from the body, cleansing the digestive tract and reducing inflammation in the abdomen.",
        "Shirodhara (Oil Therapy for the Head) – Promotes overall circulation and helps relieve stress that can aggravate abdominal pain or discomfort from adhesions.",
        "Swedana (Steam Therapy) – Uses gentle heat to soften scar tissue, relieve muscular tension, and improve tissue flexibility and mobility.",
        "Nasya (Nasal Therapy) – Balances Vata dosha and promotes the elimination of toxins, supporting the nervous system and enhancing intestinal fluid movement.",
      ],
      dietRecommendations: {
        description:
          "Proper dietary modifications are essential for managing abdominal adhesions and improving digestive health.",
        recommended: [
          "Light, easily digestible foods such as broths, rice porridge, and cooked vegetables",
          "Fiber-rich foods like fruits, vegetables, and whole grains to improve bowel movements",
          "Anti-inflammatory foods such as turmeric, ginger, and green leafy vegetables",
          "Warm liquids like herbal teas, warm water, and broths to aid digestion",
        ],
        avoid: [
          "Processed or fried foods that are heavy on the digestive system",
          "Excessively spicy or oily foods, which can irritate the intestines",
          "Caffeinated beverages and carbonated drinks that can cause bloating and discomfort",
          "Dairy products (if intolerant) and gluten (if sensitive)",
        ],
      },
      lifestyleTips: [
        "Eat small, frequent meals to support digestion and prevent overloading the digestive system.",
        "Avoid stress and engage in mindful practices such as yoga or meditation to balance Vata dosha.",
        "Practice gentle yoga to support the digestive system and improve abdominal mobility.",
        "Stay hydrated with warm liquids throughout the day to keep stools soft and easy to pass.",
        "Avoid heavy lifting or overexertion, which may increase abdominal strain.",
      ],
    },
  ];

  const disorder = disorders.find((d) => d.id === disorderId);

  if (!disorder) {
    return <div className="text-center text-red-500">Disorder Not Found</div>;
  }

  return (
    <div className="w-full mx-auto bg-[#F3FFEA] ">
      <div className="relative">
        <img
          src={assets.treatment_hero}
          alt="Digestive Disorders"
          className="w-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[#394E29] font-bold  max-[450px]:text-[16px]">
            {disorder.title}
          </h1>
        </div>
      </div>
      {visibleFormId === "form1" && (
          <div className="fixed inset-0 flex justify-center items-center z-10">
            <div className="relative">
              <Book_Appointment closeForm={closeForm} />
            </div>
          </div>
        )}
      <div className="py-20 px-12 xl:px-36">
        <p className="text-[#757575] text-[32px] font-semibold">
          What is {disorder.title} ?
        </p>
        <p className="text-[#757575] text-justify mt-4">
          {disorder.description}
        </p>

        <p className="text-[#757575]  mt-6 mb-4">
          Common symptoms of {disorder.title} include:
        </p>
        <ul className="list-disc list-inside text-[20px] text-[#757575]">
          {disorder.symptoms.map((symptom, index) => (
            <li key={index}>{symptom}</li>
          ))}
        </ul>

        <p className="text-[#757575] text-[32px] font-semibold mt-6">
          Ayurvedic Approach & Panchakarma Treatments
        </p>
        <p className="text-[#757575] mt-6 mb-4">
          {disorder.ayurvedicDiscription}
        </p>
        <ul className="list-disc list-inside text-[20px] text-[#757575]">
          {disorder.ayurvedicApproach.map((approach, index) => {
            const [title, description] = approach.split("–"); // Splitting at "–"
            return (
              <li key={index} className="mb-4">
                <strong>{title.trim()}</strong> – {description.trim()}
              </li>
            );
          })}
        </ul>

        <p className="text-[#757575] text-[32px] font-semibold mt-6">
          Dietary & Lifestyle Recommendations
        </p>
        <p className="text-[#757575] mt-6 mb-4">
          {disorder.dietRecommendations.discription}
        </p>

        <p className="text-[#757575] mb-4 font-bold">✅ Recommended Foods</p>
        <ul className="list-disc list-inside ml-3 text-[20px] text-[#757575]">
          {disorder.dietRecommendations.recommended.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="text-[#757575] mt-6 mb-4 font-bold">🚫 Foods to Avoid:</p>
        <ul className="list-disc list-inside ml-3 text-[20px] text-[#757575]">
          {disorder.dietRecommendations.avoid.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="text-[#757575] mt-6 mb-4 font-bold">🌿 Lifestyle Tips:</p>
        <ul className="list-disc list-inside ml-3 text-[20px] text-[#757575]">
          {disorder.lifestyleTips.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="bg-[#F5F5F5] md:min-w-max max-[768px]:min-w-full max-w-fit flex flex-row mx-auto gap-8 px-10 pt-2 pb-2 rounded-full absolute left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
        <p className="text-[#5FA02E] text-xl py-2 ">
          Rediscover the Healing Power of Nature
        </p>
        <button className="px-5  bg-[#5FA02E] sm:py-0 rounded-full text-[#F3FFEA]"
         onClick={() => handleButtonClick("form1")}>
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default DigestiveDetail;
