import React, { useState } from "react";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import { useNavigate } from "react-router-dom";

function For_weight() {
  const [visibleFormId, setVisibleFormId] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (formId) => {
    setVisibleFormId(formId);
  };

  const handleTreatmentClick = (treatmentId) => {
    try {
      // Map treatment names to their correct IDs in treatmentsContent
      const treatmentIdMap = {
        "vamana": "vamana",
        "udvartana": "udvartana",
        "swedana": "swedana",
        "virechan": "virechan",
        "basti": "anuvasan-basti"
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
      <img src="/panchkarma/weight/weight.png" alt="" loading="eager" />
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
            Panchakarma for Weight Loss
          </div>
          <div className="text-[#757575] mt-8 text-justify">
            <p className="mb-4">
              Weight gain often occurs when the digestive fire (Agni) is weak,
              causing undigested food to accumulate as toxins, leading to
              sluggish metabolism and fat retention. This imbalance, known as
              Ama, obstructs the body's ability to process nutrients and waste
              effectively.
            </p>
            <div className="mt-12">
              <p>Panchakarma Treatments for Weight Loss:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-8 text-[24px]">
                <li>
                  <strong>Kapha Constitution:-</strong>
                  <br /> 
                  <div className="ml-8 mt-2 space-y-2">
                    <p 
                      className="cursor-pointer hover:text-[#5FA02E] transition-colors"
                      onClick={() => handleTreatmentClick("vamana")}
                    >
                      Vaman
                    </p>
                    <p 
                      className="cursor-pointer hover:text-[#5FA02E] transition-colors"
                      onClick={() => handleTreatmentClick("udvartana")}
                    >
                      Udvartan
                    </p>
                    <p 
                      className="cursor-pointer hover:text-[#5FA02E] transition-colors"
                      onClick={() => handleTreatmentClick("swedana")}
                    >
                      Swedan
                    </p>
                  </div>
                </li>
                <li>
                  <strong>Pitta Constitution:-</strong>
                  <br /> 
                  <div className="ml-8 mt-2 space-y-2">
                    <p 
                      className="cursor-pointer hover:text-[#5FA02E] transition-colors"
                      onClick={() => handleTreatmentClick("virechan")}
                    >
                      Virechan
                    </p>
                    <p 
                      className="cursor-pointer hover:text-[#5FA02E] transition-colors"
                      onClick={() => handleTreatmentClick("udvartana")}
                    >
                      Udvartan
                    </p>
                    <p 
                      className="cursor-pointer hover:text-[#5FA02E] transition-colors"
                      onClick={() => handleTreatmentClick("basti")}
                    >
                      Basti
                    </p>
                  </div>
                </li>
                <li>
                  <strong>Vata Constitution:-</strong>
                  <br /> 
                  <div className="ml-8 mt-2 space-y-2">
                    <p 
                      className="cursor-pointer hover:text-[#5FA02E] transition-colors"
                      onClick={() => handleTreatmentClick("basti")}
                    >
                      Basti
                    </p>
                    <p 
                      className="cursor-pointer hover:text-[#5FA02E] transition-colors"
                      onClick={() => handleTreatmentClick("udvartana")}
                    >
                      Udvartan
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-[#757575] mt-8 text-justify">
            These therapies purify the body, boost digestion, and support
            sustainable weight loss.
          </p>
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

export default For_weight;
