import React, { useState } from "react";
import axios from "axios";
import Book_Appointment from "../../components/Appointment/Book_Appointment";
import useAppointmentForm from "../../hook/useAppointmentForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Contact_us() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [message, setMessage] = useState("");
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://agnihospital-backend.vercel.app/api/contact-us", formData);
      setMessage("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setMessage("Error sending message. Please try again.");
      console.error(error);
    }
  };

  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden"
        style={{ 
          backgroundImage: `url(/hero_image/contact_hero2.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          imageRendering: 'crisp-edges',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden'
        }}
        id="Header"
      >
        {visibleFormId === "form1" && (
          <div className="fixed inset-0 flex justify-center items-center z-10">
            <div className="relative">
              <Book_Appointment closeForm={closeForm} />
            </div>
          </div>
        )}
        <div className="container text-center mx-auto py-4 px-6 text-white">
          <h1 className="text-5xl font-semibold text-center pt-20">
            Let's Start Your Healing Journey
          </h1>
          <p className="pt-5 max-w-lg mx-auto">
            We're just a message away. Share your concerns, ask questions, or
            schedule a visit—your well-being is our priority.
          </p>
          <div className="mt-10">
            <a
              className="bg-white px-5 py-2 rounded-full text-[#5FA02E]"
              href="#contact-form"
            >
              Contact us now
            </a>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-20 px-12">
        <h2 className="font-bold text-3xl text-[#394E29] text-center mb-8">Why Choose Us?</h2>
        <p className="text-[#757575] text-center max-w-3xl mx-auto mb-12">
          At our Agni Ayurved hospital, we blend the wisdom of ancient healing with the care and attention you deserve. Here's what makes us different:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-[#5FA02E] font-semibold text-xl mb-3">1. Experienced Ayurvedic Doctors</h3>
            <p className="text-gray-600">Our team of Parayani Nadi Vaidya certified Ayurvedic practitioners brings years of experience in treating a wide range of health conditions with personalized care and deep expertise with Nadi Parikshana.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-[#5FA02E] font-semibold text-xl mb-3">2. Authentic Treatments</h3>
            <p className="text-gray-600">We follow classical Ayurvedic texts and time-tested procedures, using only high-quality, herbal, and natural ingredients in all treatments and medications.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-[#5FA02E] font-semibold text-xl mb-3">3. Customized Healing Plans</h3>
            <p className="text-gray-600">Every individual is unique. We create tailored treatment plans based on your body constitution (Prakriti), lifestyle, and health concerns—for effective, lasting results.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-[#5FA02E] font-semibold text-xl mb-3">4. Specialized in Panchakarma</h3>
            <p className="text-gray-600">Our signature Panchakarma therapies offer deep detoxification and rejuvenation under expert supervision in a serene, hygienic environment.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-[#5FA02E] font-semibold text-xl mb-3">5. Focus on Prevention & Wellness</h3>
            <p className="text-gray-600">We don't just treat illness—we guide you towards a healthier, balanced lifestyle with diet, yoga, and wellness routines aligned with Ayurvedic principles.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-[#5FA02E] font-semibold text-xl mb-3">6. Positive Patient Outcomes</h3>
            <p className="text-gray-600">Hundreds of satisfied patients have found relief and recovery through our treatments. Your health and satisfaction are our biggest achievements.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#5FA02E] grid grid-cols-1 md:grid-cols-3 gap-8 py-20 px-8 text-white text-center">
        <div className="bg-white text-black p-6 rounded-lg">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-[#5FA02E] text-5xl mb-4"
          />
          <p>
            <a href="tel:+918980003635" className="hover:underline">
              +91 89800 03635
            </a>
          </p>
          <p>
            <a href="tel:+917016986245" className="hover:underline">
              +91 70169 86245
            </a>
          </p>
        </div>
        <div className="bg-white text-black p-6 rounded-lg">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-[#5FA02E] text-5xl mb-4"
          />
          <p>
            <a
              href="https://www.google.com/maps/place/Agni+Ayurved+Hospital+-+Best+Ayurveda+%26+Panchakarma+Center+in+Nikol,+Ahmedabad/@23.0465418,72.645273,14z/data=!4m10!1m2!2m1!1s205+Palm+Arcade,+Shukan+Char+Rasta,+Nikol,+Ahmedabad,+Gujarat-382350!3m6!1s0x395e87f8a657423f:0xc4e1be06d790e0d!8m2!3d23.0503248!4d72.6642421!15sCkQyMDUgUGFsbSBBcmNhZGUsIFNodWthbiBDaGFyIFJhc3RhLCBOaWtvbCwgQWhtZWRhYmFkLCBHdWphcmF0LTM4MjM1MFpCIkAyMDUgcGFsbSBhcmNhZGUgc2h1a2FuIGNoYXIgcmFzdGEgbmlrb2wgYWhtZWRhYmFkIGd1amFyYXQgMzgyMzUwkgEIaG9zcGl0YWyqAX4QASoTIg8yMDUgcGFsbSBhcmNhZGUoADIfEAEiG9rZMaP4nBz_4thCDIPisOhKxxCHhbfD1_1VcjJEEAIiQDIwNSBwYWxtIGFyY2FkZSBzaHVrYW4gY2hhciByYXN0YSBuaWtvbCBhaG1lZGFiYWQgZ3VqYXJhdCAzODIzNTDgAQA!16s%2Fg%2F11ss6zr88v?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              205, Palm Arcade, Shukan Char Rasta, Nikol, Ahmedabad,
              Gujarat-382350.
            </a>
          </p>
        </div>
        <div className="bg-white text-black p-6 rounded-lg">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-[#5FA02E] text-5xl mb-4"
          />
          <p className="break-words">
            <a
              href="mailto:agniayurvedhospital@gmail.com"
              className="hover:underline"
            >
              agniayurvedhospital@gmail.com
            </a>
          </p>
        </div>
      </section>

      <section
        id="contact-form"
        className="flex justify-center items-center py-24 px-8"
      >
        <div className="p-8 bg-gray-100 shadow-lg rounded-2xl border-l-8 border-[#5FA02E] max-w-5xl w-full">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#5FA02E] mb-8">
            Get In Touch
          </h2>
          {message && (
            <p className="text-center text-green-600 font-semibold">
              {message}
            </p>
          )}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
          >
            <div className="md:col-span-2">
              <label
                htmlFor="name"
                className="text-[#5FA02E] font-semibold mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-b border-gray-400 py-2 outline-none w-full"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-[#5FA02E] font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-b border-gray-400 py-2 outline-none w-full"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="text-[#5FA02E] font-semibold mb-1"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-b border-gray-400 py-2 outline-none w-full"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="text-[#5FA02E] font-semibold mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="border-b border-gray-400 py-2 outline-none w-full"
                required
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="bg-[#5FA02E] text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
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

export default Contact_us;
