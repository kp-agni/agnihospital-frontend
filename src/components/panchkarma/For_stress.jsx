import React, { useState, useRef, useEffect } from "react";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import { useNavigate } from "react-router-dom";

function For_stress() {
  const [visibleFormId, setVisibleFormId] = useState(null);
  const navigate = useNavigate();
  
  const handleButtonClick = (formId) => {
    setVisibleFormId(formId);
  };

  const handleTreatmentClick = (treatmentId) => {
    try {
      // Map treatment names to their correct IDs in treatmentsContent
      const treatmentIdMap = {
        "shirodhara": "shirodhara",
        "shiro-basti": "shiro-basti",
        "nasya": "nasya",
        "abhyanga": "abhyanga",
        "swedana": "swedana"
      };

      const mappedId = treatmentIdMap[treatmentId] || treatmentId;
      if (!mappedId) {
        console.error(`Treatment ID not found for: ${treatmentId}`);
        return;
      }
      navigate(`/treatments/${mappedId}`);
    } catch (error) {
      console.error('Error navigating to treatment:', error);
    }
  };

  const closeForm = () => {
    setVisibleFormId(null);
  };

  return (
    <div>
      <img src="/panchakarma/stress/stress.png" alt="" loading="eager"/>
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
            Panchakarma for Stress Management{" "}
          </div>
          <div className="text-[#757575] mt-8 text-justify">
            <p className="mb-4">
              Stress is one of the most prevalent issues in today's modern
              lifestyle. It affects both mental and physical well-being, often
              leading to anxiety, depression, and chronic conditions like hair
              loss and insomnia. Stress can disrupt everyday life and hinder
              overall health, making it essential to address it through
              effective solutions.
            </p>
            <p>
              Panchakarma provides holistic treatments that help manage stress
              and restore balance. The following therapies are particularly
              effective:
            </p>
            <div className="mt-12">
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-[24px]">
                <li 
                  className="cursor-pointer hover:text-[#5FA02E] transition-colors"
                  onClick={() => handleTreatmentClick("shirodhara")}
                >
                  <strong>Shirodhara:-</strong> Calms the mind by gently pouring
                  oil over the forehead.
                </li>
                <li 
                  className="cursor-pointer hover:text-[#5FA02E] transition-colors"
                  onClick={() => handleTreatmentClick("shiro-basti")}
                >
                  <strong>Shirobasti:-</strong> Relieves mental strain through
                  medicated oil treatments on the head.
                </li>
                <li 
                  className="cursor-pointer hover:text-[#5FA02E] transition-colors"
                  onClick={() => handleTreatmentClick("nasya")}
                >
                  <strong>Nasya:-</strong> Clears blocked energies and
                  rejuvenates the brain.
                </li>
                <li 
                  className="cursor-pointer hover:text-[#5FA02E] transition-colors"
                  onClick={() => handleTreatmentClick("abhyanga")}
                >
                  <strong>Abhyanga:-</strong> Full-body massage that relaxes the
                  nervous system.
                </li>
                <li 
                  className="cursor-pointer hover:text-[#5FA02E] transition-colors"
                  onClick={() => handleTreatmentClick("swedana")}
                >
                  <strong>Swedana:-</strong> Full-body steam therapy that helps
                  detoxify and relax.
                </li>
                <li>
                  <strong>Ayurvedic Music & Sound Therapy:-</strong> Uses sound
                  to bring emotional balance.
                </li>
                <li>
                  <strong>Passive Meditation:-</strong> Calms the mind and
                  induces a deep state of relaxation.
                </li>
              </ul>
            </div>
          </div>
          <p className="text-[#757575] mt-8 text-justify">These therapies work together to reduce stress, enhance mental clarity, and improve overall wellness.</p>
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

export default For_stress;
