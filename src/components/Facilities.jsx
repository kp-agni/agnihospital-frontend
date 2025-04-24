import React, { useState } from "react";
import Book_Appointment from "../components/Appointment/Book_Appointment";
import useAppointmentForm from "../hook/useAppointmentForm";

function Facilities() {
  const [selectedImage, setSelectedImage] = useState(null);
  const opd2 = [
    "/facility/opd2/image_1.png",
    "/facility/opd2/image_2.png",
    "/facility/opd2/image_3.png",
    "/facility/opd2/image_6.png",


  ];
  const opd1 = [
    "/facility/opd1/image_2.png",
    "/facility/opd1/image_3.png",
    "/facility/opd1/image_4.png",

  ];
  const receptionarea = [
    "/facility/reception/image_1a.png",
    "/facility/reception/image_1.png",
    "/facility/reception/image_2.png",
    "/facility/reception/image_3.png",
    "/facility/reception/image_4.png",
    "/facility/reception/image_5.png",
    "/facility/reception/image_6.png",

  ];
  const panchakarma = [
    "/facility/panchkarma/image_0.png",
    "/facility/panchkarma/image_1.png",
    "/facility/panchkarma/image_2.png",
    "/facility/panchkarma/image_3.png",
    "/facility/panchkarma/image_4.png",
    "/facility/panchkarma/image_5.png",
    "/facility/panchkarma/image_6.png",

  ];


  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleCloseImage = (e) => {
    if (e.target.id === "fullscreen-overlay") {
      setSelectedImage(null);
    }
  };

  return (
    <div className="w-full mx-auto bg-[#F3FFEA]">
      {selectedImage && (
        <div
          id="fullscreen-overlay"
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 cursor-pointer"
          onClick={handleCloseImage}
        >
          <img
            src={selectedImage}
            alt="Fullscreen"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            loading="eager"
          />
        </div>
      )}
      {visibleFormId === "form1" && (
        <div className="fixed inset-0 flex justify-center items-center z-10">
          <div className="relative">
            <Book_Appointment closeForm={closeForm} />
          </div>
        </div>
      )}
       <section className="py-20 px-12 xl:px-40">
        <div className="">
          <h1 className="font-bold text-[#394E29]">Telemedicine Services</h1>
          <p className="text-[#757575] mt-4 text-justify">
            A platform for remote consultations, allowing patients to get Ayurvedic advice from Online Consultation and also for follow-ups or minor issues. Our telemedicine service provides:
          </p>
          <ul className="list-disc list-inside text-[#757575] mt-4 space-y-2">
            <li>Virtual consultations with our Ayurvedic experts</li>
            <li>Follow-up sessions for ongoing treatments</li>
            <li>Diet and lifestyle guidance</li>
            <li>Prescription management</li>
            <li>Remote monitoring of treatment progress</li>
          </ul>
          <p className="text-[#757575] mt-4 text-justify">
            Experience the convenience of Ayurvedic care from the comfort of your home, with the same level of expertise and personalized attention as in-person consultations.
          </p>
        </div>
      </section>

      <section className="py-20 px-12 xl:px-40 bg-gradient-to-b from-white to-[#F3FFEA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-bold text-[#394E29] text-4xl md:text-5xl mb-4">Reception Area</h1>
            <div className="w-24 h-1 bg-[#5FA02E] mx-auto mb-6"></div>
            <p className="text-[#757575] text-lg max-w-3xl mx-auto">
              Our warm and welcoming reception is designed to assist you with
              appointments, inquiries, and guidance for your Ayurvedic journey.
              Our staff ensures a seamless experience from the moment you arrive.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {receptionarea.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    onClick={() => handleImageClick(src)}
                    loading="lazy"
                    
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-lg font-semibold p-4">Reception Area</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-12 xl:px-40 bg-gradient-to-b from-[#F3FFEA] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-bold text-[#394E29] text-4xl md:text-5xl mb-4">Consultation Rooms</h1>
            <div className="w-24 h-1 bg-[#5FA02E] mx-auto mb-6"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="font-semibold text-[#394E29] text-2xl mb-4">OPD 1</h2>
            <p className="text-[#757575] text-lg leading-relaxed">
              Comfortable, private spaces where patients can discuss their health and undergo a NADI PARIKSHAN detailed dosha analysis. A space dedicated to initial assessments, Ayurvedic diagnosis, and personalized treatment planning. Here, patients receive expert guidance on lifestyle, diet, and holistic healing based on their unique body constitution.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 mb-12">
            {opd1.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    onClick={() => handleImageClick(src)}
                    loading="lazy"
                    
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-lg font-semibold p-4">OPD 1</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="font-semibold text-[#394E29] text-2xl mb-4">OPD 2</h2>
            <p className="text-[#757575] text-lg leading-relaxed">
              This room is designed for in-depth evaluations, follow-ups, and specialized treatments. It focuses on chronic conditions, Panchakarma therapy planning, and advanced Ayurvedic care, ensuring a tailored approach for every patient.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {opd2.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    onClick={() => handleImageClick(src)}
                    loading="lazy"
                    
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-lg font-semibold p-4">OPD 2</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-12 xl:px-40 bg-gradient-to-b from-white to-[#F3FFEA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-bold text-[#394E29] text-4xl md:text-5xl mb-4">Panchakarma Theater</h1>
            <div className="w-24 h-1 bg-[#5FA02E] mx-auto mb-6"></div>
            <p className="text-[#757575] text-lg max-w-3xl mx-auto">
              Our comprehensive Panchakarma center combines traditional healing spaces with modern facilities, offering a complete range of Ayurvedic detoxification and rejuvenation therapies in a serene and professional environment.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="font-semibold text-[#394E29] text-2xl mb-4">Treatment Areas</h2>
            <p className="text-[#757575] text-lg leading-relaxed mb-6">
              Our Panchakarma center features specialized areas designed for different aspects of treatment:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F3FFEA] p-6 rounded-xl">
                <h3 className="font-semibold text-[#394E29] text-xl mb-3">Main Therapy Area</h3>
                <ul className="list-disc list-inside text-[#757575] space-y-2">
                  <li>Traditional wooden Droni tables for authentic treatments</li>
                  <li>Modern steam chambers for Swedana therapy</li>
                  <li>Comprehensive range of medicated oils and herbal medicines</li>
                  <li>Specialized equipment for various Panchakarma procedures</li>
                  <li>Temperature-controlled environment for optimal therapy</li>
                </ul>
              </div>
              <div className="bg-[#F3FFEA] p-6 rounded-xl">
                <h3 className="font-semibold text-[#394E29] text-xl mb-3">Recovery & Relaxation</h3>
                <ul className="list-disc list-inside text-[#757575] space-y-2">
                  <li>Comfortable reclining chairs and resting areas</li>
                  <li>Peaceful ambiance with soft lighting</li>
                  <li>Herbal tea and light refreshments</li>
                  <li>Quiet environment for meditation and rest</li>
                  <li>Attendant support for immediate post-treatment care</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {panchakarma.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img
                    src={src}
                    alt={`Panchakarma Center ${index + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    onClick={() => handleImageClick(src)}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-lg font-semibold p-4">Panchakarma Center</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-12 xl:px-40 bg-gradient-to-b from-[#F3FFEA] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-bold text-[#394E29] text-4xl md:text-5xl mb-4">Ayurvedic Pharmacy</h1>
            <div className="w-24 h-1 bg-[#5FA02E] mx-auto mb-6"></div>
            <p className="text-[#757575] text-lg max-w-3xl mx-auto">
              Our Ayurvedic Pharmacy is dedicated to providing a comprehensive range of natural and time-tested Ayurvedic remedies that aim to restore balance to the body, mind, and spirit. Rooted in the ancient wisdom of Ayurveda.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="font-semibold text-[#394E29] text-2xl mb-4">Our Philosophy</h2>
            <p className="text-[#757575] text-lg leading-relaxed">
              Our Ayurvedic pharmacy operates with this holistic philosophy, recognizing the unique constitution (dosha) of each individual. We strive to offer personalized care and treatments that are designed to address the root causes of illness, rather than just the symptoms.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-semibold text-[#394E29] text-2xl mb-6">What We Offer</h2>
            <p className="text-[#757575] text-lg mb-8">
              Our pharmacy is stocked with a variety of Ayurvedic products crafted from pure, natural ingredients. These include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F3FFEA] p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-[#394E29] text-xl mb-3">Herbal Remedies</h3>
                <p className="text-[#757575] leading-relaxed">
                  Medicinal herbs, powders, tablets, and oils, carefully formulated to support the body's natural healing process. These remedies address a wide range of health concerns.
                </p>
              </div>
              <div className="bg-[#F3FFEA] p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-[#394E29] text-xl mb-3">Ayurvedic Supplements</h3>
                <p className="text-[#757575] leading-relaxed">
                  Nutritional supplements that support overall wellness and help balance the body's internal systems. These are particularly useful for strengthening immunity, boosting energy, and promoting detoxification.
                </p>
              </div>
              <div className="bg-[#F3FFEA] p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-[#394E29] text-xl mb-3">Personalized Formulations</h3>
                <p className="text-[#757575] leading-relaxed">
                  We offer custom-made Ayurvedic formulations based on your individual health needs, guided by an in-depth consultation with our Ayurvedic practitioners. These treatments are designed to restore balance to your body and mind according to your specific dosha and current health condition.
                </p>
              </div>
              <div className="bg-[#F3FFEA] p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-[#394E29] text-xl mb-3">Ayurvedic Oils & Topicals</h3>
                <p className="text-[#757575] leading-relaxed">
                  Therapeutic oils and creams that promote skin health, joint flexibility, and pain relief, among other benefits. These products are often used in traditional treatments.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="overflow-hidden rounded-xl shadow-lg cursor-pointer group">
              <div className="relative overflow-hidden">
                <img
                  src="/facility/pharmacy/image_1.png"
                  alt="Herbal Remedies"
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  onClick={() => handleImageClick("/facility/pharmacy/image_1.png")}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-lg font-semibold p-4">Herbal Remedies</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg cursor-pointer group">
              <div className="relative overflow-hidden">
                <img
                  src="/facility/pharmacy/image_2.png"
                  alt="Ayurvedic Supplements"
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  onClick={() => handleImageClick("/facility/pharmacy/image_2.png")}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-lg font-semibold p-4">Ayurvedic Supplements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <div className="bg-[#F5F5F5] md:min-w-max max-[768px]:min-w-full max-w-fit flex flex-row mx-auto gap-8 px-10 pt-2 pb-2 rounded-full absolute left-[50%] transform -translate-x-[50%] -translate-y-[50%] shadow-lg">
        <p className="text-[#5FA02E] text-xl py-2">
          Rediscover the Healing Power of Nature
        </p>
        <button
          className="px-5 bg-[#5FA02E] sm:py-0 rounded-full text-[#F3FFEA] hover:bg-[#4a7e24] transition-colors duration-300"
          onClick={() => handleButtonClick("form1")}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default Facilities;
