import React from "react";
import { assets } from "../../assets/assets";
import { useParams } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function JointDetails() {
  const { disorderId } = useParams(); // Get disorderId from URL
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();

  const disorders = [
    {
      id: "sciatica",
      title: "Sciatica",
      description:
        "Sciatica, known as Gridhrasi in Ayurveda, is caused by an aggravated Vata dosha, leading to nerve compression, radiating pain, stiffness, and restricted movement. Ayurveda provides a holistic and natural approach to relieving Sciatica by addressing its root cause through therapies, herbal remedies, and lifestyle changes.",
      ayurvedicApproach: [
        "Abhyanga (Herbal Oil Massage) – A therapeutic full-body massage with medicated oils like Mahanarayana or Dhanwantharam Tailam helps relax muscles, improve circulation, and reduce nerve inflammation.",
        "Kati Basti (Localized Oil Therapy) – A specialized treatment where warm medicated oil is retained on the lower back using a dough ring, providing deep nourishment and pain relief.",
        "Swedana (Herbal Steam Therapy) – This therapy induces sweating using herbal steam, relaxing stiff muscles and enhancing mobility.",
        "Basti (Medicated Enema Therapy) – Considered the most effective treatment for Vata-related disorders, Basti therapy uses medicated herbal enemas to detoxify the colon, reduce nerve inflammation, and provide long-lasting relief.",
        "Patra Pinda Sweda (Herbal Poultice Therapy) – Warm herbal poultices made from medicinal leaves and herbs are applied to the affected area to reduce pain and stiffness.",
        "Agnikarma (Thermal Therapy, if required) – A traditional Ayurvedic heat therapy used in chronic cases to relieve severe pain and nerve compression.",
      ],

      dietRecommendations: {
        dietaryguidelines: [
          "Follow a Vata-pacifying diet rich in warm, moist, and easily digestible foods.",
          "Include ghee, sesame oil, turmeric, ginger, and ashwagandha for their anti-inflammatory and nerve-strengthening properties.",
          "Avoid cold, dry, processed, and raw foods, as they aggravate Vata dosha.",
          "Drink herbal teas like ginger, cinnamon, and licorice to improve circulation and reduce pain.",
        ],

        lifestylemodification: [
          "Maintain a consistent daily routine with proper rest and sleep.",
          "Avoid prolonged sitting and incorrect posture; use ergonomic seating.",
          "Practice gentle yoga asanas such as Bhujangasana (Cobra Pose), Ardha Matsyendrasana (Spinal Twist), and Setu Bandhasana (Bridge Pose) to strengthen the lower back and improve flexibility.",
          "Engage in mild physical activities, like walking, to improve blood flow.",
        ],
      },
      conclusion: [
        "Ayurvedic treatment for Sciatica focuses on natural pain relief, nerve healing, and long-term well-being through therapies, diet, and lifestyle changes. A personalized approach helps restore balance, ensuring a pain-free and active life.",
      ],
    },
    {
      id: "avascular-necrosis",
      title: "Avascular Necrosis (AVN)",
      description:
        "Avascular Necrosis (AVN), known as Asthi-Majjagata Vata in Ayurveda, is a condition where the blood supply to the bones is disrupted, leading to bone tissue death, joint pain, and reduced mobility. Ayurveda addresses AVN by balancing Vata dosha, improving circulation, nourishing bone tissues, and preventing further degeneration through natural therapies, herbal medicines, and lifestyle modifications.",

      ayurvedicApproach: [
        "Abhyanga (Herbal Oil Massage) – Therapeutic full-body massage using medicated oils like Mahanarayana Tailam and Bala Tailam to strengthen bones, reduce pain, and enhance blood circulation.",
        "Swedana (Herbal Steam Therapy) – Application of herbal steam or warm poultices to affected joints to improve circulation and relieve stiffness.",
        "Basti (Medicated Enema Therapy) – One of the most effective treatments for Vata disorders, Basti helps detoxify, nourish bones, and reduce joint pain by using medicated herbal enemas like Anuvasana Basti (oil-based) and Niruha Basti (herbal decoctions).",
        "Kati Basti / Janu Basti – For AVN affecting the hip or knee, warm medicated oil is retained in a dough-ring over the affected joint to reduce inflammation and pain.",
        "Raktamokshana (Bloodletting Therapy) – This therapy is used in severe cases to remove toxins from the blood, improving circulation to the affected bones.",
        "Agnikarma (Thermal Therapy, if needed) – A specialized heat-based therapy for relieving localized pain and inflammation in advanced AVN cases.",
      ],

      dietRecommendations: {
        dietaryguidelines: [
          "Follow a Vata-pacifying diet rich in calcium, vitamin D, and healthy fats.",
          "Consume milk, ghee, sesame seeds, almonds, and bone-strengthening herbs like Ashwagandha and Shatavari.",
          "Avoid cold, dry, and processed foods, as they aggravate Vata.",
          "Drink herbal teas containing ginger, turmeric, and ashwagandha for pain relief and improved circulation.",
        ],

        lifestylemodification: [
          "Avoid excessive physical strain, prolonged standing, or high-impact activities.",
          "Engage in low-impact exercises like yoga and swimming to improve mobility.",
          "Practice yoga asanas like Bhujangasana (Cobra Pose), Pawanmuktasana (Wind-Relieving Pose), and Trikonasana (Triangle Pose) to strengthen bones and joints.",
          "Maintain a consistent daily routine, ensuring adequate rest and sleep.",
        ],
      },

      conclusion: [
        "Ayurveda provides a natural and effective approach to managing Avascular Necrosis by focusing on pain relief, bone nourishment, and improved circulation. With therapies, herbal medicines, and lifestyle modifications, individuals can slow disease progression and enhance their quality of life.",
      ],
    },
    {
      id: "frozen-shoulder",
      title: "Frozen Shoulder (Adhesive Capsulitis)",
      description:
        "Frozen Shoulder, known as Apabahuka in Ayurveda, is a condition caused by an aggravated Vata dosha, leading to stiffness, restricted movement, and pain in the shoulder joint. Ayurveda offers a holistic and natural approach to treating Frozen Shoulder by reducing inflammation, improving mobility, and restoring balance through therapies, herbal remedies, and lifestyle changes.",

      ayurvedicApproach: [
        "Abhyanga (Herbal Oil Massage) – A therapeutic massage using medicated oils like Mahanarayana Tailam, Dhanwantharam Tailam, or Bala Tailam to improve blood circulation, relax muscles, and reduce pain.",
        "Swedana (Herbal Steam Therapy) – Application of herbal steam or Pinda Sweda (herbal poultices) to relax stiff muscles, enhance mobility, and reduce joint pain.",
        "Kati Basti / Greeva Basti – Warm medicated oil is retained in a dough-ring around the shoulder or neck area to reduce pain, nourish tissues, and improve flexibility.",
        "Basti (Medicated Enema Therapy) – One of the best treatments for Vata imbalance, Basti therapy detoxifies the body and improves nerve function, which helps relieve stiffness and inflammation.",
        "Agnikarma (Thermal Therapy, if required) – A specialized heat therapy that helps in severe pain conditions by improving circulation and breaking down muscle stiffness.",
        "Marma Therapy – Stimulating vital energy points around the shoulder joint to release tension and restore movement.",
      ],

      dietRecommendations: {
        dietaryguidelines: [
          "Follow a Vata-pacifying diet, including warm, moist, and nourishing foods.",
          "Incorporate ghee, sesame oil, turmeric, ginger, and ashwagandha to reduce inflammation and strengthen muscles.",
          "Avoid cold, dry, and processed foods, as they worsen Vata imbalance.",
          "Drink herbal teas with cinnamon, ginger, and licorice to improve circulation.",
        ],

        lifestylemodification: [
          "Avoid prolonged inactivity and maintain a proper posture while sitting or working.",
          "Engage in gentle stretching exercises and shoulder rotations.",
          "Practice yoga asanas such as Gomukhasana (Cow Face Pose), Bhujangasana (Cobra Pose), and Paschimottanasana (Seated Forward Bend) to improve flexibility.",
          "Maintain a consistent daily routine, ensuring adequate sleep and rest.",
        ],
      },

      conclusion: [
        "Ayurveda provides an effective and natural approach to treating Frozen Shoulder by focusing on pain relief, flexibility improvement, and long-term healing. With therapies, herbal remedies, and lifestyle modifications, individuals can restore mobility and live pain-free.",
      ],
    },
    {
      id: "tennis-elbow",
      title: "Tennis Elbow (Lateral Epicondylitis)",
      description:
        "Tennis Elbow, known as Kurpara Sandhigata Vata in Ayurveda, is a painful condition caused by overuse of the elbow joint, leading to inflammation, stiffness, and weakness in the forearm muscles. Ayurveda offers a holistic and natural approach to healing Tennis Elbow by reducing inflammation, strengthening muscles, and restoring joint function through therapies, herbal medicines, and lifestyle modifications.",

      ayurvedicApproach: [
        "Abhyanga (Herbal Oil Massage) – A therapeutic massage using medicated oils like Mahanarayana Tailam, Bala Tailam, and Dhanwantharam Tailam to improve circulation, reduce pain, and relax muscles.",
        "Patra Pinda Sweda (Herbal Poultice Therapy) – Application of warm herbal poultices made from medicinal leaves and herbs to relieve pain, stiffness, and inflammation.",
        "Kati Basti / Kurpara Basti – A specialized treatment where warm medicated oil is retained around the elbow using a dough ring to deeply nourish tissues and reduce pain.",
        "Basti (Medicated Enema Therapy) – Basti is a highly effective treatment for Vata-related disorders, helping in detoxification and pain management by using herbal decoctions and oil-based enemas.",
        "Agnikarma (Thermal Therapy, if required) – A heat-based therapy applied to the affected area to relieve pain and promote healing in chronic cases.",
        "Raktamokshana (Bloodletting Therapy, if needed) – Used in severe inflammation cases, this therapy removes toxins from the blood and improves circulation.",
      ],

      dietRecommendations: {
        dietaryguidelines: [
          "Follow a Vata-pacifying diet, including warm, nourishing foods.",
          "Include anti-inflammatory ingredients like turmeric, ginger, garlic, sesame seeds, and ghee to promote healing.",
          "Avoid cold, dry, and processed foods that aggravate Vata dosha.",
          "Drink herbal teas made with cinnamon, ashwagandha, and licorice for pain relief and muscle relaxation.",
        ],

        lifestylemodification: [
          "Avoid repetitive strain on the elbow and allow time for healing.",
          "Apply warm compresses or herbal pastes to the affected area for relief.",
          "Perform gentle stretching and strengthening exercises under guidance.",
          "Practice yoga asanas such as Gomukhasana (Cow Face Pose), Bhujangasana (Cobra Pose), and Trikonasana (Triangle Pose) to improve flexibility and reduce muscle tension.",
          "Maintain a balanced daily routine, ensuring adequate rest and hydration.",
        ],
      },

      conclusion: [
        "Ayurveda offers a natural and effective approach to managing Tennis Elbow by reducing inflammation, strengthening the muscles, and preventing recurrence. Through therapies, herbal remedies, and lifestyle adjustments, individuals can experience long-term pain relief and improved mobility.",
      ],
    },
    {
      id: "ankylosing-spondylitis",
      title: "Ankylosing Spondylitis (AS)",
      description:
        "Ankylosing Spondylitis (AS), known as Asthi-Sandhigata Vata in Ayurveda, is a chronic inflammatory condition that primarily affects the spine and sacroiliac joints, leading to pain, stiffness, and reduced mobility. Ayurveda aims to balance Vata and Pitta doshas, reduce inflammation, and prevent further progression of the disease using herbal treatments, Panchakarma therapies, and lifestyle modifications.",

      ayurvedicApproach: [
        "Abhyanga (Herbal Oil Massage) – A full-body therapeutic massage using Mahanarayana Tailam, Bala Tailam, or Dhanwantharam Tailam to improve flexibility, relax muscles, and nourish joints.",
        "Swedana (Herbal Steam Therapy) – Application of herbal steam to relieve muscle stiffness and enhance blood circulation around the spine and affected joints.",
        "Kati Basti / Greeva Basti – A localized oil therapy where warm medicated oil is retained on the lower back (Kati Basti) or neck (Greeva Basti) to deeply nourish and strengthen the spine.",
        "Basti (Medicated Enema Therapy) – Basti is one of the most effective therapies for managing Vata-related disorders. Herbal oil-based enemas like Anuvasana Basti and herbal decoction enemas like Niruha Basti help reduce inflammation, detoxify the colon, and restore joint health.",
        "Patra Pinda Sweda (Herbal Poultice Therapy) – Warm herbal poultices are applied to affected joints to reduce pain, stiffness, and inflammation.",
        "Raktamokshana (Bloodletting Therapy, if required) – Used in severe cases to remove toxins from the blood, reducing inflammation and auto-immune responses.",
        "Agnikarma (Thermal Therapy, if needed) – A specialized heat-based therapy that helps in reducing chronic pain and improving mobility.",
      ],

      dietRecommendations: {
        dietaryguidelines: [
          "Follow a Vata and Pitta pacifying diet, which includes warm, easily digestible, and anti-inflammatory foods.",
          "Consume ghee, sesame oil, turmeric, ginger, amalaki (Indian gooseberry), and ashwagandha for joint nourishment and pain relief.",
          "Avoid spicy, processed, and acidic foods, as they aggravate Pitta dosha.",
          "Stay hydrated with warm water and herbal teas containing cinnamon, turmeric, and licorice.",
        ],

        lifestylemodification: [
          "Maintain good posture and avoid prolonged sitting or standing.",
          "Engage in gentle yoga and stretching exercises like Bhujangasana (Cobra Pose), Tadasana (Mountain Pose), and Setu Bandhasana (Bridge Pose) to improve spinal flexibility.",
          "Practice meditation and breathing exercises (Pranayama) to reduce stress, which can trigger inflammation.",
          "Get adequate rest and sleep to aid the body’s healing process.",
        ],
      },

      conclusion: [
        "Ayurveda provides a natural and effective approach to managing Ankylosing Spondylitis by reducing inflammation, relieving pain, and improving joint mobility. With herbal treatments, Panchakarma therapies, and lifestyle adjustments, individuals can experience better spinal health and an improved quality of life.",
      ],
    },
    {
      id: "knee-pain",
      title: "Knee Pain (Sandhivata)",
      description:
        "Knee pain, known as Sandhivata in Ayurveda, is primarily caused by Vata dosha imbalance, leading to joint degeneration, stiffness, pain, and reduced mobility. Ayurveda provides a holistic and effective approach to managing knee pain by nourishing joints, reducing inflammation, and improving flexibility through herbal remedies, Panchakarma therapies, and lifestyle modifications.",

      ayurvedicApproach: [
        "Abhyanga (Herbal Oil Massage) – A therapeutic knee massage using Mahanarayana Tailam, Bala Tailam, or Dhanwantharam Tailam to improve blood circulation, lubricate joints, and relieve pain.",
        "Swedana (Herbal Steam Therapy) – Application of herbal steam or Pinda Sweda (herbal poultices) to ease stiffness and enhance joint mobility.",
        "Janu Basti – A specialized therapy where warm medicated oil is retained around the knee joint using a dough ring, helping in cartilage nourishment, pain relief, and joint strengthening.",
        "Basti (Medicated Enema Therapy) – Basti is one of the most effective therapies for Vata disorders, helping in detoxification, joint lubrication, and pain management. Medicated enemas like Anuvasana Basti (oil-based) and Niruha Basti (herbal decoctions) help reduce inflammation and strengthen bones.",
        "Patra Pinda Sweda (Herbal Poultice Therapy) – Application of warm herbal poultices made from medicinal leaves to relieve pain, stiffness, and inflammation.",
        "Agnikarma (Thermal Therapy, if required) – A heat-based therapy applied to the knee joint to relieve chronic pain and improve circulation in severe cases.",
        "Raktamokshana (Bloodletting Therapy, if needed) – Used in cases of severe inflammation to remove toxins from the blood and reduce swelling.",
      ],

      dietRecommendations: {
        dietaryguidelines: [
          "Follow a Vata-pacifying diet, including warm, nourishing foods.",
          "Include ghee, sesame oil, turmeric, ashwagandha, shatavari, and amalaki (Indian gooseberry) to strengthen joints and reduce inflammation.",
          "Avoid cold, dry, and processed foods, as they increase Vata dosha.",
          "Drink herbal teas with ginger, turmeric, and cinnamon for pain relief.",
        ],
        lifestylemodification: [
          "Avoid excessive strain on the knees by maintaining a healthy weight and using supportive footwear.",
          "Perform gentle stretching and strengthening exercises under guidance.",
          "Practice yoga asanas such as Vrikshasana (Tree Pose), Bhujangasana (Cobra Pose), and Trikonasana (Triangle Pose) to improve flexibility and joint strength.",
          "Apply warm compresses or herbal pastes to the knees for pain relief.",
          "Maintain a balanced daily routine with proper rest and hydration.",
        ],
      },
      conclusion: [
        "Ayurveda offers a natural and long-term solution for managing knee pain by reducing inflammation, strengthening joints, and improving mobility. Through herbal therapies, Panchakarma treatments, and lifestyle adjustments, individuals can regain pain-free movement and better joint health.",
      ],
    },
    {
      id: "migraine",
      title: "Migraine (Ardhavabhedaka)",
      description:
        "Migraine, known as Ardhavabhedaka in Ayurveda, is caused by an imbalance in Vata and Pitta doshas, leading to intense headaches, nausea, sensitivity to light and sound, and neurological discomfort. Ayurveda provides a holistic and natural approach to managing migraines by addressing the root cause, balancing doshas, and preventing recurrence through herbal remedies, Panchakarma therapies, and lifestyle modifications.",
      ayurvedicApproach: [
        "Shirodhara (Oil Dripping Therapy) – A relaxing therapy where warm medicated oil (such as Brahmi or Ksheerabala Tailam) is poured over the forehead in a continuous stream to calm the nervous system, reduce stress, and alleviate migraine attacks.",
        "Nasya (Nasal Therapy) – Administration of medicated herbal oils or ghee (such as Anu Tailam or Shadbindu Tailam) into the nostrils to clear sinus congestion, improve brain function, and relieve migraine pain.",
        "Abhyanga (Head and Body Massage) – Application of cooling herbal oils on the head and full body to relieve stress, improve circulation, and reduce migraine frequency.",
        "Swedana (Herbal Steam Therapy) – Mild herbal steam therapy is used to relax the body and improve blood circulation, which helps in pain relief.",
        "Virechana (Purgation Therapy) – A detoxification therapy that removes Pitta-related toxins from the body, preventing migraine triggers such as acidity and stress.",
        "Shirovasti (Oil Retention Therapy) – A specialized therapy where medicated oil is retained on the scalp for deep nourishment, providing long-term relief from migraines.",
      ],
      dietRecommendations: {
        dietaryguidelines: [
          "Follow a Pitta and Vata-pacifying diet, including cooling and hydrating foods.",
          "Consume ghee, almonds, coconut water, soaked raisins, and fresh fruits to nourish the nervous system.",
          "Avoid spicy, fermented, processed, and fried foods, as they trigger migraines.",
          "Stay hydrated with herbal teas made from Brahmi, Shankhpushpi, and Ashwagandha for brain relaxation.",
        ],
        lifestylemodification: [
          "Maintain a consistent sleep schedule to prevent migraine attacks.",
          "Avoid exposure to bright lights, loud noises, and excessive screen time.",
          "Practice Pranayama (breathing exercises) like Anulom Vilom and Sheetali Pranayama to calm the mind.",
          "Perform gentle yoga asanas such as Shavasana (Corpse Pose), Balasana (Child’s Pose), and Padmasana (Lotus Pose) for stress relief.",
          "Use essential oils like lavender, peppermint, and sandalwood to reduce migraine intensity.",
          "Avoid excessive caffeine and alcohol consumption, which can aggravate migraine symptoms.",
        ],
      },
      conclusion: [
        "Ayurveda offers a natural and holistic approach to managing migraines by reducing triggers, detoxifying the body, and restoring dosha balance. With herbal remedies, Panchakarma therapies, and lifestyle adjustments, individuals can experience long-term relief and better mental clarity.",
      ],
    },
    {
      id: "parkinson",
      title: "Parkinson’s Disease (Kampavata)",
      description:
        "Parkinson’s Disease, known as Kampavata in Ayurveda, is a neurodegenerative disorder caused by an imbalance in Vata dosha, leading to tremors, muscle rigidity, slow movements, and impaired coordination. Ayurveda aims to nourish the nervous system, improve motor functions, and slow disease progression using herbal therapies, Panchakarma treatments, and lifestyle modifications.",
      ayurvedicApproach: [
        "Abhyanga (Herbal Oil Massage) – A full-body massage using medicated oils like Mahanarayana Tailam, Bala Tailam, and Dhanwantharam Tailam to improve blood circulation, strengthen muscles, and reduce tremors.",
        "Shirodhara (Oil Dripping Therapy) – A calming therapy where medicated oil (such as Brahmi or Ksheerabala Tailam) is poured over the forehead to balance Vata, reduce stress, and improve brain function.",
        "Nasya (Nasal Therapy) – Instillation of medicated oils (like Anu Tailam or Brahmi Ghrita) into the nostrils to enhance brain function and nervous system activity.",
        "Basti (Medicated Enema Therapy) – Basti is highly effective for Vata disorders and involves herbal oil-based enemas (Anuvasana Basti) and decoction enemas (Niruha Basti) to nourish the nervous system and slow disease progression.",
        "Pinda Sweda (Herbal Poultice Therapy) – Application of warm herbal poultices made from medicated plants and grains to relieve muscle stiffness and improve motor function.",
        "Shirovasti (Oil Retention Therapy) – A therapy where medicated oil is retained on the head to deeply nourish brain tissues and manage neurological symptoms.",
      ],
      dietRecommendations: {
        dietaryguidelines: [
          "Follow a Vata-pacifying diet, including warm, nourishing, and easily digestible foods.",
          "Consume ghee, almonds, walnuts, sesame seeds, ashwagandha, and brahmi to strengthen the nervous system.",
          "Include anti-inflammatory foods like turmeric, ginger, cinnamon, and amla (Indian gooseberry) to support brain health.",
          "Avoid cold, dry, processed, and fried foods, which aggravate Vata dosha.",
          "Drink herbal teas made from Brahmi, Ashwagandha, and Gotu Kola to support cognitive function.",
        ],
        lifestylemodification: [
          "Engage in mild exercises like walking, stretching, and light yoga to maintain flexibility.",
          "Practice meditation and Pranayama (breathing exercises) like Anulom Vilom and Bhramari to calm the nervous system.",
          "Perform yoga asanas such as Tadasana (Mountain Pose), Vrikshasana (Tree Pose), and Bhujangasana (Cobra Pose) for better coordination and strength.",
          "Use herbal oils for self-massage to reduce stiffness and improve circulation.",
          "Maintain a consistent sleep schedule to support brain function and prevent fatigue.",
        ],
      },
      conclusion: [
        "Ayurveda offers a natural and holistic approach to managing Parkinson’s Disease by nourishing the nervous system, reducing tremors, and improving mobility. Through herbal treatments, Panchakarma therapies, and lifestyle modifications, individuals can experience better quality of life and improved motor function.",
      ],
    },
    {
      id: "osteoporosis",
      title: "Osteoporosis (Asthi Kshaya)",
      description:
        "Osteoporosis, known as Asthi Kshaya in Ayurveda, is a condition characterized by bone density loss, weakness, and increased fracture risk due to an imbalance in Vata dosha and depletion of Asthi Dhatu (bone tissue). Ayurveda focuses on strengthening bones, improving calcium absorption, and balancing Vata through herbal treatments, Panchakarma therapies, and lifestyle modifications.",
      ayurvedicApproach: [
        "Abhyanga (Herbal Oil Massage) – A full-body massage with medicated oils like Mahanarayana Tailam, Bala Tailam, and Dhanwantharam Tailam to improve circulation, nourish bones, and reduce joint pain.",
        "Basti (Medicated Enema Therapy) – Basti is the best therapy for Vata disorders, helping in bone nourishment, detoxification, and strengthening joints. Herbal enemas like Anuvasana Basti (oil-based) and Niruha Basti (decoction-based) are highly effective.",
        "Ksheera Vasthi (Milk-Based Enema Therapy) – A specialized enema therapy using medicated milk to restore calcium levels, strengthen bones, and prevent further degeneration.",
        "Pinda Sweda (Herbal Poultice Therapy) – Application of warm herbal poultices with medicated herbs to relieve pain, stiffness, and muscle weakness.",
        "Dhanyamla Dhara (Herbal Decoction Therapy) – A therapy where warm fermented herbal liquid is poured over the body to reduce inflammation and improve metabolism.",
        "Shirodhara (Oil Dripping Therapy, if stress-related bone loss is present) – Helps in reducing stress-related bone weakness by calming the nervous system and balancing Vata.",
      ],
      dietRecommendations: {
        dietaryguidelines: [
          "Follow a Vata-pacifying diet, rich in calcium and mineral-dense foods.",
          "Include sesame seeds, ghee, milk, almonds, walnuts, dates, and amalaki (Indian gooseberry) for bone strength.",
          "Consume herbs like Shatavari, Ashwagandha, Hadjod (Cissus quadrangularis), and Laksha Guggulu to promote bone health.",
          "Use turmeric and ginger to reduce inflammation and improve calcium absorption.",
          "Avoid excess tea, coffee, carbonated drinks, and processed foods, as they deplete bone minerals.",
        ],
        lifestylemodification: [
          "Engage in weight-bearing exercises like walking, yoga, and light strength training to maintain bone density.",
          "Practice yoga asanas such as Tadasana (Mountain Pose), Vrikshasana (Tree Pose), and Bhujangasana (Cobra Pose) for improved bone strength.",
          "Sunlight exposure for natural Vitamin D synthesis is essential for calcium absorption.",
          "Avoid excessive stress and overexertion, as they aggravate Vata and weaken bones.",
          "Maintain proper posture to prevent bone strain and fractures.",
        ],
      },
      conclusion: [
        "Ayurveda offers a natural and holistic approach to managing osteoporosis by nourishing bones, restoring calcium balance, and preventing fractures. With herbal treatments, Panchakarma therapies, and lifestyle modifications, individuals can experience stronger bones and better mobility.",
      ],
    },
    {
      id: "osteoarthritis",
      title: "Osteoarthritis (Sandhivata)",
      description:
        "Osteoarthritis, known as Sandhivata in Ayurveda, is a degenerative joint disorder caused by an imbalance in Vata dosha, leading to cartilage degeneration, joint pain, stiffness, and reduced mobility. Ayurveda offers a holistic approach to managing osteoarthritis by lubricating joints, reducing inflammation, and strengthening bones through herbal treatments, Panchakarma therapies, and lifestyle modifications.",
      ayurvedicApproach: [
        "Abhyanga (Herbal Oil Massage) – Regular massage with Mahanarayana Tailam, Bala Tailam, or Dhanwantharam Tailam helps improve blood circulation, lubricate joints, and reduce stiffness.",
        "Swedana (Herbal Steam Therapy) – Application of herbal steam or Pinda Sweda (herbal poultices) to relieve joint stiffness and improve mobility.",
        "Janu Basti / Greeva Basti / Kati Basti – A specialized therapy where warm medicated oil is retained over affected joints using a dough ring, providing deep nourishment and pain relief.",
        "Basti (Medicated Enema Therapy) – Medicated enemas using Dashamoola, Anuvasana Basti (oil-based), and Niruha Basti (herbal decoctions) help detoxify and strengthen joints.",
        "Patra Pinda Sweda (Herbal Poultice Therapy) – Warm herbal poultices prepared from medicinal leaves and herbs are applied to reduce inflammation and pain.",
        "Agnikarma (Thermal Therapy, if required) – A specialized heat therapy to relieve chronic pain and improve joint function.",
      ],
      dietRecommendations: {
        dietaryguidelines: [
          "Follow a Vata-pacifying diet, including warm, nourishing foods.",
          "Include ghee, sesame seeds, milk, ashwagandha, turmeric, and ginger for joint lubrication and strength.",
          "Avoid cold, dry, and processed foods, as they aggravate Vata dosha.",
          "Drink herbal teas with turmeric, cinnamon, and fenugreek to reduce inflammation.",
          "Consume bone-strengthening herbs like Shallaki (Boswellia), Guggulu, and Hadjod (Cissus quadrangularis).",
        ],
        lifestylemodification: [
          "Avoid excessive strain on the joints by maintaining a healthy weight.",
          "Perform gentle yoga and stretching exercises to improve flexibility.",
          "Practice yoga asanas such as Vrikshasana (Tree Pose), Bhujangasana (Cobra Pose), and Trikonasana (Triangle Pose) for joint mobility.",
          "Apply warm compresses or herbal pastes to the affected joints for relief.",
          "Maintain a consistent daily routine with proper rest and hydration.",
        ],
      },
      conclusion: [
        "Ayurveda provides a natural and long-term solution for osteoarthritis by reducing pain, strengthening joints, and improving mobility. Through herbal therapies, Panchakarma treatments, and lifestyle modifications, individuals can regain pain-free movement and better joint health.",
      ],
    },
    {
      id: "muscle-pain",
      title: "Muscle Pain (Mamsagata Vata)",
      description:
        "Muscle pain, known as Mamsagata Vata in Ayurveda, occurs due to Vata and Pitta imbalances, leading to stiffness, soreness, inflammation, and weakness in the muscles. Ayurveda aims to relieve pain, improve circulation, and strengthen muscles using herbal treatments, Panchakarma therapies, and lifestyle modifications.",
      ayurvedicApproach: [
        "Abhyanga (Herbal Oil Massage) – A full-body massage using Mahanarayana Tailam, Bala Tailam, or Dhanwantharam Tailam to relieve muscle tension, reduce inflammation, and improve flexibility.",
        "Swedana (Herbal Steam Therapy) – Herbal steam application using medicated decoctions like Dashamoola and Nirgundi to relax muscles and reduce stiffness.",
        "Pinda Sweda (Herbal Poultice Therapy) – Application of warm herbal poultices made from medicated herbs like Eranda (castor), Ashwagandha, and Rasna to alleviate muscle soreness and improve circulation.",
        "Basti (Medicated Enema Therapy) – Basti therapy is highly effective for chronic muscle pain, helping to nourish tissues, remove toxins, and strengthen muscles. Anuvasana Basti (oil-based) and Niruha Basti (herbal decoction-based) treatments are commonly used.",
        "Lepam (Herbal Paste Application) – Application of medicated herbal pastes made from Turmeric, Sandalwood, and Aloe Vera to reduce inflammation and promote muscle healing.",
        "Nasya (Nasal Therapy, if stress-related muscle pain is present) – Instillation of herbal oils like Anu Tailam into the nostrils to calm the nervous system and relieve stress-induced muscle pain.",
      ],
      dietRecommendations: {
        dietaryguidelines: [
          "Follow an anti-inflammatory and Vata-balancing diet.",
          "Consume warm, nourishing foods like ghee, sesame seeds, almonds, and leafy greens to strengthen muscles.",
          "Include Ashwagandha, Guggulu, and Shatavari in the diet to promote muscle repair.",
          "Drink herbal teas made from Turmeric, Ginger, and Fenugreek to reduce inflammation.",
          "Avoid cold, processed, and fried foods, which can worsen muscle stiffness.",
        ],
        lifestylemodification: [
          "Engage in regular stretching and light exercises like yoga to maintain muscle flexibility.",
          "Practice yoga asanas such as Bhujangasana (Cobra Pose), Tadasana (Mountain Pose), and Pawanmuktasana (Wind-Relieving Pose) for muscle relaxation.",
          "Apply warm compresses or Epsom salt baths for quick muscle recovery.",
          "Maintain proper hydration to prevent muscle cramps and stiffness.",
          "Get adequate rest and sleep, as muscle recovery happens during deep sleep.",
        ],
      },
      conclusion: [
        "Ayurveda provides a holistic and natural approach to managing muscle pain by reducing inflammation, improving circulation, and strengthening tissues. Through herbal treatments, Panchakarma therapies, and lifestyle changes, individuals can experience long-term relief and better muscle health.",
      ],
    },
    {
      id: "slipped-disc",
      title: "Slipped Disc (Intervertebral Disc Prolapse)",
      description:
        "A slipped disc, known as PIVD (Prolapsed Intervertebral Disc) or Gridhrasi (Sciatica) in Ayurveda, occurs when the spinal disc degenerates or bulges out, compressing nearby nerves and causing severe back pain, numbness, and restricted movement. Ayurveda addresses this condition by reducing inflammation, strengthening spinal muscles, and balancing Vata dosha through herbal treatments, Panchakarma therapies, and lifestyle modifications.",
      ayurvedicApproach: [
        "Abhyanga (Herbal Oil Massage) – Therapeutic massage using Mahanarayana Tailam, Ksheerabala Tailam, or Bala Tailam to relax spinal muscles, reduce stiffness, and enhance circulation.",
        "Kati Basti (Oil Pool Therapy for the Lower Back) – A specialized therapy where warm medicated oil is retained on the lower back to lubricate spinal discs, reduce nerve compression, and relieve pain.",
        "Basti (Medicated Enema Therapy) – One of the most effective treatments for Vata-related disorders, Basti therapy helps detoxify, nourish, and strengthen the spine. Anuvasana Basti (oil-based) and Niruha Basti (herbal decoction-based) treatments are commonly used.",
        "Pinda Sweda (Herbal Poultice Therapy) – Application of warm herbal boluses made from Dashamoola, Rasna, and Nirgundi to reduce inflammation and relax muscles.",
        "Patrapinda Sweda (Leaf Bundle Therapy) – A specialized therapy where warm medicated herbal leaves are applied to relieve pain and stiffness in the back.",
        "Agnikarma (Heat Therapy, if required) – A controlled heat therapy to reduce chronic pain and improve nerve function.",
        "Nasya (Nasal Therapy, if cervical disc issues are present) – Application of medicated nasal drops (Anu Tailam or Ksheerabala Tailam) to help relieve pain and inflammation in the upper spine.",
      ],
      dietRecommendations: {
        dietaryguidelines: [
          "Follow a Vata-pacifying diet with warm, nourishing foods.",
          "Include ghee, sesame seeds, dates, almonds, milk, and leafy greens to strengthen bones and muscles.",
          "Consume herbs like Shallaki (Boswellia), Guggulu, and Ashwagandha to promote spinal health.",
          "Drink herbal teas with turmeric, ginger, and fenugreek to reduce inflammation.",
          "Avoid cold, processed, and deep-fried foods, as they aggravate Vata dosha.",
        ],
        lifestylemodification: [
          "Avoid prolonged sitting or improper posture to reduce spinal stress.",
          "Perform gentle yoga and stretching exercises to improve spinal flexibility.",
          "Practice yoga asanas such as Bhujangasana (Cobra Pose), Marjariasana (Cat-Cow Pose), and Makarasana (Crocodile Pose) for spinal relaxation.",
          "Use proper lumbar support while sitting and sleeping to prevent further disc damage.",
          "Avoid lifting heavy objects to prevent worsening of the condition.",
          "Maintain proper hydration to keep spinal discs nourished.",
        ],
      },
      conclusion: [
        "Ayurveda provides a holistic and effective approach for managing slipped disc issues by reducing nerve compression, strengthening spinal muscles, and balancing Vata dosha. With herbal therapies, Panchakarma treatments, and lifestyle modifications, individuals can regain pain-free movement and improved spinal health.",
      ],
    },
    {
      id: "gout",
      title: "Gout (Vatarakta)",
      description:
        "Gout, known as Vatarakta in Ayurveda, is a painful inflammatory condition caused by an imbalance of Vata and accumulation of uric acid (Ama) in the blood, leading to joint pain, swelling, redness, and stiffness. Ayurveda focuses on detoxifying the body, balancing doshas, and reducing inflammation through herbal treatments, Panchakarma therapies, and lifestyle modifications.",
      ayurvedicApproach: [
        "Abhyanga (Herbal Oil Massage) – Applying Mahanarayana Tailam, Dhanwantharam Tailam, or Sahacharadi Tailam to the affected joints helps reduce pain, stiffness, and inflammation.",
        "Swedana (Herbal Steam Therapy) – Herbal steam therapy with Dashamoola, Nirgundi, and Eranda decoctions helps relieve joint stiffness and improves circulation.",
        "Raktamokshana (Bloodletting Therapy, if required) – A specialized Ayurvedic therapy to remove toxins and excess uric acid from the blood, helping to control gout flare-ups.",
        "Virechana (Purgation Therapy) – A detoxifying Panchakarma treatment using medicated herbal laxatives like Triphala and Avipattikar Churna to eliminate toxins and purify the body.",
        "Basti (Medicated Enema Therapy) – Basti therapy with herbal oils and decoctions helps remove Vata-related toxins and prevent further joint damage.",
        "Lepam (Herbal Paste Application) – Application of Turmeric, Sandalwood, Aloe Vera, and Manjistha paste on swollen joints to reduce pain and inflammation.",
      ],
      dietRecommendations: {
        dietaryguidelines: [
          "Follow a Pitta and Vata-pacifying diet with cooling, alkaline foods.",
          "Consume fresh fruits, vegetables, whole grains, ghee, and coconut water to support digestion and detoxification.",
          "Include herbs like Guduchi, Guggulu, and Shallaki to help control inflammation and uric acid levels.",
          "Drink herbal teas made from Turmeric, Neem, and Punarnava to purify the blood.",
          "Avoid high-purine foods like red meat, seafood, lentils, and alcohol, which increase uric acid.",
          "Stay hydrated by drinking plenty of warm water and herbal decoctions.",
        ],
        lifestylemodification: [
          "Avoid excessive physical exertion that puts pressure on the joints.",
          "Perform mild stretching and yoga to keep joints mobile.",
          "Practice yoga asanas such as Trikonasana (Triangle Pose), Gomukhasana (Cow Face Pose), and Vajrasana (Thunderbolt Pose) to improve circulation.",
          "Use warm compresses on affected joints to relieve stiffness.",
          "Maintain a healthy weight to prevent excessive stress on joints.",
        ],
      },
      conclusion: [
        "Ayurveda provides a holistic and natural approach to managing gout by eliminating toxins, reducing inflammation, and balancing Vata-Pitta doshas. With herbal treatments, Panchakarma therapies, and dietary & lifestyle modifications, individuals can experience long-term relief and improved joint health.",
      ],
    },
    {
      id: "rheumatoid-arthritis",
      title: "Rheumatoid Arthritis (Amavata)",
      description:
        "Rheumatoid Arthritis, known as Amavata in Ayurveda, is an autoimmune joint disorder caused by the accumulation of Ama (toxins) and Vata imbalance, leading to chronic joint pain, swelling, stiffness, and restricted movement. Ayurveda aims to detoxify the body, reduce inflammation, and restore joint health through herbal treatments, Panchakarma therapies, and lifestyle modifications.",
      ayurvedicApproach: [
        "Abhyanga (Herbal Oil Massage) – Applying Mahanarayana Tailam, Dhanwantharam Tailam, or Ksheerabala Tailam helps relieve joint stiffness, swelling, and pain.",
        "Swedana (Herbal Steam Therapy) – Herbal steam therapy with Dashamoola, Nirgundi, and Rasna decoctions helps reduce joint inflammation and improve mobility.",
        "Virechana (Purgation Therapy) – A detoxifying Panchakarma treatment using medicated herbal laxatives like Triphala and Avipattikar Churna to remove Ama (toxins) from the body.",
        "Basti (Medicated Enema Therapy) – Basti therapy with herbal oils and decoctions like Dashamoola and Sahacharadi helps balance Vata dosha and reduce joint pain.",
        "Raktamokshana (Bloodletting Therapy, if required) – A therapy to remove toxins from the bloodstream, reducing inflammation and joint swelling.",
        "Upanaham (Herbal Poultice Therapy) – Application of warm medicated herbal pastes made from Eranda, Ashwagandha, and Guggulu to reduce swelling and pain.",
      ],
      dietRecommendations: {
        dietaryguidelines: [
          "Follow a Vata and Ama-pacifying diet with warm, easily digestible foods.",
          "Consume ghee, turmeric, ginger, fenugreek, and garlic to reduce inflammation.",
          "Include herbs like Shallaki (Boswellia), Ashwagandha, and Guduchi to improve joint health.",
          "Drink herbal teas made from Dashamoola, Punarnava, and Triphala for detoxification.",
          "Avoid cold, processed, fried, and heavy foods, as they increase Ama accumulation.",
          "Stay hydrated by drinking warm water and herbal decoctions.",
        ],
        lifestylemodification: [
          "Avoid excessive exertion and cold exposure, which can aggravate Vata dosha.",
          "Perform mild yoga and stretching exercises to maintain joint mobility.",
          "Practice yoga asanas such as Bhujangasana (Cobra Pose), Trikonasana (Triangle Pose), and Gomukhasana (Cow Face Pose) to reduce stiffness.",
          "Use warm compresses and Epsom salt baths for pain relief.",
          "Maintain a regular sleep schedule to support healing and immunity.",
        ],
      },
      conclusion: [
        "Ayurveda provides a holistic and natural approach to managing Rheumatoid Arthritis by eliminating toxins, reducing inflammation, and balancing Vata dosha. With herbal treatments, Panchakarma therapies, and dietary & lifestyle modifications, individuals can experience long-term relief and improved joint health.",
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
         {visibleFormId === "form1" && (
          <div className="fixed inset-0 flex justify-center items-center z-10">
            <div className="relative">
              <Book_Appointment closeForm={closeForm} />
            </div>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[#394E29] font-bold  max-[450px]:text-[16px]">
            {disorder.title}
          </h1>
        </div>
      </div>
      <div className="py-20 px-12 xl:px-36">
        <p className="text-[#757575] text-[32px] font-semibold">
          What is {disorder.title} Treatment ?
        </p>
        <p className="text-[#757575] text-justify mt-4">
          {disorder.description}
        </p>

        <p className="text-[#757575] text-[32px] font-semibold mt-10 mb-6">
          Ayurvedic Approach & Panchakarma Treatments
        </p>

        <ul className="list-disc list-inside text-[20px]  text-[#757575]">
          {disorder.ayurvedicApproach.map((approach, index) => {
            const [title, description] = approach.split("–"); // Splitting at "–"
            return (
              <li key={index} className="mb-4">
                <strong>{title.trim()}</strong> – {description.trim()}
              </li>
            );
          })}
        </ul>

        <p className="text-[#757575] text-[32px] font-semibold mt-10">
          Dietary & Lifestyle Recommendations
        </p>

        <p className="text-[#757575] mt-5 font-bold">Dietary Guidelines</p>
        <ul className="list-disc list-inside ml-3 text-[20px] mt-4 text-[#757575]">
          {disorder.dietRecommendations.dietaryguidelines.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
        <p className="text-[#757575] mt-10 font-bold">Lifestyle Modifications</p>
        <ul className="list-disc list-inside ml-3 mt-4 text-[20px] text-[#757575]">
          {disorder.dietRecommendations.lifestylemodification.map(
            (item, index) => (
              <li key={index} className="mb-2">{item}</li>
            )
          )}
        </ul>
        <p className="text-[#757575] mt-10">{disorder.conclusion}</p>
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

export default JointDetails;
