import React from "react";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";


function Dr_Dharmik() {
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();
  return (
    <div className="container mx-auto w-full">
      <section className="py-8 px-12 xl:px-56 grid md:grid-cols-2 gap-12">
        <div className="items-center justify-center">
          <img
            src="/person/dr_dharmik.png"
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
            Dr. Dharmik Kachchhi
          </h1>
          <p className="mt-2 text-lg  text-[#757575]">
            Co-Founder & Ayurved Consultant,
            <br /> Parayani Nadi Vaidya and Ayurvedacharya
          </p>
          <p className="text-lg mt-4 text-[#757575] font-bold">
            B.A.M.S., C.Y.S., F.A.A.S.S.,
          </p>
          <p className="text-[#757575]">MBA in Healthcare & Hospital Administration</p>
          <div className="mt-6 text-[#757575]">
            <h3 className="text-lg font-bold mb-4">OPD Timings</h3>
            <p className="mb-4">
              Monday to Saturday <br /> 5:00 PM to 9:00 PM
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
              <span>Ayurvedacharya from world renowned institute Gujarat Ayurved University, Jamnagar.</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Fellowship in Applied Ayurvedic Science at SGVP (F.A.A.S.S.) from SGVP Holistic Hospital, Ahmedabad.</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Certificate in Yoga Science (C.Y.S.) from Doctor Babasaheb Ambedkar Open University, Ahmedabad.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Master of Business Administration (M.B.A.) in Healthcare and Hospital Administration from AMA associated with California State University - San Bernardino.</span>
            </li>
          </ul>
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block absolute top-12 right-1/2 h-96 border-l-2 border-[#5FA02E]"></div>

        {/* Right Column */}
        <div className="ml-2">
          <h2 className="text-2xl font-bold text-[#757575]">
            Summary of Experience
          </h2>
          <ul className="mt-4 list-inside text-[#757575]">
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Co-Founder & Ayurved Consultant (Parayani Nadi Vaidya) since inception at Agni Ayurved Hospital, Ahmedabad.</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Ayurvedic Gastroenterologist at Pavitram Ayurvedic Panchakarma Clinic since 2024.</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Chief Ayurved Consultant since 2023 at Shree Aashapura Maa (Gadhakada) Jain Hospital, Ahmedabad.</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Yoga Instructor at Faculty of Homoeopathy (Shree Swaminarayan Homoeopathy College) Swaminarayan University - Gandhinagar since March 2025.</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Medical Officer at Monark Ayurved Medical College and Hospital (Jan 2023- Dec 2023).</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Intern Doctor at PSAM Hospital, Gandhinagar (Sep 2021- Sep 2022).</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-8 px-12 xl:px-56 ">
      <div>
          <h2 className="text-2xl font-bold text-[#757575]">Services and Treatments</h2>
          <ul className="mt-4 list-inside text-[#757575]">
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>A Rare Specialist of Nadi Parikshan</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Consulting and Counselling</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Daivavyapashraya Chikitsa</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Diet According to Prakriti & Vikriti</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Personalized Health Assessment</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Lifestyle & Diet Recommendation</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Herbal Medicine Prescriptions</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Chronic Disease Management</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Wellness & Holistic Health</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Lectures and Training</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-8 px-12 xl:px-56 ">
      <div>
          <h2 className="text-2xl font-bold text-[#757575]">
          Teaching & Training Experience          </h2>
          <ul className="mt-4 list-inside text-[#757575]">
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Guest Speaker for Transitional Curriculum of 1st year B.A.M.S. students during December 2023 at Himalay Ayurved Chikitsalay & Mahavidhyalay, Vadasma.</span>
            </li>
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Guest Eminent Speaker for Motivational Lecture for new B.A.M.S. students during November 2023 at Shree Swaminarayan Ayurvedic College abd Premswarup Swami Ayurvedic Multispeciality Hospital - Kalol, Gandhinagar.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Guest Speaker for Motivational Lecture for new B.A.M.S. students (Transitional Curriculum) on 8th November 2024 at Shree Swaminarayan Ayurvedic College (Swaminarayan University).</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-10 xl:pb-20 px-12 xl:px-56 ">
      <div>
          <h2 className="text-2xl font-bold text-[#757575]">
          Achievement & Awards          </h2>
          <ul className="mt-4 list-inside text-[#757575]">
            <li className="mb-4 flex items-start">
              <span className="text-[#5FA02E] mr-2">•</span>
              <span>Member of BOS (Board of Study) At Swaminarayan University, Gandhinagar.</span>
            </li>
            <li className="flex items-start">
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

export default Dr_Dharmik;
