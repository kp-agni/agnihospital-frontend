import React from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <div className="bg-[#F3FFEA]">
      <div className="pt-12 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 w-full bg-[#5FA02E] rounded-t-3xl overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#394E29]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#394E29]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 text-white">
            {/* About Section */}
            <div className="flex-1 mt-12 sm:mt-0 space-y-4 sm:space-y-6">
              <img src={assets.header_logo} alt="Logo" className="w-40 sm:w-56" />
              <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-sm">
                At Agni Ayurved Hospital, we uphold Ayurveda's rich legacy with
                quality, ethics, and a mission to build a healthier community.
              </p>
              <div className="pt-2">
                <SocialIcons />
              </div>
            </div>

            {/* Main Links Section */}
            <div className="flex-1 space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-semibold">Main Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { text: "Home", href: "/" },
                  { text: "Treatments", href: "/digestive" },
                  { text: "Panchkarma", href: "/basic-panchkarma" },
                  { text: "Facility", href: "/facilities" },
                  { text: "Success", href: "/gallary" },
                  { text: "Our Hero's", href: "/about-doctor" },
                ].map((link, index) => (
                  <li key={index} className="group">
                    <a
                      href={link.href}
                      className="text-white/90 hover:text-white flex items-center transition-colors duration-300 text-sm sm:text-base"
                    >
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full mr-2 sm:mr-3 group-hover:bg-white transition-colors duration-300"></span>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hospital Timings Section */}
            <div className="flex-1 space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-semibold">
                Hospital Timings
              </h3>
              <div className="flex flex-col gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-base sm:text-lg font-medium">
                    Monday to Saturday
                  </h4>
                  <p className="text-white/90 text-sm sm:text-base">
                    8:00 AM to 9:00 PM
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-base sm:text-lg font-medium">Sunday</h4>
                  <p className="text-white/90 text-sm sm:text-base">
                    8:00 AM to 1:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* OPD Timings Section */}
            <div className="flex-1 space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-semibold">
                OPD Timings
              </h3>
              <div className="flex flex-col gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-base sm:text-lg font-medium">
                    Monday to Saturday
                  </h4>
                  <p className="text-white/90 text-sm sm:text-base">
                    9:00 AM to 1:00 PM
                  </p>
                  <p className="text-white/90 text-sm sm:text-base">
                    5:00 PM to 9:00 PM
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-base sm:text-lg font-medium">Sunday</h4>
                  <p className="text-white/90 text-sm sm:text-base">
                    9:00 AM to 1:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex-1 space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-semibold">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4 bg-white/10 p-4 rounded-lg">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-white/90 mt-1 text-sm sm:text-base"
                  />
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
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
                <div className="flex items-center space-x-3 sm:space-x-4 bg-white/10 p-4 rounded-lg">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-white/90 text-sm sm:text-base"
                  />
                  <div className="space-y-1">
                    <p className="text-white/90 text-sm sm:text-base">
                      <a href="tel:+918980003635" className="hover:underline">
                        +91 89800 03635
                      </a>
                    </p>
                    <p className="text-white/90 text-sm sm:text-base">
                      <a href="tel:+917016986245" className="hover:underline">
                        +91 70169 86245
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 bg-white/10 p-4 rounded-lg">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-white/90 text-sm sm:text-base"
                  />
                  <p className="text-white/90 text-sm sm:text-base">
                    <a
                      href="mailto:agniayurvedhospital@gmail.com"
                      className="hover:underline"
                    >
                      agniayurvedhospital@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-center text-white/80">
            <p className="text-xs sm:text-sm">
              © {new Date().getFullYear()} Agni Ayurved Hospital. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
