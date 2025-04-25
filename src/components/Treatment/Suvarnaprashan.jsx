import React from 'react';
import useAppointmentForm from "../../hook/useAppointmentForm";
import Book_Appointment from "../Appointment/Book_Appointment";

const Suvarnaprashan = () => {
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();

  return (
    <div>
      <div className="min-h-screen bg-white py-12 relative">
        <div className="max-w-screen-xl mx-auto sm:px-10 px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#394E29] mb-8">Suvarnaprashan – Ancient Ayurveda's Gift for a Healthy Future</h1>
          
          <p className="text-gray-700 mb-8 text-lg">
            At Agni Ayurved Hospital, we honor the time-tested wisdom of Ayurveda to give your child the best start to life.  
            Suvarnaprashan is an ancient Ayurvedic practice mentioned in classical texts like the Kashyap Samhita, specially designed to boost children's mental, physical, and immune development using 24K pure gold and powerful herbal formulations.
          </p>
          
          <h2 className="text-2xl font-bold text-[#394E29] mb-4">What is Suvarnaprashan?</h2>
          
          <p className="text-gray-700 mb-4 text-lg">
            Suvarnaprashan is the unique Ayurvedic method of administering purified gold along with special herbal extracts to children.  
            It strengthens the mind and body, enhances immunity, and protects against various diseases — naturally, safely, and effectively.
          </p>
          
          <p className="text-gray-700 mb-8 text-lg">
            In Ayurveda, Suvarnaprashan is considered one of the vital Sanskaras (sacraments) performed to ensure a child's healthy growth and long life.
          </p>
          
          <h2 className="text-2xl font-bold text-[#394E29] mb-4">Benefits of Suvarnaprashan</h2>
          
          <ul className="list-disc pl-5 mb-8 space-y-3 text-gray-700 text-lg">
            <li><span className="font-semibold">Boosts Intelligence and Memory:</span> Sharpens learning abilities and enhances memory power (Medha Vriddhi).</li>
            <li><span className="font-semibold">Strengthens Immunity:</span> Helps the body fight infections and illnesses naturally (Bala Vardhanam).</li>
            <li><span className="font-semibold">Enhances Digestion and Metabolism:</span> Improves digestive fire (Agni Deepanam), leading to better nutrition absorption.</li>
            <li><span className="font-semibold">Promotes Physical Growth and Strength:</span> Supports healthy development of muscles and bones.</li>
            <li><span className="font-semibold">Increases Lifespan and Vitality:</span> Supports overall health and longevity (Ayushya Vriddhi).</li>
            <li><span className="font-semibold">Improves Skin Complexion and Brilliance:</span> Makes skin healthy, glowing, and radiant (Varnya).</li>
            <li><span className="font-semibold">Protects from Negative Energies:</span> Shields the child from harmful external influences (Grahadosha Nivaran).</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#394E29] mb-4">Classical References</h2>
          
          <div className="bg-[#F3FFEA] p-5 rounded mb-4 border-l-4 border-[#5FA02E]">
            <p className="text-[#394E29] font-medium text-lg mb-2">
              सुवर्णप्राशनं हि एतत्मेधाग्निबलवर्धनम् ।<br />
              आयुष्यं मङ्गलं पुण्यं वृष्यं वर्ण्य ग्रहापहम् ॥<br />
              [काश्यपसंहिता]
            </p>
            <p className="text-[#394E29] font-medium text-lg">
              Translation:  <br />
              Suvarnaprashan enhances intelligence, improves digestion, increases physical strength, promotes longevity, brings good fortune, enhances fertility, improves complexion, and protects from negative planetary influences.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold text-[#394E29] mb-4">Who Should Take Suvarnaprashan?</h2>
          
          <ul className="list-disc pl-5 mb-4 space-y-3 text-gray-700 text-lg">
            <li><span className="font-semibold">Age Group:</span> From birth to 16 years of age.</li>
            <li>
              <span className="font-semibold">When to Administer:</span>  <br />
              Ideally on the day of Pushya Nakshatra, which occurs once every month. It can also be given daily for special therapeutic needs.
            </li>
            <li>
              <span className="font-semibold">How to Administer:</span>  <br />
              A few drops or doses are placed on the tongue under expert Ayurvedic supervision.
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold text-[#394E29] mb-4">Other Key Advantages</h2>
          
          <ul className="list-disc pl-5 mb-8 space-y-3 text-gray-700 text-lg">
            <li>Helps children remember what they hear just once ("Shrutadhara" effect).</li>
            <li>Builds strong immunity to prevent recurrent infections.</li>
            <li>Protects against seasonal allergies, common cold, and other childhood illnesses.</li>
            <li>Regular use shows remarkable improvement in academic performance, focus, speech clarity, and physical energy.</li>
          </ul>
          
          <div className="bg-[#F3FFEA] p-5 rounded mb-8 border-l-4 border-[#5FA02E]">
            <p className="text-[#394E29] font-medium text-lg">
              "Regular Suvarnaprashan administration results in noticeably better mental and physical strength compared to other children."
            </p>
          </div>
          
          <h2 className="text-2xl font-bold text-[#394E29] mb-4">Why Choose Agni Ayurved Hospital for Suvarnaprashan?</h2>
          
          <ul className="list-disc pl-5 mb-8 space-y-3 text-gray-700 text-lg">
            <li>Authentic preparation with 24K purified gold.</li>
            <li>Personalized dosages based on your child's unique constitution (Prakriti).</li>
            <li>Administered under the care of expert Parayani Nadi Vaidyas and Ayurvedic consultants.</li>
            <li>Strict adherence to classical Ayurvedic methods and hygienic practices.</li>
          </ul>
          
          <p className="text-gray-700 mb-8 text-lg">
            Give your child the timeless gift of health, intelligence, and immunity with Suvarnaprashan at Agni Ayurved Hospital.
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

export default Suvarnaprashan; 