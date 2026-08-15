"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const previous = scrollYProgress.getPrevious();

    if (typeof previous !== "number") return;

    const direction = current - previous;

    // Always show the navbar near the top
    if (current < 0.05) {
      setVisible(true);
      return;
    }

    // Scrolling up = show
    // Scrolling down = hide
    setVisible(direction < 0);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className={cn(
          `
          fixed
          inset-x-0
          top-5
          z-[5000]
          mx-auto
          flex
          w-[calc(100vw-1.25rem)]
          max-w-[calc(100vw-2rem)]
          flex-wrap
          items-center
          justify-center
          gap-2
          rounded-[999px]
          border
          border-white/[0.125]
          bg-black-200
          px-3
          py-3
          text-center
          shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
          backdrop-blur-xl
          sm:w-fit
          sm:gap-4
          sm:px-6
          sm:py-4
          md:gap-6
          md:px-10
          md:py-5
          `,
          className,
        )}
      >
        {navItems.map((navItem) => (
          <Link
            key={navItem.name}
            href={navItem.link}
            className="
              flex
              cursor-pointer
              items-center
              gap-1.5
              whitespace-nowrap
              text-[11px]
              text-white-100
              transition-colors
              duration-200
              hover:text-white
              sm:text-sm
            "
          >
            {navItem.icon && <span className="sm:hidden">{navItem.icon}</span>}

            <span>{navItem.name}</span>
          </Link>
        ))}
      </motion.nav>
    </AnimatePresence>
  );
};
