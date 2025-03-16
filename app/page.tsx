import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="relative content">
      {/* <LeftFloatingBar/> */}
      {/* <FloatingNav/> */}
      <div className=" p-2 sm:w-[640px] md:w-[748px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] h-2 mx-auto my-0">
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <div className="text-[#293245] text-[16px] p-[20px]">Copyright ©2025 by @Tejas Bendkule | All Rights Reserved</div>
      </div>
    </div>
  );
}
