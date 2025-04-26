import React from "react";
import { assets } from "../../assets/assets";
import { useParams } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function LifestyleDetails() {
  const { disorderId } = useParams(); // Get disorderId from URL
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();

  const disorders = [
    {
      id: "obesity",
      title: "Obesity",
      description:
        "Obesity is a condition characterized by excessive fat accumulation in the body, leading to increased health risks such as diabetes, hypertension, heart disease, and joint disorders. It occurs due to an imbalance between calorie intake and energy expenditure, often influenced by poor dietary habits, sedentary lifestyles, stress, and genetic factors. According to Ayurveda, obesity (Sthoulya) is primarily caused by an aggravated Kapha dosha, leading to sluggish metabolism and excessive fat storage. If left untreated, obesity can severely impact overall health, reducing energy levels and increasing the risk of chronic illnesses.",
      ayurvedicDiscription: [
        "In Ayurveda, obesity is treated by balancing the doshas, enhancing metabolism, and detoxifying the body. Panchakarma therapies such as Udwartana (herbal powder massage), Vamana (therapeutic emesis), and Lekhana Basti (medicated enema) help in reducing excess fat, improving digestion, and boosting overall metabolism. Herbal formulations like Triphala, Guggulu, and Medohara Dravyas aid in fat metabolism and weight management.",
      ],
      dietRecommendations: [
        "Consume warm, light, and Kapha-pacifying foods like barley, millet, green leafy vegetables, and legumes.",
        "Avoid processed foods, excess carbohydrates, and dairy products that increase Kapha.",
        "Drink herbal teas like ginger, cinnamon, and green tea to boost metabolism.",
        "Practice daily physical activities like brisk walking, yoga (Surya Namaskar, Kapalbhati), and strength training.",
        "Maintain a regular sleep schedule and avoid stress to prevent hormonal imbalances contributing to weight gain.",
      ],
    },
    {
      id: "diabetes-mellitus",
      title: "Diabetes Mellitus & Its Complications",
      description:
        "Diabetes Mellitus is a chronic metabolic disorder characterized by high blood sugar levels due to insufficient insulin production or the body’s inability to use insulin effectively. It is primarily classified into Type 1 Diabetes (autoimmune destruction of insulin-producing cells) and Type 2 Diabetes (insulin resistance due to lifestyle factors). If left unmanaged, diabetes can lead to severe complications, including neuropathy (nerve damage), nephropathy (kidney damage), retinopathy (vision loss), cardiovascular diseases, and diabetic foot ulcers. According to Ayurveda, diabetes (Madhumeha) is caused by an imbalance in Kapha and Vata doshas, leading to improper digestion and metabolism of sugars.",
      ayurvedicDiscription: [
        "Ayurvedic treatments focus on controlling blood sugar levels, improving insulin sensitivity, and preventing complications through herbal formulations, detoxification, and dietary modifications. Panchakarma therapies such as Virechana (therapeutic purgation), Basti (medicated enema), and Raktamokshana (bloodletting therapy) help in detoxifying the body and improving metabolism. Herbs like Guduchi, Vijaysar, Jamun, Karela (bitter gourd), and Methi (fenugreek) are known to regulate blood sugar levels effectively.",
      ],
      dietRecommendations: [
        "Follow a low-glycemic diet with whole grains, green leafy vegetables, pulses, and bitter foods like bitter gourd and neem.",
        "Avoid refined sugars, processed foods, excess dairy, and high-carb meals that spike blood sugar levels.",
        "Consume Ayurvedic herbal teas like cinnamon, fenugreek, and turmeric-infused water to enhance insulin sensitivity.",
        "Engage in regular physical activity like yoga (Paschimottanasana, Dhanurasana), brisk walking, and light strength training to improve glucose metabolism.",
        "Manage stress with meditation, deep breathing (Pranayama), and adequate sleep, as stress can elevate blood sugar levels.",
      ],
    },
    {
      id: "cholesterol",
      title: "Cholesterol & Its Treatment",
      description:
        "Cholesterol is a fatty substance essential for various bodily functions, but excessive levels, particularly LDL (low-density lipoprotein) or 'bad' cholesterol, can lead to serious health issues like atherosclerosis, heart attacks, and strokes. High cholesterol is often caused by a poor diet, sedentary lifestyle, stress, and genetic predisposition. According to Ayurveda, high cholesterol is linked to an imbalance in Kapha and Meda Dhatu (fat tissue), leading to improper fat metabolism and blockages in the circulatory system. If unmanaged, it can contribute to complications like hypertension, liver dysfunction, and obesity.",
      ayurvedicDiscription: [
        "Ayurvedic treatment focuses on improving digestion, balancing doshas, and reducing excess fat accumulation in the body. Panchakarma therapies such as Virechana (therapeutic purgation), Udwartana (herbal powder massage), and Basti (medicated enema) help remove toxins and improve lipid metabolism. Herbs like Guggulu, Arjuna, Triphala, and Garlic are known to lower cholesterol levels and enhance heart health. Ayurvedic formulations such as Medohar Guggulu and Arjuna Churna help maintain healthy lipid levels.",
      ],
      dietRecommendations: [
        "Include high-fiber foods like oats, whole grains, flaxseeds, and leafy vegetables to aid cholesterol metabolism.",
        "Avoid fried foods, processed oils, excessive dairy, and refined sugars that increase LDL cholesterol.",
        "Consume healthy fats like nuts, seeds, olive oil, and ghee in moderation to boost HDL (good cholesterol).",
        "Drink herbal infusions like green tea, cinnamon tea, and garlic water to support heart health.",
        "Engage in regular exercise such as yoga (Bhujangasana, Ardha Matsyendrasana), brisk walking, and cardio workouts to improve circulation and fat metabolism.",
        "Practice stress management techniques like meditation and deep breathing (Anulom Vilom) to reduce cortisol levels, which can impact cholesterol balance.",
      ],
    },
    {
      id: "hypertension",
      title: "Hypertension & Its Treatment",
      description:
        "Hypertension, or high blood pressure, is a chronic condition where blood pressure levels remain elevated, increasing the risk of heart disease, stroke, kidney damage, and vision problems. It is often caused by stress, poor diet, obesity, sedentary lifestyle, and excessive salt intake. According to Ayurveda, hypertension is linked to an imbalance in Vata and Pitta doshas, leading to increased blood pressure, nervous system stress, and inflammation in the blood vessels. If left untreated, it can cause severe cardiovascular complications.",
      ayurvedicDiscription: [
        "Ayurveda focuses on calming the nervous system, improving circulation, and balancing doshas to control hypertension. Panchakarma therapies such as Shirodhara (medicated oil therapy), Virechana (therapeutic purgation), and Basti (medicated enema) help in detoxification and stress reduction. Herbal remedies like Sarpagandha, Arjuna, Brahmi, Ashwagandha, and Jatamansi help in maintaining stable blood pressure levels and promoting relaxation.",
      ],
      dietRecommendations: [
        "Follow a low-sodium, high-potassium diet with fresh fruits, vegetables, whole grains, and nuts like almonds and walnuts.",
        "Avoid processed foods, excessive caffeine, alcohol, and spicy or fried foods that aggravate Pitta and Vata.",
        "Drink herbal teas such as hibiscus, chamomile, and Ashwagandha tea to promote relaxation and healthy circulation.",
        "Engage in regular physical activities like yoga (Shavasana, Anulom Vilom, Balasana) and light cardio to improve heart health.",
        "Manage stress with meditation, deep breathing (Pranayama), and mindful relaxation techniques to reduce cortisol levels and support heart function.",
        "Maintain a regular sleep schedule to regulate blood pressure naturally.",
      ],
    },
    {
      id: "insomnia",
      title: "Insomnia & Its Treatment",
      description:
        "Insomnia is a common sleep disorder characterized by difficulty falling asleep, staying asleep, or waking up too early and not being able to fall back asleep. It leads to daytime fatigue, irritability, and difficulty concentrating, and can be caused by factors like stress, anxiety, poor sleep habits, underlying health conditions, or hormonal imbalances. In Ayurveda, insomnia (Anidra) is often linked to an imbalance in Vata and Pitta doshas, causing restlessness, excessive thinking, and an overactive mind. Long-term insomnia can lead to more serious issues, including depression, weakened immunity, and high blood pressure.",
      ayurvedicDiscription: [
        "Ayurveda treats insomnia by calming the nervous system, balancing doshas, and promoting deep, restful sleep. Panchakarma therapies such as Shirodhara (medicated oil therapy on the forehead), Abhyanga (warm oil massage), and Nasya (nasal therapy with herbal oils) help relax the mind, relieve stress, and encourage proper sleep. Herbs like Brahmi, Ashwagandha, Jatamansi, Shankhapushpi, and Tagara are well-known for their calming and sleep-promoting properties. These herbs help reduce anxiety, promote mental clarity, and support restful sleep.",
      ],
      dietRecommendations: [
        "Consume warm, light meals in the evening, avoiding heavy or spicy foods that can disrupt digestion and sleep.",
        "Drink herbal teas such as chamomile, lavender, or warm milk with turmeric to promote relaxation.",
        "Avoid caffeine, alcohol, and excessive sugar, as they can interfere with sleep cycles and cause restlessness.",
        "Engage in daily physical activity like yoga (Viparita Karani, Supta Baddha Konasana) or gentle stretching to relieve tension and prepare the body for sleep.",
        "Practice mindfulness meditation, deep breathing (Pranayama), or progressive muscle relaxation to calm the mind and body before bedtime.",
        "Create a consistent sleep schedule, going to bed and waking up at the same time each day, and ensuring a quiet, dark, and comfortable sleep environment.",
      ],
    },
    {
      id: "anxiety-disorder",
      title: "Anxiety Disorder & Its Treatment",
      description:
        "Anxiety disorder is characterized by excessive worry, fear, and nervousness, often accompanied by physical symptoms like rapid heartbeat, sweating, restlessness, and difficulty concentrating. It can be triggered by stress, trauma, genetics, or a chemical imbalance in the brain. In Ayurveda, anxiety is linked to an imbalance in Vata dosha, particularly the sub-dosha Vyana Vata, which governs the nervous system. Anxiety results from excessive movement and stimulation in the mind and body, leading to feelings of agitation and unrest. If left untreated, anxiety can contribute to chronic stress, insomnia, digestive issues, and other mental health problems.",
      ayurvedicDiscription: [
        "Ayurvedic treatments aim to calm the mind, balance the doshas, and restore mental tranquility. Panchakarma therapies such as Shirodhara (medicated oil poured on the forehead), Abhyanga (warm oil massage), and Nasya (nasal therapy) help to relieve stress, enhance relaxation, and improve mental clarity. Herbs like Ashwagandha, Brahmi, Jatamansi, Shankhapushpi, and Tagara are known for their adaptogenic and calming effects, reducing anxiety and improving the ability to handle stress. Regular use of these herbs in appropriate formulations can help restore mental balance and emotional stability.",
      ],
      dietRecommendations: [
        "Follow a Vata-pacifying diet that includes warm, nourishing foods like soups, stews, root vegetables, and whole grains.",
        "Avoid excessive caffeine, sugar, and processed foods, as they can heighten nervousness and irritability.",
        "Drink herbal teas such as chamomile, valerian root, and lavender to calm the mind and promote relaxation.",
        "Engage in regular physical activity like yoga (Dhanurasana, Sukhasana, and Anulom Vilom Pranayama) and mindfulness exercises to reduce stress and anxiety.",
        "Practice meditation and deep breathing techniques (like Bhramari Pranayama) to focus the mind and create a sense of peace.",
        "Ensure adequate sleep, maintain a regular sleep schedule, and reduce exposure to stressors before bedtime for better mental health.",
      ],
    },
    {
      id: "hyperthyroidism-hypothyroidism",
      title: "Hyperthyroidism & Hypothyroidism Treatment",
      description:
        "Both hyperthyroidism and hypothyroidism are disorders of the thyroid gland, which regulates metabolism through the production of thyroid hormones. Hyperthyroidism occurs when the thyroid produces an excessive amount of thyroid hormones, leading to symptoms like weight loss, rapid heartbeat, anxiety, and excessive sweating. It is often caused by autoimmune conditions like Graves' disease or thyroid nodules. Hypothyroidism, on the other hand, is characterized by insufficient thyroid hormone production, leading to symptoms such as fatigue, weight gain, cold intolerance, and depression. It is often caused by Hashimoto’s thyroiditis or iodine deficiency. In Ayurveda, both conditions are associated with imbalances in Vata and Pitta doshas, affecting metabolism and energy levels.",
      ayurvedicDiscription: [
        "Ayurvedic treatment for thyroid disorders focuses on balancing the doshas, detoxifying the body, and supporting proper metabolism. For hyperthyroidism, Panchakarma therapies like Vamana (therapeutic emesis), Virechana (therapeutic purgation), and Basti (medicated enema) help reduce excess Pitta and calm overactive systems. For hypothyroidism, therapies like Udvartana (herbal powder massage), Swedana (steam therapy), and Basti help stimulate thyroid function and balance metabolism. Herbal remedies such as Ashwagandha, Guggulu, Triphala, Shankhapushpi, and Kachnar are known to regulate thyroid activity, either by stimulating the gland (for hypothyroidism) or soothing overactivity (for hyperthyroidism).",
      ],
      ayurvedicApproach: [],
      dietRecommendations: [
        "For Hyperthyroidism, avoid spicy foods, caffeine, and excess stimulants that can increase Pitta. Focus on cool, calming foods like cucumbers, dairy products, and leafy greens.",
        "For Hypothyroidism, include iodine-rich foods like seaweed, seafood, and iodized salt. Focus on warming, grounding foods like root vegetables, oats, and healthy fats like ghee.",
        "Drink herbal teas like Ashwagandha, Triphala, or holy basil (Tulsi) to help regulate thyroid activity and balance the doshas.",
        "Practice yoga and pranayama (such as Kapalbhati and Bhastrika) to stimulate metabolism, improve energy levels, and promote overall wellness.",
        "Engage in regular physical activity to support thyroid function, particularly gentle exercises like walking, swimming, or yoga.",
      ],
    },
    {
      id: "stress-Related",
      title: "Stress-Related Disorders Treatment",
      description:
        "Stress-related disorders encompass a range of conditions that occur when the body is unable to manage or cope with emotional or physical stress. These can include anxiety, depression, insomnia, digestive problems, headaches, and cardiovascular issues. Chronic stress can lead to imbalances in the body’s nervous, hormonal, and immune systems, resulting in both mental and physical health problems. Ayurveda views stress as a disturbance in Vata and Pitta doshas, leading to excessive mental and physical activity, which affects the body’s natural balance. Left untreated, stress-related disorders can severely impact quality of life and lead to chronic diseases.",
      ayurvedicDiscription: [
        "Ayurveda treats stress-related disorders by promoting relaxation, restoring mental clarity, and balancing the doshas. Panchakarma therapies like Shirodhara (medicated oil therapy), Abhyanga (warm oil massage), and Nasya (nasal therapy with herbal oils) help to calm the mind, alleviate physical tension, and improve overall well-being. Herbs such as Ashwagandha, Brahmi, Jatamansi, Shankhapushpi, and Licorice are known for their adaptogenic and calming properties, helping to reduce stress, improve resilience, and restore emotional stability. These treatments help to relax the nervous system, restore balance, and prevent stress from manifesting as physical or mental disorders.",
      ],
      dietRecommendations: [
        "Follow a Vata-pacifying diet that includes nourishing foods like warm soups, stews, whole grains, and root vegetables to calm the nervous system.",
        "Avoid caffeine, sugar, and processed foods, as they can aggravate stress levels and lead to energy crashes.",
        "Drink herbal teas like chamomile, lavender, or Ashwagandha tea to promote relaxation and reduce anxiety.",
        "Engage in regular yoga practice (such as Sukhasana, Child’s Pose, and Shavasana) and breathing exercises (Pranayama) like Bhramari and Anulom Vilom to calm the mind and improve mental clarity.",
        "Incorporate mindfulness meditation or guided relaxation techniques into your daily routine to reduce stress and increase emotional resilience.",
        "Ensure adequate sleep by following a regular sleep schedule and creating a calm, quiet environment conducive to restful sleep.",
      ],
    },
    {
      id: "fatty-liver",
      title: "Fatty Liver Treatment",
      description:
        "Fatty liver disease, or hepatic steatosis, is a condition where excess fat builds up in the liver cells, leading to liver dysfunction. It can be classified into alcoholic fatty liver disease (AFLD) and non-alcoholic fatty liver disease (NAFLD), with the latter often linked to obesity, poor diet, diabetes, and high cholesterol. Symptoms may include fatigue, abdominal discomfort, and jaundice, though many people experience no noticeable symptoms. Ayurveda attributes fatty liver to an imbalance in Kapha dosha, leading to sluggish digestion and the accumulation of toxins in the liver. If untreated, fatty liver can progress to cirrhosis or liver failure.",
      ayurvedicDiscription: [
        "Ayurveda treats fatty liver by improving digestion, balancing the doshas, and detoxifying the liver. Panchakarma therapies such as Virechana (therapeutic purgation), Basti (medicated enema), and Abhyanga (oil massage) help to cleanse the liver and restore metabolic balance. Herbs like Kutki, Kalmegh, Triphala, Turmeric, and Dandelion root are effective in detoxifying the liver, reducing fat accumulation, and supporting overall liver health. Additionally, liver rejuvenating formulas like Liv 52 or Kanchanar Guggulu are often used to help restore normal liver function.",
      ],
      dietRecommendations: [
        "Consume liver-friendly foods such as leafy greens, beets, artichokes, citrus fruits, and garlic to help detoxify the liver and support its function.",
        "Avoid alcohol, fried foods, excessive fats, and sugary foods, as they can contribute to fat accumulation in the liver.",
        "Drink herbal teas like dandelion root tea, milk thistle, and turmeric-infused water to support liver detoxification.",
        "Engage in regular exercise like yoga (Bhujangasana, Trikonasana) or aerobic activities to promote fat burning and improve metabolism.",
        "Practice stress management techniques like meditation, deep breathing, and mindfulness, as chronic stress can exacerbate liver issues.",
        "Ensure adequate hydration to support the body’s detoxification processes and keep the liver functioning properly.",
      ],
    },
    {
      id: "depression",
      title: "Depression Treatment",
      description:
        "Depression is a mental health disorder characterized by persistent feelings of sadness, hopelessness, and a lack of interest in daily activities. It affects mood, thoughts, and physical health, leading to symptoms such as fatigue, changes in appetite, trouble sleeping, and feelings of worthlessness. Depression can be caused by genetic factors, hormonal changes, traumatic events, or prolonged stress. In Ayurveda, depression is often associated with an imbalance in Vata and Pitta doshas, leading to disturbed emotions and a disturbed mind. If left untreated, depression can significantly affect overall well-being, making it difficult to function in daily life.",
      ayurvedicDiscription: [
        "Ayurvedic treatment for depression focuses on balancing the mind and body, restoring emotional equilibrium, and reducing stress. Panchakarma therapies like Shirodhara (medicated oil therapy on the forehead), Abhyanga (warm oil massage), and Basti (medicated enema) help relieve mental tension, calm the nervous system, and rejuvenate the body. Herbs like Ashwagandha, Brahmi, Jatamansi, Shankhapushpi, and Turmeric are commonly used in Ayurveda to improve mental clarity, reduce anxiety, and promote emotional balance. These herbs help calm the nervous system and regulate the body's natural energy flow, reducing the symptoms of depression.",
      ],
      dietRecommendations: [
        "Follow a nourishing, grounding diet rich in whole grains, root vegetables, fruits, and foods that support the nervous system, such as almonds, walnuts, and ghee.",
        "Avoid processed, heavy, or overly spicy foods that can worsen Pitta imbalances and exacerbate depressive symptoms.",
        "Drink herbal teas such as Chamomile, Brahmi, and Ashwagandha to calm the mind and promote relaxation.",
        "Engage in regular physical activity such as yoga (Sukhasana, Vajrasana, and Pranayama) and walking to release tension and improve mood.",
        "Practice mindfulness meditation and breathing exercises (Pranayama) to help clear the mind, enhance emotional well-being, and foster a sense of inner peace.",
        "Ensure adequate rest and sleep by following a consistent sleep routine and creating a relaxing environment before bedtime.",
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
        <h1 className="text-[#394E29] font-bold text-3xl md:text-4xl lg:text-5xl max-[450px]:text-xl px-4 text-center">

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
        <p className="text-[#757575] mt-6 mb-4">
          {disorder.ayurvedicDiscription}
        </p>
        <p className="text-[#757575] text-[32px] font-semibold mt-10">
          Dietary & Lifestyle Recommendations
        </p>
        <ul className="list-disc list-outside ml-3 mt-4 text-[20px] text-[#757575]">
          {disorder.dietRecommendations.map((item, index) => (
            <li key={index} className="mb-4">{item}</li>
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

export default LifestyleDetails;
