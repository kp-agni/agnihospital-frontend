import React, { useState } from "react";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import { useNavigate } from "react-router-dom";

function For_pain() {
  const navigate = useNavigate();
  
  const treatments = [
    { id: "abhyanga", name: "Abhyanga (Therapeutic Oil Massage)" },
    { id: "swedana", name: "Swedana (Herbal Steam Therapy)" },
    { id: "anuvasan-basti", name: "Anuvasan Basti (Oil Enema)" },
    { id: "niruha-basti", name: "Niruha Basti (Decoction Enema)" },
    { id: "kati-basti", name: "Kati Basti (Lower Back Oil Pool)" },
    { id: "greeva-basti", name: "Greeva Basti (Neck Oil Pool)" },
    { id: "prustha-basti", name: "Prustha Basti (Back Oil Pool)" },
    { id: "nabhi-basti", name: "Nabhi Basti (Navel Oil Pool)" },
    { id: "janu-basti", name: "Janu Basti (Knee Oil Pool)" },
    { id: "agni-karma", name: "Agni Karma (Thermal Cautery)" },
    { id: "viddha-karma", name: "Viddha Karma (Bloodletting Therapy)" },
    { id: "upanaha-sweda", name: "Upanaha Swedan (Localized Steam)" },
    { id: "valuka-sweda", name: "Valuka Swedan (Sand Heat Therapy)" },
    { id: "patrapind-pottali-swedan", name: "PatraPind Potttali Swedan (Leaf Bundle Massage)" },
    { id: "shashtika-shali-pinda-sweda", name: "Sashtishali Shali Pinda Swedan (Rice Bundle Massage)" },
    { id: "shirodhara", name: "Shirodhara (Oil Pouring Therapy)" },
    { id: "vamana", name: "Vamana (Emesis Therapy)" },
    { id: "virechan", name: "Virechan (Purgation Therapy)" }
  ];

  const [visibleFormId, setVisibleFormId] = useState(null);
    
  const handleButtonClick = (formId) => {
    setVisibleFormId(formId);
  };
    
  const closeForm = () => {
    setVisibleFormId(null);
  };

  const handleTreatmentClick = (treatmentId) => {
    navigate(`/treatments/${treatmentId}`);
  };

  return (
    <div>
      <img src="panchkarma/pain/pain.png" alt="" loading="eager"/>
      <div className="w-full mx-auto">
        {visibleFormId === "form1" && (
          <div className="fixed inset-0 flex justify-center items-center z-10">
            <div className="relative">
              <Book_Appointment closeForm={closeForm} />
            </div>
          </div>
        )}
        <section className="py-20 px-12 xl:px-40 bg-[#F3FFEA]">
          <div className="font-bold text-2xl text-[#394E29]">
            Panchakarma for Pain Relief
          </div>
          <div className="text-[#757575] mt-8 text-justify">
            <p>
              Chronic pain, whether from arthritis, sciatica, or other
              conditions, can disrupt daily life and overall well-being.
              Panchakarma offers a holistic approach to managing and relieving
              pain by addressing the root cause of discomfort through Ayurvedic
              treatments. With therapies like Basti, Abhyanga, Kati Basti, and
              Nasya, Panchakarma works to detoxify, rejuvenate, and restore
              balance, helping alleviate pain, reduce inflammation, and enhance
              mobility. Experience lasting relief and regain vitality with the
              healing power of Panchakarma.
            </p>
          </div>
        </section>
        <section className="bg-[#5FA02E] py-20 px-12 xl:px-40 flex items-center justify-center text-center">
          <div className="font-bold text-3xl text-white">
            <h2>Our Panchakarma Treatments for Pain Relief</h2>
          </div>
        </section>
        <section className="py-20 px-12 xl:px-40 bg-[#F3FFEA]">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {treatments.map((treatment, index) => (
                <div 
                  key={treatment.id} 
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleTreatmentClick(treatment.id)}
                >
                  <h3 className="text-lg font-bold text-[#5FA02E]">
                    {index + 1}. {treatment.name}
                  </h3>
                  <div className="mt-2 text-right">
                    <span className="text-[#5FA02E] text-sm font-medium">Click to learn more →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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

export default For_pain;
