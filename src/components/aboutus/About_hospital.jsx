import React, { useState } from "react";
import { assets } from "../../assets/assets";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";

function AboutHospital() {
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();

  return (
    <div className=" w-full mx-auto">
      <div className="py-20 px-12 xl:px-36">
        <div className="grid lg:grid-cols-2 gap-12 ">
          <div className="items-center justify-center">
            <img
              src="/hero_image/Hero_image.png"
              alt="Ayurveda"
              className="h-full rounded-md shadow-md"
            />
          </div>
          {visibleFormId === "form1" && (
              <div className="fixed inset-0 flex justify-center items-center z-10">
                <div className="relative">
                  <Book_Appointment closeForm={closeForm} />
                </div>
              </div>
            )}
          <div className="text-justify ">
            <h2 className="font-bold text-[#394E29] mb-4 leading-[54px]">
              Healing Through The Wisdom Of Ayurveda
            </h2>
            <p className="text-[#757575] mb-4 leading-8">
              At Agni Ayurved Hospital, we are a dedicated team of Parayanai
              Nadi Vaidyas, continuing the rich legacy of Ayurveda, Panchakarma,
              and Yoga. Our mission is to build a healthier community by
              upholding quality and ethics as our core values.
            </p>
            <p className="text-[#757575] leading-8">
              We take pride in cultivating a strong doctor-patient relationship
              through responsible, personalized care. Our expert Vaidyas focus
              on holistic well-being, ensuring that each patient receives the
              best possible treatment with genuine empathy and dedication.
            </p>
          </div>
        </div>
        <div className="text-[#757575] mt-10 text-justify  leading-8">
          <p className="mb-4">
            Our expert Vaidyas focuses on the holistic well-being of our
            patients, addressing their physical, mental, and social wellness.
            Our entire staff is committed to providing a caring and nurturing
            environment, ensuring that each patient receives the best possible
            treatment with genuine empathy and dedication.
          </p>
        </div>
      </div>
      <section className="bg-[#5FA02E] py-20 px-12 xl:px-36">
        <div className="flex flex-col md:flex-row text-white justify-center text-justify gap-12">
          <div className="font-bold w-[400px]">
            <h3>Our Vision</h3>
          </div>
          <div className="leading-8">
            <p className="mb-4">
              At Agni Ayurved Hospital, we strive to be recognized for
              excellence in holistic healthcare, chosen for our deep commitment
              to compassionate care.
            </p>
            <p>
              We are dedicated to creating healthy communities by integrating
              ancient wisdom through the time-tested principles of Ayurveda.
            </p>
          </div>
        </div>
      </section>
      <div className="mb-10">
        <img src="/hero_image/ourvision.png" alt="" />
      </div>
      <section className="py-20 px-12 xl:px-36 border-b-2 border-[#5FA02E]">
        <div>
          <h2 className="font-bold  text-[#394E29] mb-10">Mission</h2>
          <div className="text-[#757575] text-justify space-y-4">
            <p>
              The mission of Agni Ayurved Hospital is to lead the world towards
              a healthier future by advancing health and wellness through the
              ancient science of Ayurveda.
            </p>
            <p>
              By offering holistic healing solutions rooted in natural
              therapies, the hospital aims to promote overall well-being,
              empower individuals to lead balanced lives, and restore harmony
              between mind, body, and spirit.
            </p>
            <p>
              Through expertise, dedication, and personalized care, Agni Ayurved
              Hospital strives to become a beacon of health, contributing to the
              global transformation towards sustainable and natural wellness
              practices.
            </p>
            <p>
              Our mission is to connect with the world, sharing our knowledge
              and expertise to improve global health, while continuously
              innovating to deliver tomorrow's healthcare today, for a
              healthier, more sustainable future.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 px-12 xl:px-36">
        <div className="py-10">
          <h2 className="font-bold  text-[#394E29] mb-10">Values</h2>
          <p className="text-[#757575] text-justify">
            The values of Agni Ayurved Hospital are fundamental to its mission
            of promoting health and wellness through Ayurveda. These core values
            guide every aspect of its services and interactions with patients:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-20">
            <div className="bg-gray-100 px-4 py-4 rounded-lg shadow-md flex flex-row gap-8">
              <img src={assets.dignity} alt="" />
              <div>
                <p className="text-[#5FA02E]  font-bold mb-2">
                  Dignity & Unity
                </p>
                <p className="text-[#757575] text-[20px]">
                  Upholding the dignity of every individual while fostering a
                  sense of unity within the community, creating an environment
                  of shared purpose and collective well-being.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 px-4 py-4 rounded-lg shadow-md flex flex-row gap-8">
              <img src={assets.trust} alt="" />
              <div>
                <p className="text-[#5FA02E] font-bold mb-2">
                  Trust & Transparency
                </p>
                <p className="text-[#757575] text-[20px]">
                  Building trust through transparent practices, ensuring
                  patients feel informed and confident in the care they receive.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 px-4 py-4 rounded-lg shadow-md flex flex-row gap-12">
              <img src={assets.quality} alt="" />
              <div>
                <p className="text-[#5FA02E]  font-bold mb-2">
                  Quality & Empowerment
                </p>
                <p className="text-[#757575] text-[20px]">
                  Committing to the highest standards of quality in treatment
                  and care, while empowering individuals with knowledge and
                  tools to take control of their health.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 px-4 py-4 rounded-lg shadow-md flex flex-row gap-8">
              <img src={assets.honesty} alt="" />
              <div>
                <p className="text-[#5FA02E] font-bold mb-2">
                  Honesty & Ethics
                </p>
                <p className="text-[#757575] text-[20px]">
                  Maintaining honesty in all interactions, adhering to ethical
                  practices in every aspect of patient care and service
                  delivery.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 px-4 py-4 rounded-lg shadow-md flex flex-row gap-8">
              <img src={assets.care} alt="" />
              <div>
                <p className="text-[#5FA02E] font-bold mb-2">
                  Care & Compassion
                </p>
                <p className="text-[#757575] text-[20px]">
                  Providing compassionate care that treats each patient with
                  empathy, understanding, and genuine concern for their
                  well-being.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 px-4 py-4 rounded-lg shadow-md flex flex-row gap-8">
              <img src={assets.respect} alt="" />
              <div>
                <p className="text-[#5FA02E] font-bold mb-2">
                  Respect & Resilience
                </p>
                <p className="text-[#757575] text-[20px]">
                  Treating all individuals with respect, recognizing their
                  unique needs, and building resilience through holistic healing
                  practices that promote long-term health and wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#F5F5F5] md:min-w-max max-[768px]:min-w-full max-w-fit flex flex-row mx-auto gap-8 px-10 pt-2 pb-2 rounded-full absolute left-[50%] transform -translate-x-[50%] -translate-y-[50%] ">
        <p className="text-[#5FA02E] text-xl py-2 ">
          Rediscover the Healing Power of Nature
        </p>
        <button
          className="px-5 bg-[#5FA02E] sm:py-0 rounded-full text-[#F3FFEA]"
          onClick={() => handleButtonClick("form1")}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default AboutHospital;
