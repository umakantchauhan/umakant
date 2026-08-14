"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "lottie-react";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

interface BentoGridItemProps {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "mx-auto grid w-full grid-cols-1 gap-3 md:grid-cols-6 md:grid-rows-4 md:gap-4 lg:grid-cols-5 lg:gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: BentoGridItemProps) => {
  const [copied, setCopied] = useState(false);

  const leftLists = ["ReactJS", "Express", "TypeScript", "Next.js", "Node.js"];
  const rightLists = ["LangGraph", "LangChain", "Applied AI"];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("ukchauhan369@gmail.com");
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <div
      className={cn(
        `
        group/bento
        relative
        row-span-1
        flex
        flex-col
        justify-between
        space-y-4
        overflow-hidden
        rounded-3xl
        border
        border-white/[0.1]
        transition
        duration-200
        hover:shadow-xl
        `,
        className,
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Images */}
      <div className={cn("relative h-full", id === 6 && "flex justify-center")}>
        {/* Main image */}
        <div className="absolute inset-0 h-full w-full">
          {img && (
            <img
              src={img}
              alt=""
              className={cn(
                "h-full w-full object-cover object-center",
                imgClassName,
              )}
            />
          )}
        </div>

        {/* Spare image */}
        <div
          className={cn(
            "absolute -bottom-5 right-0",
            id === 5 && "w-full opacity-80",
          )}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>

        {/* Gradient animation */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-50
                flex
                items-center
                justify-center
                px-4
                text-center
                text-3xl
                font-bold
                text-white
                md:text-4xl
                lg:text-7xl
              "
            />
          </BackgroundGradientAnimation>
        )}

        {/* Content */}
        <div
          className={cn(
            titleClassName,
            `
            relative
            z-10
            flex
            min-h-40
            flex-col
            px-5
            py-5
            transition
            duration-200
            group-hover/bento:translate-x-2
            md:h-full
            lg:p-10
            `,
          )}
        >
          {/* Description */}
          <div className="z-10 font-sans text-sm font-extralight text-[#C1C2D3] md:max-w-32 md:text-xs lg:text-base">
            {description}
          </div>

          {/* Title */}
          <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
            {title}
          </div>

          {/* Globe */}
          {id === 2 && (
            <div className="absolute inset-0">
              <GridGlobe />
            </div>
          )}

          {/* Tech Stack */}
          {id === 3 && (
            <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
              <div className="flex flex-col gap-3 lg:gap-8">
                {leftLists.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-lg
                      bg-[#10132E]
                      px-3
                      py-2
                      text-center
                      text-xs
                      opacity-50
                      lg:px-3
                      lg:py-4
                      lg:text-base
                      lg:opacity-100
                    "
                  >
                    {item}
                  </span>
                ))}

                <span className="rounded-lg bg-[#10132E] px-3 py-4" />
              </div>

              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="rounded-lg bg-[#10132E] px-3 py-4" />

                {rightLists.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-lg
                      bg-[#10132E]
                      px-3
                      py-2
                      text-center
                      text-xs
                      opacity-50
                      lg:px-3
                      lg:py-4
                      lg:text-base
                      lg:opacity-100
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Copy Email */}
          {id === 6 && (
            <div className="relative mt-5">
              {copied && (
                <div className="pointer-events-none absolute -bottom-5 right-0">
                  <Lottie
                    animationData={animationData}
                    loop
                    autoplay
                    className="h-[200px] w-[400px]"
                  />
                </div>
              )}

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
