import React from "react";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function Dr_Darshan() {
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();
  return (
    <div className="container mx-auto w-full">
      <section className="py-8 px-12 xl:px-56 grid md:grid-cols-2 gap-12">
        <div className="items-center justify-center">
          <img
            src="/person/dr_darshan.png"
            alt="Ayurveda"
            className="rounded-md shadow-md"
            loading="eager"
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
          <h1 className="text-2xl font-bold text-[#394E29]">
            Dr. Darshan Dudhat
          </h1>
          <p className="mt-2 text-lg  text-[#757575]">
            Co-Founder & Ayurved Consultant,
            <br /> Parayani Nadi Vaidya and Ayurvedacharya
          </p>
          <p className="text-lg mt-4 text-[#757575] font-bold">
            B.A.M.S., F.A.A.S.S., F.I.P., MBA in
          </p>
          <p className="text-[#757575]">Healthcare & Hospital Administration</p>
          <div className="mt-6 text-[#757575]">
            <h3 className="text-lg font-bold mb-4">OPD Timings</h3>
            <p className="font-semibold">Monday to Saturday</p>
            <p className="mb-4">
              Morning :- 9:00 am to 1:00 pm <br /> Evening :- 4:00 pm to 9:00 pm
            </p>
            <p className="font-semibold">Sunday: Prior Appointment Only</p>
            <p> 9:00 AM to 1:00 PM</p>
          </div>
        </div>
      </section>
      <section className="py-8 px-12 xl:px-56 grid md:grid-cols-2 gap-12 relative">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl font-bold text-[#757575]">
            Summary of Education
          </h2>
          <ul className="mt-4  list-inside text-[#757575]">
            <li className="mb-4">
              * Bachelor of Ayurvedic Medicine and Surgery (B.A.M.S.) from Rajiv
              Gandhi University of Health Science, karnataka.
            </li>
            <li className="mb-4">
              * Fellowship in Applied Ayurvedic Science at sgvp (F.A.A.S.S.)
              From SGVP Holistic Hospital.
            </li>
            <li className="mb-4">
              * Fellowship In Panchakarma (F.I.P) from Dhanvantari Ayurved
              Shikshan Sanshodhan Sanstha, Dhule, Maharashtra.
            </li>
            <li>
              * MBA in Healthcare & Hospital Management From AMA Associated with
              California State University, San Bernardino.
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
          <ul className="mt-4  list-inside text-[#757575]">
            <li className="mb-4">
              * Co Founder & Panchakarma Consultant at Agni Ayurved Hospital
            </li>
            <li className="mb-4">
              * Panchakarma Consultant at Pavitram Ayurvedic Panchakarma Clinic
              since inception
            </li>
            <li>* Intern Doctor at CBG Ayurveda Hospital</li>
          </ul>
        </div>
      </section>
      <section className="py-8 px-12 xl:px-56 ">
        <div>
          <h2 className="text-2xl font-bold text-[#757575]">
            Services and Treatments
          </h2>
          <ul className="mt-4 list-inside text-[#757575]">
            <li>* Specialist of Nadi Parikshan</li>
            <li>* Panchkarma & Rejuvenation Therapy</li>
            <li>* Detox Therapy & Wellness</li>
            <li>
              * Vaman, Virechan, Basti, Nasya & Raktmokshan (Leech Therapy)
            </li>
            <li>* Shirodhara, Shirovirechan, Shiropichu, etc.</li>
            <li>* Spiritual & Mantra Therapy</li>
            <li>* Consulting & Counselling</li>
            <li>* Agnikarma, Viddhakarma, Cupping Therapy & Snigadhadagdha</li>
            <li>
              * Body Polishing, Herbal Ayurvedic Facial, Herbal Ayurvedic Kesh
              Shringar
            </li>
            <li>* Kriyakalpa, Karna Pooran & Karna Dhoopana, etc.</li>
            <li>* Diet Designing According to Ayurveda Principles</li>
          </ul>
        </div>
      </section>
      <section className="py-8 px-12 xl:px-56 ">
        <div>
          <h2 className="text-2xl font-bold text-[#757575]">
            Achievement & Awards{" "}
          </h2>
          <ul className="mt-4  list-inside text-[#757575]">
            <li className="mb-2">
            * Youth Vaidya Rising Award 2023 
            </li>
            <li className="mb-2">* World Book of Record 2023 </li>
            <li className="mb-2">* Ayurvda Shiromani Award 2024</li>
            <li className="mb-2">* Kshaar paani Award 2024 </li>
            <li>* International Book of Record 2024</li>
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

export default Dr_Darshan;
