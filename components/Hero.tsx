// import { FaLocationArrow } from "react-icons/fa6";

import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 h-screen md:-left-32 md:-top-20"
          fill="white"
        />

        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="#CBACF9"
        />

        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#E4ECFF"
        />
      </div>

      {/* Background Grid */}
      <div
        className="
          absolute left-0 top-0
          flex h-screen w-full
          items-center justify-center
          bg-black-100
          bg-grid-small
          text-white/[0.03]
        "
      >
        {/* Radial gradient fade */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            flex items-center justify-center
            bg-black-100
            [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]
          "
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 my-20 flex justify-center">
        <div
          className="
            flex max-w-[89vw]
            flex-col items-center justify-center
            md:max-w-2xl
            lg:max-w-[60vw]
          "
        >
          <p className="max-w-80 text-center text-xs uppercase tracking-[0.3em] text-blue-100">
            Building Intelligent Digital Experiences
          </p>

          <TextGenerateEffect
            words="Building Scalable Web Applications with AI"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="mb-4 text-center text-sm text-white-100 md:text-lg lg:text-2xl">
            Hi, I&apos;m Umakant Chauhan, a Full Stack Developer and AI Engineer
            focused on building modern web and AI-powered products.
          </p>

          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
