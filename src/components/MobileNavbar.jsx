import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { assets } from "../assets/assets"; // Assuming `assets` is imported correctly
import Book_Appointment from "../components/Appointment/Book_Appointment"; // Assuming `Book_Appointment` is a valid component

function MobileNavbar() {
  const [showFirstMobileMenu, setShowFirstMobileMenu] = useState(false);
  const [showSecondMobileMenu, setShowSecondMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Use location hook to track route changes

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setShowFirstMobileMenu(false);
    setShowSecondMobileMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenDropdown(null); // Close all dropdowns when route changes
  }, [location]);

  const handleButtonClick = () => {
    setIsFormVisible(true);
    setShowSecondMobileMenu(false);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div
      className={`${
        isSticky
          ? "bg-[#5FA02E] xl:hidden flex   rounded-b-3xl rounded-t-3xl fixed top-0 left-0 w-full z-20"
          : "bg-[#5FA02E] xl:hidden flex  "
      } py-4 px-10 mx-auto transition-all w-full z-50`}
    >
      <div className="container flex justify-between items-center mx-auto">
        {/* Left: Menu Icon */}
        <img
          onClick={() => {
            setShowFirstMobileMenu(!showFirstMobileMenu);
            setShowSecondMobileMenu(false);
          }}
          src={assets.menu_icon}
          className="xl:hidden w-7 cursor-pointer"
          alt="Menu Icon"
        />

        {/* Right: Menu Button */}
        <button
          onClick={() => {
            setShowSecondMobileMenu(!showSecondMobileMenu);
            setShowFirstMobileMenu(false);
          }}
          className="text-white focus:outline-none xl:hidden cursor-pointer"
        >
          Menu
        </button>

        {/* <img src={assets.header_logo} alt="Logo" className="xl:hidden" /> */}
      </div>

      {/* First Mobile Menu */}
      <div
        className={`xl:hidden ${
          showFirstMobileMenu
            ? "fixed w-2/5 h-full max-md:w-3/5 max-[400px]:w-full"
            : "h-0 w-0"
        } bg-gray-200 shadow-lg rounded-md overflow-hidden z-50 top-14 left-0`}
      >
        <div className="flex justify-end p-4 cursor-pointer">
          <img
            onClick={() => setShowFirstMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="Close Menu"
          />
        </div>

        <ul className="flex flex-col items-start gap-4 mt-2 px-4 mb-4 text-base font-medium text-[#5FA02E]">
          {/* Home */}
          <span
            onClick={() => handleNavigation("/")}
            className="w-full px-4 py-2 rounded-md hover:bg-green-100 transition duration-300"
          >
            Home
          </span>

          {/* About Us Dropdown */}
          <li className="cursor-pointer relative w-full">
            <span
              onClick={() => toggleDropdown("about")}
              className="flex items-center gap-2 px-4 py-2"
            >
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`transition-transform ${
                  openDropdown === "about" ? "rotate-180" : "rotate-0"
                }`}
              />
              About Us
            </span>
            {openDropdown === "about" && (
              <div className="mt-1 w-full z-10">
                <ul className="py-2">
                  <span
                    onClick={() => handleNavigation("/about-hospital")}
                    className="block px-4 py-2 text-sm hover:bg-green-100 transition"
                  >
                    - About Hospital
                  </span>
                  <li className="relative">
                    <span
                      onClick={() => handleNavigation("/about-doctor")}
                      className="block px-4 py-2 text-sm hover:bg-green-100"
                    >
                      - About Doctor
                    </span>
                    <ul className="pl-4 mt-2">
                      <span
                        onClick={() => handleNavigation("/dr_dharmik")}
                        className="block px-4 py-2 text-sm hover:bg-green-100 transition"
                      >
                        - Dr. Dharmik Kachachhi
                      </span>
                      <span
                        onClick={() => handleNavigation("/dr_rushi")}
                        className="block px-4 py-2 text-sm hover:bg-green-100 transition"
                      >
                        - Dr. Rushi Patel
                      </span>
                      <span
                        onClick={() => handleNavigation("/dr_darshan")}
                        className="block px-4 py-2 text-sm hover:bg-green-100 transition"
                      >
                        - Dr. Darshan Dudhat
                      </span>
                    </ul>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* What We Treat Dropdown */}
          <li className="cursor-pointer relative w-full">
            <span
              onClick={() => toggleDropdown("treatment")}
              className="flex items-center gap-2 px-4 py-2"
            >
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`transition-transform ${
                  openDropdown === "treatment" ? "rotate-180" : "rotate-0"
                }`}
              />
              What We Treat? (Treatment)
            </span>
            {openDropdown === "treatment" && (
              <div className="mt-1 w-11/12">
                <ul className="py-2 grid grid-cols-1 gap-1">
                  {[
                    { name: "Digestive Disorder", link: "/digestive" },
                    { name: "Joint Disorder", link: "/joint-disorder" },
                    {
                      name: "Skin & Hair Disorders",
                      link: "/skin&hair-disorder",
                    },
                    { name: "Female Disorder", link: "/female-disorder" },
                    { name: "Lifestyle Disorder", link: "/lifestyle-disorder" },
                    {
                      name: "Ano-Rectal Disorder",
                      link: "/ano-rectal-disorder",
                    },
                    {
                      name: "Respiratory Disorder",
                      link: "/respiratory-disorder",
                    },
                    { name: "ENT Disorder", link: "/ent-disorder" },
                    {
                      name: "Pediatrics Disorder",
                      link: "/pediatrics-disorder",
                    },
                    { name: "Liver Disorder", link: "/liver-disorder" },
                    { name: "Male Disorder", link: "/male-disorder" },
                    {
                      name: "Psychiatric Disorder",
                      link: "/psychiatric-disorder",
                    },
                    {
                      name: "Kidney & Urinary Disorders",
                      link: "/kidney-urinary-disorder",
                    },
                  ].map((treatment, index) => (
                    <a
                      key={index}
                      href={treatment.link}
                      className="block px-4 py-2 text-sm hover:bg-green-100 transition"
                    >
                      - {treatment.name}
                    </a>
                  ))}
                </ul>
              </div>
            )}
          </li>


          {/* Panchkarma Dropdown */}
          <li className="cursor-pointer relative w-full">
            <span
              onClick={() => toggleDropdown("panchkarma")}
              className="flex items-center gap-2 px-4 py-2"
            >
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`transition-transform ${
                  openDropdown === "panchkarma" ? "rotate-180" : "rotate-0"
                }`}
              />
              Panchkarma
            </span>
            {openDropdown === "panchkarma" && (
              <div className="mt-1 w-11/12">
                <ul className="py-2">
                  {[
                    {
                      name: "Basic Panchkarma For all Diseases",
                      path: "/basic-panchkarma",
                    },
                    { name: "Panchkarma For Pain", path: "/panchkarma-pain" },
                    {
                      name: "Panchkarma For Stress Management",
                      path: "/panchkarma-stress-management",
                    },
                    {
                      name: "Panchkarma For Weight Loss",
                      path: "/panchkarma-weight-loss",
                    },
                    { name: "A to Z Panchkarma", path: "/a-to-z-panchkarma" },
                  ].map((item, index) => (
                    <span
                      key={index}
                      onClick={() => {
                        handleNavigation(item.path);
                        setShowFirstMobileMenu(false);
                      }}
                      className="block px-4 py-2 text-sm hover:bg-green-100 transition"
                    >
                      - {item.name}
                    </span>
                  ))}
                </ul>
              </div>
            )}
          </li>

          {/* Facility Dropdown */}
          <span
            onClick={() => {
              handleNavigation("/facilities");
              setShowFirstMobileMenu(false);
            }}
            className="w-full px-4 py-2 hover:bg-green-100 transition"
          >
            Facility
          </span>
          {/* Other Links */}
          <span
            onClick={() => {
              handleNavigation("/contact-us");
              setShowFirstMobileMenu(false);
            }}
            className="w-full px-4 py-2 hover:bg-green-100 transition"
          >
            Contact Us
          </span>
          <a
            href="#Header"
            className="w-full px-4 py-2 hover:bg-green-100 transition"
          >
            Testimonials
          </a>
          <a
            href="#Header"
            className="w-full px-4 py-2 hover:bg-green-100 transition"
          >
            Success
          </a>
        </ul>
      </div>

      {/* Second Mobile Menu */}
      <div
        className={`xl:hidden ${
          showSecondMobileMenu ? "fixed w-fit" : "h-0 w-0"
        } right-0 top-14 overflow-hidden bg-gradient-to-b from-green-100 to-green-50 bg-opacity-80 transition-all shadow-lg rounded-s-xl z-10`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowSecondMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="Close Menu"
          />
        </div>

        <div className="flex flex-col items-start px-6 text-[#5FA02E] space-y-6 my-10">
          <div className="flex items-center space-x-6">
            <img src={assets.timing} alt="" />
            <div>
              <span className="font-semibold">OPD Timing</span>
              <p>9:00 AM to 1:00 PM</p>
              <p>5:00 PM to 9:00 PM</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <img src={assets.call} alt="" className="items-start" />
            <div className="flex flex-col">
              <span className="font-semibold">Contact us</span>
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
          </div>

          <button
            className="rounded-full px-4 py-2 border border-[#5FA02E] hover:bg-[#5FA02E] hover:text-white"
            onClick={() => setShowSecondMobileMenu(false)}
          >
            Call Now
          </button>
          <button
            className="rounded-full px-4 py-2 border border-[#5FA02E] hover:bg-[#5FA02E] hover:text-white"
            onClick={handleButtonClick}
          >
            Book Appointment
          </button>

          {isFormVisible && (
            <div className="fixed inset-0 flex justify-center items-center">
              <div className="relative ">
                {/* <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-[#5FA02E]"
                  onClick={closeForm}
                >
                  ✖
                </button> */}
                <Book_Appointment
                  isFormVisible={isFormVisible}
                  closeForm={closeForm}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
