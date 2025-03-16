import * as React from 'react';
import { dmSans } from './fonts';
import Image from 'next/image';
const iconLinks = [
    { src: "/skills-and-tools/atom.png" },
    { src: "/skills-and-tools/c-.png" },
    { src: "/skills-and-tools/c-sharp.png" },
    { src: "/skills-and-tools/java.png" },
    { src: "/skills-and-tools/php.png" },
    { src: "/skills-and-tools/unity.png" },
  ];

const workExperience =[
    {company:"Software Engineer at Wisdmlabs", period:"Jan 2024 - Present | Remote | Fulltime"},
    {company:"Game Programmer Intern at Appy Monkeys Software Pvt. Ltd.", period:"Jul 2023 - Aug 2023 | On-Site | Internship"},
]

export default function About() 
{
    return (
        <div id='about' className={`${dmSans.className} grid grid-cols-1 xl:grid-cols-2 w-full  my-[50px]`}>
          {/* Left Column */}
          <div className="flex flex-col  xl:border-r-[2px] xl:border-[#ACACAC]  py-[20px]">
            <p className='text-[#293245] text-[26px] md:text-[32px] font-black'>🚀About Me🚀</p>
            <div className='text-left flex flex-col text-[#293245] p-3 lg: p-0 text-[16px] md:text-[20px] gap-[20px]  mt-[20px]'>
                <p>Hey there! I’m a software engineer who loves building things that just <span className='font-bold'>work—fast ⚡, smooth 🎯,</span> and without a hitch. </p>
                <p>Whether it’s crafting efficient systems, optimizing performance, or tinkering with new tech, I’m always up for a challenge. </p>
                <p>I’ve dabbled in everything from <span className='font-bold'> web development</span> to <span className='font-bold'>game design 🎮, AR/VR 🕶️,</span> and even <span className='font-bold'> blockchain 🔗</span> (because why not?). </p>
                <p>I enjoy solving tricky problems 🧩, making things run better, and writing code that future me won’t hate 😅.</p>
                <p>When I’m not coding, you’ll probably find me exploring new game mechanics 🕹️, geeking out over <span className='font-bold'> emerging tech,</span> or chasing the perfect balance between <span className='font-bold'> functionality and creativity 🎨.</span></p>
                <p>Let’s build something awesome! ✨</p>
            </div>
          </div>
  
          {/* Right Column (2 Rows) */}
          <div className="grid grid-col-1 xl:grid-rows-2">
            <div className="flex flex-col item-center w-full p-[20px]">
                <p className='text-[#293245]  text-[26px] md:text-[32px] font-black'>💻Work Experience💻</p>

                <div className='flex flex-col gap-[15px] w-full mt-[20px] lg:mt-[30px] lg:ml-[55px]'>
                    {workExperience.map((job, index) => (
                    <div key={index} className="text-[#293245] items-center flex gap-[15px] w-full">
                        <div className="relative self-center">
                            <div className="rounded-full w-[25px] h-[25px] bg-[#293245]"></div>
                            {index !== workExperience.length - 1 && (
                                <div className="w-[3px] h-[60px] bg-[#293245] absolute top-[100%] left-[45%]"></div>
                            )}
                        </div>

                        <div className="flex flex-col text-left">
                        <div className="font-bold text-[16px] md:text-[20px]">{job.company}</div>
                        <div className="font-regular text-[14px]">{job.period}</div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col  p-[20px] xl:border-t-[2px] xl:border-[#ACACAC]">
                <p className='text-[#293245] text-[22px] md:text-[32px] font-black'>👨‍💻Technical Skills and Tools 👨‍💻</p>
                <div className='flex flex-wrap w-full justify-center gap-[40px] mt-[40px] xl:mt-[70px]'>
                    {
                        iconLinks.map((icon, index) => (
                            <Image key={index} src={icon.src} alt="" width={80} height={80} className="w-[40px] md:w-[80px] md:h-[80px]" />
                        ))
                    }
                </div>
            </div>
          </div>
        </div>
      );
};
