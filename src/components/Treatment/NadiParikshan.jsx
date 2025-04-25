import React from 'react';
import useAppointmentForm from "../../hook/useAppointmentForm";
import Book_Appointment from "../Appointment/Book_Appointment";

const NadiParikshan = () => {
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();

  return (
    <div>
    <div className="min-h-screen bg-white py-12 relative">
      <div className="max-w-screen-xl mx-auto px-8 sm:px-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#394E29] mb-8">Nadi Parikshan – The Art of Pulse Diagnosis</h1>
        
        <p className="text-gray-700 mb-8 text-lg">
          Nadi Parikshan (Pulse Diagnosis) is one of the most powerful and ancient diagnostic tools in Ayurveda. It allows our expert Vaidyas to detect imbalances in the body and mind simply by checking the pulse — offering a detailed picture of your health, without the need for machines or lab tests.
        </p>
        
        <h2 className="text-2xl font-bold text-[#394E29] mb-4">Why Nadi Parikshan Matters:</h2>
        
        <ul className="list-disc pl-5 mb-8 space-y-3 text-gray-700 text-lg">
          <li><span className="font-semibold">Accurate Diagnosis:</span> It helps identify all kinds of health issues – physical, mental, or emotional – by reading the pulse.</li>
          <li><span className="font-semibold">Early Detection:</span> Even in healthy individuals, it can detect imbalances before symptoms appear, helping in prevention.</li>
          <li><span className="font-semibold">Organ-Level Insight:</span> Nadi Parikshan reveals abnormalities in different organs and systems of the body for targeted treatment.</li>
          <li><span className="font-semibold">Effective Management:</span> It plays a key role in managing and treating complex and chronic diseases naturally and successfully.</li>
        </ul>
        
        <div className="bg-[#F3FFEA] p-5 rounded mb-8 border-l-4 border-[#5FA02E]">
          <p className="text-[#394E29] font-medium text-lg">
            Nadi Parikshan = The Real-Time, Accurate, and Perfect Health Report
          </p>
        </div>
        
        <p className="text-gray-700 mb-8 text-lg">
          Our team of skilled Parayani Nadi Vaidyas uses this timeless technique to guide personalized treatments that bring balance and healing to your life.
        </p>
      </div>

      

      {visibleFormId === "form1" && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="relative">
            <Book_Appointment closeForm={closeForm} />
          </div>
        </div>
      )}
    </div>
    <div className="bg-[#F5F5F5] md:min-w-max max-[600px]:min-w-full max-w-fit flex flex-row mx-auto gap-8 px-10 pt-2 pb-2 rounded-full absolute left-[50%] transform -translate-x-[50%] -translate-y-[50%] shadow-lg hover:shadow-xl transition-shadow duration-300">
      <p className="text-[#5FA02E] text-xl py-2">
          Rediscover the Healing Power of Nature
        </p>
        <button
          className="px-5 bg-[#5FA02E] sm:py-0 rounded-full text-[#F3FFEA] hover:bg-[#4a7d24] transition-colors duration-300"
          onClick={() => handleButtonClick("form1")}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default NadiParikshan; 