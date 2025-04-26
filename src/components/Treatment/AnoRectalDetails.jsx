import React from "react";
import { assets } from "../../assets/assets";
import { useParams } from "react-router-dom";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function AnoRectalDetails() {
  const { disorderId } = useParams(); // Get disorderId from URL
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();
  const disorders = [
    {
      id: "piles",
      title: "Piles",
      description:
        "The treatment for piles primarily depends on the severity of the condition. For mild cases, over-the-counter topical creams, ointments, and suppositories can help relieve symptoms like pain and itching. Oral pain relievers and fiber supplements may also be recommended to ease bowel movements and reduce straining. In moderate to severe cases, medical procedures such as rubber band ligation, sclerotherapy, or laser therapy may be necessary. Surgical intervention, like hemorrhoidectomy, is considered in extreme cases where other treatments fail to provide relief. A thorough consultation with a healthcare provider is essential to determine the most appropriate treatment plan.",
      ayurvedicDiscription: [
        "In Ayurveda, piles (also known as Arsha) are considered a result of an imbalance in the body's doshas, particularly Pitta and Vata. Ayurvedic treatments focus on balancing these doshas and restoring harmony within the body. Panchakarma therapies, such as Basti (medicated enemas), Virechana (purgation therapy), and Raktamokshana (bloodletting), may be recommended to detoxify and purify the body. Herbal remedies like Triphala, Haritaki, and Aloe Vera are commonly used to reduce inflammation, improve digestion, and support overall healing. These treatments are personalized based on individual constitution and the severity of the condition.",
      ],
      dietRecommendations: [
        "A balanced diet rich in fiber is crucial for managing piles. Incorporating whole grains, fruits, vegetables, and plenty of water can help prevent constipation and reduce strain during bowel movements. Avoiding spicy, oily, and processed foods can also alleviate symptoms. In Ayurveda, foods that are warm, moist, and easy to digest are preferred to avoid aggravating the doshas. Regular physical activity, like walking, can improve digestion and circulation, reducing the chances of piles. It's also important to avoid prolonged sitting and practice relaxation techniques such as yoga and meditation to reduce stress, which can contribute to the condition.",
      ],
    },
    {
      id: "fistula",
      title: "Fistula",
      description:
        "Fistula treatment typically begins with a thorough diagnosis to determine the type and severity. Conservative treatments, such as antibiotics, are prescribed if the fistula is caused by an infection. In many cases, surgery is required to properly drain the fistula and promote healing. Options like fistulotomy (removal of the fistula tract) or Seton placement (a technique to gradually drain the fistula) are commonly used. For complex or recurrent cases, surgical intervention is recommended. Post-operative care is crucial to prevent recurrence, and regular follow-ups are essential for proper healing.",
      ayurvedicDiscription: [
        "Ayurveda views fistula (known as 'Bhagandara') as a result of an imbalance in the Pitta and Vata doshas, leading to inflammation, infection, and the formation of abnormal tracts. Ayurvedic treatments focus on detoxifying the body, balancing doshas, and promoting healing. Panchakarma therapies like Virechana (purgation) and Basti (medicated enemas) are recommended to cleanse the digestive system and reduce internal heat. Ayurvedic herbs such as Turmeric, Neem, and Kutaj are known for their anti-inflammatory and antibacterial properties, helping to heal the fistula and prevent further complications. Internal medications like Triphala and Shatavari are used to strengthen the digestive system and support overall healing.",
      ],
      dietRecommendations: [
        "A high-fiber, easily digestible diet is essential for managing a fistula. Foods that are anti-inflammatory and cooling, such as cucumbers, coconut, and leafy greens, should be incorporated into the diet to balance the Pitta dosha. Avoiding spicy, acidic, and heavy foods helps prevent irritation in the digestive system. Staying hydrated is crucial to maintain soft stools and avoid straining during bowel movements. Regular exercise, like walking or gentle yoga, can improve circulation and prevent constipation, reducing the pressure on the affected area. It is also recommended to practice stress-reducing techniques, such as meditation and deep breathing, as stress can aggravate the condition.",
      ],
    },
    {
      id: "fissure",
      title: "Fissure",
      description:
        "The treatment for anal fissures typically starts with conservative methods such as increasing fiber intake, using stool softeners, and staying hydrated to prevent constipation and reduce strain during bowel movements. Topical treatments, including medicated creams (such as nitroglycerin or hydrocortisone), can be used to relax the anal sphincter muscle and promote healing. If the fissure is chronic or doesn't heal with conservative treatments, surgical options may be considered. Lateral internal sphincterotomy, a procedure that involves cutting a small portion of the anal sphincter muscle, is one of the most common surgical treatments to relieve pressure and aid healing. Regular follow-up is essential for monitoring progress.",
      ayurvedicDiscription: [
        "In Ayurveda, anal fissures are considered a manifestation of Vata and Pitta imbalances, leading to dryness and inflammation in the anal region. Ayurvedic treatments aim to balance these doshas and promote healing. Basti (medicated enemas) and Virechana (purgation therapy) are commonly recommended to detoxify and calm the digestive system. Herbal pastes made from ingredients like Aloe Vera, Neem, and Turmeric are applied locally to reduce pain, swelling, and promote tissue repair. Triphala and Ashwagandha are also used internally to strengthen the digestive system and aid in healing. Ayurvedic oils, such as Sesame or Mustard oil, are often used for their soothing and anti-inflammatory properties.",
      ],
      dietRecommendations: [
        "A fiber-rich diet plays a key role in managing anal fissures. Foods such as whole grains, fruits, and vegetables help soften stool and reduce constipation, preventing strain during bowel movements. Drinking plenty of water and avoiding spicy, oily, and acidic foods can help minimize irritation in the anal region. In Ayurveda, foods that are warm, moist, and easy to digest are recommended to balance Vata and Pitta doshas. Regular physical activity, especially walking, promotes healthy digestion and bowel movement regulation. Avoiding prolonged sitting or heavy lifting can reduce pressure on the affected area. Yoga and relaxation techniques can help manage stress, which is known to contribute to digestive issues.",
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
        {visibleFormId === "form1" && (
          <div className="fixed inset-0 flex justify-center items-center z-10">
            <div className="relative">
              <Book_Appointment closeForm={closeForm} />
            </div>
          </div>
        )}
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
        <p className="text-[#757575] text-justify mt-6 mb-4">
          {disorder.ayurvedicDiscription}
        </p>
        <p className="text-[#757575] text-[32px] font-semibold mt-10">
          Dietary & Lifestyle Recommendations
        </p>
        <p className="text-[#757575] text-justify mt-6 mb-4">
          {disorder.dietRecommendations}
        </p>
      </div>
      <div className="bg-[#F5F5F5] md:min-w-max max-[768px]:min-w-full max-w-fit flex flex-row mx-auto gap-8 px-10 pt-2 pb-2 rounded-full absolute left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
        <p className="text-[#5FA02E] text-xl py-2 ">
          Rediscover the Healing Power of Nature
        </p>
        <button
          className="px-5  bg-[#5FA02E] sm:py-0 rounded-full text-[#F3FFEA]"
          onClick={() => handleButtonClick("form1")}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default AnoRectalDetails;
