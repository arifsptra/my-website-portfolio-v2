"use client";
import { footer } from "@/app/data/footer";
import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <div>
      {footer[language]}
    </div>
  );
};

export default Footer;
