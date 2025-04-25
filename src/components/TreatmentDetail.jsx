import React from "react";
import { useParams } from "react-router-dom";

const TreatmentDetail = () => {
  const { treatmentId } = useParams();

  // Convert treatmentId to lowercase to match the keys in treatmentsContent
  const treatmentIdLowercase = treatmentId.toLowerCase().replace(/\s+/g, "-");

  const treatmentsContent = {
    abhyanga: {
      name: "Abhyanga",
      title: "Understanding Abhyanga",
      description1: `Abhyanga is a traditional Ayurvedic therapy that goes beyond a simple massage. Rooted in ancient wisdom, it is designed to balance the body, mind, and soul by harmonizing the three doshas—Vata, Pitta, and Kapha. This therapy uses warm herbal oils to rejuvenate the body, detoxify the system, and restore overall well-being.`,
      description2: `Ayurveda teaches that the body thrives in harmony with nature. Abhyanga aligns with this principle by balancing the doshas and eliminating toxins or "Ama" that accumulate due to poor digestion, stress, or environmental factors. By addressing imbalances, Abhyanga promotes physical and mental wellness.`,
      benefits: [
        "Detoxification and Cleansing: The herbal oils penetrate deep into tissues, loosening toxins and impurities for natural elimination.",
        "Improved Circulation: Stimulates blood flow, delivering oxygen and nutrients to cells while reducing muscle stiffness and joint pain.",
        "Enhanced Skin Health: Hydrates and nourishes the skin, leaving it soft, supple, and radiant.",
        "Stress Relief and Mental Clarity: Calms the nervous system, reducing stress, anxiety, and fatigue while improving focus.",
        "Better Sleep Quality: Promotes restful sleep by balancing energy and calming the body.",
        "Boosted Immunity: Supports the lymphatic system, aiding in toxin removal and infection prevention.",
      ],
      process: [
        "Selecting the Right Oil:",
        "  • Vata Dosha: Warm, heavy oils like sesame or almond oil.",
        "  • Pitta Dosha: Cooling oils such as coconut or sunflower oil.",
        "  • Kapha Dosha: Light oils like mustard or olive oil.",
        "Massage Technique:",
        "  • Performed in a warm, serene environment, the therapy involves applying warm oil with long, rhythmic strokes, focusing on nerve endings in the scalp, hands, and feet.",
        "  • The process lasts 30 to 60 minutes, followed by a short rest and a warm bath or shower.",
      ],
      indications: [
        "Chronic fatigue and low energy levels",
        "Muscle stiffness and joint pain",
        "Poor circulation and cold extremities",
        "Stress, anxiety, and sleep disorders",
        "Dry skin and premature aging",
        "Weakened immune system",
        "Vata imbalance symptoms",
        "Post-exercise recovery",
        "General wellness maintenance"
      ],
      whyChooseUs: `Our expert therapists are trained in traditional Ayurvedic techniques, ensuring a personalized experience tailored to your unique dosha and wellness needs. Step into our serene environment and experience the healing power of Ayurveda with Abhyanga.`,
    },
    "agni-karma": {
      name: "Agni Karma",
      title: "Understanding Agni Karma",
      description1: `Agni Karma is a therapeutic Ayurvedic treatment used to address conditions related to pain, inflammation, and stagnation in the body. It involves the application of medicated, heated instruments to specific points of the body to stimulate healing. This treatment is ideal for individuals dealing with chronic pain, arthritis, or musculoskeletal disorders.`,
      description2: `Agni Karma works by improving circulation and balancing the body's energies.`,
      benefits: [
        "Pain Relief and Healing: The heat application directly targets areas of pain, reducing inflammation and promoting healing by enhancing blood flow.",
        "Muscle Relaxation: Helps relieve stiffness and muscle tension, making it effective for conditions like arthritis and muscle spasms.",
        "Detoxification: By stimulating the tissues and joints, Agni Karma encourages the release of toxins from the body, supporting detoxification processes.",
      ],
      process: [
        "Agni Karma is performed by heating specific instruments such as metal rods or small devices infused with medicinal herbs.",
        "The heated instruments are applied to the affected areas of the body, where they are allowed to sit for a short duration.",
        "The heat from the instruments helps stimulate circulation and promotes deep tissue healing.",
      ],
      indications: [
        "Chronic pain conditions",
        "Arthritis and joint inflammation",
        "Musculoskeletal disorders",
        "Stiffness and reduced mobility",
        "Sports injuries",
        "Post-surgical recovery",
        "Nerve-related pain",
        "Circulatory issues"
      ],
      whyChooseUs: `Our trained therapists offer Agni Karma treatments with great precision, ensuring the right temperature and application methods are used for maximum effectiveness. We tailor each session to meet the needs of our clients, focusing on specific problem areas for relief and rejuvenation.`,
    },
    "anuvasan-basti": {
      name: "Anuvasan Basti",
      title: "Understanding Anuvasan Basti",
      description1: `Anuvasan Basti is an Ayurvedic therapy that involves the administration of medicated oils into the rectum to cleanse and lubricate the body. This therapy is aimed at balancing the Vata dosha and is effective for treating conditions related to the digestive and nervous systems. It provides relief from constipation, bloating, and certain chronic ailments.`,
      description2: `The treatment works by lubricating the intestines, improving digestion, and reducing discomfort. It is particularly helpful for those experiencing digestive issues or vata imbalances, supporting overall health and wellness.`,
      benefits: [
        "Improved Digestion: The oil enema helps lubricate the intestines, improving digestion and easing bowel movements.",
        "Relieves Constipation and Gas: It helps soften stool and release trapped gas, offering quick relief from bloating and discomfort.",
        "Balances Vata Dosha: Anuvasan Basti is ideal for individuals with a predominance of the Vata dosha, promoting overall balance and calmness in the body.",
      ],
      process: [
        "Preparation: A specific herbal oil or medicated decoction is prepared based on the individual's needs and imbalances.",
        "Application: The treatment involves the gentle insertion of warm, medicated oils into the rectum through a small tube. The patient is asked to lie in a comfortable position to ensure the oils are absorbed effectively.",
        "Duration: The oils are held for a short period before being released naturally, typically lasting between 15-30 minutes, depending on the condition being treated.",
      ],
      whyChooseUs: `Our clinic offers a personalized approach to Anuvasan Basti, using high-quality, specially prepared oils tailored to your specific needs. Our experienced therapists guide you through each step of the process, ensuring comfort and effective results.`,
      indications: [
        "Chronic constipation",
        "Vata imbalance",
        "Digestive disorders",
        "Irritable bowel syndrome",
        "Abdominal bloating",
        "Nervous system disorders",
        "Lower back pain",
        "Menstrual disorders"
      ],
    },
    "avagaha-sweda": {
      name: "Avagaha Sweda",
      title: "Understanding Avagaha Sweda",
      description1: `Avagaha Sweda is a therapeutic Ayurvedic treatment involving the application of herbal steam baths to the body. The treatment aims to purify and cleanse the body by promoting sweating. It is particularly effective for relieving joint pain, stiffness, and improving overall skin health.`,
      benefits: [
        "Detoxification and Skin Health: The steam helps to open the pores, allowing toxins to be released through sweat and enhancing the skin's texture and appearance.",
        "Joint and Muscle Pain Relief: The herbal steam penetrates deep into tissues, providing relief from chronic pain and stiffness, especially in the joints.",
        "Stress Reduction: The calming effects of the herbal steam relax the body and mind, reducing stress and improving overall well-being.",
      ],
      process: [
        "In this treatment, the patient sits in a specially designed steam chamber where herbal steam is directed towards the body.",
        "The steam is infused with medicinal herbs tailored to the individual's needs, helping to purify the body and improve circulation.",
      ],
      whyChooseUs: `We provide a soothing, personalized experience with high-quality herbal blends designed to address your unique concerns. Our therapists ensure that the steam is applied at the perfect temperature to maximize the therapeutic benefits for your body.`,
      indications: [
        "Joint pain and stiffness",
        "Muscle tension",
        "Rheumatoid arthritis",
        "Osteoarthritis",
        "Sports injuries",
        "Chronic pain conditions",
        "Poor circulation",
        "Skin disorders"
      ],
    },
    "bashpa-swedan": {
      name: "Bashpa Swedan",
      title: "Understanding Bashpa Swedan",
      description1: `Bashpa Swedan, or herbal steam therapy, uses steam infused with medicinal herbs to improve circulation, cleanse the skin, and promote detoxification. It helps open pores and facilitates the release of toxins through sweating. This treatment is highly beneficial for pain relief, stress reduction, and skin rejuvenation.`,
      benefits: [
        "Detoxification: The herbal steam opens the pores, aiding in toxin removal.",
        "Improved Circulation: Promotes better blood flow and helps in healing.",
        "Relaxation: Reduces stress and anxiety, providing overall mental and physical calm.",
      ],
      process: [
        "The patient sits in a steam chamber filled with herbal steam. The steam penetrates the skin, opening the pores and stimulating sweating. The duration varies based on individual needs, and the treatment helps release impurities and toxins from the body.",
      ],
      whyChooseUs: `Our therapists provide a tailored steam experience, using high-quality herbs for a truly therapeutic session. The environment is carefully managed to ensure comfort and maximum detoxification.`,
      indications: [
        "Respiratory conditions",
        "Sinus congestion",
        "Muscle stiffness",
        "Joint pain",
        "Poor circulation",
        "Skin conditions",
        "Stress and anxiety",
        "Detoxification needs"
      ],
    },
    "body-polishing": {
      name: "Body Polishing",
      title: "Understanding Body Polishing",
      description1: `Body Polishing is an Ayurvedic treatment designed to exfoliate and rejuvenate the skin using natural ingredients like herbal powders, oils, and scrubs. It helps remove dead skin cells, improves skin tone, and promotes the growth of fresh, healthy skin. This treatment is ideal for people looking to improve their skin's texture and appearance.`,
      benefits: [
        "Exfoliation and Skin Renewal: Removes dead skin cells and promotes smooth, radiant skin.",
        "Improved Circulation: The scrubbing technique enhances blood circulation, aiding in skin regeneration.",
        "Nourishing the Skin: The natural oils used hydrate and nourish the skin, providing lasting softness.",
      ],
      process: [
        "The treatment begins with the application of herbal scrubs or powders on the body. The therapist uses gentle, circular motions to exfoliate the skin. Afterward, nourishing oils are massaged into the skin to provide deep hydration and smoothness.",
      ],
      whyChooseUs: `We use organic, high-quality ingredients to ensure your skin is treated with care. Our therapists provide a relaxing, rejuvenating experience tailored to your skin's needs, leaving you feeling refreshed and renewed.`,
      indications: [
        "Dull and dry skin",
        "Dead skin accumulation",
        "Poor skin texture",
        "Uneven skin tone",
        "Rough skin patches",
        "Pre-wedding preparation",
        "Special occasions",
        "General skin rejuvenation"
      ],
    },
    cupping: {
      name: "Cupping",
      title: "Understanding Cupping",
      description1: `Cupping is an ancient therapy that involves placing cups on the skin to create suction. This suction is believed to stimulate blood flow, release toxins, and alleviate muscle tension. Cupping therapy is especially effective for treating chronic pain, muscle soreness, and respiratory conditions.`,
      benefits: [
        "Pain Relief: Helps alleviate muscle pain and stiffness by improving blood circulation.",
        "Detoxification: The suction draws out toxins and impurities, aiding the body's natural detox process.",
        "Stress Reduction: Relieves stress and promotes relaxation through deep tissue stimulation.",
      ],
      process: [
        "Special cups are placed on the skin, typically along the back or other areas of tension. A vacuum is created either by heating the cups or using a pump. The cups are left in place for a few minutes to allow the suction to improve circulation and stimulate healing.",
      ],
      whyChooseUs: `We ensure a comfortable and safe cupping experience by using clean, high-quality cups. Our trained therapists apply cupping with precision to target specific areas, ensuring effective results and a relaxing session.`,
      indications: [
        "Muscle pain and tension",
        "Poor circulation",
        "Respiratory conditions",
        "Digestive disorders",
        "Stress and anxiety",
        "Sports injuries",
        "Chronic fatigue",
        "Detoxification needs"
      ],
    },
    dhumpan: {
      name: "Dhumpan",
      title: "Understanding Dhumpan",
      description1: `Dhumpan is an Ayurvedic treatment that involves the inhalation of medicated smoke or fumes to clear the respiratory system, improve lung health, and balance the doshas. It helps to purify the mind and body, reduce stress, and alleviate conditions such as cough, asthma, and sinus congestion.`,
      benefits: [
        "Improved Respiratory Health: Helps clear congestion and improve airflow.",
        "Cleansing and Detoxifying: The medicinal smoke helps detoxify the body and calm the nervous system.",
        "Stress Relief: Provides mental clarity and relieves emotional tension.",
      ],
      process: [
        "Herbal powders or plant materials are burned, producing smoke that the patient inhales. The smoke is believed to have healing properties that purify the body, especially the respiratory system.",
      ],
      whyChooseUs: `We use carefully selected herbs for the smoke therapy, ensuring the highest quality and safety. Our therapists guide you through the process to ensure that you experience the full benefits of Dhumpan.`,
      indications: [
        "Respiratory disorders",
        "Sinus congestion",
        "Allergies",
        "Asthma",
        "Chronic cough",
        "Headaches",
        "Stress and anxiety",
        "Mental clarity issues"
      ],
    },
    "greeva-basti": {
      name: "Greeva Basti",
      title: "Understanding Greeva Basti",
      description1: `Greeva Basti is a therapeutic treatment that involves the application of warm medicated oil or decoction to the neck area. This therapy is especially beneficial for neck pain, stiffness, and cervical issues. The oil is held in place using a dough ring, allowing it to soak into the skin for maximum therapeutic effect.`,
      benefits: [
        "Relieves Neck Pain: Reduces stiffness and discomfort in the neck.",
        "Improves Mobility: Helps in restoring flexibility and mobility.",
        "Reduces Inflammation: Alleviates swelling and inflammation around the neck area.",
      ],
      process: [
        "A dough ring is placed around the neck, and warm herbal oil or decoction is poured into the ring. It is kept in place for a specified duration to allow absorption into the skin and tissues.",
      ],
      whyChooseUs: `We provide a customized experience with high-quality herbal oils, ensuring relief from neck pain and stiffness while promoting overall healing.`,
      indications: [
        "Neck pain and stiffness",
        "Cervical spondylosis",
        "Tension headaches",
        "Shoulder pain",
        "Poor posture",
        "Whiplash injuries",
        "Stress-related neck tension",
        "Degenerative neck conditions"
      ],
    },
    gandush: {
      name: "Gandush",
      title: "Understanding Gandush",
      description1: `Gandush is a traditional Ayurvedic treatment where medicated oil is held in the mouth for a set period. This therapy detoxifies the mouth and improves oral health. Gandush helps balance the doshas, strengthen teeth, and enhance overall oral hygiene.`,
      benefits: [
        "Oral Detoxification: Helps remove toxins from the mouth and gums.",
        "Improves Oral Health: Strengthens teeth and gums, reducing inflammation.",
        "Balances Doshas: Aids in balancing the body's energies, particularly Kapha.",
      ],
      process: [
        "Medicated oil is placed in the mouth, and the patient is instructed to swish it around for a specific duration. The process helps in cleansing the mouth and improving overall oral health.",
      ],
      whyChooseUs: `Our Gandush therapy uses carefully selected herbal oils that provide optimal benefits for oral health and dosha balance, delivered by skilled practitioners.`,
      indications: [
        "Oral health issues",
        "Gum diseases",
        "Tooth sensitivity",
        "Bad breath",
        "Kapha imbalance",
        "Throat infections",
        "Mouth ulcers",
        "Dental hygiene maintenance"
      ],
    },
    "hrid-basti": {
      name: "Hrid Basti",
      title: "Understanding Hrid Basti",
      description1:
        "Hrid Basti is a unique Ayurvedic therapy designed to treat heart and chest-related issues. It involves placing a dough ring on the chest and filling it with warm, medicated oil. The treatment helps to reduce stress, promote heart health, and balance the chest area.",
      benefits: [
        "Relieves Chest Pain: Eases discomfort and tightness in the chest.",
        "Promotes Heart Health: Helps in maintaining heart and respiratory function.",
        "Stress Relief: Reduces mental and emotional stress, aiding overall well-being.",
      ],
      process: [
        "A dough ring is placed around the chest, and warm herbal oil is poured into it. The oil remains in place for a set period, allowing the chest area to absorb the medicinal properties of the oil.",
      ],
      whyChooseUs:
        "We offer a peaceful and therapeutic environment for Hrid Basti, using high-quality herbal oils to promote heart and chest health effectively.",
      indications: [
        "Heart-related anxiety",
        "Chest tightness",
        "Stress-related heart issues",
        "Poor circulation",
        "Emotional imbalance",
        "Respiratory issues",
        "High blood pressure",
        "General heart health maintenance"
      ],
    },

    "janu-basti": {
      name: "Janu Basti",
      title: "Understanding Janu Basti",
      description1:
        "Janu Basti is an Ayurvedic treatment that specifically targets the knee joints. It involves a dough ring placed around the knee, into which warm medicated oil is poured. This therapy is excellent for treating knee pain, inflammation, and joint stiffness.",
      benefits: [
        "Relieves Knee Pain: Effective for knee arthritis, pain, and stiffness.",
        "Reduces Inflammation: Helps decrease swelling and inflammation in the knee.",
        "Improves Joint Mobility: Enhances flexibility and joint function.",
      ],
      process: [
        "A dough ring is placed around the knee, and warm medicated oil is poured into it. The oil is kept in place for a set period, allowing it to soothe and heal the knee joint.",
      ],
      whyChooseUs:
        "Our experienced therapists provide personalized Janu Basti treatments using top-quality herbal oils, ensuring effective relief from knee pain and discomfort.",
      indications: [
        "Knee pain and stiffness",
        "Osteoarthritis of knee",
        "Sports injuries",
        "Post-surgical recovery",
        "Joint inflammation",
        "Reduced mobility",
        "Chronic knee conditions",
        "Preventive knee care"
      ],
    },

    "kati-basti": {
      name: "Kati Basti",
      title: "Understanding Kati Basti",
      description1:
        "Kati Basti is a focused Ayurvedic treatment for the lower back. It involves applying warm, medicated oil to the affected area, using a dough ring to keep the oil in place. This therapy helps in relieving lower back pain, stiffness, and tension.",
      benefits: [
        "Reduces Lower Back Pain: Targets pain and stiffness in the lower back area.",
        "Improves Flexibility: Restores movement and flexibility to the spine.",
        "Promotes Relaxation: Eases muscle tension and promotes healing.",
      ],
      process: [
        "A dough ring is placed around the lower back, and warm medicated oil is poured into it. The oil remains in place for a specific duration, allowing it to deeply penetrate the skin and muscles.",
      ],
      whyChooseUs:
        "Our experts use high-quality, soothing herbal oils to provide effective relief from lower back pain and promote flexibility.",
      indications: [
        "Lower back pain",
        "Sciatica",
        "Lumbar spondylosis",
        "Muscle stiffness",
        "Postural issues",
        "Sports injuries",
        "Chronic back conditions",
        "Preventive back care"
      ],
    },

    kaval: {
      name: "Kaval",
      title: "Understanding Kaval",
      description1:
        "Kaval is an Ayurvedic mouth gargle therapy using medicated oil or herbal decoctions. It is designed to treat oral conditions, strengthen the teeth, and promote overall oral hygiene. This treatment helps balance the doshas and detoxify the mouth.",
      benefits: [
        "Improves Oral Health: Strengthens gums, teeth, and reduces oral discomfort.",
        "Detoxifies the Mouth: Removes toxins and harmful bacteria from the mouth.",
        "Balances Doshas: Specifically beneficial for balancing Kapha dosha.",
      ],
      process: [
        "The patient takes a small amount of medicated oil or herbal solution into the mouth and holds it for a specific period, swishing it around to cleanse the mouth thoroughly.",
      ],
      whyChooseUs:
        "We ensure the use of pure, high-quality herbal solutions to improve your oral health while balancing your doshas.",
      indications: [
        "Oral health maintenance",
        "Gum diseases",
        "Tooth decay prevention",
        "Bad breath",
        "Throat infections",
        "Kapha imbalance",
        "Dental hygiene",
        "General oral wellness"
      ],
    },

    "ksheer-dhara": {
      name: "Ksheer Dhara",
      title: "Understanding Ksheer Dhara",
      description1:
        "Ksheer Dhara involves the application of a continuous stream of medicated milk or milk-based solution over the forehead, a technique known for its calming effects. It is primarily used to reduce stress, improve mental clarity, and rejuvenate the mind.",
      benefits: [
        "Reduces Stress and Anxiety: Calms the mind and relieves mental strain.",
        "Improves Sleep Quality: Enhances sleep by soothing the nervous system.",
        "Promotes Mental Clarity: Improves focus and cognitive function.",
      ],
      process: [
        "A stream of warm, medicated milk is poured continuously over the forehead while the patient lies down, helping to relax and rejuvenate the mind.",
      ],
      whyChooseUs:
        "Our Ksheer Dhara treatment uses premium quality milk and herbs, providing a soothing and relaxing experience to calm the mind and rejuvenate the senses.",
      indications: [
        "Stress and anxiety",
        "Insomnia",
        "Mental fatigue",
        "Headaches",
        "Nervous system disorders",
        "Emotional imbalance",
        "Poor concentration",
        "General mental wellness"
      ],
    },

    "kesh-lepanam": {
      name: "Kesh Lepanam",
      title: "Understanding Kesh Lepanam",
      description1:
        "Kesh Lepanam is a traditional Ayurvedic scalp treatment where a paste of medicinal herbs is applied to the hair and scalp. This therapy helps nourish the hair follicles, reduce dandruff, and promote healthy hair growth.",
      benefits: [
        "Promotes Hair Growth: Strengthens hair follicles for healthier hair.",
        "Reduces Dandruff: Treats scalp conditions and promotes a clean, healthy scalp.",
        "Improves Hair Texture: Enhances the shine and texture of the hair.",
      ],
      process: [
        "A medicinal herbal paste is applied to the scalp and hair, left for a certain period, and then washed off. The herbs nourish and strengthen the hair and scalp.",
      ],
      whyChooseUs:
        "Our treatments use natural, high-quality herbs to provide your hair and scalp with the nourishment they need to grow strong and healthy.",
      indications: [
        "Hair loss",
        "Dandruff",
        "Dry scalp",
        "Premature graying",
        "Hair thinning",
        "Scalp infections",
        "Poor hair growth",
        "General hair care"
      ],
    },

    "karn-pooran": {
      name: "Karn Pooran",
      title: "Understanding Karn Pooran",
      description1:
        "Karn Pooran is an Ayurvedic therapy that involves pouring medicated oil into the ears to treat ear-related problems such as pain, infections, or hearing issues. It helps to balance the Vata dosha and improves hearing.",
      benefits: [
        "Alleviates Ear Pain: Treats pain and discomfort in the ear.",
        "Reduces Infections: Helps treat ear infections and clear blockages.",
        "Enhances Hearing: Improves ear health and overall hearing function.",
      ],
      process: [
        "Warm, medicated oil is poured into the ear and allowed to remain for a period. This helps cleanse and soothe the ear, addressing issues like pain or infections.",
      ],
      whyChooseUs:
        "Our Karn Pooran treatment uses pure, medicated oils to promote ear health and improve hearing, delivered by experienced therapists.",
      indications: [
        "Ear pain",
        "Tinnitus",
        "Ear infections",
        "Hearing issues",
        "Ear wax buildup",
        "Vata imbalance",
        "Ear-related headaches",
        "General ear health"
      ],
    },

    "karn-dhupana": {
      name: "Karna Dhupana",
      title: "Understanding Karna Dhupana",
      description1:
        "Karna Dhupana is an Ayurvedic ear treatment where medicated smoke or fumes are directed into the ears. It is primarily used to treat ear infections, improve hearing, and promote overall ear health.",
      benefits: [
        "Cleanses the Ear: Removes blockages and toxins from the ear canal.",
        "Improves Hearing: Helps in restoring and enhancing hearing function.",
        "Alleviates Ear Infections: Reduces inflammation and infection in the ear.",
      ],
      process: [
        "Medicated smoke is directed into the ears through a funnel-like device, allowing the fumes to cleanse the ear canal and promote healing.",
      ],
      whyChooseUs:
        "Our treatment uses safe and effective medicated fumes to cleanse the ear, improve hearing, and treat infections, administered by skilled therapists.",
      indications: [
        "Ear infections",
        "Hearing difficulties",
        "Ear pain",
        "Tinnitus",
        "Ear blockages",
        "Vata imbalance",
        "Ear-related stress",
        "General ear wellness"
      ],
    },

    "kashaya-dhara": {
      name: "Kashaya Dhara",
      title: "Understanding Kashaya Dhara",
      description1:
        "Kashaya Dhara is an Ayurvedic treatment that involves pouring a stream of herbal decoction over the body to detoxify and rejuvenate. The treatment is commonly used for muscle and joint pain, as well as general body rejuvenation.",
      benefits: [
        "Detoxifies the Body: Removes toxins and impurities from the system.",
        "Relieves Pain: Eases muscle and joint pain by improving circulation.",
        "Rejuvenates the Body: Promotes overall wellness and vitality.",
      ],
      process: [
        "A stream of herbal decoction is poured over the body, focusing on specific areas where pain or stiffness is present, to promote relaxation and healing.",
      ],
      whyChooseUs:
        "Our expert therapists customize the Kashaya Dhara treatment to your specific needs, using the finest herbs to enhance detoxification and healing.",
      indications: [
        "Muscle pain",
        "Joint disorders",
        "Skin conditions",
        "Poor circulation",
        "Stress and anxiety",
        "Detoxification needs",
        "General body rejuvenation",
        "Post-surgical recovery"
      ],
    },
    "lepanam-dashang": {
      name: "Lepanam Dashang",
      title: "Understanding Lepanam Dashang",
      description1:
        "Lepanam Dashang is an Ayurvedic treatment that involves the application of a herbal paste to the body. The paste is made from a combination of ten powerful herbs known for their therapeutic properties. This therapy is mainly used to treat inflammatory conditions, pain, and skin disorders.",
      benefits: [
        "Relieves Inflammation: Eases swelling and inflammation in the body.",
        "Treats Skin Conditions: Helps in healing skin ailments and conditions.",
        "Detoxifies the Body: Purges toxins through the skin.",
      ],
      process: [
        "The herbal paste is applied to the affected areas of the body, and it is allowed to remain for a specific duration to absorb and take effect.",
      ],
      whyChooseUs:
        "Our experienced therapists use high-quality herbs and provide personalized treatments tailored to your needs for effective relief.",
      indications: [
        "Skin inflammation",
        "Wound healing",
        "Skin infections",
        "Burns",
        "Skin allergies",
        "Dermatitis",
        "Skin rejuvenation",
        "General skin health"
      ],
    },

    "matra-basti": {
      name: "Matra Basti",
      title: "Understanding Matra Basti",
      description1:
        "Matra Basti is a gentle Ayurvedic enema treatment using a small amount of medicated oil or decoction. It is particularly used to balance the Vata dosha and treat conditions related to constipation, digestive issues, and general wellness.",
      benefits: [
        "Promotes Digestive Health: Supports regular bowel movements and relieves constipation.",
        "Balances Vata Dosha: Helps restore balance to the Vata dosha.",
        "Nourishes the Body: Provides deep nourishment to the colon and digestive system.",
      ],
      process: [
        "A small amount of herbal oil or decoction is administered through the rectum to cleanse and lubricate the digestive system.",
      ],
      whyChooseUs:
        "Our Matra Basti treatment is customized to your specific dosha balance, offering deep detoxification and relief from digestive problems.",
      indications: [
        "Mild constipation",
        "Vata imbalance",
        "Digestive issues",
        "Abdominal discomfort",
        "Gas and bloating",
        "Mild back pain",
        "General detoxification",
        "Preventive care"
      ],
    },

    "mukha-lepam": {
      name: "Mukha Lepam",
      title: "Understanding Mukha Lepam",
      description1:
        "Mukha Lepam is an Ayurvedic facial treatment where a herbal paste is applied to the face to cleanse, rejuvenate, and nourish the skin. It is designed to reduce blemishes, acne, and other skin concerns while improving the complexion.",
      benefits: [
        "Improves Complexion: Brightens and refreshes the skin for a youthful glow.",
        "Reduces Skin Issues: Helps with acne, blemishes, and dullness.",
        "Detoxifies the Skin: Clears impurities and toxins from the face.",
      ],
      process: [
        "A specially formulated herbal paste is applied to the face and left on for a period to absorb, followed by gentle removal.",
      ],
      whyChooseUs:
        "We provide high-quality, customized herbal treatments that nourish and rejuvenate your skin, offering lasting results.",
      indications: [
        "Facial acne",
        "Skin blemishes",
        "Dull complexion",
        "Premature aging",
        "Skin pigmentation",
        "Facial inflammation",
        "Skin detoxification",
        "General facial care"
      ],
    },

    "niruha-basti": {
      name: "Niruha Basti",
      title: "Understanding Niruha Basti",
      description1:
        "Niruha Basti is a therapeutic enema procedure using medicated decoctions to cleanse the colon and eliminate accumulated toxins. This treatment is primarily used for detoxification and balancing the Pitta dosha.",
      benefits: [
        "Cleanses the Colon: Removes toxins and waste from the digestive system.",
        "Balances Pitta Dosha: Helps to reduce heat and inflammation in the body.",
        "Improves Digestion: Enhances digestion and nutrient absorption.",
      ],
      process: [
        "Herbal decoctions are administered through the rectum, providing a deep cleanse and helping to balance bodily functions.",
      ],
      whyChooseUs:
        "Our Niruha Basti treatment uses a combination of potent herbal formulations to cleanse your body and improve overall digestive health.",
      indications: [
        "Severe constipation",
        "Pitta imbalance",
        "Digestive disorders",
        "Toxin accumulation",
        "Chronic conditions",
        "Autoimmune disorders",
        "Detoxification needs",
        "General wellness"
      ],
    },

    "nabhi-basti": {
      name: "Nabhi Basti",
      title: "Understanding Nabhi Basti",
      description1:
        "Nabhi Basti is a specialized treatment involving the application of warm medicated oil to the navel (Naval center). This treatment is excellent for addressing digestive issues and balancing the Vata dosha.",
      benefits: [
        "Improves Digestion: Enhances digestive function by soothing the abdominal area.",
        "Balances Vata Dosha: Helps to bring balance to the nervous system and overall well-being.",
        "Relieves Abdominal Pain: Eases discomfort caused by indigestion and bloating.",
      ],
      process: [
        "Warm oil is applied to the navel area, providing therapeutic benefits through the skin, which helps to relax the digestive system.",
      ],
      whyChooseUs:
        "We specialize in Nabhi Basti with high-quality oils that provide targeted relief for digestive concerns and restore balance to your body.",
      indications: [
        "Digestive disorders",
        "Abdominal pain",
        "Vata imbalance",
        "Poor digestion",
        "Gas and bloating",
        "Nervous system issues",
        "General abdominal health",
        "Preventive care"
      ],
    },

    nasya: {
      name: "Nasya",
      title: "Understanding Nasya",
      description1:
        "Nasya is an Ayurvedic treatment where herbal oils are applied through the nostrils to cleanse the sinuses and improve respiratory health. This treatment helps balance the Vata dosha and is highly effective for treating sinus issues, headaches, and mental clarity.",
      benefits: [
        "Clears Sinuses: Relieves nasal congestion and improves airflow.",
        "Improves Mental Clarity: Enhances focus and reduces mental fog.",
        "Supports Respiratory Health: Promotes better breathing and detoxifies the nasal passage.",
      ],
      process: [
        "Medicated oils are gently administered through the nostrils, allowing the herbs to work directly on the respiratory system.",
      ],
      whyChooseUs:
        "Our Nasya therapy uses the finest herbal oils tailored to your needs for optimal results in clearing sinuses and boosting mental clarity.",
      indications: [
        "Sinus congestion",
        "Headaches",
        "Respiratory issues",
        "Mental clarity",
        "Stress and anxiety",
        "Sleep disorders",
        "Vata imbalance",
        "General nasal health"
      ],
    },

    "nadi-swedan": {
      name: "Nadi Swedan",
      title: "Understanding Nadi Swedan",
      description1:
        "Nadi Swedan is a steam therapy treatment focused on detoxification. Using herbal steam, the therapy improves circulation, alleviates pain, and helps in the removal of toxins from the body. It is often used for relieving joint and muscular pain.",
      benefits: [
        "Detoxifies the Body: Purges toxins from deep within the body.",
        "Improves Circulation: Enhances blood flow to tissues and joints.",
        "Relieves Pain: Alleviates stiffness, pain, and muscle tension.",
      ],
      process: [
        "Herbal steam is directed over the body through specialized equipment, helping in deep tissue cleansing and pain relief.",
      ],
      whyChooseUs:
        "Our Nadi Swedan treatment provides deep relaxation and thorough detoxification for both body and mind, promoting long-term health benefits.",
      indications: [
        "Joint pain",
        "Muscle stiffness",
        "Poor circulation",
        "Detoxification needs",
        "Stress relief",
        "Skin conditions",
        "General body wellness",
        "Post-surgical recovery"
      ],
    },

    "netra-parisheka": {
      name: "Netra Parisheka",
      title: "Understanding Netra Parisheka",
      description1:
        "Netra Parisheka is a soothing eye therapy using medicated herbal liquids to treat eye strain, improve vision, and rejuvenate the eyes. It is designed to enhance eye health, especially for those who spend long hours in front of screens.",
      benefits: [
        "Relieves Eye Strain: Reduces tiredness and strain from screen exposure.",
        "Improves Vision: Enhances clarity and eye health.",
        "Soothes Irritation: Helps in calming red or irritated eyes.",
      ],
      process: [
        "A gentle stream of herbal liquids is poured over the eyes in a relaxing manner, providing nourishment and soothing effects.",
      ],
      whyChooseUs:
        "Our specialized Netra Parisheka treatment uses quality herbs to ensure optimal relief and rejuvenation for your eyes.",
      indications: [
        "Eye strain",
        "Dry eyes",
        "Eye fatigue",
        "Poor vision",
        "Eye inflammation",
        "Computer vision syndrome",
        "General eye health",
        "Preventive eye care"
      ],
    },

    "netra-tarpan": {
      name: "Netra Tarpan",
      title: "Understanding Netra Tarpan",
      description1:
        "Netra Tarpan is a treatment where medicated oils are used to bathe the eyes, nourishing and rejuvenating them. This process is beneficial for relieving eye dryness, stress, and strain while promoting overall eye health.",
      benefits: [
        "Nourishes the Eyes: Provides essential nourishment to the eyes, promoting healing.",
        "Relieves Dryness: Helps restore moisture and prevent dry eye conditions.",
        "Enhances Eye Strength: Strengthens the muscles and tissues of the eyes.",
      ],
      process: [
        "Medicated oils are gently poured over the eyes and kept for a brief duration to absorb and relieve discomfort.",
      ],
      whyChooseUs:
        "Our Netra Tarpan treatment uses premium oils to nourish and relax your eyes, restoring natural balance and enhancing vision.",
      indications: [
        "Eye dryness",
        "Eye strain",
        "Poor vision",
        "Eye fatigue",
        "Computer vision syndrome",
        "Eye inflammation",
        "General eye health",
        "Preventive eye care"
      ],
    },

    "piccha-basti": {
      name: "Piccha Basti",
      title: "Understanding Piccha Basti",
      description1:
        "Piccha Basti is a therapeutic enema treatment where herbal oils or decoctions are used to cleanse and nourish the colon. It helps in balancing Vata dosha and is effective for conditions like constipation, bloating, and digestive disorders.",
      benefits: [
        "Cleanses the Colon: Improves bowel movements and digestion.",
        "Balances Vata Dosha: Reduces symptoms related to excess Vata, like dryness and constipation.",
        "Detoxifies the Body: Eliminates toxins from the digestive system.",
      ],
      process: [
        "Herbal oil or decoction is introduced into the colon, aiding in deep cleansing and rejuvenation.",
      ],
      whyChooseUs:
        "Our Piccha Basti treatment uses specially crafted herbal formulations to ensure thorough detoxification and balance for your digestive health.",
      indications: [
        "Chronic constipation",
        "Vata imbalance",
        "Digestive disorders",
        "Abdominal pain",
        "Gas and bloating",
        "Lower back pain",
        "General detoxification",
        "Preventive care"
      ],
    },

    "prustha-basti": {
      name: "Prustha Basti",
      title: "Understanding Prustha Basti",
      description1:
        "Prustha Basti is a unique Ayurvedic therapy targeting the lower back and spine. Medicated oils are used to alleviate chronic back pain, muscle tension, and spinal issues. It is particularly effective in improving mobility and reducing discomfort in the lumbar region.",
      benefits: [
        "Alleviates Back Pain: Eases chronic pain and discomfort in the lower back.",
        "Improves Mobility: Increases flexibility and movement in the spine.",
        "Relieves Muscle Tension: Reduces stiffness and promotes relaxation.",
      ],
      process: [
        "Medicated oils are applied to the back and spine to nourish, relieve pain, and ease tension.",
      ],
      whyChooseUs:
        "Our Prushtha Basti treatment is designed to bring comfort and healing to the lower back, helping you restore mobility and reduce chronic pain.",
      indications: [
        "Back pain",
        "Spinal issues",
        "Muscle stiffness",
        "Poor posture",
        "Sports injuries",
        "Chronic back conditions",
        "General back health",
        "Preventive back care"
      ],
    },

    pizhichil: {
      name: "Pizhichil",
      title: "Understanding Pizhichil (Sarvang Dhara)",
      description1: `Pizhichil, also known as Sarvang Dhara, is an Ayurvedic full-body therapy where warm herbal oil is poured over the body, followed by a gentle massage. This treatment is effective for rejuvenating the body and improving circulation.`,
      benefits: [
        "Promotes Detoxification: Helps flush out toxins from the body.",
        "Relieves Stress: Induces relaxation and reduces tension.",
        "Improves Skin Health: Nourishes the skin and improves its texture.",
        "Boosts Circulation: Stimulates blood flow and enhances metabolism.",
      ],
      process: [
        "Warm herbal oils are poured over the entire body while a gentle massage is performed to aid in absorption.",
      ],
      whyChooseUs: `Our Pizhichil treatment combines traditional techniques and high-quality herbal oils to provide deep relaxation and rejuvenation.`,
      indications: [
        "Chronic fatigue",
        "Muscle pain",
        "Poor circulation",
        "Stress and anxiety",
        "Skin conditions",
        "Detoxification needs",
        "General body wellness",
        "Post-surgical recovery"
      ],
    },

    "patrapind-pottali-swedan": {
      name: "Patrapind Pottali Swedan",
      title: "Understanding Patrapind Pottali Swedan",
      description1: `Patrapind Pottali Swedan is a steam therapy that uses medicated bundles of leaves to provide soothing heat and medicinal benefits. It is ideal for relieving pain, improving circulation, and promoting detoxification.`,
      benefits: [
        "Relieves Pain and Stiffness: Eases muscle tension and joint pain.",
        "Detoxifies the Body: Improves lymphatic drainage and eliminates toxins.",
        "Improves Circulation: Enhances blood flow to the muscles and joints.",
      ],
      process: [
        "Medicated bundles of leaves are heated and pressed onto the body, allowing the steam to penetrate the skin and provide relief.",
      ],
      whyChooseUs: `Our Patrapind Pottali Swedan therapy utilizes premium herbal leaves and traditional techniques for effective pain relief and detoxification.`,
      indications: [
        "Joint pain",
        "Muscle stiffness",
        "Poor circulation",
        "Sports injuries",
        "Chronic pain conditions",
        "Detoxification needs",
        "General body wellness",
        "Post-surgical recovery"
      ],
    },
    "raktamokshana-jalauka": {
      name: "Raktamokshana Jalauka",
      title: "Understanding Raktamokshana Jalauka",
      description1:
        "Raktamokshana Jalauka is an Ayurvedic bloodletting therapy using medicinal leeches to draw out impure blood. It helps purify the blood, improve circulation, and alleviate various skin and systemic conditions.",
      benefits: [
        "Purifies Blood: Clears toxins and impurities from the blood.",
        "Enhances Circulation: Promotes better blood flow and reduces congestion.",
        "Relieves Inflammation: Helps reduce swelling and inflammation.",
      ],
      process: [
        "Medicinal leeches are applied to specific areas, where they extract impure blood, followed by soothing and healing measures.",
      ],
      whyChooseUs:
        "Our treatment uses certified leeches and follows safe, hygienic procedures to ensure optimal benefits for your health.",
      indications: [
        "Skin disorders",
        "Blood toxicity",
        "Poor circulation",
        "Chronic conditions",
        "Autoimmune disorders",
        "Detoxification needs",
        "General blood purification",
        "Preventive care"
      ],
    },
    "raktamokshana-syringe": {
      name: "Raktamokshana Syringe",
      title: "Understanding Raktamokshana Syringe",
      description1:
        "Raktamokshana Syringe is an alternative bloodletting method where a syringe is used to remove stagnant blood, helping purify the body and enhance overall health. It's particularly useful for conditions like skin disorders and blood toxicity.",
      benefits: [
        "Detoxifies Blood: Removes toxins and purifies the bloodstream.",
        "Reduces Skin Disorders: Helps in treating acne, eczema, and other skin issues.",
        "Improves Circulation: Boosts the overall circulation and enhances health.",
      ],
      process: [
        "The blood is extracted using a syringe to target areas with accumulated toxins, promoting purification and improved vitality.",
      ],
      whyChooseUs:
        "Our Raktamokshana Syringe treatment is performed by trained professionals who ensure safety and effective detoxification.",
      indications: [
        "Skin disorders",
        "Blood toxicity",
        "Poor circulation",
        "Chronic conditions",
        "Autoimmune disorders",
        "Detoxification needs",
        "General blood purification",
        "Preventive care"
      ],
    },
    "ruksha-sweda": {
      name: "Ruksha Sweda",
      title: "Understanding Ruksha Sweda",
      description1:
        "Ruksha Sweda is a dry heat therapy used to relieve joint pain, stiffness, and improve circulation. It helps balance the Vata dosha and is ideal for individuals suffering from arthritis or chronic pain conditions.",
      benefits: [
        "Alleviates Joint Pain: Reduces pain and stiffness in the joints.",
        "Improves Flexibility: Enhances mobility and joint function.",
        "Detoxifies the Body: Stimulates the removal of toxins from the body.",
      ],
      process: [
        "In this dry heat therapy, the body is exposed to heat, helping to release tension and improve circulation, often followed by soothing measures.",
      ],
      whyChooseUs:
        "Our Ruksha Sweda therapy is tailored to your body's needs, ensuring effective pain relief and mobility enhancement.",
      indications: [
        "Joint pain",
        "Muscle stiffness",
        "Poor circulation",
        "Vata imbalance",
        "Chronic pain conditions",
        "Detoxification needs",
        "General body wellness",
        "Preventive care"
      ],
    },
    swedana: {
      name: "Swedana",
      title: "Understanding Swedana",
      description1:
        "Swedana is an Ayurvedic sweating therapy that involves the application of heat to induce sweating. It helps cleanse the body by expelling toxins and improving circulation. It's especially effective for treating musculoskeletal conditions and balancing Vata dosha.",
      benefits: [
        "Detoxification: Flushes out toxins from the body.",
        "Improved Circulation: Enhances blood flow and nutrient delivery.",
        "Relieves Muscle Stiffness: Eases pain and stiffness in muscles and joints.",
      ],
      process: [
        "The body is exposed to steam or dry heat to induce sweating, followed by rest to allow toxins to exit the body.",
      ],
      whyChooseUs:
        "Our Swedana therapy uses advanced techniques and high-quality herbal formulas to ensure deep detoxification and enhanced relaxation.",
      indications: [
        "Musculoskeletal conditions",
        "Vata imbalance",
        "Poor circulation",
        "Detoxification needs",
        "Stress relief",
        "Skin conditions",
        "General body wellness",
        "Post-surgical recovery"
      ],
    },
    "shashtika-shali-pinda-sweda": {
      name: "Shashtika Shali Pinda Sweda",
      title: "Understanding Shashtika Shali Pinda Sweda",
      description1:
        "Shashtika Shali Pinda Sweda is a rejuvenating therapy involving warm, medicated rice bundles pressed onto the body to relieve pain, stiffness, and inflammation. It's particularly beneficial for conditions like arthritis.",
      benefits: [
        "Relieves Pain: Eases joint and muscle pain.",
        "Enhances Mobility: Improves flexibility and reduces stiffness.",
        "Detoxifies the Body: Flushes out toxins and promotes healthy circulation.",
      ],
      process: [
        "Warm rice bundles soaked in medicated herbs are pressed onto the body, delivering soothing heat and therapeutic benefits.",
      ],
      whyChooseUs:
        "Our Shashtika Shali Pinda Sweda therapy is designed for deep pain relief and rejuvenation using traditional Ayurvedic methods and organic ingredients.",
      indications: [
        "Arthritis",
        "Joint pain",
        "Muscle stiffness",
        "Poor circulation",
        "Chronic pain conditions",
        "Detoxification needs",
        "General body wellness",
        "Post-surgical recovery"
      ],
    },
    "shiro-abhyanga": {
      name: "Shiro Abhyanga",
      title: "Understanding Shiro Abhyanga",
      description1:
        "Shiro Abhyanga is a head and scalp massage that helps relax the mind and body. Using Ayurvedic oils, it promotes mental clarity, reduces stress, and improves hair health.",
      benefits: [
        "Reduces Stress: Calms the mind and alleviates tension.",
        "Promotes Mental Clarity: Improves focus and cognitive function.",
        "Enhances Hair Health: Strengthens hair and improves scalp circulation.",
      ],
      process: [
        "Warm herbal oils are massaged into the scalp and head using rhythmic strokes, followed by a period of relaxation.",
      ],
      whyChooseUs:
        "Our Shiro Abhyanga therapy uses premium herbal oils and skilled practitioners to provide complete relaxation and mental rejuvenation.",
      indications: [
        "Stress and anxiety",
        "Headaches",
        "Poor sleep",
        "Mental fatigue",
        "Hair and scalp issues",
        "Nervous system disorders",
        "General head health",
        "Preventive care"
      ],
    },
    "shiro-basti": {
      name: "Shiro Basti",
      title: "Understanding Shiro Basti",
      description1:
        "Shiro Basti is a therapy where medicated oil is retained on the head in a special cap, helping to treat headaches, anxiety, and other Vata-related disorders.",
      benefits: [
        "Alleviates Headaches: Relieves tension and pressure in the head.",
        "Reduces Anxiety and Stress: Balances the nervous system and calms the mind.",
        "Improves Sleep: Enhances the quality of sleep by promoting relaxation.",
      ],
      process: [
        "Medicated oil is placed on the scalp in a cap-like formation, allowing the oil to be absorbed deeply into the scalp and forehead.",
      ],
      whyChooseUs:
        "Our Shiro Basti therapy is performed by trained Ayurvedic specialists, ensuring a calming and therapeutic experience.",
      indications: [
        "Headaches",
        "Stress and anxiety",
        "Poor sleep",
        "Mental fatigue",
        "Vata imbalance",
        "Nervous system disorders",
        "General head health",
        "Preventive care"
      ],
    },
    "shiro-pichu": {
      name: "Shiro Pichu",
      title: "Understanding Shiro Pichu",
      description1:
        "Shiro Pichu is a therapeutic procedure where a cotton cloth soaked in medicated oil is placed on the head. It helps in treating mental stress, headaches, and scalp-related issues.",
      benefits: [
        "Reduces Mental Stress: Calms the nervous system.",
        "Improves Focus: Enhances mental clarity and concentration.",
        "Soothes the Scalp: Alleviates headaches and nourishes the hair.",
      ],
      process: [
        "A cotton cloth is soaked in medicated oil and placed on the forehead or scalp for relaxation and therapeutic effects.",
      ],
      whyChooseUs:
        "We provide personalized Shiro Pichu therapy with high-quality oils to ensure deep relaxation and scalp health.",
      indications: [
        "Headaches",
        "Stress and anxiety",
        "Poor sleep",
        "Mental fatigue",
        "Vata imbalance",
        "Nervous system disorders",
        "General head health",
        "Preventive care"
      ],
    },
    "shirodhara": {
      name: "Shirodhara",
      title: "Understanding Shirodhara",
      description1:
        "Shirodhara is a rejuvenating treatment where a continuous stream of warm, medicated oil is poured onto the forehead. This technique is especially beneficial for anxiety, insomnia, and calming the mind.",
      benefits: [
        "Reduces Stress: Promotes relaxation and mental peace.",
        "Improves Sleep Quality: Helps combat insomnia and restlessness.",
        "Enhances Mental Clarity: Improves concentration and cognitive function.",
      ],
      process: [
        "Warm medicated oil is poured in a steady stream on the forehead, aiding in deep relaxation and stress relief.",
      ],
      whyChooseUs:
        "Our Shirodhara therapy uses pure, herbal oils, performed in a serene setting to offer a tranquil and healing experience.",
      indications: [
        "Stress and anxiety",
        "Insomnia and sleep disorders",
        "Headaches and migraines",
        "Mental fatigue",
        "Nervous system disorders",
        "Emotional imbalance",
        "Poor concentration",
        "General mental wellness"
      ],
    },
    "snigdha-dagdha": {
      name: "Snigdha Dagdha",
      title: "Understanding Snigdha Dagdha",
      description1:
        "Snigdha Dagdha is a therapeutic treatment designed to heal burn injuries and skin conditions. It uses soothing herbal oils to promote faster healing, reduce inflammation, and nourish damaged skin.",
      benefits: [
        "Soothes Burn Injuries: Promotes healing of burns and damaged skin.",
        "Reduces Inflammation: Relieves swelling and redness.",
        "Nourishes Skin: Hydrates and rejuvenates the skin.",
      ],
      process: [
        "Herbal oils are gently applied to the affected area, providing relief from burns and promoting skin regeneration.",
      ],
      whyChooseUs:
        "We use high-quality, soothing oils that are safe and effective for treating burn injuries and enhancing skin recovery.",
      indications: [
        "Burn injuries",
        "Skin inflammation",
        "Wound healing",
        "Skin infections",
        "Burns and scalds",
        "Skin allergies",
        "Dermatitis",
        "General skin health"
      ],
    },
    "takra-dhara": {
      name: "Takra Dhara",
      title: "Understanding Takra Dhara",
      description1:
        "Takra Dhara is a soothing Ayurvedic therapy where buttermilk is poured over the forehead, promoting mental clarity, reducing stress, and revitalizing the nervous system.",
      benefits: [
        "Reduces Stress: Calms the mind and body.",
        "Improves Mental Clarity: Enhances focus and concentration.",
        "Treats Scalp Disorders: Promotes hair growth and treats dandruff.",
      ],
      process: [
        "Buttermilk infused with herbal ingredients is poured over the forehead in a steady stream to create a calming effect.",
      ],
      whyChooseUs:
        "Our Takra Dhara therapy is customized using fresh, organic buttermilk for effective relaxation and rejuvenation.",
      indications: [
        "Stress and anxiety",
        "Mental fatigue",
        "Scalp disorders",
        "Dandruff",
        "Hair loss",
        "Poor concentration",
        "Nervous system disorders",
        "General mental wellness"
      ],
    },
    "udvartana": {
      name: "Udvartana",
      title: "Understanding Udvartana",
      description1:
        "Udvartana is an Ayurvedic exfoliation treatment that uses herbal powders and pastes to detoxify the body, improve circulation, and reduce cellulite.",
      benefits: [
        "Detoxifies the Body: Removes toxins and impurities.",
        "Improves Skin Texture: Smoothens and tones the skin.",
        "Reduces Cellulite: Improves lymphatic drainage and reduces fat deposits.",
      ],
      process: [
        "Herbal powders are massaged onto the body in specific directions to exfoliate the skin, increase circulation, and promote toxin elimination.",
      ],
      whyChooseUs:
        "Our Udvartana therapy combines traditional techniques and premium herbal ingredients to provide rejuvenation and improve skin health.",
      indications: [
        "Cellulite reduction",
        "Poor circulation",
        "Skin detoxification",
        "Obesity",
        "Kapha imbalance",
        "Skin conditions",
        "Lymphatic drainage",
        "General body wellness"
      ],
    },
    "upanaha-sweda": {
      name: "Upanaha Sweda",
      title: "Understanding Upanaha Sweda",
      description1:
        "Upanaha Sweda is a local application of medicated pastes and warm wraps to relieve joint pain, muscle stiffness, and inflammation.",
      benefits: [
        "Reduces Pain: Alleviates joint and muscle pain.",
        "Improves Mobility: Enhances flexibility and eases stiffness.",
        "Promotes Healing: Accelerates tissue recovery and healing.",
      ],
      process: [
        "Medicated pastes are applied to the affected area, followed by warm compresses to promote healing and pain relief.",
      ],
      whyChooseUs:
        "Our Upanaha Sweda therapy uses potent herbs and therapeutic warmth to ensure effective pain relief and improved mobility.",
      indications: [
        "Joint pain",
        "Muscle stiffness",
        "Arthritis",
        "Sports injuries",
        "Chronic pain conditions",
        "Poor circulation",
        "Inflammation",
        "General body wellness"
      ],
    },
    "uttara-basti": {
      name: "Uttara Basti",
      title: "Understanding Uttara Basti",
      description1: "Uttara Basti is a specialized Ayurvedic treatment that involves the administration of medicated oils or decoctions through the vaginal or urethral route. This therapy is particularly beneficial for treating gynecological and urological disorders, helping to restore reproductive health and balance.",
      description2: "The treatment works by directly delivering therapeutic substances to the reproductive organs, promoting healing, and restoring proper function. It is especially effective for conditions related to the female reproductive system and urinary tract.",
      benefits: [
        "Improves Reproductive Health: Enhances fertility and addresses menstrual disorders.",
        "Strengthens Reproductive Organs: Nourishes and tones the uterus and surrounding tissues.",
        "Balances Hormones: Helps regulate hormonal imbalances and menstrual cycles.",
        "Treats Gynecological Issues: Effective for conditions like infertility, irregular periods, and uterine disorders.",
        "Enhances Overall Well-being: Promotes general reproductive and urinary health."
      ],
      process: [
        "Preparation:",
        "  • Selection of appropriate medicated oil or decoction based on the condition",
        "  • Preparation of the treatment area and necessary equipment",
        "Application:",
        "  • Gentle insertion of the medicated substance through the vaginal or urethral route",
        "  • Retention of the medicine for a specific duration",
        "  • Proper positioning and relaxation during the procedure",
        "Post-Treatment:",
        "  • Rest and observation period",
        "  • Follow-up care and recommendations"
      ],
      indications: [
        "Infertility",
        "Irregular menstrual cycles",
        "Uterine disorders",
        "Hormonal imbalances",
        "Urinary tract disorders",
        "Menopausal symptoms",
        "Reproductive health maintenance",
        "Post-partum care"
      ],
      whyChooseUs: "Our experienced practitioners provide Uttara Basti treatment with utmost care and precision, using high-quality medicated substances tailored to your specific needs. We ensure a comfortable and safe environment for this specialized therapy."
    },
    "vrukka-basti": {
      name: "Vrukka Basti",
      title: "Understanding Vrukka Basti",
      description1:
        "Vrukka Basti is an Ayurvedic therapy involving herbal oils and medicated decoctions to treat kidney-related issues and improve urinary function.",
      benefits: [
        "Improves Kidney Function: Enhances filtration and detoxification.",
        "Reduces Inflammation: Alleviates pain and swelling in the kidney area.",
        "Balances Doshas: Helps maintain balance of Vata and Pitta doshas.",
      ],
      process: [
        "Herbal oils are used to cleanse and detoxify the kidneys, promoting better renal health.",
      ],
      whyChooseUs:
        "We ensure the use of high-quality herbal formulations, personalized care, and effective treatment for kidney wellness.",
      indications: [
        "Kidney disorders",
        "Urinary tract issues",
        "Kidney stones",
        "Poor kidney function",
        "Vata imbalance",
        "Pitta imbalance",
        "General kidney health",
        "Preventive kidney care"
      ],
    },
    vamana: {
      name: "Vamana",
      title: "Understanding Vamana",
      description1:
        "Vamana is a therapeutic vomiting therapy aimed at detoxifying the body, especially beneficial for balancing Kapha dosha.",
      benefits: [
        "Detoxifies the Body: Purges toxins and excess mucus.",
        "Balances Kapha Dosha: Alleviates issues like obesity, asthma, and respiratory disorders.",
        "Improves Digestion: Helps in improving appetite and digestion.",
      ],
      process: [
        "Medicated herbs are administered to induce controlled vomiting, cleansing the upper body.",
      ],
      whyChooseUs:
        "Our Vamana therapy follows safe, hygienic practices and uses natural, effective herbs for detoxification.",
      indications: [
        "Kapha imbalance",
        "Obesity",
        "Asthma",
        "Respiratory disorders",
        "Poor digestion",
        "Toxin accumulation",
        "General detoxification",
        "Preventive care"
      ],
    },
    virechan: {
      name: "Virechan",
      title: "Understanding Virechan",
      description1:
        "Virechan is a purgative treatment aimed at eliminating toxins from the digestive system, particularly balancing Pitta dosha.",
      benefits: [
        "Cleanses the Digestive System: Removes toxins from the liver and intestines.",
        "Balances Pitta Dosha: Reduces conditions like acidity, skin disorders, and indigestion.",
        "Improves Digestion: Enhances overall digestive function.",
      ],
      process: [
        "Medicated herbs are given orally to induce purgation and remove accumulated toxins from the digestive tract.",
      ],
      whyChooseUs:
        "We tailor the therapy based on your unique constitution, ensuring safe and effective detoxification.",
      indications: [
        "Pitta imbalance",
        "Acidity",
        "Skin disorders",
        "Indigestion",
        "Liver disorders",
        "Toxin accumulation",
        "General detoxification",
        "Preventive care"
      ],
    },
    "valuka-sweda": {
      name: "Valuka Sweda",
      title: "Understanding Valuka Sweda",
      description1:
        "Valuka Sweda is a treatment where warm sand is applied to the body to relieve pain and stiffness, commonly used for joint-related issues.",
      benefits: [
        "Relieves Joint Pain: Alleviates stiffness and pain in joints.",
        "Promotes Circulation: Enhances blood flow to affected areas.",
        "Improves Flexibility: Eases muscle tension and improves range of motion.",
      ],
      process: [
        "Warm sand is placed over the body in specific areas to provide soothing heat and alleviate discomfort.",
      ],
      whyChooseUs:
        "We ensure safe, controlled application of warm sand for effective pain relief and enhanced mobility.",
      indications: [
        "Joint pain",
        "Arthritis",
        "Muscle stiffness",
        "Poor circulation",
        "Sports injuries",
        "Chronic pain conditions",
        "General body wellness",
        "Post-surgical recovery"
      ],
    },
    "viddha-karma": {
      name: "Viddha Karma",
      title: "Understanding Viddha Karma",
      description1:
        "Viddha Karma is an Ayurvedic treatment involving the application of needles or pins on specific body points to treat pain and various health conditions.",
      benefits: [
        "Alleviates Pain: Provides relief from chronic pain and inflammation.",
        "Improves Blood Circulation: Enhances nutrient delivery to cells.",
        "Relieves Muscle Tension: Helps in reducing stiffness and discomfort.",
      ],
      process: [
        "Needles are carefully inserted into strategic points on the body to release blocked energy and stimulate healing.",
      ],
      whyChooseUs:
        "We ensure a professional, safe approach with skilled practitioners for effective pain relief and wellness.",
      indications: [
        "Chronic pain",
        "Inflammation",
        "Poor circulation",
        "Muscle tension",
        "Sports injuries",
        "Nerve disorders",
        "General body wellness",
        "Preventive care"
      ],
    },
    "yapana-basti": {
      name: "Yapana Basti",
      title: "Understanding Yapana Basti",
      description1:
        "Yapana Basti is an Ayurvedic enema therapy aimed at treating digestive and metabolic issues, restoring balance to the body.",
      benefits: [
        "Detoxifies the Body: Removes toxins and improves digestion.",
        "Balances Vata Dosha: Alleviates conditions like constipation and bloating.",
        "Improves Nutrient Absorption: Enhances overall digestive health.",
      ],
      process: [
        "Herbal decoctions are administered through the rectum to cleanse and rejuvenate the digestive system.",
      ],
      whyChooseUs:
        "We use safe, personalized herbal mixtures tailored to your digestive needs for optimal health benefits.",
      indications: [
        "Digestive disorders",
        "Constipation",
        "Bloating",
        "Vata imbalance",
        "Poor nutrient absorption",
        "Toxin accumulation",
        "General digestive health",
        "Preventive care"
      ],
    },
    "yavani-dham-nasya": {
      name: "Yavani Dham Nasya",
      title: "Understanding Yavani Dham Nasya",
      description1:
        "Yavani Dham Nasya is an Ayurvedic nasal treatment using herbal oils or powders to relieve sinus issues, headaches, and improve mental clarity.",
      benefits: [
        "Clears Nasal Passages: Relieves congestion and improves breathing.",
        "Enhances Mental Clarity: Reduces stress and promotes cognitive function.",
        "Improves Skin Health: Helps in reducing facial puffiness and acne.",
      ],
      process: [
        "Herbal oils or powders are administered through the nostrils to cleanse the sinuses and improve respiratory health.",
      ],
      whyChooseUs:
        "We provide a therapeutic and rejuvenating experience with high-quality natural ingredients to ensure long-lasting results.",
      indications: [
        "Sinus congestion",
        "Headaches",
        "Poor mental clarity",
        "Respiratory issues",
        "Facial puffiness",
        "Acne",
        "General nasal health",
        "Preventive care"
      ],
    },
    
  };

  // Retrieve the treatment object using the lowercase treatmentId
  const treatment = treatmentsContent[treatmentIdLowercase];

  if (!treatment) {
    return (
      <div className="bg-gray-900 text-white p-6 min-h-screen flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Treatment Not Found</h1>
          <p className="text-gray-300">Please select a valid treatment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 w-full mx-auto py-20 px-12 xl:px-36 bg-gray-50">
      <h1 className="font-bold text-[#394E29] mb-12 text-3xl border-b-2 border-green-200 pb-4">{treatment.title}</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-8 mb-10">
        <p className="mb-6 text-[#757575] text-justify leading-relaxed">
          {treatment.description1}
        </p>
        <p className="mb-6 text-[#757575] text-justify leading-relaxed">
          {treatment.description2}
        </p>
      </div>

       {/* Indications Section */}
       <div className="bg-white rounded-lg shadow-sm p-8 mb-10">
        <h2 className="font-bold text-[#394E29] mb-8 text-2xl border-b-2 border-green-200 pb-3">
          Indications for {treatment.name}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#757575] text-lg">
          {treatment.indications.map((indication, index) => (
            <li key={index} className="flex items-center">
              <span className="text-[#394E29] mr-2">✓</span>
              {indication}
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-10">
        <h2 className="font-bold text-[#394E29] mb-8 text-2xl border-b-2 border-green-200 pb-3">
          Benefits of {treatment.name}
        </h2>
        <ol className="list-decimal list-inside space-y-6 text-[#757575] text-lg">
          {treatment.benefits.map((benefit, index) => {
            const [title, ...content] = benefit.split(":");
            return (
              <li key={index} className="space-y-2">
                <span className="font-bold text-[#394E29]">{title.trim()}:</span>
                <ul className="list-disc list-inside pl-4">
                  <li>{content.join(":").trim()}</li>
                </ul>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Process Section */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-10">
        <h2 className="font-bold text-[#394E29] mb-8 text-2xl border-b-2 border-green-200 pb-3">
          The {treatment.name} Process
        </h2>
        <ol className="list-decimal list-inside space-y-6 text-[#757575] text-lg">
          {treatment.process.map((step, index) => {
            const isSubItem = step.startsWith("  •");
            if (isSubItem) {
              return (
                <ul key={index} className="list-disc list-inside pl-8">
                  <li>{step.trim().substring(2)}</li>
                </ul>
              );
            }
            return (
              <li key={index} className="flex items-start">
                <span className="bg-[#394E29] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">{index + 1}</span>
                <span className="font-bold">{step}</span>
              </li>
            );
          })}
        </ol>
      </div>

     

      {/* Why Choose Us Section */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="font-bold text-[#394E29] mb-6 text-2xl border-b-2 border-green-200 pb-3">
          Why Choose Us for {treatment.name}
        </h2>
        <div className="border-l-4 border-[#394E29] pl-4 py-2">
          <p className="text-[#757575] italic text-lg">{treatment.whyChooseUs}</p>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetail;
