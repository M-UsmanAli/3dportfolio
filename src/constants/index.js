import {
    mobile,
    backend,
    creator,
    ebridge,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    statelife,
    tesla,
    webhive,
    shopify,
    carrent,
    jobit,
    issuetracker,
    portfolio,
    foodies,
    jazeel,
    ahsan,
    habib,
    education,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Web-Hive Technologies",
      icon: webhive,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Engaged in full-stack development, contributing to both front-end and back-end functionalities.",
        "Utilized Tailwind CSS to enhance the aesthetic appeal of user interfaces with enhanced motion and animation effects using Framer Motion.",
      ],
    },
    {
      title: "Web Administrator",
      company_name: "State-Life Pakistan",
      icon: statelife,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Served as a PHP developer and database administrator, contributing to the development and maintenance of the State-life health insurance website.",
        "Provided customer service support for application version users, addressing queries and ensuring a positive user experience.",
        "Optimized website performance through systematic analysis and implementation of efficiency measures.",
        "Implemented various functional modules to enhance the features and capabilities of the State-life website.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "E-Bridge Solutions",
      icon: ebridge,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Worked extensively with HTML, ensuring a solid structural foundation for web pages and styled and designed websites using CSS, focusing on visual appeal and user experience.",
        "Specialized in WordPress development, creating custom themes and plugins to meet project requirements.",
        "Used JavaScript to enhance interactivity, providing dynamic and engaging features on web pages.",
        "Managed databases and executed operations with MySQL for efficient data storage and retrieval.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought creating a functional yet well-designed GIS and database website was a challenge, but you delivered a clean, user-friendly platform effortlessly.",
      name: "Jazeel Hashmi",
      designation: "AD",
      company: "Ministry of Defence",
      image: jazeel,
    },
    {
      testimonial:
        "Creating a teaching portfolio that attracts international clients would be challenging, but you delivered a polished, professional, and user-friendly website with ease.",
      name: "Habib Arshad",
      designation: "CO",
      company: "Habib Sciences Academy",
      image: habib,
    },
    {
      testimonial:
        "After Usman optimized my website, I saw a remarkable 50% increase in site traffic. The improvements made were beyond my expectations, Thanks for the exceptional work!",
      name: "Ahsan Khurshid",
      designation: "CEO",
      company: "Ahsan Blogger",
      image: ahsan,
    },
  ];
  
  const projects = [
    {
      name: "Issue Tracker",
      description:
        "An efficient web-based platform for issue tracking, enabling users to manage issues seamlessly with secure Gmail authentication via OAuth.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: issuetracker,
      source_code_link: "https://github.com/M-UsmanAli/issue-tracker",
    },
    {
      name: "Portfolio Website",
      description:
        "A modern and responsive portfolio website, featuring sleek design elements, smooth animations, and an intuitive user experience to highlight projects and skills effectively.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/M-UsmanAli/portfolio",
    },
    {
      name: "Food Ordering App",
      description:
        "A dynamic food ordering web application with seamless browsing, cart management, and order placement, featuring a responsive UI for an enhanced experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
      ],
      image: foodies,
      source_code_link: "https://github.com/M-UsmanAli/foodies",
    },
    // {
    //   name: "Car Rent",
    //   description:
    //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "mongodb",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: carrent,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };