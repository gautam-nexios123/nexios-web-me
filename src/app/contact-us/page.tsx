"use client";
import ContactForm from "@/components/Contact/ContactForm";
import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us-bg relative w-full lg:pt-[50px] md:pt-[70px] pb-[80px]">
      <div className="main-container relative">
        <h2 className="text-center lg:pt-[40px] text-[#9BA9B4] font-MuseoSans font-semibold text-[24px]">
          Contact Us
        </h2>
        <h1 className="text-center max-lg:pt-[25px] py-2 text-[#121212] font-MuseoSans font-semibold text-[28px]">
          Lets Get In Touch Now
        </h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
