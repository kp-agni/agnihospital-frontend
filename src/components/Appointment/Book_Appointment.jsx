// Import necessary libraries
import React, { useState } from "react";
import axios from "axios";


const Book_Appointment = ({isFormVisible,closeForm}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    timeSlot: "",
    date: "",
    message: "",
  });

  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [availableDoctors, setAvailableDoctors] = useState([
    {
      name: "Dr. Dharmik Kachachhi",
      timeSlots: ["04:30 PM - 05:30 PM", "05:30 PM - 06:30 PM", "06:30 PM - 07:30 PM", "07:30 PM - 08:30 PM"],
    },
    {
      name: "Dr. Rushi Patel",
      timeSlots: ["09:00 AM - 10:00AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM"],
    },
    {
      name: "Dr. Darshan Dudhat",
      timeSlots: ["09:00 AM - 10:00AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM", "04:30 PM - 05:30 PM", "05:30 PM - 06:30 PM", "06:30 PM - 07:30 PM", "07:30 PM - 08:30 PM"],
    },
  ]);

  // Update available doctors and time slots when date changes
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const today = new Date().toISOString().split('T')[0];

    if (selectedDate < today) {
      alert("Please select a valid future date.");
      return;
    }

    setFormData({ ...formData, date: selectedDate });

    const dateObj = new Date(selectedDate);
    const day = dateObj.getDay();


    // If the selected date is Sunday, show only two doctors and restrict time slots
    if (day === 0) {
      setAvailableDoctors([
        {
          name: "Dr. Dharmik Kachachhi",
          timeSlots: ["09:00 AM - 10:00AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM"],
        },
        {
          name: "Dr. Rushi Patel",
          timeSlots: ["09:00 AM - 10:00AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM"],
        },
        {
          name: "Dr. Darshan Dudhat",
          timeSlots: ["09:00 AM - 10:00AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM"],
        },
      ]);
      setAvailableTimeSlots(["09:00 AM", "01:00 PM"]);
    } else {
      // If it's not Sunday, show all doctors and their original time slots
      setAvailableDoctors([
        {
          name: "Dr. Dharmik Kachachhi",
          timeSlots: ["04:30 PM - 05:30 PM", "05:30 PM - 06:30 PM", "06:30 PM - 07:30 PM", "07:30 PM - 08:30 PM"],
        },
        {
          name: "Dr. Rushi Patel",
          timeSlots: ["09:00 AM - 10:00AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM"],
        },
        {
          name: "Dr. Darshan Dudhat",
          timeSlots: ["09:00 AM - 10:00AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM", "04:30 PM - 05:30 PM", "05:30 PM - 06:30 PM", "06:30 PM - 07:30 PM", "07:30 PM - 08:30 PM"],
        },
      ]);
      setAvailableTimeSlots([
        "09:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "01:00 PM",
        "03:00 PM",
        "11:00 AM",
        "02:30 PM",
        "04:30 PM",
      ]);
    }
  };

  const handleDoctorChange = (e) => {
    const selectedDoctor = e.target.value;
    const doctor = availableDoctors.find((doc) => doc.name === selectedDoctor);
    if (doctor) {
      setFormData({ ...formData, doctor: selectedDoctor, timeSlot: "" });
      setAvailableTimeSlots(doctor.timeSlots);
    }
  };
const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://agnihospital-backend.vercel.app/api/book-appointment", formData);
      setMessage('Appointment booked successfully!');
      setFormData({
        name: "",
        email: "",
        phone: "",
        doctor: "",
        timeSlot: "",
        date: "",
        message: "",
      });
    } catch (error) {
      setMessage('Failed to book appointment.');
      console.error( error);
    }
  };
  

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4">
    <div className="bg-[#F3FFEA] relative shadow-lg rounded-2xl border-l-8 border-[#5FA02E] w-full max-w-4xl max-h-screen overflow-y-auto p-6 md:p-10">
  
      {/* Close Button */}
      <button
        className="absolute md:right-9 right-5 top-4 z-50 text-gray-500 hover:text-[#5FA02E]"
        onClick={closeForm}
      >
        ✖
      </button>
  
      {/* Heading */}
      <h2 className="md:text-3xl text-[22px] font-bold text-center text-[#5FA02E] mb-6">
        Book An Appointment
      </h2>
  
      {message && <p className="text-center text-green-600 font-semibold">{message}</p>}
  
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#5FA02E]">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 sm:text-sm"
              placeholder="Your Full Name"
              required
            />
          </div>
  
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#5FA02E]">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 sm:text-sm"
              placeholder="Your Email Address"
              required
            />
          </div>
  
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#5FA02E]">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 sm:text-sm"
              placeholder="Your Contact Number"
              required
            />
          </div>
  
          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-[#5FA02E]">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleDateChange}
              className="mt-1 block w-full px-4 py-2 text-[#5FA02E] border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 sm:text-sm"
              required
            />
          </div>
  
          {/* Doctor */}
          <div>
            <label htmlFor="doctor" className="block text-sm font-medium text-[#5FA02E]">Dr.</label>
            <select
              id="doctor"
              name="doctor"
              value={formData.doctor}
              onChange={handleDoctorChange}
              className="mt-1 block w-full px-4 py-2 text-[#5FA02E] border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 sm:text-sm"
              required
            >
              <option value="">Drop Down menu</option>
              {availableDoctors.map((doctor) => (
                <option key={doctor.name} value={doctor.name}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>
  
          {/* Time Slot */}
          {formData.doctor && (
            <div>
              <label htmlFor="timeSlot" className="block text-sm font-medium text-[#5FA02E]">Time Slot</label>
              <select
                id="timeSlot"
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 text-[#5FA02E] border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 sm:text-sm"
                required
              >
                <option value="">Select Time Slot</option>
                {availableTimeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
  
        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#5FA02E]">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 sm:text-sm"
            placeholder="How can we help you?"
            rows="4"
          ></textarea>
        </div>
  
        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-white text-[#5FA02E] font-semibold py-2 px-6 border border-[#5FA02E] rounded-lg shadow-md hover:bg-[#5FA02E] hover:text-white focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default Book_Appointment;
