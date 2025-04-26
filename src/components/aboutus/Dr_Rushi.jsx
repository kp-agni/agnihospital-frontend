import React from "react";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function Dr_Rushi() {
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();
  return (
    <div className="container mx-auto w-full">
      <section className="py-8 px-12 xl:px-56 grid md:grid-cols-2 gap-12">
        <div className="items-center justify-center">
          <img
            src="/person/dr_rushi.png"
            alt="Ayurveda"
            className="rounded-md shadow-md"
            loading="lazy"
          />
        </div>
        {visibleFormId === "form1" && (
              <div className="fixed inset-0 flex justify-center items-center z-10">
                <div className="relative">
                  <Book_Appointment closeForm={closeForm} />
                </div>
              </div>
            )}
        <div className="py-6">
          <h1 className="text-2xl font-bold text-[#394E29]">Dr.Rushi Patel</h1>
          <p className="mt-2 text-lg  text-[#757575]">
            Co-Founder & Ayurved Consultant,
            <br /> Parayani Nadi Vaidya and Ayurvedacharya
          </p>
          <p className="text-lg mt-4 text-[#757575] font-bold">
            B.A.M.S., F.A.A.S.S.,
          </p>
          <p className="text-[#757575]">MBA in HealthCare & Hospital Administration</p>
          <div className="mt-6 text-[#757575]">
            <h3 className="text-lg font-bold mb-4">OPD Timings</h3>
            <p className="mb-4">
              Monday to Saturday <br /> 9:00 AM to 1:00 PM
            </p>
            <p>
              Sunday: Prior Appointment Only <br /> 9:00 AM to 1:00 PM
            </p>
          </div>
        </div>
      </section>
      <section className="py-8 px-12 xl:px-56 grid md:grid-cols-2 gap-12 relative">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl font-bold text-[#757575]">
            Summary of Education
          </h2>
          <ul className="mt-4 list-inside text-[#757575]">
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Ayurvedacharya from Shree Swaminarayan Ayurvedic College,Kalol-Gandhinagar.</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Fellowship in Applied Ayurvedic Science at SGVP (F.A.A.S.S.) from SGVP Holistic Hospital, Ahemdabad.</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Master of Business Administration (M.B.A.) in Healthcare & Hospital Administration From Ahmedabad Management Association associated with CSUSB.</span>
            </li>
          </ul>
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block absolute top-20 right-1/2 h-64 border-l-2 border-[#5FA02E]"></div>

        {/* Right Column */}
        <div className="ml-2">
          <h2 className="text-2xl font-bold text-[#757575]">
            Summary of Experience
          </h2>
          <ul className="mt-4 list-inside text-[#757575]">
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Co- Founder & Ayurved Consultant Since 2023 at Agni Ayurved Hospital.</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Ayurvedic Dermatologist (Hair & Skin) at Pavitram Ayurved Panchakarma Clinic Since Inception.</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-8 px-12 xl:px-56 ">
        <div>
          <h2 className="text-2xl font-bold text-[#757575]">
            Services and Treatments
          </h2>
          <ul className="mt-4 list-inside text-[#757575]">
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Specialist of Nadi Parikshana</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Consultation with Care</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Counselling</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Personalised Diet Plan</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Lifestyle Recommendation</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Chronic Illness Management</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Seasonal Guidance</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Wellness</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Spiritual Health Guidance</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-8 xl:pb-16 px-12 xl:px-56 ">
        <div>
          <h2 className="text-2xl font-bold text-[#757575]">
            Achievement & Awards
          </h2>
          <ul className="mt-4 list-inside text-[#757575]">
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>World Book of Record 2023</span>
            </li>
          </ul>
        </div>
      </section>
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

export default Dr_Rushi;
