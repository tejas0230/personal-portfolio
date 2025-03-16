"use client";
import React from "react";
import { dmSans } from "./fonts";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import LeftFloatingBar from "@/components/LeftFloatingBar";
export default function Hero()
{
    const words = useMemo(() => ["Software Engineer", "Game Programmer", "Web Designer"], []);
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const speed = isDeleting ? 50 : 100; // Typing speed

    useEffect(() => {
        const currentWord = words[index];
        const timeout = setTimeout(() => {
        if (isDeleting) {
            setText((prev) => prev.slice(0, -1)); // Remove last letter
        } else {
            setText((prev) => currentWord.slice(0, prev.length + 1)); // Add next letter
        }

        // When fully typed, pause before deleting
        if (!isDeleting && text === currentWord) {
            setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }

        // When fully deleted, switch to the next word
        if (isDeleting && text === "") {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length); // Move to next word
        }
        }, speed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, words, speed]);

      
    return(
        <div className={`${dmSans.className} mt-[20px]`}>
            <div className="open-to-work w-max flex gap-[8px] border-2 border-[#a5a5a5] rounded-full px-[6px] py-[4px] mx-auto">
                <div className="relative w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#00FFCC]">
                    <div className="w-3 h-3 bg-[#039F80] rounded-full"></div>
                </div>
                <div className="text-[14px] text-[#555555] font-medium">Open to Work</div>
            </div>

            <div className="main-image w-[200px] h-[200px]  md:w-[328px] md:h-[328px] overflow-hidden rounded-full mx-auto relative mt-[20px]">
                <div className="absolute main-glow w-[200px] h-[200px] md:w-[328px] md:h-[328px]  z-100 rounded-full"></div>
                <Image src={"/Tejas.jpg"} alt={"Tejas"} width={1000} height={1000} className="w-full h-full object-cover object-top"/>
            </div>

            <div className="text-[40px] md:text-[64px] text-[#293245] font-black text-center flex justify-center">I &apos;m Tejas <span className="w-[45px] md:w-[80px]"><Image src={"/waving-hand.png"} alt="" width={100} height={100} className="w-full"/></span></div>
            <div className="text-[22px]  md:text-[32px] text-[#424242] font-medium">
                A Passionate{" "}
                <motion.span
                    key={text}
                    initial={{ opacity: 0.6, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#000000] text-[22px] md:text-[32px] font-black"
                >
                    {text}
                </motion.span>
                <motion.span
                    animate={{ opacity: [1, 0, 1], y: [0, -3, 0] }} // Blinking & slight bounce
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="text-[#000000] text-[22px] md:text-[32px] font-black"
                >
                    |
                </motion.span>
            </div>

            <div className="text-[16px] text-[#5E5E5E] lg:w-[610px] mx-auto">
            This portfolio showcases my approach to problem-solving, system design, and performance optimization—building software that is intuitive, reliable, and built to last.
            </div>

            <div className="flex gap-[16px] justify-center mt-[32px]">
                <a href="https://www.linkedin.com/in/tejasbendkule/" target="_blank">
                    < CustomButton title="Connect with me" btnClass="btn-primary custom-button"/>
                </a>
                <a href="#projects">
                    < CustomButton title="See My Projects" btnClass="btn-secondary"/>
                </a>
            </div>

            <div className="mx-auto w-max mt-[32px]">
                <Image src={"arrow-down-fill.svg"} alt="" width={24} height={24} />
            </div>

            <LeftFloatingBar/>
        </div>
    );
}