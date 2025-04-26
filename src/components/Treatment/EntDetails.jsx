import React from "react";
import { assets } from "../../assets/assets";
import { useParams } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function EntDetails() {
  const { disorderId } = useParams(); // Get disorderId from URL
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();
  const disorders = [
    {
      id: "tinnitus",
      title: "Tinnitus",
      description:
        "Tinnitus is a condition characterized by the perception of ringing, buzzing, hissing, or other sounds in the ears or head without any external source. It can be linked to hearing loss, exposure to loud noises, ear infections, certain medications, or underlying health issues. The persistent noise can interfere with concentration, sleep, and overall quality of life.",
      ayurvedicDiscription: [
        "In Ayurveda, tinnitus is seen as an imbalance of Vata dosha, which governs movement and nerve functions. An excess of Vata can disturb sensory perception, leading to tinnitus. Treatment focuses on detoxifying and restoring balance.",
      ],
      ayurvedicApproach: [
        "Nasya (Nasal Administration) – Medicated oils are administered through the nostrils to clear the head and balance Vata.",
        "Shirodhara – A continuous, gentle stream of warm oil is poured on the forehead to calm the nervous system and reduce stress.",
        "Abhyanga (Therapeutic Massage) – Warm, herbal oils used in massage help soothe the nervous system and improve circulation.",
        "Swedana (Herbal Steam Therapy) – Promotes detoxification and relieves tension by opening channels for better circulation.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Ayurveda emphasizes a balanced diet and mindful lifestyle practices to support overall health and manage tinnitus. Recommendations include:",
        ],
        dietaryguidelines: [
          "Favor warm, easily digestible meals like soups, stews, and cooked vegetables.",
          "Incorporate foods that help balance Vata, focusing on sweet, sour, and salty tastes in moderation.",
          "Avoid cold, dry foods and beverages, as well as excessive caffeine and processed items that may aggravate Vata.",
        ],
        lifestylemodification: [
          "Practice stress-reducing techniques such as yoga, meditation, and deep breathing exercises to calm the nervous system.",
          "Maintain a consistent sleep schedule to support overall health and reduce nervous tension.",
          "Limit exposure to loud environments and use ear protection when necessary.",
          "Engage in gentle physical activities like walking or light stretching to promote circulation and reduce stress.",
        ],
      },
      conclusion: [
        "This integrative approach, combining therapeutic treatments with mindful dietary and lifestyle changes, aims to reduce the intensity of tinnitus symptoms and improve overall well-being.",
      ],
    },
    {
      id: "recurrent-sinusitis",
      title: "Recurrent Sinusitis",
      description:
        "Recurrent sinusitis is a condition where inflammation or infection of the sinus cavities repeatedly occurs over time. Symptoms include nasal congestion, facial pressure, post-nasal drip, and a reduced sense of smell. Causes may include structural issues, allergies, environmental irritants, or a weakened immune system.",
      ayurvedicDiscription: [
        "In Ayurveda, recurrent sinusitis is linked to an imbalance of Kapha and Vata doshas, leading to mucus accumulation and nasal blockage. Treatment focuses on detoxification and restoring balance.",
      ],
      ayurvedicApproach: [
        "Nasya Therapy – Medicated oils like Anu Tailam are administered into the nostrils to lubricate and cleanse nasal passages.",
        "Steam Inhalation – Herbal steam using tulsi, eucalyptus, or ginger opens sinus passages and clears mucus.",
        "Panchakarma Procedures – Therapies like Virechana (therapeutic purgation) help eliminate excess Kapha.",
        "Herbal Remedies – Turmeric, ginger, and holy basil support natural healing and reduce recurrence.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Adopting specific dietary and lifestyle practices can play a significant role in managing and preventing recurrent sinusitis. Recommendations include: ",
        ],
        dietaryguidelines: [
          "Consume warm, digestible meals like soups and herbal teas to reduce Kapha.",
          "Limit dairy and cold foods to prevent excess mucus.",
          "Use spices like turmeric, ginger, and black pepper for digestion and inflammation reduction.",
          "Stay hydrated with warm fluids.",
        ],
        lifestylemodification: [
          "Practice yoga, meditation, and deep breathing to boost immunity.",
          "Maintain a clean, allergen-free environment.",
          "Use saline nasal rinses and periodic steam inhalation to keep nasal passages clear.",
          "Engage in moderate exercise to improve circulation.",
        ],
      },
      conclusion: [
        "This integrated approach, combining targeted Ayurvedic therapies with mindful dietary and lifestyle adjustments, aims to reduce the frequency of sinusitis episodes and support long-term respiratory wellness. ",
      ],
    },
    {
      id: "acute-otitis-media",
      title: "Acute Otitis Media",
      description:
        "Acute Otitis Media (AOM) is a sudden-onset infection of the middle ear, characterized by inflammation and fluid buildup behind the eardrum. Common symptoms include ear pain, fever, difficulty hearing, and sometimes irritability—especially in children. The condition often follows an upper respiratory infection when the Eustachian tube becomes blocked, creating an environment conducive to bacterial or viral growth.",
      ayurvedicDiscription: [
        "In Ayurveda, acute otitis media is understood as an imbalance primarily involving aggravated Vata and Kapha doshas, which can lead to the accumulation of toxins (ama) and inflammation in the ear region. Ayurvedic management aims to restore balance and facilitate natural healing.",
      ],
      ayurvedicApproach: [
        "Nasya Therapy – Medicated herbal oils are gently instilled through the nostrils, helping to clear the Eustachian tube, reduce inflammation, and balance Vata.",
        "Herbal Decoctions and Ear Drops – Formulations containing anti-inflammatory herbs such as tulsi, ginger, and neem may be used externally to alleviate pain and infection.",
        "Panchakarma Procedures – Therapies like Abhyanga (therapeutic oil massage) and Swedana (herbal steam therapy) support detoxification, improve circulation, and reduce systemic inflammation, thereby aiding recovery.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "To support healing and prevent recurrence, Ayurveda recommends a balanced diet and mindful lifestyle practices.",
        ],
        dietaryguidelines: [
          "Emphasize warm, easily digestible foods like soups, stews, and lightly spiced dishes that reduce Kapha buildup.",
          "Include anti-inflammatory spices such as turmeric, ginger, and garlic in meals.",
          "Avoid cold, heavy, or processed foods that can exacerbate inflammation and contribute to toxin accumulation.",
        ],
        lifestylemodification: [
          "Ensure ample rest and maintain a regular sleep schedule to support the body’s natural healing process.",
          "Practice stress-reducing activities like yoga and meditation, which help balance Vata and promote overall well-being.",
          "Keep hydrated with warm fluids to assist in thinning mucus and flushing out toxins.",
          "Minimize exposure to irritants such as tobacco smoke and environmental allergens, which can worsen symptoms.",
        ],
      },
      conclusion: [
        "This integrative approach, combining Ayurvedic therapies with dietary and lifestyle modifications, is designed to address the root causes of acute otitis media and promote a swift, sustainable recovery.",
      ],
    },
    {
      id: "csom",
      title: "Chronic Suppurative Otitis Media (CSOM)",
      description:
        "Chronic Suppurative Otitis Media (CSOM) is a long-standing inflammation of the middle ear marked by persistent ear discharge (otorrhea) through a perforated tympanic membrane. Typically developing after unresolved episodes of acute otitis media, CSOM is characterized by a chronic infection that may lead to hearing loss and other complications if left untreated. The condition often presents with intermittent or continuous ear discharge, mild to moderate ear discomfort, and sometimes diminished auditory function, impacting the overall quality of life.",
      ayurvedicDiscription: [
        "In Ayurveda, CSOM is considered a manifestation of imbalanced Kapha dosha, often accompanied by aggravated Vata. The persistent discharge and chronic infection are seen as a result of toxin accumulation (ama) in the ear region. Ayurvedic treatments focus on detoxification, restoring doshic balance, and promoting tissue healing.",
      ],
      ayurvedicApproach: [
        "Nasya Therapy – Medicated herbal oils are gently instilled into the nostrils to help clear the Eustachian tube and reduce inflammation in the middle ear.",
        "Abhyanga (Therapeutic Oil Massage) – Massaging with warm, herbal-infused oils helps to alleviate pain, improve circulation, and reduce the buildup of toxins.",
        "Swedana (Herbal Steam Therapy) – Inhaling herbal steam aids in loosening mucus and expelling ama, facilitating the cleansing of the ear passages.",
        "Herbal Formulations – Specific herbs with antibacterial, anti-inflammatory, and wound-healing properties—such as turmeric, neem, and giloy—may be used both internally and topically to combat infection and support recovery.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Diet and lifestyle play an essential role in managing CSOM by reducing doshic aggravation and supporting the immune system.",
        ],
        dietaryguidelines: [
          "Emphasize warm, light, and easily digestible foods like soups, stews, and herbal broths to prevent excess Kapha accumulation.",
          "Include natural anti-inflammatory spices such as ginger, garlic, and turmeric to support healing.",
          "Limit dairy products, cold foods, and processed items that can increase mucus production and exacerbate inflammation.",
          "Maintain adequate hydration with warm liquids, such as herbal teas, to help thin secretions and support detoxification.",
        ],
        lifestylemodification: [
          "Ensure sufficient rest and maintain a regular sleep schedule to promote the body’s natural healing process.",
          "Engage in gentle exercise and yoga to improve blood circulation and reduce stress, which can worsen doshic imbalances.",
          "Avoid exposure to environmental irritants like dust, smoke, and allergens that may trigger further ear infections.",
          "Practice proper ear hygiene and adhere to Ayurvedic treatments consistently for optimal long-term management.",
        ],
      },
      conclusion: [
        "This holistic Ayurvedic approach, integrating targeted Panchakarma therapies with supportive dietary and lifestyle changes, aims to address the root causes of CSOM, reduce chronic symptoms, and enhance overall well-being.",
      ],
    },
    {
      id: "pharyngitis",
      title: "Pharyngitis",
      description:
        "Pharyngitis is the inflammation of the pharynx, the area at the back of the throat, which typically results in a sore, scratchy throat. This condition can be caused by viral or bacterial infections, allergens, or irritants. Common symptoms include pain during swallowing, redness, and swelling of the throat, and sometimes fever and swollen lymph nodes. The condition may be acute, resolving on its own, or recur if underlying factors persist.",
      ayurvedicDiscription: [
        "In Ayurveda, pharyngitis is viewed as a result of imbalanced doshas, particularly an aggravation of Pitta (inflammation) and Vata (irritability), with a possible contribution from Kapha (excess mucus). The goal of Ayurvedic treatment is to restore the doshic balance and eliminate toxins (ama) that contribute to inflammation.",
      ],
      ayurvedicApproach: [
        "Gargling with Herbal Decoctions – Using herbal formulations such as licorice or turmeric-infused water can soothe the throat and reduce inflammation.",
        "Nasya Therapy – Gentle nasal administration of medicated oils may help clear the channels and support overall respiratory health.",
        "Abhyanga (Therapeutic Massage) – Massaging with warm, herbal oils aids in calming the nervous system and alleviating doshic imbalances.",
        "Herbal Steam Inhalation – Inhaling steam infused with anti-inflammatory herbs can open the air passages and relieve throat irritation.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Diet and lifestyle modifications are essential in managing pharyngitis and preventing its recurrence.",
        ],
        dietaryguidelines: [
          "Opt for warm, easily digestible foods such as soups, stews, and herbal teas that help soothe the throat.",
          "Incorporate anti-inflammatory spices like turmeric and ginger into meals to support healing.",
          "Avoid excessively spicy, sour, or acidic foods that can further irritate the throat.",
          "Maintain adequate hydration with warm water and herbal infusions to keep the throat moist and reduce irritation.",
        ],
        lifestylemodification: [
          "Ensure plenty of rest to support the body's natural recovery process.",
          "Engage in gentle practices like yoga and meditation to reduce stress, which can exacerbate doshic imbalances.",
          "Maintain proper hygiene practices, such as regular handwashing, to prevent the spread of infections.",
          "Use warm salt water gargles to help alleviate throat discomfort and reduce inflammation.",
        ],
      },
      conclusion: [
        "This integrative approach combines targeted Ayurvedic therapies with mindful dietary and lifestyle adjustments to reduce throat inflammation, support immune function, and promote overall wellness.",
      ],
    },
    {
      id: "tonsillitis",
      title: "Tonsillitis",
      description:
        "Tonsillitis is the inflammation of the tonsils—lymphoid tissues located at the back of the throat—which often results from viral or bacterial infections. This condition is characterized by symptoms such as a sore throat, difficulty swallowing, swollen and red tonsils (sometimes with white or yellow patches), fever, and swollen lymph nodes. While it can occur as an acute episode, recurrent or chronic tonsillitis may lead to prolonged discomfort and potential complications if not managed properly.",
      ayurvedicDiscription: [
        "In Ayurveda, tonsillitis is generally viewed as a manifestation of imbalanced doshas, particularly aggravated Vata and Pitta with a possible influence of Kapha. The buildup of toxins (ama) in the throat region is considered a key factor in the inflammation. Ayurvedic management focuses on restoring balance and detoxifying the body through personalized therapies.",
      ],
      ayurvedicApproach: [
        "Gargling with Herbal Decoctions – Utilizing herbal infusions like licorice or turmeric water helps soothe throat irritation and reduce inflammation.",
        "Nasya Therapy – The gentle administration of medicated oils via the nostrils is used to clear the channels, alleviate throat congestion, and balance the doshas.",
        "Snehana & Swedana – Therapeutic oil massages (Abhyanga) combined with herbal steam treatments promote circulation, relieve tension, and help expel toxins from the affected area.",
        "Herbal Formulations – Specific herbs known for their anti-inflammatory and immune-boosting properties, such as tulsi, ginger, and amla, are often recommended to support recovery and prevent recurrence.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Diet and lifestyle modifications play a crucial role in managing and preventing tonsillitis.",
        ],
        dietaryguidelines: [
          "Favor warm, easily digestible foods like soups, stews, and herbal broths that help reduce Ama and ease throat irritation.",
          "Incorporate anti-inflammatory spices such as turmeric, ginger, and garlic to support the healing process.",
          "Avoid cold, heavy, and processed foods that can aggravate Kapha and contribute to toxin buildup.",
          "Ensure proper hydration with warm fluids such as herbal teas and warm water to maintain mucosal moisture and comfort the throat.",
        ],
        lifestylemodification: [
          "Maintain a consistent sleep schedule and ensure adequate rest to support the body’s natural recovery.",
          "Practice regular stress-relieving activities like yoga, meditation, or deep breathing exercises, as stress can further disturb doshic balance.",
          "Adhere to good oral hygiene practices, including gargling with warm salt water to soothe the throat and prevent further irritation.",
          "Avoid exposure to irritants such as tobacco smoke and environmental pollutants, which can worsen inflammation.",
        ],
      },
      conclusion: [
        "This holistic approach combining Ayurvedic therapies, Panchakarma treatments, and supportive dietary and lifestyle changes aims to reduce inflammation, restore balance, and promote long-term throat health.",
      ],
    },
    {
      id: "hypothyroidism",
      title: "Hypothyroidism",
      description:
        "Hypothyroidism is a condition in which the thyroid gland produces insufficient amounts of thyroid hormones, leading to a slowdown in the body’s metabolic processes. This hormonal imbalance can manifest as fatigue, weight gain, sensitivity to cold, dry skin, hair loss, constipation, and sometimes mood disturbances or cognitive challenges. It is commonly associated with autoimmune conditions like Hashimoto’s thyroiditis, iodine deficiency, or other factors that impair thyroid function.",
      ayurvedicDiscription: [
        "In Ayurveda, hypothyroidism is often linked to an imbalance of the Kapha dosha, with contributions from Vata, resulting in sluggish metabolism and the buildup of toxins (ama) in the body. The Ayurvedic treatment strategy aims to rejuvenate and restore metabolic balance through personalized therapies.",
      ],
      ayurvedicApproach: [
        "Abhyanga & Swedana – Therapeutic oil massages combined with herbal steam therapy help reduce excess Kapha, enhance circulation, and facilitate the elimination of ama.",
        "Basti (Medicated Enema) – This treatment is used to balance Vata and promote detoxification, thereby supporting overall metabolic health.",
        "Nasya Therapy – The administration of medicated herbal oils through the nostrils can help clear channels and support the endocrine system.",
        "Herbal Formulations – Herbs such as Ashwagandha, Guggulu, and Triphala are commonly utilized to stimulate thyroid function, boost metabolism, and improve overall vitality.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Managing hypothyroidism from an Ayurvedic perspective involves dietary and lifestyle modifications that support metabolic health and reduce Kapha accumulation.",
        ],
        dietaryguidelines: [
          "Emphasize warm, light, and easily digestible meals such as steamed vegetables, whole grains, and soups that help stimulate digestion and metabolic function.",
          "Incorporate metabolism-boosting spices like ginger, turmeric, cumin, and black pepper to aid in digestion and improve circulation.",
          "Avoid cold, heavy, and processed foods that can further aggravate Kapha and impede metabolism.",
          "Maintain proper hydration with warm water and herbal teas to support detoxification and overall health.",
        ],
        lifestylemodification: [
          "Engage in regular physical activity, such as yoga, brisk walking, or light aerobic exercises, to help stimulate the metabolism and manage weight.",
          "Practice stress-reducing techniques like meditation, deep breathing exercises, or mindfulness, as stress can further disrupt hormonal balance.",
          "Ensure consistent, restorative sleep by maintaining a regular sleep schedule and creating a calming bedtime routine.",
          "Limit exposure to cold environments, which can contribute to decreased metabolic activity.",
        ],
      },
      conclusion: [
        "This comprehensive Ayurvedic approach, combining targeted Panchakarma therapies with supportive dietary and lifestyle practices, aims to restore hormonal balance, boost metabolism, and improve overall well-being in individuals with hypothyroidism.",
      ],
    },
    {
      id: "nasal-polyp",
      title: "Nasal Polyp",
      description:
        "Nasal polyps are benign, noncancerous growths that develop on the lining of the nasal passages or sinuses due to chronic inflammation. They typically result from conditions such as chronic sinusitis, allergies, or asthma, and appear as soft, painless, and often multiple masses. These growths can obstruct airflow, leading to symptoms like nasal congestion, a reduced sense of smell, and frequent sinus infections.",
      ayurvedicDiscription: [
        "In Ayurveda, nasal polyps are often attributed to an imbalance of the Kapha dosha, with contributions from Vata, leading to the accumulation of toxins (ama) in the nasal passages. Ayurvedic treatment focuses on restoring doshic balance and reducing chronic inflammation.",
      ],
      ayurvedicApproach: [
        "Nasya Therapy – Administration of medicated herbal oils and formulations through the nostrils to clear congestion, reduce inflammation, and restore proper nasal function.",
        "Shirodhara – A soothing therapy involving the gentle pouring of warm herbal oil on the forehead, which helps calm the nervous system and indirectly supports doshic balance.",
        "Abhyanga & Swedana – Therapeutic oil massage combined with herbal steam treatments to reduce Kapha accumulation, expel ama, and improve circulation.",
        "Herbal Formulations – The use of herbs like turmeric, tulsi (holy basil), ginger, and licorice—known for their anti-inflammatory and detoxifying properties—helps address the root causes of inflammation.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Dietary and lifestyle modifications are crucial for managing nasal polyps and reducing the aggravation of Kapha dosha.",
        ],
        dietaryguidelines: [
          "Emphasize warm, light, and easily digestible foods such as steamed vegetables, whole grains, and herbal teas to prevent excess Kapha buildup.",
          "Incorporate anti-inflammatory spices like turmeric, ginger, and black pepper to support digestion and reduce inflammation.",
          "Avoid heavy, cold, and processed foods—including dairy products—that can increase mucus production and worsen congestion.",
          "Ensure proper hydration with warm water and herbal infusions to help thin mucus and promote detoxification.",
        ],
        lifestylemodification: [
          "Engage in regular physical activity, such as yoga, brisk walking, or light aerobic exercises, to stimulate circulation and reduce Kapha.",
          "Practice stress management techniques like meditation, deep breathing exercises, or mindfulness to maintain overall doshic balance.",
          "Maintain a consistent sleep schedule to support the body's natural detoxification processes and overall healing.",
          "Limit exposure to environmental allergens and pollutants that may trigger inflammation or exacerbate symptoms.",
        ],
      },
      conclusion: [
        "This comprehensive Ayurvedic approach, combining targeted Panchakarma therapies with supportive dietary and lifestyle modifications, aims to reduce inflammation, restore nasal function, and promote long-term respiratory wellness.",
      ],
    },
    {
      id: "rhinitis",
      title: "Rhinitis",
      description:
        "Rhinitis is the inflammation of the nasal mucosa, which often leads to symptoms such as nasal congestion, sneezing, runny nose, and itchiness. It can be triggered by allergens, irritants, infections, or environmental factors, and is broadly classified into allergic and non-allergic types. The condition not only causes discomfort but can also interfere with breathing and affect overall quality of life.",
      ayurvedicDiscription: [
        "In Ayurveda, rhinitis is typically viewed as a result of imbalanced doshas, particularly aggravated Kapha and Vata, leading to excess mucus (ama) and inflammation in the nasal passages. The treatment strategy focuses on balancing these doshas and detoxifying the body to reduce symptoms.",
      ],
      ayurvedicApproach: [
        "Nasya Therapy – This involves the administration of medicated herbal oils through the nostrils, which helps to lubricate, cleanse, and clear the nasal passages, thereby reducing congestion and inflammation.",
        "Herbal Steam Inhalation – Inhaling steam infused with herbs such as tulsi, eucalyptus, or ginger can open the nasal passages, relieve congestion, and reduce the inflammatory response.",
        "Abhyanga (Therapeutic Oil Massage) – Massaging with warm, herbal oils not only soothes the nervous system but also helps to break down the accumulated mucus, promoting better circulation and detoxification.",
        "Panchakarma Procedures – Tailored detoxification processes, including gentle therapies like Shirodhara, can help to rebalance the doshas and eliminate toxins, thereby supporting overall respiratory health.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Adopting specific dietary and lifestyle practices is essential to manage rhinitis effectively and prevent recurrence.",
        ],
        dietaryguidelines: [
          "Favor warm, light, and easily digestible foods such as soups, stews, and herbal broths to prevent further accumulation of Kapha.",
          "Incorporate anti-inflammatory spices like ginger, turmeric, and black pepper into meals to boost digestion and reduce mucus production.",
          "Avoid cold, heavy, and processed foods, as well as excessive dairy products, which can aggravate Kapha and contribute to congestion.",
          "Ensure proper hydration with warm water and herbal teas to help thin mucus and support detoxification.",
        ],
        lifestylemodification: [
          "Engage in regular physical activity, such as yoga or brisk walking, to stimulate circulation and improve respiratory function.",
          "Practice breathing exercises (pranayama) and meditation to enhance lung capacity, reduce stress, and support overall doshic balance.",
          "Maintain a regular sleep schedule and a clean, allergen-reduced environment to minimize exposure to triggers.",
          "Consider periodic use of saline nasal rinses to keep the nasal passages clear and reduce irritation.",
        ],
      },
      conclusion: [
        "This comprehensive Ayurvedic approach, integrating targeted Panchakarma therapies with mindful dietary and lifestyle modifications, aims to alleviate the symptoms of rhinitis, restore doshic balance, and enhance long-term respiratory health.",
      ],
    },
    {
      id: "perforation-of-ear",
      title: "Perforation of Ear",
      description:
        "Perforation of the ear, commonly referred to as a perforated eardrum, is a condition where there is a hole or tear in the tympanic membrane—the thin membrane that separates the outer ear from the middle ear. This damage can occur due to infections (such as acute otitis media), physical trauma (like a sudden blow to the ear or exposure to very loud sounds), or rapid changes in air pressure. Symptoms may include ear pain, hearing loss, fluid or pus discharge, and in some cases, a sensation of fullness in the ear. While some small perforations may heal naturally over time, larger or chronic perforations might require medical intervention to prevent complications such as recurrent infections or hearing impairment.",
      ayurvedicDiscription: [
        "In Ayurveda, a perforated eardrum is viewed as a result of imbalances in the Vata and Kapha doshas. Vata’s involvement may lead to tissue weakness or disruption, while an aggravated Kapha contributes to the accumulation of toxins (ama) and impedes healing. The Ayurvedic management focuses on reducing inflammation, detoxifying the body, and promoting tissue repair.",
      ],
      ayurvedicApproach: [
        "Nasya Therapy – Gently administering medicated herbal oils through the nostrils can help clear the nasal and Eustachian pathways, thereby supporting the ear’s natural healing processes.",
        "Abhyanga (Therapeutic Oil Massage) – A focused massage using warm, herbal oils on the head and neck region improves blood circulation and reduces inflammation, aiding tissue repair.",
        "Herbal Remedies – Formulations featuring herbs like turmeric, neem, and giloy are used for their anti-inflammatory, antimicrobial, and regenerative properties, supporting the restoration of the eardrum.",
        "Panchakarma Procedures – Detoxification therapies such as mild Virechana (therapeutic purgation) or Swedana (herbal steam therapy) help eliminate ama, rebalancing the doshas and creating a conducive environment for healing.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Adopting mindful dietary and lifestyle practices is essential for supporting the healing of a perforated eardrum and preventing further complications.",
        ],
        dietaryguidelines: [
          "Emphasize warm, light, and easily digestible foods such as soups, stews, and herbal broths that do not aggravate Kapha dosha.",
          "Include anti-inflammatory spices like turmeric, ginger, and cumin to promote overall healing and reduce systemic inflammation.",
          "Avoid cold, heavy, and processed foods that can increase mucus production and toxin accumulation, potentially slowing the healing process.",
          "Stay well-hydrated with warm water and herbal teas to assist in detoxification and maintain tissue moisture.",
        ],
        lifestylemodification: [
          "Engage in regular stress-reducing practices such as meditation, yoga, or deep breathing exercises, as stress can further disrupt doshic balance and impede recovery.",
          "Ensure adequate rest and maintain a consistent sleep schedule to support the body's natural repair mechanisms.",
          "Protect the ears from additional trauma by avoiding exposure to loud noises, water entry into the ear, or any activities that might worsen the perforation.",
          "Practice good ear hygiene by keeping the outer ear clean and avoiding the use of cotton swabs inside the ear canal.",
        ],
      },
      conclusion: [
        "This integrative Ayurvedic approach, combining targeted Panchakarma therapies with supportive dietary and lifestyle modifications, aims to promote natural healing of the perforated eardrum, restore balance, and improve overall ear health.",
      ],
    },
    {
      id: "dysphagia",
      title: "Dysphagia",
      description:
        "Dysphagia is a condition characterized by difficulty in swallowing. It can arise from structural abnormalities, inflammation, or neuromuscular dysfunction affecting the throat or esophagus. Individuals with dysphagia may experience a sensation of food getting stuck, discomfort or pain while swallowing, coughing, or even choking. This condition can affect nutritional intake and quality of life, necessitating careful evaluation and management.",
      ayurvedicDiscription: [
        "In Ayurveda, dysphagia is often seen as a result of imbalances in Vata and Kapha doshas. An excess of Vata may lead to dryness and impaired nerve function in the swallowing mechanism, while aggravated Kapha can cause mucus accumulation and blockages. Ayurvedic management aims to restore the natural lubrication and strength of the throat through detoxification and rejuvenation.",
      ],
      ayurvedicApproach: [
        "Nasya Therapy – Gently administering medicated herbal oils through the nostrils helps clear the upper respiratory channels and supports the proper function of the throat and esophagus.",
        "Abhyanga (Therapeutic Oil Massage) – A targeted massage using warm, herbal oils can help reduce dryness, enhance circulation, and balance the doshas.",
        "Herbal Gargles & Gandusha – Rinsing the mouth and throat with medicated decoctions or oil can soothe irritation, reduce inflammation, and facilitate smoother swallowing.",
        "Snehana & Swedana – Internal oleation (Snehana) combined with herbal steam treatments (Swedana) aids in loosening accumulated toxins (ama) and restoring tissue vitality.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "For managing dysphagia, dietary and lifestyle modifications are crucial to ease the swallowing process and promote digestive health.",
        ],
        dietaryguidelines: [
          "Emphasize soft, warm, and easily digestible foods such as soups, stewed vegetables, and herbal broths that require minimal chewing.",
          "Incorporate small, frequent meals with balanced nutrients to avoid overwhelming the digestive system.",
          "Use anti-inflammatory spices like ginger and turmeric in moderation to support digestion and reduce throat irritation.",
          "Avoid overly dry, hard, or cold foods that may exacerbate dryness and discomfort during swallowing.",
          "Maintain proper hydration with warm water or herbal teas to keep the mucosal tissues moist.",
        ],
        lifestylemodification: [
          "Eat slowly and mindfully, ensuring thorough chewing to aid in the digestive process.",
          "Practice stress management techniques such as meditation, yoga, or deep breathing exercises, as stress can negatively affect swallowing.",
          "Maintain a regular daily routine that supports overall digestive health, including adequate rest and gentle physical activity.",
          "Follow proper posture during meals to facilitate smooth swallowing and reduce the risk of aspiration.",
        ],
      },
      conclusion: [
        "This integrative approach, combining Ayurvedic therapies with supportive dietary and lifestyle modifications, aims to improve swallowing function, reduce discomfort, and enhance overall well-being in individuals with dysphagia.",
      ],
    },
    {
      id: "vestibulitis",
      title: "Vestibulitis",
      description:
        "Vestibulitis refers to the inflammation of the vestibular system within the inner ear, which is crucial for maintaining balance and spatial orientation. This condition may manifest as episodes of dizziness, vertigo, imbalance, and occasionally nausea, impacting a person’s stability and daily functioning. Although not as commonly discussed as other inner ear disorders, vestibulitis involves inflammatory processes that can disrupt the normal communication between the inner ear and the brain.",
      ayurvedicDiscription: [
        "In Ayurveda, vestibulitis is understood to arise from an imbalance in the Vata dosha—responsible for nerve impulses and movement—and Kapha dosha, which governs structure and lubrication. The resulting imbalance leads to inflammation and dysfunction within the vestibular system. Ayurvedic interventions focus on restoring doshic equilibrium and reducing inflammation through personalized therapies.",
      ],
      ayurvedicApproach: [
        "Nasya Therapy – Gentle administration of medicated herbal oils through the nostrils helps clear the nasal and Eustachian passages, indirectly supporting the inner ear’s balance.",
        "Abhyanga (Therapeutic Oil Massage) – A focused head and neck massage with warm, herbal oils enhances circulation and soothes nerve pathways, aiding in the reduction of inflammation.",
        "Shirodhara – The continuous flow of warm herbal oil on the forehead calms the nervous system and helps stabilize Vata, contributing to improved balance and reduced vertigo.",
        "Herbal Formulations – Anti-inflammatory and nervine herbs such as turmeric, ginger, ashwagandha, and brahmi are often incorporated to alleviate inflammation and support the function of the vestibular system.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Diet and lifestyle modifications are vital in managing vestibulitis, particularly in balancing Vata and Kapha doshas.",
        ],
        dietaryguidelines: [
          "Emphasize warm, cooked meals like soups, stews, and lightly spiced vegetable dishes that are easy to digest and help pacify aggravated Vata.",
          "Incorporate anti-inflammatory spices such as ginger, turmeric, and cumin into meals to reduce systemic inflammation.",
          "Avoid cold, raw, and processed foods that may exacerbate Vata and Kapha imbalances, potentially intensifying symptoms.",
          "Maintain hydration with warm water or herbal teas to support tissue moisture and overall detoxification.",
        ],
        lifestylemodification: [
          "Engage in gentle physical activities, such as yoga and walking, to promote circulation and balance without causing undue strain.",
          "Practice stress-reducing techniques like meditation and deep breathing exercises, as stress can further disturb doshic balance and trigger vestibular symptoms.",
          "Ensure a regular sleep schedule and ample rest to support the body’s natural healing processes.",
          "Avoid sudden head movements and rapid changes in posture, which may aggravate symptoms, and consider balance-enhancing exercises under professional guidance.",
        ],
      },
      conclusion: [
        "This comprehensive Ayurvedic approach, integrating tailored Panchakarma therapies with mindful dietary and lifestyle adjustments, aims to reduce inflammation, restore inner ear equilibrium, and improve overall quality of life for those experiencing vestibulitis.",
      ],
    },
    {
      id: "meniere-disease",
      title: "Meniere’s Disease",
      description:
        "Meniere’s Disease is a chronic disorder of the inner ear characterized by recurring episodes of vertigo, fluctuating hearing loss, tinnitus (ringing in the ear), and a sensation of fullness or pressure in the affected ear. These episodes can last from minutes to several hours, often accompanied by nausea and imbalance. The underlying cause is believed to be an abnormal accumulation of endolymphatic fluid in the inner ear, which disrupts the normal balance and auditory functions.",
      ayurvedicDiscription: [
        "In Ayurveda, Meniere’s Disease is often linked to an imbalance in the Vata and Kapha doshas, leading to disturbances in the body’s fluid dynamics and nerve function. The Ayurvedic management focuses on detoxification, dosha balancing, and rejuvenation to help regulate inner ear fluids and support nerve health.",
      ],
      ayurvedicApproach: [
        "Nasya Therapy – The gentle administration of medicated herbal oils through the nostrils aims to clear and balance the channels connected to the inner ear, thereby reducing symptoms of vertigo and imbalance.",
        "Shirodhara – This therapy involves a continuous, warm stream of herbal oil poured over the forehead, which calms the nervous system, stabilizes Vata, and alleviates anxiety and vertigo.",
        "Abhyanga (Therapeutic Oil Massage) – Targeted head, neck, and ear massages with warm, herbal oils improve circulation, relieve muscle tension, and support the repair of the inner ear structures.",
        "Herbal Formulations – Specific herbs like ashwagandha, brahmi, turmeric, and ginger are used for their anti-inflammatory and neuroprotective properties to help regulate fluid balance and enhance nerve function.",
        "Panchakarma Detoxification – Procedures such as Swedana (herbal steam therapy) and mild Virechana (therapeutic purgation) may be recommended to eliminate toxins (ama) and restore overall doshic harmony.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Managing Meniere’s Disease effectively also involves supportive dietary and lifestyle practices to reduce triggers and promote overall well-being.",
        ],
        dietaryguidelines: [
          "Favor warm, light, and easily digestible meals that do not contribute to toxin buildup.",
          "Incorporate anti-inflammatory spices such as turmeric, ginger, and cumin to aid digestion and reduce inflammation.",
          "Avoid excessive salt, processed foods, and caffeine, as these can promote fluid retention and potentially trigger episodes.",
          "Maintain proper hydration with warm water and herbal teas to support fluid balance and detoxification.",
        ],
        lifestylemodification: [
          "Engage in regular, gentle physical activities like yoga, walking, or tai chi to enhance circulation and maintain balance without overexertion.",
          "Practice stress management techniques such as meditation and deep breathing exercises to calm the nervous system and stabilize Vata.",
          "Establish a consistent sleep routine and incorporate relaxation practices to promote natural healing and reduce the frequency of episodes.",
          "Avoid sudden head movements and rapid changes in posture; consider balance-enhancing exercises under professional guidance to mitigate vertigo.",
        ],
      },
      conclusion: [
        "This integrative Ayurvedic approach, combining targeted Panchakarma therapies with mindful dietary and lifestyle modifications, is designed to manage the symptoms of Meniere’s Disease, restore inner ear balance, and improve overall quality of life.",
      ],
    },
    {
      id: "stuttering",
      title: "Stuttering",
      description:
        "Stuttering, also known as stammering, is a speech disorder characterized by interruptions in the flow of speech. These interruptions can include repeating sounds, syllables, or words, as well as prolonged pauses that disrupt fluent communication. Often, individuals who stutter experience increased anxiety or self-consciousness during speaking, which can further impact their ability to communicate effectively. The condition may have neurological, psychological, or even genetic components and can affect both children and adults.",
      ayurvedicDiscription: [
        "In Ayurveda, stuttering is often seen as a manifestation of imbalances in the Vata dosha—particularly Vyana Vata, which governs nerve impulses and communication. Aggravation of Vata may lead to disturbances in the smooth transmission of speech signals. The Ayurvedic management focuses on calming the nervous system, reducing stress, and restoring doshic balance through personalized therapies.",
      ],
      ayurvedicApproach: [
        "Nasya Therapy – The gentle administration of medicated herbal oils through the nostrils helps clear the channels and calm the nervous system, potentially improving speech clarity.",
        "Abhyanga (Therapeutic Oil Massage) – A focused head, neck, and shoulder massage with warm, herbal oils soothes nerve pathways and balances Vata, promoting overall relaxation.",
        "Shirodhara – This therapy involves a steady, gentle flow of warm herbal oil on the forehead, which is believed to calm the mind, reduce anxiety, and support smoother communication.",
        "Herbal Formulations – Adaptogenic and nervine herbs such as Brahmi, Ashwagandha, and Jatamansi are used to strengthen the nervous system and improve cognitive function, thereby assisting in managing stuttering.",
        "Panchakarma Detoxification – Mild detoxification procedures help eliminate accumulated toxins (ama) and restore systemic balance, which is essential for optimal neural functioning.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Adopting supportive dietary and lifestyle practices can help manage stuttering by nurturing the nervous system and reducing anxiety.",
        ],
        dietaryguidelines: [
          "Favor warm, freshly prepared, and easily digestible foods such as whole grains, stewed vegetables, and herbal broths to support overall metabolic balance.",
          "Include brain-boosting and anti-inflammatory spices like turmeric, ginger, and cumin, which aid in digestion and help reduce stress.",
          "Incorporate adaptogenic herbs (e.g., ashwagandha and brahmi) either in food or as supplements to support nervous system health.",
          "Avoid stimulants like caffeine and processed foods that can exacerbate nervous tension and anxiety.",
          "Stay well-hydrated with warm water and herbal teas to maintain cellular hydration and balance.",
        ],
        lifestylemodification: [
          "Practice stress-reducing techniques such as meditation, deep breathing exercises (pranayama), or yoga to calm the mind and enhance focus.",
          "Engage in regular physical activity to improve circulation and reduce overall anxiety.",
          "Establish a consistent daily routine with ample rest and quality sleep to support neurological health.",
          "Consider speech therapy or vocal exercises to build confidence and improve communication skills, complementing the holistic approach of Ayurvedic treatments.",
        ],
      },
      conclusion: [
        "This comprehensive Ayurvedic strategy, integrating targeted Panchakarma therapies with mindful dietary and lifestyle adjustments, is designed to reduce anxiety, balance the nervous system, and support smoother, more confident speech.",
      ],
    },
    {
      id: "osteomyelitis",
      title: "Osteomyelitis",
      description:
        "Osteomyelitis is a serious bone infection that involves inflammation of the bone or bone marrow, often resulting from a bacterial invasion following trauma, surgery, or a spread from nearby infections. The condition can manifest as acute or chronic, presenting with symptoms like persistent bone pain, fever, swelling, and sometimes reduced mobility. If left untreated, osteomyelitis may lead to bone destruction, necrosis, and long-term disability.",
      ayurvedicDiscription: [
        "In Ayurveda, osteomyelitis is seen as a disturbance primarily involving the Vata dosha—with contributions from Pitta due to inflammatory processes—and an accumulation of Ama (toxins) within the Asthi dhatu (bone tissue). The holistic Ayurvedic approach focuses on detoxification, reducing inflammation, and rejuvenating the affected tissues through individualized therapies.",
      ],
      ayurvedicApproach: [
        "Virechana (Therapeutic Purgation) – This gentle purgation therapy helps eliminate excess Pitta and toxins, reducing systemic inflammation.",
        "Basti (Medicated Enema) – Specifically targeted to balance aggravated Vata, Basti therapies support the healing and regeneration of bone tissues.",
        "Abhyanga & Swedana (Therapeutic Oil Massage & Herbal Steam) – These therapies improve circulation, ease muscle tension, and facilitate the removal of toxins, creating a favorable environment for tissue repair.",
        "Herbal Formulations – Herbs such as Guduchi, Ashwagandha, Guggulu, and Shilajit are commonly employed for their anti-inflammatory, immunomodulatory, and rejuvenative properties, which can support bone health and recovery.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Supporting the healing process in osteomyelitis through diet and lifestyle is essential in Ayurveda.",
        ],
        dietaryguidelines: [
          "Emphasize warm, nourishing, and easily digestible foods such as well-cooked grains, steamed vegetables, and bone broths to reduce Ama and balance Vata.",
          "Incorporate anti-inflammatory spices like turmeric, ginger, and cumin to aid digestion and minimize inflammation.",
          "Include mineral-rich foods—particularly those high in calcium and magnesium—to strengthen bone structure.",
          "Avoid cold, raw, and processed foods that can aggravate Vata and contribute to toxin buildup.",
          "Maintain adequate hydration with warm water or herbal teas to support detoxification and overall health.",
        ],
        lifestylemodification: [
          "Engage in gentle physical activities and yoga practices to improve circulation and enhance overall well-being without overstressing the affected area.",
          "Practice stress management techniques such as meditation and deep breathing exercises to support the body’s natural healing processes.",
          "Ensure sufficient rest and maintain a regular sleep schedule to promote tissue repair and systemic detoxification.",
          "Follow a structured routine that minimizes physical strain on the affected bones while encouraging gradual rehabilitation.",
        ],
      },
      conclusion: [
        "This comprehensive Ayurvedic strategy—integrating targeted Panchakarma therapies with supportive dietary and lifestyle practices—aims to reduce inflammation, detoxify the body, and facilitate the natural healing and regeneration of bone tissues affected by osteomyelitis.",
      ],
    },
    {
      id: "parotitis",
      title: "Parotitis",
      description:
        "Parotitis is the inflammation of the parotid glands, which are the largest salivary glands located on either side of the face, just in front of the ears. This condition can be acute or chronic and is often characterized by painful swelling in the affected area, tenderness, and sometimes fever. Infections (such as mumps or bacterial infections), blockages, or autoimmune conditions can trigger parotitis, leading to symptoms that may include difficulty chewing, dry mouth, and general discomfort.",
      ayurvedicDiscription: [
        "In Ayurveda, parotitis is understood as an imbalance primarily involving Kapha dosha with a contribution from Vata, leading to the accumulation of toxins (ama) in the glandular tissues. The Ayurvedic management aims to reduce inflammation, eliminate toxins, and restore doshic balance.",
      ],
      ayurvedicApproach: [
        "Local Lepa (Herbal Poultice) – Application of anti-inflammatory herbal pastes on the affected area to help reduce swelling and alleviate pain.",
        "Nasya Therapy – The gentle administration of medicated herbal oils through the nostrils can aid in balancing the head and neck region, indirectly supporting the health of the salivary glands.",
        "Abhyanga (Therapeutic Oil Massage) – A focused massage with warm, herbal oils around the head, neck, and jawline improves circulation, reduces stiffness, and supports detoxification.",
        "Panchakarma Detoxification – Customized detox treatments such as mild Virechana (therapeutic purgation) or Swedana (herbal steam therapy) help expel ama and restore overall doshic harmony, promoting tissue healing.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Diet and lifestyle modifications are essential in managing parotitis and supporting the healing process.",
        ],
        dietaryguidelines: [
          "Favor warm, light, and easily digestible foods such as soups, stewed vegetables, and herbal broths that help reduce Kapha accumulation.",
          "Incorporate anti-inflammatory spices like turmeric, ginger, and cumin into meals to boost digestion and minimize inflammation.",
          "Avoid heavy, cold, and processed foods that can increase mucus production and aggravate glandular inflammation.",
          "Maintain adequate hydration with warm water and herbal teas to promote detoxification and support overall gland function.",
        ],
        lifestylemodification: [
          "Engage in gentle physical activity and relaxation practices like yoga and meditation to reduce stress and maintain doshic balance.",
          "Ensure sufficient rest and maintain a consistent sleep schedule to support the body’s natural healing processes.",
          "Use warm compresses on the affected area to alleviate discomfort and promote local circulation.",
          "Avoid excessive exposure to cold environments and limit strenuous activities that may stress the inflamed glands.",
        ],
      },
      conclusion: [
        "This comprehensive Ayurvedic approach, integrating targeted Panchakarma therapies with mindful dietary and lifestyle practices, aims to reduce inflammation, detoxify the body, and restore the natural function of the parotid glands, ultimately improving overall well-being.",
      ],
    },
    {
      id: "ototoxicity",
      title: "Ototoxicity",
      description:
        "Ototoxicity refers to the damage to the inner ear—particularly the cochlea and vestibular apparatus—caused by exposure to certain drugs or chemicals. This damage can lead to symptoms such as hearing loss, tinnitus (ringing in the ears), imbalance, or vertigo. Ototoxic effects may be acute or develop over time, and they often occur as a side effect of medications like aminoglycoside antibiotics, certain chemotherapy agents, or high doses of diuretics.",
      ayurvedicDiscription: [
        "In Ayurveda, ototoxicity is seen as an imbalance primarily of the Vata dosha, which governs nerve impulses and sensory functions, with a potential contribution from Pitta and Kapha doshas due to inflammatory responses and toxin (ama) accumulation. The Ayurvedic strategy aims to detoxify the body, restore doshic balance, and rejuvenate the nervous and auditory systems.",
      ],
      ayurvedicApproach: [
        "Nasya Therapy – The gentle instillation of medicated herbal oils through the nostrils helps clear the pathways connected to the ear, thereby supporting neural function and reducing inflammation.",
        "Abhyanga (Therapeutic Oil Massage) – Targeted head and neck massages with warm, herbal oils enhance blood circulation, soothe nerve pathways, and promote the removal of accumulated toxins.",
        "Shirodhara – A steady flow of warm herbal oil on the forehead calms the nervous system, stabilizes Vata, and supports overall sensory health.",
        "Herbal Formulations – Adaptogenic and antioxidant herbs such as Brahmi, Ashwagandha, and Triphala are utilized for their neuroprotective and rejuvenating properties, which may help counteract the degenerative effects of ototoxic agents.",
        "Panchakarma Detoxification – Tailored detox procedures, like mild Virechana or Swedana (herbal steam therapy), aid in eliminating toxins (ama) and restoring systemic balance, further supporting the regeneration of the inner ear structures.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Supportive dietary and lifestyle modifications can help reduce the risk of further damage and promote recovery of auditory functions.",
        ],
        dietaryguidelines: [
          "Emphasize warm, nutrient-rich, and easily digestible meals such as whole grains, fresh vegetables, and herbal broths that help balance Vata and reduce ama.",
          "Incorporate anti-inflammatory spices like turmeric, ginger, and cumin to support digestion and reduce systemic inflammation.",
          "Include foods high in antioxidants (such as green leafy vegetables and fruits) to combat oxidative stress that may contribute to nerve damage.",
          "Avoid cold, processed, or heavy foods that can aggravate Vata and contribute to toxin buildup.",
          "Maintain proper hydration with warm water and herbal teas to facilitate detoxification and support cellular health.",
        ],
        lifestylemodification: [
          "Engage in regular, gentle physical activities like yoga, brisk walking, or tai chi to improve circulation and maintain overall balance without overstressing the system.",
          "Practice stress-reducing techniques such as meditation, deep breathing exercises (pranayama), or mindfulness to help stabilize Vata and support nervous system recovery.",
          "Ensure a consistent sleep routine with ample rest, as quality sleep is crucial for the body's natural healing and regeneration processes.",
          "Limit exposure to loud noises and other environmental stressors that could exacerbate auditory damage, while also reviewing any medications with a healthcare provider to minimize further ototoxic risk.",
        ],
      },
      conclusion: [
        "This holistic Ayurvedic approach, integrating targeted Panchakarma therapies with mindful dietary and lifestyle modifications, is designed to support neural health, detoxify the body, and potentially mitigate the effects of ototoxicity, thereby promoting better auditory and overall well-being.",
      ],
    },
    {
      id: "otalgia",
      title: "Otalgia",
      description:
        "Otalgia refers to ear pain, which can originate from within the ear itself (primary otalgia) or be referred from surrounding structures such as the throat, jaw, or even the sinuses (referred otalgia). This condition can result from various causes, including infections, inflammation, trauma, or even dental issues. The pain may range from mild discomfort to severe, debilitating sensations, often affecting daily activities and overall well-being.",
      ayurvedicDiscription: [
        "In Ayurveda, otalgia is typically viewed as a disturbance primarily involving an imbalance in the Vata dosha, often compounded by aggravated Pitta due to inflammatory processes. The resulting imbalance leads to the accumulation of toxins (ama) and impaired nerve function in the ear region. Ayurvedic management focuses on reducing inflammation, soothing nerve pathways, and restoring doshic balance through personalized therapies.",
      ],
      ayurvedicApproach: [
        "Nasya Therapy – Administering medicated herbal oils through the nostrils can help clear the channels associated with ear function, reducing inflammation and alleviating pain.",
        "Abhyanga (Therapeutic Oil Massage) – A targeted massage of the head, neck, and shoulder region with warm, herbal oils enhances circulation, soothes nerve irritability, and assists in the removal of ama.",
        "Shirodhara – The continuous, gentle flow of warm herbal oil on the forehead calms the nervous system, balances Vata, and reduces stress, indirectly helping to relieve ear pain.",
        "Herbal Formulations – Anti-inflammatory and analgesic herbs such as turmeric, ginger, and Brahmi are often incorporated in internal and external applications to combat inflammation and support nerve health.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Integrating dietary and lifestyle modifications is essential in managing otalgia and supporting the healing process.",
        ],
        dietaryguidelines: [
          "Emphasize warm, light, and easily digestible meals such as soups, stewed vegetables, and herbal broths to reduce the accumulation of ama.",
          "Include anti-inflammatory spices like turmeric, ginger, and cumin in your meals to support digestion and reduce systemic inflammation.",
          "Avoid cold, heavy, or processed foods that can aggravate Vata and contribute to toxin buildup.",
          "Maintain proper hydration with warm water and herbal teas to support detoxification and overall tissue health.",
        ],
        lifestylemodification: [
          "Practice stress-reducing techniques such as meditation, deep breathing exercises (pranayama), or yoga to stabilize Vata and promote overall well-being.",
          "Ensure adequate rest and maintain a consistent sleep schedule to facilitate the body's natural healing processes.",
          "Use warm compresses on the affected ear area to soothe pain and enhance local circulation.",
          "Minimize exposure to loud noises or situations that could exacerbate ear discomfort, and follow up with healthcare providers as needed for ongoing management.",
        ],
      },
      conclusion: [
        "This holistic Ayurvedic strategy, combining targeted Panchakarma therapies with mindful dietary and lifestyle adjustments, aims to alleviate ear pain, restore doshic balance, and enhance overall ear health and comfort.",
      ],
    },
    {
      id: "dns",
      title: "Deviated Nasal Septum (DNS)",
      description:
        "A Deviated Nasal Septum (DNS) is a condition where the nasal septum—the cartilage and bone that divide the nasal cavity—is displaced or off-center. This deviation can obstruct airflow, leading to chronic nasal congestion, breathing difficulties, recurrent sinus infections, and even snoring. The severity of symptoms varies, and while some individuals may remain asymptomatic, others experience significant discomfort affecting their quality of life.",
      ayurvedicDiscription: [
        "In Ayurveda, DNS is understood as an imbalance primarily involving the Vata dosha—with contributions from Kapha—which disrupts the natural alignment and function of the nasal passages. The Ayurvedic management strategy aims to restore balance, improve nasal airflow, and reduce chronic inflammation through detoxification and rejuvenation therapies.",
      ],
      ayurvedicApproach: [
        "Nasya Therapy – The targeted application of medicated herbal oils through the nostrils helps lubricate and clear the nasal passages, thereby reducing congestion and inflammation.",
        "Abhyanga (Therapeutic Oil Massage) – Gentle facial and head massage with warm, herbal oils improves circulation, eases muscular tension around the nasal area, and supports overall doshic balance.",
        "Herbal Steam Inhalation (Swedana) – Inhaling steam infused with anti-inflammatory herbs like tulsi or ginger can help open the nasal passages and reduce mucus accumulation.",
        "Panchakarma Detoxification – Customized detox therapies, such as mild Virechana, help eliminate toxins (ama) from the body, promoting a healthier internal environment that supports tissue realignment and healing.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Supporting the healing process and managing DNS from an Ayurvedic perspective also involves mindful dietary and lifestyle modifications.",
        ],
        dietaryguidelines: [
          "Emphasize warm, light, and easily digestible foods such as soups, stewed vegetables, and herbal broths to help reduce Kapha accumulation and prevent further blockage.",
          "Incorporate anti-inflammatory spices like turmeric, ginger, and cumin to promote proper digestion and reduce systemic inflammation.",
          "Avoid cold, heavy, and processed foods, as well as excess dairy products, which may contribute to mucus production and aggravate nasal congestion.",
          "Maintain proper hydration with warm water and herbal teas to help thin secretions and support overall detoxification.",
        ],
        lifestylemodification: [
          "Practice breathing exercises (pranayama) and yoga to strengthen the respiratory system and improve nasal airflow.",
          "Engage in regular physical activity to boost circulation and support overall doshic balance without straining the body.",
          "Maintain a consistent sleep schedule and ensure adequate rest, as proper sleep is essential for tissue repair and systemic balance.",
          "Reduce exposure to environmental allergens and pollutants that can trigger inflammation and further disrupt nasal function.",
        ],
      },
      conclusion: [
        "This holistic Ayurvedic approach, combining targeted Panchakarma therapies with supportive dietary and lifestyle modifications, aims to improve nasal airflow, reduce chronic inflammation, and enhance overall well-being for individuals with a deviated nasal septum.",
      ],
    },
    {
      id: "leukoplakia",
      title: "Leukoplakia",
      description:
        "Leukoplakia is a condition characterized by the appearance of white patches or plaques on the mucous membranes, most commonly in the oral cavity. These lesions are often considered potentially premalignant, meaning that over time they might develop into more serious conditions if not managed appropriately. Chronic irritation from factors such as tobacco use, alcohol, or prolonged friction can contribute to the formation of these patches.",
      ayurvedicDiscription: [
        "In Ayurveda, leukoplakia is understood as a manifestation of imbalanced doshas—primarily an aggravation of Kapha and Pitta—which leads to the accumulation of toxins (ama) and abnormal tissue changes. The treatment strategy is centered on detoxification, dosha balancing, and rejuvenation of the affected tissues.",
      ],
      ayurvedicApproach: [
        "Virechana (Therapeutic Purgation) – To help eliminate excess Pitta and toxins from the body, thereby reducing systemic inflammation.",
        "Cleansing Therapies – Gentle detoxification procedures help clear ama, which is believed to contribute to the abnormal cellular changes.",
        "Herbal Formulations – Use of anti-inflammatory and detoxifying herbs such as turmeric, neem, and Triphala to promote healthy tissue turnover and reduce inflammation.",
        "Localized Applications (Lepa) – Herbal pastes applied directly to the affected areas can soothe irritation and support the normalization of tissue structure.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Adopting supportive dietary and lifestyle practices is essential to manage leukoplakia and prevent further irritation.",
        ],
        dietaryguidelines: [
          "Focus on fresh, whole foods like fruits, vegetables, and whole grains that support detoxification and cellular health.",
          "Incorporate anti-inflammatory spices such as turmeric, ginger, and cumin to help reduce systemic inflammation.",
          "Avoid irritants including tobacco, alcohol, and processed foods, as well as very hot or spicy dishes that may further irritate the mucous membranes.",
          "Ensure adequate hydration with warm water and herbal teas to support overall detoxification.",
        ],
        lifestylemodification: [
          "Practice stress management techniques such as yoga, meditation, or deep breathing exercises, as stress can exacerbate doshic imbalances.",
          "Maintain good oral hygiene, including gentle brushing and practices like oil pulling, to minimize local toxin buildup.",
          "Eliminate or reduce exposure to known irritants (e.g., tobacco and betel nut) to prevent additional cellular stress and irritation.",
        ],
      },
      conclusion: [
        "This holistic Ayurvedic approach, integrating targeted Panchakarma therapies with mindful dietary and lifestyle modifications, aims to restore doshic balance, promote healthy tissue regeneration, and reduce the potential progression of leukoplakia.",
      ],
    },
    {
      id: "hearing-loss",
      title: "Hearing Loss",
      description:
        "Hearing loss is a reduction in the ability to perceive sounds, which can affect one or both ears. It may develop gradually over time due to aging (presbycusis), prolonged exposure to loud noises, infections, genetic factors, or as a side effect of certain medications. The condition can range from mild difficulties in understanding speech, particularly in noisy environments, to severe impairments that affect daily communication and overall quality of life.",
      ayurvedicDiscription: [
        "In Ayurveda, hearing loss is often associated with an imbalance in the Vata dosha, which governs nerve impulses and sensory functions, and may also involve disturbances in Kapha. This imbalance can lead to the accumulation of toxins (ama) and impaired functioning of the auditory system. Ayurvedic management focuses on detoxification, neural rejuvenation, and restoring doshic balance through personalized therapies.",
      ],
      ayurvedicApproach: [
        "Nasya Therapy – The gentle administration of medicated herbal oils through the nostrils helps clear the channels connected to the ear, supporting improved neural transmission and potentially enhancing hearing.",
        "Abhyanga (Therapeutic Oil Massage) – A focused head, neck, and ear massage with warm, herbal oils boosts blood circulation, relaxes nerve pathways, and promotes overall auditory system health.",
        "Shirodhara – A steady flow of warm herbal oil on the forehead calms the nervous system, stabilizes Vata, and supports the delicate structures of the inner ear.",
        "Herbal Formulations – Adaptogenic and neuroprotective herbs such as Brahmi, Ashwagandha, and Shankhapushpi are used to nourish nerve tissues and support auditory function.",
        "Panchakarma Detoxification – Customized detox procedures like mild Virechana (therapeutic purgation) and Swedana (herbal steam therapy) help eliminate toxins and restore systemic balance, creating a favorable environment for healing.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Supportive dietary and lifestyle modifications play a crucial role in managing hearing loss and promoting auditory health.",
        ],
        dietaryguidelines: [
          "Emphasize warm, easily digestible meals such as whole grains, steamed vegetables, and herbal soups that reduce ama buildup and balance Vata.",
          "Incorporate spices like turmeric, ginger, and cumin to boost circulation and protect neural tissues.",
          "Include fresh fruits and leafy greens to combat oxidative stress and support overall nerve health.",
          "Maintain proper hydration with warm water and herbal teas to aid detoxification and cellular repair.",
          "Limit processed foods, cold and damp items, and excessive caffeine that can aggravate doshic imbalances.",
        ],
        lifestylemodification: [
          "Engage in regular, gentle exercise such as yoga, walking, or tai chi to enhance blood circulation and support nervous system function.",
          "Practice meditation, deep breathing exercises (pranayama), and mindfulness to reduce stress and stabilize Vata.",
          "Ensure a consistent sleep schedule and adequate rest to facilitate the body’s natural repair processes.",
          "Minimize exposure to loud noises and use hearing protection when necessary to prevent further damage.",
          "Consider routine auditory evaluations and follow professional guidance for auditory exercises or therapies to support rehabilitation.",
        ],
      },
      conclusion: [
        "This integrative Ayurvedic strategy, combining targeted Panchakarma therapies with mindful dietary and lifestyle modifications, is designed to restore doshic balance, promote nerve regeneration, and enhance overall hearing health.",
      ],
    },
    {
      id: "epistaxis",
      title: "Epistaxis",
      description:
        "Epistaxis is the medical term for a nosebleed, which refers to bleeding from the nasal cavity. It can range from a minor, self-limiting event to more severe episodes. Causes may include local trauma, dryness, inflammation, infections, or systemic issues such as high blood pressure and clotting disorders. While most nosebleeds are anterior and originate from the front part of the nasal septum, others may be posterior and more challenging to manage.",
      ayurvedicDiscription: [
        "In Ayurveda, epistaxis is often viewed as an imbalance predominantly involving aggravated Pitta dosha, with a contribution from Vata. Excess Pitta leads to increased heat and inflammation, which may cause the delicate nasal tissues to rupture, while Vata may contribute to dryness and instability in the tissue. The Ayurvedic management focuses on restoring doshic balance and strengthening the nasal mucosa through detoxification and targeted therapies.",
      ],
      ayurvedicApproach: [
        "Nasya Therapy – The application of medicated herbal oils or ghee through the nostrils helps lubricate the nasal passages, cool down the aggravated Pitta, and promote healing of the nasal tissues.",
        "Local Herbal Applications (Lepa) – Cold herbal pastes applied externally on the nasal bridge can help constrict blood vessels, reduce inflammation, and manage bleeding.",
        "Mild Panchakarma Detoxification – Once the acute phase is controlled, gentle detoxification procedures such as a mild Virechana may be recommended to eliminate accumulated toxins (ama) and balance the doshas, thus preventing recurrence.",
        "Herbal Formulations – Herbs with cooling and anti-inflammatory properties, such as coriander, mint, and licorice, are often used internally to pacify Pitta and support the integrity of the nasal mucosa.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Dietary and lifestyle modifications are essential to prevent further episodes of epistaxis and support overall nasal health.",
        ],
        dietaryguidelines: [
          "Favor cooling, light, and easily digestible foods that help reduce Pitta. Incorporate fresh fruits, vegetables, and whole grains that are rich in antioxidants.",
          "Include anti-inflammatory spices in moderation, such as fennel, coriander, and mint, while avoiding excessively spicy, hot, or acidic foods that can aggravate Pitta.",
          "Maintain proper hydration with warm or room-temperature water and herbal teas to keep the nasal mucosa well-lubricated.",
          "Limit caffeine and alcohol consumption, as these can contribute to dryness and increase systemic heat.",
        ],
        lifestylemodification: [
          "Avoid exposure to extreme temperatures, strong winds, or dusty environments that may irritate the nasal passages.",
          "Practice stress management techniques such as meditation, deep breathing exercises (pranayama), or yoga to stabilize Vata and reduce overall systemic inflammation.",
          "Ensure adequate sleep and rest to support the body’s natural healing processes.",
          "Protect the nose from trauma by being mindful during physical activities and by keeping the nasal area clean and well-moisturized with natural oils as advised.",
        ],
      },
      conclusion: [
        "This holistic Ayurvedic approach, integrating targeted Panchakarma therapies with supportive dietary and lifestyle modifications, aims to reduce inflammation, restore doshic balance, and strengthen the nasal tissues, thereby minimizing the occurrence of epistaxis and enhancing overall well-being.",
      ],
    },
    {
      id: "bells-palsy",
      title: "Bell’s Palsy",
      description:
        "Bell’s Palsy is a neurological condition characterized by the sudden onset of unilateral facial paralysis or weakness due to inflammation or compression of the facial nerve (cranial nerve VII). This condition can result in drooping of one side of the face, difficulty in closing the eye, altered facial expressions, and sometimes changes in taste perception. Although the exact cause is not fully understood, it is often linked to viral infections, immune responses, or nerve inflammation, and most cases tend to resolve over time with proper management.",
      ayurvedicDiscription: [
        "In Ayurveda, Bell’s Palsy is generally seen as a manifestation of aggravated Vata dosha, which governs the nervous system and movement. The imbalance disrupts the normal flow of nerve impulses, leading to facial muscle weakness. Ayurvedic management aims to restore doshic balance, reduce inflammation, and rejuvenate nerve tissues through targeted therapies.",
      ],
      ayurvedicApproach: [
        "Nasya Therapy – The administration of medicated herbal oils through the nostrils helps clear and lubricate the channels connected to the facial region, supporting nerve function and reducing Vata imbalance.",
        "Abhyanga (Therapeutic Oil Massage) – A gentle massage of the head, face, and neck with warm, herbal oils (often enriched with herbs like Brahmi and Ashwagandha) promotes improved blood circulation and nerve nourishment, aiding in recovery.",
        "Shirodhara – A continuous, gentle flow of warm herbal oil on the forehead calms the nervous system, reduces stress, and helps stabilize Vata dosha.",
        "Herbal Formulations – Adaptogenic and neuroprotective herbs such as Brahmi, Ashwagandha, and Jatamansi are incorporated to strengthen the nervous system, reduce inflammation, and support neural regeneration.",
        "Panchakarma Detoxification – Customized detox therapies, like mild Virechana or Swedana, assist in eliminating accumulated toxins (ama) and balancing the doshas, thus creating an optimal internal environment for nerve repair.",
      ],
      dietRecommendations: {
        dietdiscription: [
          "Supportive dietary and lifestyle modifications are essential for enhancing recovery and maintaining overall nerve health in Bell’s Palsy.",
        ],
        dietaryguidelines: [
          "Nourishing Foods – Emphasize warm, easily digestible meals such as stewed vegetables, whole grains, and herbal soups to support metabolism and reduce Vata aggravation.",
          "Anti-inflammatory Spices – Incorporate spices like turmeric, ginger, and cumin, which help reduce systemic inflammation and promote circulation.",
          "Hydration – Ensure adequate hydration with warm water and herbal teas (such as ginger or tulsi tea) to assist in detoxification and maintain tissue moisture.",
          "Avoid – Limit intake of cold, raw, or overly processed foods that may further disturb Vata and impede the healing process.",
        ],
        lifestylemodification: [
          "Stress Management – Practice calming techniques like meditation, deep breathing exercises (pranayama), and gentle yoga to reduce stress and support nervous system balance.",
          "Rest and Sleep – Maintain a regular sleep schedule with ample rest, as restorative sleep is critical for tissue repair and neural recovery.",
          "Facial Exercises – Engage in specific facial muscle exercises under professional guidance to help stimulate nerve function and improve muscle tone.",
          "Routine and Care – Adopt a consistent daily routine that supports relaxation and avoids sudden or strenuous activities that may strain the affected facial muscles.",
        ],
      },
      conclusion: [
        "This holistic Ayurvedic approach, combining targeted Panchakarma therapies with mindful dietary and lifestyle modifications, aims to alleviate nerve inflammation, restore doshic balance, and promote the natural healing process for individuals experiencing Bell’s Palsy.",
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
        <h1 className="text-[#394E29] font-bold text-3xl md:text-4xl lg:text-5xl max-[450px]:text-xl px-4 text-center">
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

        <p className="text-[#757575] text-[32px] font-semibold mt-10 mb-6">
          Ayurvedic Approach & Panchakarma Treatments
        </p>
        <p className="text-[#757575] mt-6 mb-4">
          {disorder.ayurvedicDiscription}
        </p>
        <ul className="list-disc list-inside text-[20px] text-[#757575] ">
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
        <p className="text-[#757575]  mt-4">
          {disorder.dietRecommendations.dietdiscription}
        </p>
        <p className="text-[#757575] mt-5 font-bold">Diet:</p>
        <ul className="list-disc list-inside ml-3 text-[20px] mt-4 text-[#757575]">
          {disorder.dietRecommendations.dietaryguidelines.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="text-[#757575] mt-10 font-bold">Lifestyle:</p>
        <ul className="list-disc list-inside ml-3 mt-4 text-[20px] text-[#757575]">
          {disorder.dietRecommendations.lifestylemodification.map(
            (item, index) => (
              <li key={index}>{item}</li>
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

export default EntDetails;
