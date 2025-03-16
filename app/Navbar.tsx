import React from "react";
import { dmSans } from "./fonts";
import CustomButton from '../components/CustomButton';
export default function Navbar()
{
   return (
       <div className={`${dmSans.className} text-[#293245] flex justify-between align-center py-2 md:py-4 px-2 md:px-0`}>
         <div className="font-[700]  text-[20px] self-center lg:text-[24px]">Tejas Bendkule</div>
         <div className="flex gap-[32px] align-center justify-center">
            {/* <a href="#about" className="font-[700] text-[16px] self-center">About</a>
            <a href="#" className="font-[700] text-[16px] self-center">Projects</a>
            <a href="#" className="font-[700] text-[16px] self-center">Contact</a>
            <a href="#" className="font-[700] text-[16px] self-center">Work</a>
            <div className="pipe w-[2px] h-[32px] bg-[#293245] self-center"></div> */}
            <a href="/Tejas_Bendkule_Resume_Software_Engineer.pdf" download="Tejas_Bendkule_Resume_Software_Engineer.pdf">
              <CustomButton title="Resume" btnClass="btn-primary custom-button" />
            </a>
         </div>
       </div>
     ); 
}