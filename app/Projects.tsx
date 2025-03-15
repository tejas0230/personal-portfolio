import React from "react";
import { dmSans } from './fonts';
import CustomButton from "@/components/CustomButton";
import Image from "next/image";


const projects = [
    {
      id: 1,
      title: "Electronic Health Record Management Using Blockchain",
      description: "The Blockchain-Based EHR System is a decentralized solution designed to securely store, verify, and manage healthcare records, preventing fraud, identity theft, and unauthorized access. By leveraging blockchain technology, smart contracts, and decentralized storage, this system ensures tamper-proof, transparent, and accessible medical data for patients and healthcare providers.",
      imageUrl: "/BlockChain.jpg",
      githubUrl:"https://github.com/tejas0230/EHR_BlockChain"
    },
    {
      id: 2,
      title: "Online Multiplayer FPS Game",
      description: "This fast-paced multiplayer FPS is built using Unity and Photon, featuring a player-hosted server architecture for seamless matchmaking and low-latency gameplay. The game delivers an immersive combat experience with real-time synchronization of player stats, animations, and leaderboards, alongside a fully implemented weapon and projectile system.",
      imageUrl: "/FPS.jpg",
      githubUrl:"https://github.com/tejas0230/FPS-Multiplayer"
    },
  ];


export default function Projects()
{
    return(
        <div id="projects" className={`${dmSans.className} w-full mt-[40px] md:mt-[100px]`}>      
        <div className="text-[#293245]  text-[26px] md:text-[32px] font-black mb-2 md:mb-10">Projects</div>
        <div className="flex flex-col ">
            {projects.map((project, index) => (
            <div
                key={project.id}
                className={`flex flex-wrap mt-4 md:mt-0 items-center justify-center  ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
            >
                {/* Image */}
                <div className=" w-[350px] h-[300px] md:w-[500px] md:h-[500px] flex-shrink-0 relative">
                <Image src={project.imageUrl} alt={project.title} width={1000} height={1000} className="w-full h-full  object-cover bg-[var(--primary)] border-4 border-[#2EAFFF] shadow-[0_0_20px_#2EAFFF]"/>
                <div className="absolute inset-0 bg-[#2EAFFF] opacity-20 rounded-lg"></div>
                </div>
                
                {/* Text Data */}
                <div className=" w-full md:w-[500px] md:h-[500px] flex flex-col justify-center content-center  p-2 md:p-6">
                    <h3 className="text-[24px] font-bold text-[#293245]">{project.title}</h3>
                    <p className="text-[16px] text-[#293245] mt-2">{project.description}</p>
                    <a href={project.githubUrl} className="self-center mt-[20px]" target="_blank">
                        <CustomButton title="View Project" btnClass="btn-primary custom-button" />
                    </a>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}