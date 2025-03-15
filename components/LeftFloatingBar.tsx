"use client";
import React from "react";
import { motion } from "framer-motion";

export default function LeftFloatingBar() {
  const iconLinks = [
    { href: "https://discordapp.com/users/tejas023", src: "/contact-icons/discord-fill.svg" },
    { href: "https://github.com/tejas0230", src: "/contact-icons/github 1.svg" },
    { href: "https://leetcode.com/u/tejas02/", src: "/contact-icons/leetcode 1.svg" },
    { href: "https://www.linkedin.com/in/tejasbendkule/", src: "/contact-icons/linkedin-box-fill.svg" },
    { href: "mailto:tejas0215lc@gmail.com", src: "/contact-icons/mail-add-fill.svg" },
    { href: "https://www.instagram.com/tejas_b_22/", src: "/contact-icons/instagram-fill.svg" },
  ];

  return (
    <div className="floating-left-bar fixed top-[25%] left-0 rounded-tr-[30px] rounded-br-[30px] border-[0.3px] border-[#dfdfdf] flex flex-col gap-[24px] pl-[8px] px-[12px] py-[18px] md:px-[16px] md:py-[32px] bg-white z-1000">
      {iconLinks.map((icon, index) => (
        <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
          <motion.img
            src={icon.src}
            alt=""
            className="md:w-[32px] md:h-[32px]"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </a>
      ))}
    </div>
  );
}
