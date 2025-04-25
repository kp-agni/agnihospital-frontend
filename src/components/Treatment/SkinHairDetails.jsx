import React from "react";
import { assets } from "../../assets/assets";
import { useParams } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function SkinHairDetails() {
  const { disorderId } = useParams(); // Get disorderId from URL
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();
  const disorders = [
    {
      id: "eczema",
      title: "Eczema",
      description:
        "Eczema, also known as Vicharchika in Ayurveda, is a chronic inflammatory skin condition characterized by redness, itching, dryness, and sometimes fluid-filled blisters. It is often triggered by allergens, stress, poor digestion, and an imbalance in the body's doshas—primarily Pitta and Kapha. Ayurvedic treatments focus on detoxification, balancing doshas, and strengthening the skin's natural barrier.",
      ayurvedicApproach: {
        herbsremedies: [
          "Neem (Azadirachta indica): A powerful anti-inflammatory and antibacterial herb that helps soothe itching and heal skin infections.",
          "Aloe Vera: Hydrates and calms irritated skin while reducing redness.",
          "Turmeric (Curcuma longa): Known for its anti-inflammatory properties, it helps in reducing swelling and itching.",
          "Manjistha (Rubia cordifolia): A blood purifier that aids in detoxifying the body and promoting clear skin.",
        ],

        panchkarmatreatment: [
          "Virechana (Therapeutic Purging): Eliminates toxins and balances Pitta dosha, reducing skin inflammation.",
          "Raktamokshana (Bloodletting Therapy): Helps purify the blood and remove toxins responsible for skin disorders.",
          "Takradhara (Buttermilk Therapy): Cooling therapy that soothes eczema-prone skin and reduces burning sensations.",
          "Lepam (Herbal Paste Application): External application of Ayurvedic pastes like sandalwood and turmeric to heal skin lesions.",
        ],
      },

      dietRecommendations: {
        recommand: [
          "Include cooling foods like cucumber, coconut water, and bitter greens (bitter gourd, neem leaves).",
          "Consume anti-inflammatory spices such as turmeric, coriander, and fennel.",
          "Eat fiber-rich foods to aid digestion and detoxification.",
          "Drink plenty of warm water and herbal teas to flush out toxins.",
        ],

        avoid: [
          "Spicy, oily, and fried foods that aggravate Pitta.",
          "Dairy products that may trigger allergic reactions.",
          "Processed sugars and junk food that increase inflammation.",
          "Fermented and sour foods like pickles and vinegar.",
        ],

        lifestyle: [
          "Practice stress management through yoga, meditation, and deep breathing exercises.",
          "Use gentle, chemical-free skincare products with natural ingredients.",
          "Avoid hot showers and harsh soaps that strip natural moisture.",
          "Wear cotton clothing to reduce skin irritation.",
        ],
      },
      conclusion: [
        "By following these Ayurvedic treatments, dietary adjustments, and lifestyle changes, eczema can be effectively managed, reducing flare-ups and improving skin health over time.",
      ],
    },
    {
      id: "acne",
      title: "Acne",
      description:
        "Acne, known as Yauvan Pidika in Ayurveda, is a common skin condition caused by excess oil production, clogged pores, bacterial infections, and hormonal imbalances. Ayurveda considers acne as a result of aggravated Pitta and Kapha doshas, leading to inflammation and toxin buildup in the skin. The Ayurvedic approach focuses on detoxification, balancing internal heat, and maintaining skin clarity naturally.",
      ayurvedicApproach: {
        herbsremedies: [
          "Neem (Azadirachta indica): A natural antibacterial that helps reduce acne-causing bacteria.",
          "Turmeric (Curcuma longa): A potent anti-inflammatory and antioxidant that reduces redness and swelling.",
          "Amla (Indian Gooseberry): A rich source of Vitamin C that purifies the blood and prevents breakouts.",
          "Manjistha (Rubia cordifolia): A powerful blood purifier that helps clear skin from within.",
          "Sandalwood & Rose Water: Cooling ingredients that soothe acne-prone skin and prevent excess oil buildup.",
        ],
        panchkarmatreatment: [
          "Virechana (Therapeutic Purging): Helps eliminate excess Pitta and detoxifies the liver, reducing acne.",
          "Raktamokshana (Bloodletting Therapy): Clears toxins from the blood, improving skin clarity.",
          "Ubtan (Herbal Face Pack): A mixture of turmeric, sandalwood, and lentil flour to exfoliate and prevent breakouts.",
          "Abhyanga (Oil Massage): Using cooling herbal oils like coconut or Brahmi oil to calm skin inflammation.",
        ],
      },
      dietRecommendations: {
        recommand: [
          "Cooling foods like cucumber, coconut water, and fresh fruits (pomegranate, grapes, watermelon).",
          "Herbal teas with fennel, coriander, and licorice to balance Pitta.",
          "Leafy greens & fiber-rich foods to support digestion and toxin elimination.",
          "Omega-3-rich foods like flaxseeds and walnuts to reduce inflammation.",
        ],
        avoid: [
          "Spicy, oily, and deep-fried foods that aggravate Pitta and increase oil production.",
          "Dairy products (milk, cheese) that may trigger hormonal acne.",
          "Excess sugar and processed foods that lead to acne flare-ups.",
          "Caffeine and carbonated drinks that can dehydrate the skin and increase inflammation.",
        ],
        lifestyle: [
          "Maintain a consistent skincare routine using natural cleansers like rose water and aloe vera.",
          "Drink plenty of water to flush out toxins and keep the skin hydrated.",
          "Practice stress-relieving activities like yoga and meditation to prevent stress-induced acne.",
          "Avoid touching or popping pimples, which can spread bacteria and worsen breakouts.",
        ],
      },
      conclusion: [
        "By following Ayurvedic treatments, a balanced diet, and a mindful lifestyle, acne can be managed naturally, leading to clear and healthy skin.",
      ],
    },
    {
      id: "psoriasis",
      title: "Psoriasis",
      description:
        "Psoriasis, known as Kitibha Kushta in Ayurveda, is a chronic autoimmune skin disorder characterized by red, scaly patches, dryness, and itching. It is caused by an imbalance of Vata and Kapha doshas, leading to excessive skin cell production and toxin accumulation in the blood. Ayurveda treats psoriasis by detoxifying the body, balancing doshas, and improving skin health through internal and external therapies.",
      ayurvedicApproach: {
        herbsremedies: [
          "Neem (Azadirachta indica): A natural blood purifier that helps reduce skin inflammation and infections.",
          "Turmeric (Curcuma longa): Known for its anti-inflammatory and antioxidant properties, it helps in reducing redness and scaling.",
          "Manjistha (Rubia cordifolia): A potent blood detoxifier that promotes skin healing.",
          "Aloe Vera: Soothes irritated skin and provides deep hydration.",
          "Guduchi (Tinospora cordifolia): Strengthens the immune system and helps in managing autoimmune skin conditions.",
        ],
        panchkarmatreatment: [
          "Virechana (Therapeutic Purging): Helps eliminate toxins and balance Pitta, improving skin health.",
          "Raktamokshana (Bloodletting Therapy): Purifies the blood, reducing the severity of psoriasis symptoms.",
          "Takradhara (Buttermilk Therapy): A cooling therapy that soothes inflamed skin and reduces stress-induced flare-ups.",
          "Abhyanga (Herbal Oil Massage): Application of medicated oils like Mahamarichyadi oil or Neem oil to nourish and heal the skin.",
          "Lepam (Herbal Paste Application): External application of pastes made with sandalwood, turmeric, and aloe vera to reduce scaling and irritation.",
        ],
      },
      dietRecommendations: {
        recommand: [
          "Cooling foods like cucumber, coconut water, and fresh leafy greens.",
          "Bitter vegetables like bitter gourd, neem leaves, and turmeric to purify the blood.",
          "Whole grains like barley, quinoa, and millets to improve digestion.",
          "Herbal teas with coriander, fennel, and licorice for detoxification.",
        ],
        avoid: [
          "Spicy, salty, and fried foods that aggravate Pitta and worsen inflammation.",
          "Dairy products that can trigger immune responses and flare-ups.",
          "Red meat and seafood that increase toxins in the blood.",
          "Alcohol and caffeine that dehydrate the skin and trigger flare-ups.",
        ],
        lifestyle: [
          "Practice stress management through yoga, meditation, and pranayama (breathing exercises) to prevent stress-induced flare-ups.",
          "Avoid harsh soaps and hot water baths, which can dry out and irritate the skin.",
          "Wear loose cotton clothing to minimize irritation.",
          "Expose skin to mild sunlight for Vitamin D, but avoid excessive exposure to prevent burns.",
        ],
      },
      conclusion: [
        "By following Ayurvedic treatments, a clean diet, and a balanced lifestyle, psoriasis symptoms can be managed effectively, leading to long-term relief and improved skin health.",
      ],
    },
    {
      id: "hyperpigmentation",
      title: "Hyperpigmentation",
      description:
        "Hyperpigmentation, known as Vyanga in Ayurveda, is a condition where certain areas of the skin become darker due to excessive melanin production. It can be caused by sun exposure, hormonal imbalances, inflammation, or skin injuries. According to Ayurveda, an imbalance in Pitta dosha leads to excessive heat in the body, resulting in pigmentation and uneven skin tone. The Ayurvedic approach focuses on detoxification, cooling therapies, and nourishing treatments to restore skin balance and radiance.",
      ayurvedicApproach: {
        herbsremedies: [
          "Aloe Vera: A natural skin hydrator that reduces pigmentation and soothes the skin.",
          "Turmeric (Curcuma longa): Helps lighten dark spots and provides anti-inflammatory benefits.",
          "Sandalwood (Chandan): Cools the skin, evens out skin tone, and reduces blemishes.",
          "Manjistha (Rubia cordifolia): A powerful blood purifier that helps clear dark patches.",
          "Licorice (Mulethi): Inhibits excess melanin production and brightens the skin.",
          "Lemon & Honey Pack: Natural bleaching agents that lighten pigmentation over time.",
        ],
        panchkarmatreatment: [
          "Virechana (Therapeutic Purging): Cleanses toxins from the liver and improves skin clarity.",
          "Raktamokshana (Bloodletting Therapy): Purifies the blood and enhances skin glow.",
          "Ubtan (Herbal Face Pack): A blend of sandalwood, turmeric, and rose water for natural skin brightening.",
          "Takradhara (Buttermilk Therapy): Helps cool the body and reduce Pitta-related pigmentation.",
          "Abhyanga (Herbal Oil Massage): Application of medicated oils like Kumkumadi Tailam to restore skin balance.",
        ],
      },
      dietRecommendations: {
        recommand: [
          "Cooling foods like cucumber, coconut water, and fresh fruits (pomegranate, watermelon).",
          "Leafy greens like spinach, coriander, and mint to purify the blood.",
          "Vitamin C-rich foods such as oranges, amla, and tomatoes to reduce pigmentation.",
          "Herbal teas with fennel, licorice, and cardamom for detoxification.",
        ],
        avoid: [
          "Spicy, oily, and fried foods that aggravate Pitta and increase pigmentation.",
          "Excess sugar and processed foods that trigger inflammation.",
          "Caffeine and alcohol that dehydrate the skin and worsen dark spots.",
        ],
        lifestyle: [
          "Use natural sunscreens like aloe vera and sandalwood to protect from UV damage.",
          "Practice stress management through yoga, meditation, and deep breathing exercises.",
          "Follow a gentle skincare routine using herbal cleansers and moisturizers.",
          "Stay hydrated by drinking at least 8 glasses of water daily to flush out toxins.",
        ],
      },
      conclusion: [
        "By following Ayurvedic treatments, a clean diet, and a mindful lifestyle, hyperpigmentation can be managed naturally, leading to a brighter and even skin tone over time.",
      ],
    },
    {
      id: "urticaria",
      title: "Urticaria",
      description:
        "Urticaria, known as Sheetpitta in Ayurveda, is a skin condition characterized by red, itchy welts or hives that appear suddenly due to allergic reactions, stress, or environmental factors. It is primarily caused by an imbalance in Vata and Kapha doshas, along with aggravated Pitta, leading to inflammation, itching, and skin irritation. The Ayurvedic approach focuses on detoxification, cooling therapies, and strengthening immunity to prevent recurrent flare-ups.",
      ayurvedicApproach: {
        herbsremedies: [
          "Neem (Azadirachta indica): A natural blood purifier that reduces skin irritation and allergic reactions.",
          "Turmeric (Curcuma longa): A powerful anti-inflammatory herb that soothes itching and redness.",
          "Aloe Vera: Cools and hydrates the skin while reducing inflammation.",
          "Haridra Khand: An Ayurvedic formulation used to treat allergies and skin disorders.",
          "Manjistha (Rubia cordifolia): A blood purifier that helps eliminate toxins from the body.",
          "Coriander Juice: Acts as a natural antihistamine and provides cooling relief.",
        ],
        panchkarmatreatment: [
          "Virechana (Therapeutic Purging): Removes excess Pitta from the body, reducing allergic reactions.",
          "Raktamokshana (Bloodletting Therapy): Purifies the blood and reduces toxin buildup responsible for urticaria.",
          "Takradhara (Buttermilk Therapy): A cooling therapy that soothes the skin and reduces irritation.",
          "Abhyanga (Herbal Oil Massage): Using medicated oils like coconut or Brahmi oil to nourish and calm the skin.",
          "Lepam (Herbal Paste Application): External application of herbal pastes with sandalwood and turmeric to relieve itching.",
        ],
      },
      dietRecommendations: {
        recommand: [
          "Cooling foods like cucumber, coconut water, and fresh leafy greens.",
          "Anti-inflammatory herbs such as coriander, fennel, and licorice.",
          "Amla (Indian Gooseberry): Rich in Vitamin C, strengthens immunity and reduces allergic reactions.",
          "Bitter vegetables like bitter gourd and neem leaves to purify the blood.",
        ],
        avoid: [
          "Spicy, sour, and fried foods that aggravate Pitta and cause flare-ups.",
          "Dairy products that may trigger allergic reactions.",
          "Fermented foods like pickles and vinegar that can increase histamine levels.",
          "Processed and junk foods that introduce toxins into the body.",
        ],
        lifestyle: [
          "Avoid extreme temperatures, as heat and humidity can worsen symptoms.",
          "Practice relaxation techniques like yoga and meditation to reduce stress-induced hives.",
          "Use mild, chemical-free skincare products to prevent skin irritation.",
          "Wear loose, breathable clothing to reduce skin friction and irritation.",
        ],
      },
      conclusion: [
        "By following Ayurvedic treatments, dietary modifications, and lifestyle changes, urticaria can be effectively managed, reducing its frequency and severity.",
      ],
    },
    {
      id: "leprosy",
      title: "Leprosy",
      description:
        "Leprosy, known as Kushtha Roga in Ayurveda, is a chronic infectious disease caused by Mycobacterium leprae, affecting the skin, nerves, and mucous membranes. According to Ayurveda, leprosy results from imbalances in all three doshas (Vata, Pitta, and Kapha), along with an accumulation of toxins (Ama) in the blood and tissues. Ayurvedic treatment focuses on detoxification, immune strengthening, and skin rejuvenation through herbal therapies and lifestyle changes.",
      ayurvedicApproach: {
        herbsremedies: [
          "Neem (Azadirachta indica): A natural antimicrobial that purifies the blood and promotes wound healing.",
          "Turmeric (Curcuma longa): Reduces inflammation, fights bacterial infections, and promotes skin regeneration.",
          "Manjistha (Rubia cordifolia): A powerful blood purifier that helps detoxify the system.",
          "Guduchi (Tinospora cordifolia): Boosts immunity and aids in nerve healing.",
          "Amla (Indian Gooseberry): Rich in Vitamin C, helps strengthen the immune system and detoxify the body.",
          "Bakuchi (Psoralea corylifolia): Traditionally used to treat skin disorders and promote pigmentation in affected areas.",
        ],
        panchkarmatreatment: [
          "Virechana (Therapeutic Purging): Cleanses excess Pitta and toxins from the liver and blood.",
          "Raktamokshana (Bloodletting Therapy): Removes impurities from the blood, improving skin conditions.",
          "Snehapana (Internal Oleation): Involves consuming medicated ghee to nourish the body and support nerve healing.",
          "Abhyanga (Herbal Oil Massage): Application of medicated oils like Mahamarichyadi oil to soothe nerve damage and skin lesions.",
          "Swedana (Herbal Steam Therapy): Opens pores, promotes circulation, and eliminates toxins through sweat.",
        ],
      },
      dietRecommendations: {
        recommand: [
          "Fresh, organic fruits and vegetables to support detoxification and skin health.",
          "Bitter foods like neem leaves, bitter gourd, and turmeric to cleanse the blood.",
          "Hydrating fluids like coconut water, herbal teas, and aloe vera juice.",
          "High-protein foods like lentils and nuts to support tissue repair and immune function.",
        ],
        avoid: [
          "Heavy, oily, and fried foods that increase Kapha and slow healing.",
          "Fermented and processed foods that may aggravate Pitta and worsen inflammation.",
          "Dairy products that can lead to excess mucus production and slow detoxification.",
          "Sugary foods and alcohol that weaken the immune system and promote bacterial growth.",
        ],
        lifestyle: [
          "Maintain personal hygiene to prevent further infections.",
          "Sun exposure in moderation to promote Vitamin D production for nerve and skin healing.",
          "Practice meditation and yoga to strengthen mental resilience and reduce stress.",
          "Use Ayurvedic herbal pastes like neem and sandalwood to promote skin healing.",
        ],
      },
      conclusion: [
        "By following Ayurvedic principles, personalized treatments, and a balanced lifestyle, leprosy symptoms can be managed effectively, promoting long-term skin and nerve health.",
      ],
    },
    {
      id: "vitiligo",
      title: "Vitiligo",
      description:
        "Vitiligo, known as Shwitra or Kilasa in Ayurveda, is a skin disorder characterized by the loss of melanin, leading to white patches on the skin. According to Ayurveda, it is caused by an imbalance in Pitta dosha, which disrupts melanin production, along with the accumulation of toxins (Ama) in the body. The Ayurvedic approach focuses on detoxifying the system, balancing doshas, and stimulating melanin production through herbal and Panchakarma therapies.",
      ayurvedicApproach: {
        herbsremedies: [
          "Bakuchi (Psoralea corylifolia): A well-known herb that promotes repigmentation and stimulates melanin production.",
          "Neem (Azadirachta indica): A natural blood purifier that helps remove toxins from the body.",
          "Manjistha (Rubia cordifolia): Supports blood detoxification and enhances skin tone.",
          "Haritaki (Terminalia chebula): A powerful detoxifier that improves skin health.",
          "Khadira (Acacia catechu): Used in Ayurvedic formulations to treat skin discoloration.",
          "Amla (Indian Gooseberry): Rich in Vitamin C, helps in rejuvenating skin cells and restoring pigmentation.",
        ],
        panchkarmatreatment: [
          "Virechana (Therapeutic Purging): Detoxifies the liver and purifies the blood, reducing toxin buildup.",
          "Raktamokshana (Bloodletting Therapy): Helps in removing impure blood and improving skin health.",
          "Swedana (Herbal Steam Therapy): Opens pores, improves circulation, and aids in toxin elimination.",
          "Abhyanga (Herbal Oil Massage): Application of medicated oils like Bakuchi oil to promote pigmentation.",
          "Lepam (Herbal Paste Application): External application of pastes made from Bakuchi, turmeric, and Manjistha to affected areas.",
        ],
      },
      dietRecommendations: {
        recommand: [
          "Copper-enriched water: Drinking water stored overnight in a copper vessel helps balance melanin production.",
          "Leafy greens and fruits like pomegranate, carrots, and beets for blood purification.",
          "Bitter foods like neem and turmeric to cleanse the body.",
          "Whole grains and pulses to support digestion and skin health.",
        ],
        avoid: [
          "Dairy products that can aggravate skin disorders.",
          "Citrus fruits and sour foods that may disrupt Pitta balance.",
          "Processed and junk foods that introduce toxins into the body.",
          "Spicy, salty, and fermented foods that may slow down pigmentation recovery.",
        ],
        lifestyle: [
          "Sun exposure in moderation to activate melanin production (early morning sunlight is best).",
          "Reduce stress through yoga, meditation, and pranayama to prevent autoimmune responses.",
          "Maintain a regular detox routine with Ayurvedic herbs and herbal teas.",
          "Avoid chemical-based cosmetics that may trigger further depigmentation.",
        ],
      },
      conclusion: [
        "By following Ayurvedic treatments, a proper diet, and a mindful lifestyle, vitiligo can be managed effectively, helping restore skin pigmentation and balance.",
      ],
    },
    {
      id: "hairfall",
      title: "Hairfall",
      description:
        "Hair fall, known as Khalitya in Ayurveda, is a common condition that can affect both men and women. Ayurveda takes a holistic approach to hair fall by focusing on balancing the doshas (Vata, Pitta, Kapha), improving digestion (Agni), and nourishing the scalp and hair from the inside out. The condition is most often linked to Pitta dosha imbalance, which causes inflammation in the scalp and weakens hair roots, though Vata (dryness, stress) and Kapha (oiliness, congestion) can also contribute.",
      ayurvedicApproach: {
        herbsremedies: [
          "Amla (Indian Gooseberry): Rich in vitamin C and antioxidants, strengthens hair follicles.",
          "Bhringraj: Promotes hair growth and reduces hair fall through its rejuvenating properties.",
          "Brahmi: Calms the mind and reduces stress-related hair loss.",
          "Ashwagandha: An adaptogen that balances stress hormones affecting hair health.",
          "Triphala: Detoxifies the body and improves digestion for better nutrient absorption.",
          "Bhringraj oil: Rejuvenates scalp and promotes healthy hair growth.",
          "Neeli (Indigo) oil: Cools the scalp and helps maintain hair color.",
          "Coconut oil with curry leaves: Nourishes and strengthens hair from root to tip.",
          "Castor oil: Thickens hair and supports strong hair roots."
        ],
        panchkarmatreatment: [
          "Shirodhara: Warm oil poured on the forehead to calm the mind and reduce stress-related hair fall.",
          "Nasya: Herbal oils administered through the nose to balance doshas affecting hair health.",
          "Basti: Detoxification via medicated enemas to balance doshas internally.",
          "Abhyanga: Therapeutic oil massage focusing on the scalp to improve circulation.",
          "Shiro Abhyanga: Specialized head massage with medicated oils to strengthen hair roots."
        ],
      },
      dietRecommendations: {
        recommand: [
          "Pitta-pacifying foods: Cooling foods like coconut, amla, cucumber, and leafy greens.",
          "Buttermilk and yogurt for their cooling properties.",
          "Fresh fruits and vegetables rich in vitamins and minerals.",
          "Herbal teas, especially Brahmi or Bhringraj tea.",
          "Plenty of water to stay hydrated and flush out toxins."
        ],
        avoid: [
          "Spicy, oily, and fried foods that aggravate Pitta.",
          "Alcohol and caffeine that can dehydrate the scalp.",
          "Red meat and processed foods that increase inflammation.",
          "Excess salt and sugar that can disrupt mineral balance.",
          "Hot and spicy foods that can increase body heat."
        ],
        lifestyle: [
          "Practice stress management through yoga and meditation.",
          "Perform pranayama, especially Anulom Vilom and Bhramari.",
          "Maintain regular sleep schedule and avoid late nights.",
          "Use natural hair care products like Shikakai and Reetha.",
          "Avoid harsh chemical treatments and heat styling.",
          "Comb hair gently and avoid tight hairstyles.",
          "Let hair air-dry naturally when possible.",
          "Protect hair from excessive sun exposure."
        ],
      },
      conclusion: [
        "By following these Ayurvedic treatments, dietary modifications, and lifestyle changes, hair fall can be effectively managed. The key is to address the root cause through a balanced approach that includes proper nutrition, stress management, and gentle hair care practices. Regular use of herbal remedies and oils, combined with appropriate Panchakarma treatments, can help restore hair health and promote natural growth."
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
          What is {disorder.title} ?
        </p>
        <p className="text-[#757575] text-justify mt-4">
          {disorder.description}
        </p>

        <p className="text-[#757575] text-[32px] font-semibold mt-10 mb-6">
          Ayurvedic Approach & Panchakarma Treatments
        </p>
        <p className="text-[#757575] mt-6">1. Ayurvedic Herbs & Remedies</p>
        <ul className="list-disc list-inside ml-3 mt-4 text-[20px] text-[#757575]">
          {disorder.ayurvedicApproach.herbsremedies.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="text-[#757575] mt-6">2. Panchakarma Treatments</p>
        <ul className="list-disc list-inside ml-3 mt-4 text-[20px] text-[#757575]">
          {disorder.ayurvedicApproach.panchkarmatreatment.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p className="text-[#757575] text-[32px] font-semibold mt-10">
          Dietary & Lifestyle Recommendations
        </p>
        <p className="text-[#757575]  font-bold mt-10">1. Recommended Foods</p>
        <ul className="list-disc list-inside ml-3 mt-4 text-[20px] text-[#757575]">
          {disorder.dietRecommendations.recommand.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="text-[#757575] font-bold mt-5">2. Foods to Avoid</p>
        <ul className="list-disc list-inside ml-3 text-[20px] mt-4 text-[#757575]">
          {disorder.dietRecommendations.avoid.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="text-[#757575] font-bold mt-10">3. Lifestyle Changes</p>
        <ul className="list-disc list-inside ml-3 mt-4 text-[20px] text-[#757575]">
          {disorder.dietRecommendations.lifestyle.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
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

export default SkinHairDetails;
