import React from "react";
import { assets } from "../../assets/assets";
import { useParams } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function FemaleDetails() {
  const { disorderId } = useParams(); // Get disorderId from URL
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();
  const disorders = [
    {
      id: "menstrual-disorders",
      title: "Menstrual Disorders",
      description:
        "Menstrual disorders refer to various conditions that affect the normal menstrual cycle, causing irregular, painful, or excessively heavy periods. Common menstrual disorders include dysmenorrhea (painful periods), menorrhagia (heavy bleeding), oligomenorrhea (infrequent periods), and amenorrhea (absence of periods). These conditions can result from hormonal imbalances, stress, lifestyle factors, or underlying health issues. Proper diagnosis and treatment are essential to maintain reproductive health and overall well-being.",
      ayurvedicDiscription: [
        "Ayurveda views menstrual disorders as an imbalance of the body's three doshas—Vata, Pitta, and Kapha. It emphasizes restoring harmony through herbal remedies, detoxification, and lifestyle modifications. Panchakarma therapies such as Virechana (therapeutic purgation) and Basti (medicated enema) help cleanse toxins, regulate hormonal balance, and improve reproductive health. Additionally, Abhyanga (therapeutic oil massage) and Shirodhara (oil flow therapy) can help reduce stress and improve circulation.",
      ],
      ayurvedicApproach: [],
      dietRecommendations: [
        "Diet: Include warm, easily digestible foods like cooked vegetables, whole grains, and herbal teas. Avoid processed foods, excessive caffeine, and cold beverages.",
        "Herbs: Ashoka, Shatavari, and Aloe Vera help balance hormones and regulate the menstrual cycle.",
        "Lifestyle: Practice yoga and meditation to reduce stress, get adequate sleep, and maintain a consistent daily routine. Avoid excessive physical exertion and ensure proper hydration for overall well-being.",
      ],
    },
    {
      id: "pcos",
      title: "Polycystic Ovary Syndrome (PCOS)",
      description:
        "Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder affecting women of reproductive age. It is characterized by irregular menstrual cycles, excessive androgen levels, and the presence of multiple small cysts in the ovaries. PCOS can lead to symptoms such as weight gain, acne, hair thinning, and difficulty in conception. If left untreated, it may increase the risk of diabetes, heart disease, and other metabolic disorders. Managing PCOS requires a holistic approach that includes lifestyle modifications, dietary changes, and natural therapies.",
      ayurvedicDiscription: [
        "Ayurveda considers PCOS a result of an imbalance in the Kapha and Vata doshas, leading to hormonal disturbances and metabolic dysfunction. The treatment focuses on detoxifying the body, balancing hormones, and improving ovarian function.",
      ],
      ayurvedicApproach: [
        "Vamana (Therapeutic emesis) – Helps remove excess Kapha from the body.",
        "Virechana (Purgation therapy) – Detoxifies the liver and regulates hormones.",
        "Basti (Medicated enema) – Balances Vata and improves reproductive health.",
        "Udvartana (Herbal powder massage) – Helps manage obesity and insulin resistance, common in PCOS.",
      ],
      dietRecommendations: [
        "Diet: Consume a diet rich in fiber, lean proteins, and healthy fats. Include whole grains, fresh fruits, green leafy vegetables, and Ayurvedic herbs like Shatavari, Triphala, and Cinnamon to regulate hormones. Avoid processed foods, dairy, refined sugars, and excessive caffeine.",
        "Lifestyle: Maintain a regular exercise routine, including yoga and pranayama, to manage weight and reduce stress. Establish a consistent sleep schedule and practice meditation to balance the mind and body.",
      ],
    },
    {
      id: "pcod",
      title: "Polycystic Ovarian Disease (PCOD)",
      description:
        "Polycystic Ovarian Disease (PCOD) is a hormonal disorder in which the ovaries produce an excess of immature eggs, leading to irregular periods, hormonal imbalances, weight gain, acne, and excessive hair growth. It is primarily caused by poor lifestyle choices, stress, and insulin resistance. If left untreated, PCOD can affect fertility and increase the risk of metabolic disorders such as diabetes and hypertension. A holistic approach that includes Ayurvedic treatments, proper diet, and lifestyle modifications can help manage PCOD effectively.",
      ayurvedicDiscription: [
        "According to Ayurveda, PCOD results from an imbalance in Kapha and Vata doshas, leading to toxin accumulation, sluggish metabolism, and hormonal irregularities. Panchakarma therapies help detoxify the body and restore balance.",
      ],
      ayurvedicApproach: [
        "Virechana (Purgation therapy) – Detoxifies the liver and balances hormones.",
        "Basti (Medicated enema) – Helps regulate the menstrual cycle and improves reproductive health.",
        "Udvartana (Herbal powder massage) – Reduces excess weight and improves metabolism.",
        "Nasya (Nasal therapy) – Helps regulate hormonal functions and improve mental clarity.",
      ],
      dietRecommendations: [
        "Diet: Consume a balanced diet rich in fiber, fresh fruits, vegetables, and whole grains. Include Ayurvedic herbs like Shatavari, Triphala, and Fenugreek to support hormonal balance. Avoid refined sugars, dairy, deep-fried foods, and processed snacks.",
        "Lifestyle: Engage in regular physical activity, including yoga and meditation, to manage stress and maintain a healthy weight. Prioritize adequate sleep and follow a daily routine to enhance overall well-being.",
      ],
    },
    {
      id: "uterine-fibroids",
      title: "Uterine Fibroids",
      description:
        "Uterine fibroids are non-cancerous growths that develop in the uterus, often during the reproductive years. They vary in size and number and can cause symptoms such as heavy menstrual bleeding, pelvic pain, frequent urination, and discomfort during intercourse. While the exact cause of fibroids is unknown, hormonal imbalances and genetic factors play a significant role. If left untreated, they may lead to complications such as anemia and fertility issues. Ayurvedic treatments offer a natural and holistic approach to managing fibroids by balancing hormones and detoxifying the body.",
      ayurvedicDiscription: [
        "Ayurveda attributes uterine fibroids to an imbalance in Kapha and Vata doshas, leading to tissue overgrowth and toxin accumulation. Panchakarma therapies help shrink fibroids, regulate menstrual cycles, and improve uterine health.",
      ],
      ayurvedicApproach: [
        "Virechana (Purgation therapy) – Helps eliminate toxins and balance hormones.",
        "Basti (Medicated enema) – Supports reproductive health and reduces fibroid growth.",
        "Uttar Basti (Medicated uterine enema) – Directly nourishes and detoxifies the uterus.",
        "Lepa (Herbal paste therapy) – Applied externally to reduce abdominal pain and swelling.",
      ],
      dietRecommendations: [
        "Diet: Include anti-inflammatory foods like fresh fruits, vegetables, whole grains, and Ayurvedic herbs such as Ashoka, Shatavari, and Turmeric to balance hormones. Avoid processed foods, excess dairy, and caffeine, which can worsen fibroid symptoms.",
        "Lifestyle: Engage in regular exercise, practice yoga asanas like Baddha Konasana (Butterfly Pose) and Bhujangasana (Cobra Pose) for uterine health, and maintain a stress-free routine with meditation and deep breathing exercises.",
      ],
    },
    {
      id: "endometriosis",
      title: "Endometriosis",
      description:
        "Endometriosis is a chronic condition where the tissue similar to the lining of the uterus grows outside the uterus, leading to severe pelvic pain, painful periods, heavy bleeding, and fertility issues. The exact cause is unknown, but hormonal imbalances, immune dysfunction, and genetic factors may contribute. Over time, this condition can cause inflammation, scar tissue, and adhesions, affecting reproductive and digestive health. Ayurvedic treatments focus on reducing inflammation, balancing hormones, and improving overall well-being through natural therapies and lifestyle changes.",
      ayurvedicDiscription: [
        "According to Ayurveda, endometriosis is linked to an imbalance of Vata and Pitta doshas, leading to excessive inflammation, pain, and irregular tissue growth. Panchakarma therapies help detoxify the body, regulate menstrual cycles, and promote uterine health.",
      ],
      ayurvedicApproach: [
        "Virechana (Purgation therapy) – Detoxifies the liver and supports hormonal balance.",
        "Basti (Medicated enema) – Nourishes and strengthens reproductive organs while reducing inflammation.",
        "Uttar Basti (Medicated uterine enema) – Helps cleanse and heal the uterus.",
        "Abhyanga (Ayurvedic oil massage) – Improves circulation, relieves pain, and reduces stress.",
      ],
      dietRecommendations: [
        "Diet: Incorporate anti-inflammatory foods such as leafy greens, whole grains, nuts, seeds, and Ayurvedic herbs like Turmeric, Ashwagandha, and Shatavari to balance hormones. Avoid processed foods, excessive caffeine, dairy, and refined sugars.",
        "Lifestyle: Practice gentle yoga poses like Supta Baddha Konasana (Reclining Bound Angle Pose) and Bhujangasana (Cobra Pose) to improve circulation and reduce pelvic discomfort. Manage stress through meditation, pranayama (breathing exercises), and a balanced daily routine.",
      ],
    },
    {
      id: "male-female-infertility",
      title: "Male & Female Infertility",
      description:
        "Infertility is the inability to conceive after a year of regular, unprotected intercourse. It can affect both men and women due to various factors such as hormonal imbalances, poor lifestyle choices, stress, genetic conditions, and underlying health disorders. Male infertility is often linked to low sperm count, poor sperm motility, or structural issues, while female infertility can result from ovulation disorders, blocked fallopian tubes, or uterine abnormalities. Ayurveda offers a natural approach to improving reproductive health by balancing the body's energies and enhancing fertility.",
      ayurvedicDiscription: [
        "Ayurveda considers infertility a result of Vata, Pitta, and Kapha imbalances, leading to poor reproductive health. Panchakarma therapies help detoxify the body, regulate hormones, and enhance fertility.",
      ],
      ayurvedicApproach: [
        "Virechana (Purgation therapy) – Detoxifies the liver, balances hormones, and improves reproductive function.",
        "Basti (Medicated enema) – Strengthens the reproductive system and nourishes the uterus in women.",
        "Uttar Basti (Medicated uterine enema for women) – Clears blockages and enhances fertility.",
        "Shirodhara (Oil therapy for the head) – Reduces stress and balances hormones.",
        "Abhyanga (Full-body oil massage) – Improves circulation and revitalizes reproductive tissues.",
      ],
      dietRecommendations: [
        "Diet: Consume a balanced diet rich in proteins, healthy fats, and antioxidants. Include Ayurvedic fertility-boosting herbs like Ashwagandha, Shatavari, Gokshura, and Kapikacchu. Avoid processed foods, excessive caffeine, alcohol, and smoking.",
        "Lifestyle: Practice yoga poses like Bhujangasana (Cobra Pose), Sarvangasana (Shoulder Stand), and Baddha Konasana (Butterfly Pose) to improve reproductive health. Maintain a stress-free routine with meditation and deep breathing exercises, and ensure adequate sleep for overall well-being.",
      ],
    },
    {
      id: "white-discharge",
      title: "White Discharge (Leucorrhea)",
      description:
        "White discharge, also known as Leucorrhea, is a common condition in women where a white or yellowish fluid is secreted from the vagina. While mild discharge is normal and helps maintain vaginal health, excessive, thick, foul-smelling, or discolored discharge may indicate an underlying issue such as infections, hormonal imbalances, or poor hygiene. If left untreated, it can lead to discomfort, weakness, irritation, and reproductive health complications. Ayurveda offers a natural and holistic approach to managing leucorrhea by addressing its root cause and balancing the body's energies.",
      ayurvedicDiscription: [
        "According to Ayurveda, leucorrhea results from an imbalance in Kapha dosha, leading to excess mucus production and toxin accumulation. Panchakarma therapies help cleanse the reproductive system, restore balance, and improve overall vaginal health.",
      ],
      ayurvedicApproach: [
        "Virechana (Purgation therapy) – Detoxifies the body and balances hormones.",
        "Basti (Medicated enema) – Strengthens reproductive health and removes toxins.",
        "Uttar Basti (Medicated uterine enema) – Helps cleanse the uterus and vaginal canal.",
        "Yoni Pichu (Vaginal oil therapy) – Nourishes and protects vaginal tissues.",
      ],
      dietRecommendations: [
        "Diet: Include fiber-rich foods, fresh fruits, and green leafy vegetables. Drink plenty of water and herbal teas made with Triphala, Guduchi, and Amla to detoxify the body. Avoid excess dairy, spicy, and oily foods that aggravate Kapha dosha.",
        "Lifestyle: Maintain proper hygiene, wear breathable cotton underwear, and avoid excessive use of chemical-based intimate products. Practice yoga poses like Baddha Konasana (Butterfly Pose) and Bhujangasana (Cobra Pose) to improve reproductive health. Managing stress through meditation and deep breathing exercises is also beneficial.",
      ],
    },
    {
      id: "tubal-blockage",
      title: "Tubal Blockage",
      description:
        "Tubal blockage occurs when one or both fallopian tubes become obstructed, preventing the egg from reaching the uterus and leading to infertility. It can be caused by infections, pelvic inflammatory disease (PID), endometriosis, fibroids, or scar tissue from previous surgeries. Symptoms are often subtle, but in some cases, women may experience irregular periods, pelvic pain, or difficulty in conceiving. Ayurveda offers a natural approach to restoring tubal health by reducing inflammation, detoxifying the reproductive system, and improving fertility.",
      ayurvedicDiscription: [
        "Ayurveda associates tubal blockage with an imbalance in Vata and Kapha doshas, which leads to stagnation, obstruction, and toxin accumulation. Panchakarma therapies help cleanse and rejuvenate the reproductive organs.",
      ],
      ayurvedicApproach: [
        "Virechana (Purgation therapy) – Eliminates toxins and balances hormones.",
        "Uttar Basti (Medicated uterine enema) – Directly cleanses and nourishes the fallopian tubes, helping to remove blockages.",
        "Basti (Medicated enema) – Strengthens reproductive health and regulates menstrual cycles.",
        "Abhyanga (Ayurvedic oil massage) – Improves circulation and reduces inflammation in the pelvic region.",
      ],
      dietRecommendations: [
        "Diet: Consume anti-inflammatory foods such as leafy greens, whole grains, fresh fruits, and herbs like Shatavari, Ashwagandha, and Triphala to support reproductive health. Avoid processed foods, excessive dairy, caffeine, and refined sugars.",
        "Lifestyle: Engage in regular physical activity, including yoga poses like Bhujangasana (Cobra Pose), Supta Baddha Konasana (Reclining Bound Angle Pose), and Setu Bandhasana (Bridge Pose) to improve circulation to the reproductive organs. Maintain a stress-free routine with meditation, pranayama (breathing exercises), and adequate sleep.",
      ],
    },
    {
      id: "garbh-sanskar",
      title: "Garbh Sanskar",
      description:
        "Garbh Sanskar is an ancient Ayurvedic practice that focuses on the physical, mental, and spiritual well-being of both the mother and the unborn child during pregnancy. It involves a holistic approach that nurtures the baby’s development through positive thoughts, meditation, yoga, mantra chanting, healthy diet, and Ayurvedic therapies. The concept is based on the belief that a baby’s personality, intelligence, and overall health can be influenced while in the womb, making pregnancy a crucial phase for conscious parenting.",
      ayurvedicDiscription: [
        "Ayurveda emphasizes Garbhini Paricharya (pregnancy care) to support a healthy pregnancy and smooth delivery. Panchakarma therapies and Ayurvedic treatments for Garbh Sanskar include:",
      ],
      ayurvedicApproach: [
        "Abhyanga (Ayurvedic oil massage) – Helps improve blood circulation, reduces stress, and promotes relaxation.",
        "Shirodhara (Oil therapy on the forehead) – Balances hormones and enhances mental well-being.",
        "Basti (Medicated enema) – Supports digestive health and strengthens the reproductive system.",
        "Herbal Rasayanas (Rejuvenating Ayurvedic formulations) – Promote fetal growth and boost maternal immunity.",
      ],
      dietRecommendations: [
        "Diet: Include sattvic (pure and balanced) foods like fresh fruits, milk, ghee, nuts, and Ayurvedic herbs such as Shatavari, Ashwagandha, and Brahmi to enhance fetal development. Avoid processed foods, excessive caffeine, and spicy or heavy foods.",
        "Lifestyle: Practice Garbh Sanskar yoga and meditation, listen to soothing music, chant mantras, read positive scriptures, and maintain a stress-free environment. Engage in light physical activities and follow a daily routine to ensure overall well-being for both mother and baby.",
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
        <p className="text-[#757575] mt-6 mb-4">
          {disorder.ayurvedicDiscription}
        </p>
        <ul className="list-disc list-inside text-[20px] text-[#757575]">
          {disorder.ayurvedicApproach.map((approach, index) => {
            const [title, description] = approach.split("–"); // Splitting at "–"
            return (
              <li key={index}>
                <strong>{title.trim()}</strong> – {description.trim()}
              </li>
            );
          })}
        </ul>
        <p className="text-[#757575] text-[32px] font-semibold mt-10">
          Dietary & Lifestyle Recommendations
        </p>
        <ul className="list-disc list-inside text-[20px] mt-6 text-[#757575]">
          {disorder.dietRecommendations.map((approach, index) => {
            const parts = approach.split(":"); // Fix the split character
            const title = parts[0]?.trim();
            const description = parts[1]?.trim();
            return (
              <li key={index}>
                <strong>{title}</strong>: {description}
              </li>
            );
          })}
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

export default FemaleDetails;
