import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialsData } from "../assets/assets";
import Book_Appointment from "../components/Appointment/Book_Appointment";
import useAppointmentForm from "../hook/useAppointmentForm";
// import "./Home.css";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  const images = [
    "/homeslider/slider_1.png",
    "/homeslider/slider_2.png",
    "/homeslider/slider_3.png",
    "/homeslider/slider_4.png",
    "/homeslider/slider_5.png",
    "/homeslider/slider_6.png",
    "/homeslider/slider_7.png",
    "/homeslider/slider_8.png",
  ];
  const { visibleFormId, handleButtonClick, closeForm } = useAppointmentForm();

  return (
    <div>
      <div
        className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
        style={{ backgroundImage: `url(/hero_image/bg_image.png)` }}
        id="Header"
      >
        <div className="flex flex-col justify-center items-center text-center mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-36 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-semibold text-center mx-auto leading-tight max-w-4xl">
            लोकाः समस्ताः सुखिनो भवन्तु ।।
          </h1>

          <div className="pt-4 sm:pt-5 text-center">
            <p className="mx-auto max-w-2xl text-base sm:text-lg px-4 text-[#5FA02E] font-medium mb-4">
              May all beings in all the worlds be happy.
            </p>
            <p className="mx-auto max-w-2xl text-base sm:text-lg px-4">
              Discover natural healing through Ayurveda—personalized care to refresh your body, 
              calm your mind, and uplift your spirit.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10">
            <button
              className="bg-white border border-[#5FA02E] px-4 py-2 rounded-full text-[#5FA02E] font-bold hover:bg-[#5FA02E] hover:text-white transition-all duration-300 text-sm sm:text-base"
              onClick={() => handleButtonClick("form1")}
            >
              Book Appointment
            </button>
            {visibleFormId === "form1" && (
              <div className="fixed inset-0 flex justify-center items-center z-50">
                <div className="relative">
                  <Book_Appointment closeForm={closeForm} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="items-center justify-center mx-auto">
        <div className="flex flex-col item-center justify-center mx-auto py-20 px-12 xl:px-36 w-full overflow-hidden lg:flex-row gap-16">
          <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/facility/opd1/image_2.png" 
                alt="Facility" 
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/facility/panchkarma/image_6.png" 
                alt="OPD 1" 
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/facility/reception/image_5.png" 
                alt="OPD 2" 
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/facility/opd2/image_3.png" 
                alt="Panchkarma Room" 
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="flex flex-col item-center md:item-start mt-10 gap-5 lg:w-1/2">
            <h2 className="w-full font-bold text-[#394E29] text-3xl">
              World-Class Facilities For Holistic Healing
            </h2>
            <p className="text-[#757575] text-justify text-lg">
              Experience the perfect mix of traditional Ayurvedic treatments and Panchkarma therapies. From peaceful therapy rooms to expert-led Panchkarma sessions and yoga practices, everything is designed to support your health and well-being.
            </p>
            <div className="lg:mt-36 mt-12">
              <button className="px-8 py-2 bg-[#5FA02E] rounded-full text-[#F3FFEA] hover:bg-[#4a7d24] transition-colors duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center mx-auto py-20 px-12 xl:px-40 w-full overflow-hidden md:flex-row gap-40">
            <h2 className="items-start w-full text-[#394E29] font-bold text-3xl">
              Comprehensive Ayurveda Treatments Tailored for You
            </h2>
            <div className="items-end w-fit">
              <p className="text-[#757575] text-justify text-lg max-sm:py-10">
                Harnessing the wisdom of Ayurveda, we offer personalized
                therapies and treatments designed to restore balance, enhance
                vitality, and promote holistic well-being.
              </p>
            </div>
          </div>

          <div className="slidercontainer mx-auto xl:px-40 px-12 py-20">
            <Slider {...settings}>
              {treatments.map((treatment, index) => (
                <div key={index} className="px-2">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                      src={treatment.image}
                      alt={treatment.name}
                      className="w-full h-52 mx-auto px-4 py-2 object-cover"
                    />
                    <div className="p-4 text-left">
                      <h3 className="text-lg font-semibold text-[#394E29]">
                        {treatment.name}
                      </h3>
                      <a
                        href={`/basic-panchakarma`}
                        className="text-[#5FA02E] hover:text-[#4a7d24] transition-colors duration-300"
                      >
                        Learn More...
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="bg-[#5FA02E] text-center p-12 lg:w-full">
          <h2 className="text-3xl text-white mb-8">
            Our Journey of Care and Healing
          </h2>
          <div className="flex flex-col md:flex-row max-[768px]:gap-10 items-center justify-center gap-28 mt-5">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <p className="text-4xl font-medium text-white">10+</p>
              <p className="text-white">years Of Healing Experience</p>
            </div>
            <span className="text-white text-4xl">|</span>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <p className="text-4xl font-medium text-white">12999+</p>
              <p className="text-white">Happy Patient Treated</p>
            </div>
            <span className="text-white text-4xl">|</span>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <p className="text-4xl font-medium text-white">3</p>
              <p className="text-white">Expert Ayurvedic Doctors</p>
            </div>
          </div>
        </div>

        <div className="bg-[#EDEDED] h-auto mx-auto py-20 px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex justify-center items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-2xl">
                      ★
                    </span>
                  ))}
                </div>
                <div className="border-t-2 border-[#5FA02E] my-4 w-1/4 mx-auto"></div>
                <h3 className="text-center text-lg font-semibold mb-2 text-[#394E29]">
                  {testimonial.name}
                </h3>
                <p className="text-center text-[#757575] text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center mx-auto py-20 px-12 xl:px-40 w-full overflow-hidden md:flex-row gap-12">
          <h2 className="items-start w-full font-bold text-[#394E29] text-3xl">
            Meet Our Expert Team
          </h2>
          <div className="item-start md:item-start">
            <p className="text-[#757575] text-justify text-lg max-sm:py-10">
            Your wellness is in expert hands. Our team includes three highly skilled Parayani Nadi Vaidyas — two Ayurveda Consultants and one Panchakarma Expert —dedicated to providing personalized care and guiding you on your journey to lasting health and balance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mx-auto pb-20 px-12 xl:px-40 mt-10">
          {person.map((d) => (
            <div key={d.name} className="relative group">
              <a href={d.src}>
                <img
                  src={d.img}
                  alt={d.name}
                  className="rounded-xl mt-5 object-cover w-full h-96 group-hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#394E29] to-transparent h-1/3 rounded-b-xl"></div>
                <div className="absolute bottom-4 text-center text-white px-4 w-full group-hover:bottom-6 transition-all duration-300">
                  <p className="text-lg font-semibold mb-2">{d.name}</p>
                  <p className="text-sm opacity-90">{d.designation}</p>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center mx-auto py-20 px-12 xl:px-40 w-full overflow-hidden md:flex-row gap-24">
          <h2 className="items-start w-full font-bold text-[#394E29] text-3xl">
            When We're Here for You
          </h2>
          <div className="item-start md:item-start">
            <p className="text-[#757575] text-justify text-lg max-sm:py-10">
            <span className="text-[#5FA02E] font-medium">At AGNI Ayurved Hospital</span>, we're dedicated to being there for you when you
              need us most. Our hospital operates from{" "}
              <span className="text-[#5FA02E] font-medium">8:00 AM to 9:00 PM</span>,
              ensuring ample time for treatments and consultations. For
              specialized care, our OPD services are available in two convenient
              slots: morning hours from{" "}
              <span className="text-[#5FA02E] font-medium">9:00 AM to 1:00</span> PM and
              evening hours from{" "}
              <span className="text-[#5FA02E] font-medium">5:00 PM to 9:00 PM</span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto pb-6 px-12 xl:px-40">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
          
        </div>
        <div className="flex justify-center pb-20 mx-auto px-12 xl:px-40">
            <a
              href="/gallary"
              className="px-6 py-3 bg-[#5FA02E] text-white rounded-full hover:bg-[#4a7d24] transition-colors duration-300 text-lg font-medium"
            >
              Show More
            </a>
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
    </div>
  );
}
const treatments = [
  { name: "Nadi Parikshan", image: "/panchkarma/basic-panch/nadisvedana.png" },
  { name: "Suvarnaprashan", image: "/panchkarma/basic-panch/bidalak.png" },
  { name: "Garbhasanskar", image: "/panchkarma/basic-panch/bidalak.png" },
  { name: "Shirodhara", image: "/panchkarma/basic-panch/shirodhara.png" },
  { name: "Vaman", image: "/panchkarma/basic-panch/vaman.png" },
  { name: "Virechan", image: "/panchkarma/basic-panch/virechan.png" },
  { name: "Basti", image: "/panchkarma/basic-panch/basti.png" },
  { name: "Nasya", image: "/panchkarma/basic-panch/nasya.png" },
  { name: "Raktamokshan", image: "/panchkarma/basic-panch/bidalak.png" },
  { name: "Janu Basti", image: "/panchkarma/basic-panch/card15.png" },
  { name: "Kati Basti", image: "/panchkarma/basic-panch/card14.png" },
  { name: "Netra Tarpana", image: "/panchkarma/basic-panch/netradhara.png" },

];
const person = [
  {
    name: `Dr.Dharmik Kachchhi`,
    img: `/person/dr_dharmik.png`,
    designation: `Co-Founder & Ayurved Consultant  (Ayurvedacharya)`,
    src:`/dr_dharmik`,
  },
  {
    name: `Dr.Darshan Dudhat`,
    img: `/person/dr_darshan.png`,
    designation: `Co-Founder & Panchakarma Consultant (Ayurvedacharya)`,
    src:`/dr_darshan`,
  },
  {
    name: `Dr.Rushi Patel`,
    img: `/person/dr_rushi.png`,
    designation: `Co-Founder & Ayurved Consultant (Ayurvedacharya)`,
    src:`/dr_rushi`,
  },
];

export default Home;
