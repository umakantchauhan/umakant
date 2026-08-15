"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h2 className="heading">
        My <span className="text-purple">approach</span>
      </h2>

      <div className="my-20 flex w-full flex-col items-center justify-center gap-4 md:flex-row">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="rounded-3xl bg-emerald-900 overflow-hidden"
          />
        </Card>

        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          des="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="rounded-3xl bg-pink-900 overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>

        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          des="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="rounded-3xl bg-sky-600 overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

interface CardProps {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}

const Card = ({ title, icon, children, des }: CardProps) => {
  const [hovered, setHovered] = useState(false);

  const handleCardToggle = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setHovered((prev) => !prev);
    }
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleCardToggle}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleCardToggle();
        }
      }}
      role="button"
      tabIndex={0}
      className="
        group/canvas-card
        relative
        mx-auto
        flex
        h-[24rem]
        w-full
        max-w-[min(22rem,90vw)]
        items-center
        justify-center
        overflow-hidden
        rounded-3xl
        border
        border-white/[0.1]
        p-4
        sm:h-[28rem]
        md:h-[35rem]
        md:max-w-sm
      "
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Corner icons */}
      <Icon className="absolute -left-3 -top-3 h-10 w-10 text-white opacity-30" />
      <Icon className="absolute -bottom-3 -left-3 h-10 w-10 text-white opacity-30" />
      <Icon className="absolute -right-3 -top-3 h-10 w-10 text-white opacity-30" />
      <Icon className="absolute -bottom-3 -right-3 h-10 w-10 text-white opacity-30" />

      {/* Canvas animation */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 px-10">
        {/* Phase button */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            flex
            min-w-28
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            text-center
            transition
            duration-200
            group-hover/canvas-card:-translate-y-4
            group-hover/canvas-card:opacity-0
            sm:min-w-32
            md:min-w-40
          "
          style={{
            transform: hovered
              ? "translateX(-50%) translateY(calc(-50% - 1rem))"
              : undefined,
            opacity: hovered ? 0 : undefined,
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          className="
            relative
            z-10
            mt-4
            text-center
            text-3xl
            font-bold
            text-white
            opacity-0
            transition
            duration-200
            group-hover/canvas-card:-translate-y-2
            group-hover/canvas-card:opacity-100
          "
          style={{
            opacity: hovered ? 1 : undefined,
            transform: hovered ? "translateY(-0.5rem)" : undefined,
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            relative
            z-10
            mt-4
            text-center
            text-sm
            text-[#E4ECFF]
            opacity-0
            transition
            duration-200
            group-hover/canvas-card:-translate-y-2
            group-hover/canvas-card:opacity-100
          "
          style={{
            opacity: hovered ? 1 : undefined,
            transform: hovered ? "translateY(-0.5rem)" : undefined,
          }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button
        type="button"
        className="relative inline-flex overflow-hidden rounded-full p-[1px]"
      >
        <span
          className="
            absolute
            inset-[-1000%]
            animate-[spin_2s_linear_infinite]
            bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]
          "
        />

        <span
          className="
            inline-flex
            h-full
            w-full
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-slate-950
            px-5
            py-2
            text-2xl
            font-bold
            text-purple
            backdrop-blur-3xl
          "
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
