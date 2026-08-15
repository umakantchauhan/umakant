// import React from "react";

// import { workExperience } from "@/data";
// import { Button } from "./ui/MovingBorders";

// const Experience = () => {
//   return (
//     <div className="py-20 w-full">
//       <h1 className="heading">
//         My <span className="text-purple">work experience</span>
//       </h1>

//       <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
//         {workExperience.map((card) => (
//           <Button
//             key={card.id}
//             //   random duration will be fun , I think , may be not
//             duration={Math.floor(Math.random() * 10000) + 10000}
//             borderRadius="1.75rem"
//             style={{
//               //   add these two
//               //   you can generate the color from here https://cssgradient.io/
//               background: "rgb(4,7,29)",
//               backgroundColor:
//                 "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//               // add this border radius to make it more rounded so that the moving border is more realistic
//               borderRadius: `calc(1.75rem* 0.96)`,
//             }}
//             // remove bg-white dark:bg-slate-900
//             className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
//           >
//             <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
//               <img
//                 src={card.thumbnail}
//                 alt={card.thumbnail}
//                 className="lg:w-32 md:w-20 w-16"
//               />
//               <div className="lg:ms-5">
//                 <h1 className="text-start text-xl md:text-2xl font-bold">
//                   {card.title}
//                 </h1>
//                 <p className="text-start text-white-100 mt-3 font-semibold">
//                   {card.desc}
//                 </p>
//               </div>
//             </div>
//           </Button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;

"use client";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const Experience = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={15000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: "1.68rem",
            }}
            containerClassName={`min-h-[220px] ${card.className || ""
              }`}
            className="w-full border-neutral-200 text-white dark:border-slate-800"
          >
            <div className="flex w-full flex-col items-center gap-5 p-5 md:p-8 lg:flex-row lg:p-10">
              <img
                src={`${basePath}${card.thumbnail}`}
                alt={card.title}
                className="h-auto w-20 shrink-0 md:w-24 lg:w-28"
              />

              <div className="min-w-0 flex-1 lg:ml-5">
                <h2 className="text-start text-xl font-bold md:text-2xl">
                  {card.title}
                </h2>

                <p className="mt-3 text-start font-semibold text-white-100">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;