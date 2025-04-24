import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faTimes, faBars, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import Book_Appointment from "../components/Appointment/Book_Appointment";

function MobileNavbar() {
  const [showFirstMobileMenu, setShowFirstMobileMenu] = useState(false);
  const [showSecondMobileMenu, setShowSecondMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowFirstMobileMenu(false);
        setShowSecondMobileMenu(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle scroll for sticky navbar and progress
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset state on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenDropdown(null);
    setShowFirstMobileMenu(false);
    setShowSecondMobileMenu(false);
  }, [location]);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setShowFirstMobileMenu(false);
    setShowSecondMobileMenu(false);
    setOpenDropdown(null);
  };

  const handleButtonClick = () => {
    setIsFormVisible(true);
    setShowSecondMobileMenu(false);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    <>
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-[#5FA02E] z-[60] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Navbar */}
      <div
        ref={menuRef}
        className={`${
          isSticky
            ? "fixed top-0 left-0 w-full bg-[#5FA02E] rounded-b-3xl rounded-t-3xl shadow-lg backdrop-blur-md bg-opacity-95"
            : "bg-[#5FA02E]"
        } xl:hidden flex py-4 px-4 md:px-10 mx-auto transition-all duration-300 z-50`}
      >
        <div className="container flex justify-between items-center mx-auto w-full">
          {/* Left: Menu Icon */}
          <button
            onClick={() => {
              setShowFirstMobileMenu(!showFirstMobileMenu);
              setShowSecondMobileMenu(false);
            }}
            className="focus:outline-none transform hover:scale-110 transition-transform flex-1 flex justify-start"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon 
              icon={faBars} 
              className="text-white text-2xl" 
            />
          </button>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center">
            <img 
              src={assets.header_logo} 
              alt="Logo" 
              className="h-10 w-auto transform hover:scale-105 transition-transform cursor-pointer"
              onClick={() => handleNavigation("/")}
            />
          </div>

          {/* Right: Menu Button */}
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => {
                setShowSecondMobileMenu(!showSecondMobileMenu);
                setShowFirstMobileMenu(false);
              }}
              className="text-white focus:outline-none px-4 py-2 rounded-full border-2 border-white bg-transparent hover:bg-[#394E29] transition-all duration-300"
              aria-label="Toggle secondary menu"
            >
              Contact
            </button>
          </div>
        </div>

        {/* First Mobile Menu */}
        <div
          className={`z-10 fixed top-16 left-0 w-full md:w-2/5 h-[calc(100vh-56px)] bg-gradient-to-b from-gray-100 to-white shadow-lg transition-all duration-300 transform ${
            showFirstMobileMenu ? "translate-x-0" : "-translate-x-full"
          } overflow-y-auto`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setShowFirstMobileMenu(false)}
              className="focus:outline-none transform hover:scale-110 transition-transform"
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} className="text-gray-600 text-xl" />
            </button>
          </div>

          <nav className="px-4 py-2">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/")}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-green-100 transition-all duration-300 text-[#5FA02E] font-medium flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#5FA02E] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Home
                </button>
              </li>

              {/* About Us Dropdown */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("about")}
                  className="w-full flex items-center justify-between px-4 py-3 text-[#5FA02E] font-medium hover:bg-green-100 rounded-lg transition-all duration-300 group"
                  aria-expanded={openDropdown === "about"}
                >
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#5FA02E] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <span>About Us</span>
                  </div>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className={`transition-transform duration-300 ${
                      openDropdown === "about" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "about" && (
                  <ul className="mt-2 pl-8 space-y-2 border-l-2 border-green-200 ml-4">
                    <li>
                      <button
                        onClick={() => handleNavigation("/about-hospital")}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-green-100 rounded-lg transition-all duration-300"
                      >
                        About Hospital
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNavigation("/about-doctor")}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-green-100 rounded-lg transition-all duration-300"
                      >
                        About Doctor
                      </button>
                      <ul className="pl-4 mt-2 space-y-2">
                        {[
                          { name: "Dr. Dharmik Kachachhi", path: "/dr_dharmik" },
                          { name: "Dr. Rushi Patel", path: "/dr_rushi" },
                          { name: "Dr. Darshan Dudhat", path: "/dr_darshan" },
                        ].map((doctor) => (
                          <li key={doctor.path}>
                            <button
                              onClick={() => handleNavigation(doctor.path)}
                              className="w-full text-left px-4 py-2 text-sm hover:bg-green-100 rounded-lg transition-all duration-300"
                            >
                              {doctor.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                )}
              </li>

              {/* What We Treat Dropdown */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("treatment")}
                  className="w-full flex items-center justify-between px-4 py-3 text-[#5FA02E] font-medium hover:bg-green-100 rounded-lg transition-all duration-300 group"
                  aria-expanded={openDropdown === "treatment"}
                >
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#5FA02E] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <span>What We Treat? (Treatment)</span>
                  </div>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className={`transition-transform duration-300 ${
                      openDropdown === "treatment" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "treatment" && (
                  <ul className="mt-2 pl-8 space-y-2 border-l-2 border-green-200 ml-4">
                    {[
                      { name: "Digestive Disorder", link: "/digestive" },
                      { name: "Joint Disorder", link: "/joint-disorder" },
                      { name: "Skin & Hair Disorders", link: "/skin&hair-disorder" },
                      { name: "Female Disorder", link: "/female-disorder" },
                      { name: "Lifestyle Disorder", link: "/lifestyle-disorder" },
                      { name: "Ano-Rectal Disorder", link: "/ano-rectal-disorder" },
                      { name: "Respiratory Disorder", link: "/respiratory-disorder" },
                      { name: "ENT Disorder", link: "/ent-disorder" },
                      { name: "Pediatrics Disorder", link: "/pediatrics-disorder" },
                      { name: "Liver Disorder", link: "/liver-disorder" },
                      { name: "Male Disorder", link: "/male-disorder" },
                      { name: "Psychiatric Disorder", link: "/psycatric-disorder" },
                      { name: "Kidney & Urinary Disorders", link: "/kidney-disorder" },
                    ].map((treatment) => (
                      <li key={treatment.link}>
                        <button
                          onClick={() => handleNavigation(treatment.link)}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-green-100 rounded-lg transition-all duration-300"
                        >
                          {treatment.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Panchkarma Dropdown */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("panchkarma")}
                  className="w-full flex items-center justify-between px-4 py-3 text-[#5FA02E] font-medium hover:bg-green-100 rounded-lg transition-all duration-300 group"
                  aria-expanded={openDropdown === "panchkarma"}
                >
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#5FA02E] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    <span>Panchkarma</span>
                  </div>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className={`transition-transform duration-300 ${
                      openDropdown === "panchkarma" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "panchkarma" && (
                  <ul className="mt-2 pl-8 space-y-2 border-l-2 border-green-200 ml-4">
                    {[
                      { name: "Basic Panchkarma For all Diseases", path: "/basic-panchkarma" },
                      { name: "Panchkarma For Pain", path: "/panchkarma-pain" },
                      { name: "Panchkarma For Stress Management", path: "/panchkarma-stress-management" },
                      { name: "Panchkarma For Weight Loss", path: "/panchkarma-weight-loss" },
                      { name: "A to Z Panchkarma", path: "/a-to-z-panchkarma" },
                    ].map((item) => (
                      <li key={item.path}>
                        <button
                          onClick={() => handleNavigation(item.path)}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-green-100 rounded-lg transition-all duration-300"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Other Links */}
              <li>
                <button
                  onClick={() => handleNavigation("/facilities")}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-green-100 transition-all duration-300 text-[#5FA02E] font-medium flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#5FA02E] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Facility
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/testimonials")}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-green-100 transition-all duration-300 text-[#5FA02E] font-medium flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#5FA02E] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/gallary")}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-green-100 transition-all duration-300 text-[#5FA02E] font-medium flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#5FA02E] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Success
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact-us")}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-green-100 transition-all duration-300 text-[#5FA02E] font-medium flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#5FA02E] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Second Mobile Menu */}
        <div
          className={`z-10 fixed top-16 right-0 w-full md:w-1/3 h-[calc(100vh-56px)] bg-gradient-to-b from-green-100 to-green-50 shadow-lg transition-all duration-300 transform ${
            showSecondMobileMenu ? "translate-x-0" : "translate-x-full"
          } overflow-y-auto`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setShowSecondMobileMenu(false)}
              className="focus:outline-none transform hover:scale-110 transition-transform"
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} className="text-gray-600 text-xl" />
            </button>
          </div>

          <div className="px-6 py-4 space-y-8">
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
              <FontAwesomeIcon icon={faClock} className="text-[#5FA02E] text-xl" />
              <div>
                <p className="font-semibold text-[#5FA02E]">OPD Timing</p>
                <p className="text-sm text-gray-600">9:00 AM to 1:00 PM</p>
                <p className="text-sm text-gray-600">5:00 PM to 9:00 PM</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
              <FontAwesomeIcon icon={faPhone} className="text-[#5FA02E] text-xl" />
              <div>
                <p className="font-semibold text-[#5FA02E]">Contact us</p>
                <p className="text-sm">
                  <a href="tel:+918980003635" className="text-gray-600 hover:text-[#5FA02E] transition-colors">
                    +91 89800 03635
                  </a>
                </p>
                <p className="text-sm">
                  <a href="tel:+917016986245" className="text-gray-600 hover:text-[#5FA02E] transition-colors">
                    +91 70169 86245
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <button
                className="w-full rounded-full px-6 py-3 border-2 border-[#5FA02E] text-[#5FA02E] hover:bg-[#5FA02E] hover:text-white transition-all duration-300 transform hover:scale-105"
                onClick={handleButtonClick}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Appointment Form Modal */}
        {isFormVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
              <Book_Appointment isFormVisible={isFormVisible} closeForm={closeForm} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MobileNavbar;
