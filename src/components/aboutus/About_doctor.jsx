import React from "react";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function About_doctor() {
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();
  return (
    <div className=" w-full mx-auto">
      <section className=" bg-[#F3FFEA]">
        <div className=" py-20 px-12 xl:px-56 ">
          <h1 className="text-[#394E29] font-bold">Meet Our Healing Experts</h1>
          <p className="mt-12 text-[#757575]">
            At Agni Ayurved, we believe that true healing begins with expert
            care and a compassionate touch. Our team of highly skilled Ayurvedic
            doctors is dedicated to guiding you on a transformative journey to
            health and balance.
          </p>
        </div>
       
      </section>
      {visibleFormId === "form1" && (
        <div className="fixed inset-0 flex justify-center items-center z-10">
          <div className="relative">
            <Book_Appointment closeForm={closeForm} />
          </div>
        </div>
      )}
      <section className=" py-20 px-12 xl:px-56">
        <div className=" mb-8">
          <h1 className="text-[#394E29] font-bold">Ayurved Consultant</h1>
        </div>
        <div className="text-[#757575]">
          <p className="mb-4">
            Our Ayurvedic Consultant offers a holistic approach to wellness,
            focusing on restoring balance and harmony in body, mind, and spirit.
            With expertise in Nadi Parikshan (pulse diagnosis), rejuvenation
            therapies (Rasayana Karma), and lifestyle guidance, they provide
            personalized treatments tailored to your unique needs.
          </p>
          <p>
            From addressing imbalances to enhancing overall vitality, our
            consultant is dedicated to empowering you with the timeless wisdom
            of Ayurveda for a healthier, more balanced life.
          </p>
        </div>
        <div className="flex max-[768px]:flex-col items-start mt-12 gap-12">
          <a href="/dr_dharmik" className="block">
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden max-w-xs hover:shadow-lg transition-shadow duration-300">
              {/* Image Section */}
              <img
                src="/person/dr_dharmik.png" // Replace with your actual image URL
                alt="Dr. Dharmik Kachchhi"
                className="w-full object-cover"
                loading="eager"
              />

              {/* Overlay Section */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#394E29] via-[#394E29]/100 to-transparent p-4 text-center">
                <h3 className="text-[24px] font-semibold text-white">
                  Dr. Dharmik Kachchhi
                </h3>
                <p className="text-[18px] text-gray-200 mt-2">
                Ayurveda Consultant                
                  <br />
                  (Ayurvedacharya)
                </p>
              </div>
            </div>
          </a>
          <a href="/dr_rushi" className="block">
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden max-w-xs">
              {/* Image Section */}
              <img
                src="/person/dr_rushi.png" // Replace with your actual image URL
                alt="Dr.Rushi Patel"
                className="w-full h-100 object-cover"
                loading="eager"
              />

              {/* Overlay Section */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#394E29] via-[#394E29]/100 to-transparent p-4 text-center">
                <h3 className="text-[24px] font-semibold text-white">
                  Dr. Rushi Patel
                </h3>
                <p className="text-[18px] text-gray-200 mt-2">
                Ayurveda Consultant
                  <br />
                  (Ayurvedacharya)
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
      <section className=" py-20 px-12 xl:px-56">
        <div className=" mb-8">
          <h1 className="font-bold  text-[#394E29]">Panchkarma Consultant</h1>
        </div>
        <div className="text-[#757575]">
          <p className="mb-4">
            Our Panchakarma Consultant specializes in Ayurvedic detoxification
            and rejuvenation therapies. By designing personalized treatment
            plans and overseeing therapies like Vamana, Virechana, Basti, and
            Nasya, they help cleanse toxins, balance doshas, and restore
            vitality.
          </p>
          <p>
            With expert guidance on diet, lifestyle, and post-treatment care,
            our consultant ensures a holistic healing journey tailored to your
            well-being and long-term health.
          </p>
        </div>
        <div className="flex items-start mt-12 gap-12">
          <a href="/dr_darshan" className="block">
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden max-w-xs">
              {/* Image Section */}
              <img
                src="/person/dr_darshan.png"// Replace with your actual image URL
                alt="Dr.Darshan Dudhat"
                className="w-full h-100 object-cover"
                loading="lazy"
              />

              {/* Overlay Section */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#394E29] via-[#394E29]/100 to-transparent p-4 text-center">
                <h3 className="text-[24px] font-semibold text-white">
                  Dr. Darshan Dudhat
                </h3>
                <p className="text-[18px] text-gray-200 mt-2">
                Panchakarma Consultant
                  <br />
                  (Ayurvedacharya)
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
      <div className="bg-[#F5F5F5] md:min-w-max max-[600px]:min-w-full max-w-fit flex flex-row mx-auto gap-8 px-10 pt-2 pb-2 rounded-full absolute left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
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


export default About_doctor;
