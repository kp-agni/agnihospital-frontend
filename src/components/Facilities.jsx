import React, { useState } from "react";
import Book_Appointment from "../components/Appointment/Book_Appointment";
import useAppointmentForm from "../hook/useAppointmentForm";

function Facilities() {
  const [selectedImage, setSelectedImage] = useState(null);
  const opd2 = [
    "/facility/opd2/image_1.png",
    "/facility/opd2/image_2.png",
    "/facility/opd2/image_3.png",

  ];
  const opd1 = [
    "/facility/opd1/image_1.png",
    "/facility/opd1/image_2.png",
    "/facility/opd1/image_3.png",
    "/facility/opd1/image_4.png",
    "/facility/opd1/image_6.png",

  ];
  const receptionarea = [
    "/facility/reception/image_1.png",
    "/facility/reception/image_2.png",
    "/facility/reception/image_3.png",
    "/facility/reception/image_4.png",
    "/facility/reception/image_5.png",
    "/facility/reception/image_6.png",

  ];
  const panchkarma = [
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
          <h1 className="font-bold text-[#394E29]">Reception Area</h1>
          <p className="text-[#757575] mt-4 text-justify">
            Our warm and welcoming reception is designed to assist you with
            appointments, inquiries, and guidance for your Ayurvedic journey.
            Our staff ensures a seamless experience from the moment you arrive.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-8">
          {receptionarea.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-md cursor-pointer">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="h-48 w-full max-w-full rounded-lg object-cover object-center transition-transform duration-300 hover:scale-105"
                onClick={() => handleImageClick(src)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 px-12 xl:px-40">
        <div className="">
          <h1 className="font-bold text-[#394E29]">Consultation Rooms</h1>
          <p className="text-[#757575] mt-4 text-justify">OPD 1</p>
          <p className="text-[#757575] mt-4 text-justify">
            A space dedicated to initial assessments, Ayurvedic diagnosis, and
            personalized treatment planning. Here, patients receive expert
            guidance on lifestyle, diet, and holistic healing based on their
            unique body constitution.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-8">
          {opd1.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-md cursor-pointer">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="h-48 w-full max-w-full rounded-lg object-cover object-center md:h-60 transition-transform duration-300 hover:scale-105"
                onClick={() => handleImageClick(src)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="mt-12">
          <p className="text-[#757575] mt-4 text-justify">OPD 2</p>
          <p className="text-[#757575] mt-4 text-justify">
            This room is designed for in-depth evaluations, follow-ups, and
            specialized treatments. It focuses on chronic conditions,
            Panchakarma therapy planning, and advanced Ayurvedic care, ensuring
            a tailored approach for every patient.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {opd2.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-md cursor-pointer">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                onClick={() => handleImageClick(src)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 px-12 xl:px-40">
        <div className="">
          <h1 className="font-bold text-[#394E29]">Panchakarma Room</h1>
          <p className="text-[#757575] mt-4 text-justify">
            A dedicated space for traditional Panchakarma therapies, designed
            with a soothing ambiance, advanced Ayurvedic treatment beds, and
            expert supervision to facilitate deep detoxification and
            rejuvenation.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
       
          {panchkarma.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-md cursor-pointer">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="h-96 w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                onClick={() => handleImageClick(src)}
                loading="lazy"
              />
            </div>
          ))}
        
        </div>
      </section>

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

export default Facilities;
