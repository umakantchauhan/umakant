import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Work Experience", link: "#experience" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  {
    name: "View Resume",
    link: "https://drive.google.com/file/d/1SNEjkm3_gAg9DQnFbnMRCs0QPU3doYfu/view?usp=sharing",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "From ideas to intelligent systems",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-2 lg:min-h-[400px] md:min-h-[300px] min-h-[250px]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Adaptable to flexible working hours based on project and team requirements",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[220px] md:min-h-[220px] min-h-[200px]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[220px] md:min-h-[220px] min-h-[200px]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-1 lg:min-h-[150px] md:min-h-[150px] min-h-[150px]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Building the next generation of intelligent applications with Generative AI",
    description: "The Inside Scoop",
    className:
      "md:col-span-3 md:row-span-2 lg:min-h-[220px] md:min-h-[220px] min-h-[200px]",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-1 lg:min-h-[150px] md:min-h-[150px] min-h-[150px]",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "HireMind",
    des: "HireMind is an AI-powered recruitment and ATS platform that streamlines candidate screening and evaluation using Gemini AI. It provides automated resume parsing, candidate skill assessment, and identity validation to help recruiters make faster, data-driven hiring decisions.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/MongoDB.svg"],
    link: "https://hiremind-umakant.vercel.app/",
    check: "Check Live",
  },
  {
    id: 2,
    title: "Wanderlust",
    des: "Wanderlust is a full-stack travel listing and exploration platform where users can discover, list, and review destinations and stays from around the world.",
    img: "/p2.webp",
    iconLists: ["/Node.svg", "/MongoDB.svg"],
    link: "https://github.com/umakantchauhan/Wanderlust.git",
    check: "Check",
  },
  {
    id: 3,
    title: "Accident Detection Alert System",
    des: "Accident Detection and Alert System Collaborative project developed with my team contribution to core features and integration.",
    img: "/p3.webp",
    iconLists: ["/python.svg", "/ts.svg", "/MongoDB.svg"],
    link: "https://github.com/umakantchauhan/Accident-Detection-System.git",
    check: "Check",
  },
  {
    id: 4,
    title: "Elsa Voice assistance",
    des: "The assistant supports real-time voice commands for tasks like time retrieval, web and YouTube search, Wikipedia summarization, language translation, basic calculations, app launching, and capturing screenshots/photos.",
    img: "/p4.webp",
    iconLists: ["/python.svg"],
    link: "https://github.com/umakantchauhan/Elsa-Voice-assistance-.git",
    check: "Check",
  },

  // {
  //   id: 1,
  //   title: "3D Solar System Planets to Explore",
  //   des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
  //   img: "/p1.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  //   link: "/ui.earth.com",
  // },
  // {
  //   id: 2,
  //   title: "Yoom - Video Conferencing App",
  //   des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
  //   img: "/p2.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
  //   link: "/ui.yoom.com",
  // },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.aiimg.com",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Web Development Intern",
    desc: "Full-Stack Web Development Intern at Aerobott, building and optimizing production-grade Next.js applications, scalable CMS workflows, and reusable frontend systems.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/umakantchauhan",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  //   link:,
  // },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/umakant-chauhan369/",
  },
];
