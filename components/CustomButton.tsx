"use client";
import React from "react";
import { dmSans } from "../app/fonts";
import { motion } from "framer-motion";

interface ButtonProps {
    title: string;
    btnClass?: string; // Optional className
}

export default function CustomButton({title, btnClass}: ButtonProps)
{
    return(
        <motion.div 
            className={` ${dmSans.className} ${btnClass} w-max`} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {title}
        </motion.div>
    );
}