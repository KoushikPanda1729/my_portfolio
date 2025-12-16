/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Koushik Panda - Full Stack Developer Portfolio",
  description:
    "Full Stack Developer passionate about building scalable web applications and innovative solutions. Explore my projects, skills, and experience.",
  og: {
    title: "Koushik Panda Portfolio",
    type: "website",
    url: "https://koushikpanda.com/",
  },
};

//Home Page
const greeting = {
  title: "Koushik Panda",
  logo_name: "KoushikPanda",
  nickname: "koushik-panda",
  designation: "Software Engineer at Evtaar",
  subTitle:
    "A passionate Full Stack Developer who loves building scalable web applications and solving complex problems with elegant solutions.",
  resumeLink: "https://drive.google.com/file/d/YOUR_RESUME_ID/view?usp=sharing", // Update with your resume link
  portfolio_repository: "https://github.com/KoushikPanda1729/masterPortfolio",
  githubProfile: "https://github.com/KoushikPanda1729",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // Update these links with your actual social media profiles

  {
    name: "Github",
    link: "https://github.com/KoushikPanda1729",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/koushik-panda-10b734291/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:pandakoushik123@gmail.com",
    fontAwesomeIcon: "fa-envelope",
    backgroundColor: "#EA4335", // Gmail red color
  },
  {
    name: "X-Twitter",
    link: "https://x.com/IAMKOUSHIK1729",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  // Uncomment and update these if you have these profiles
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/@koushikpanda",
  //   fontAwesomeIcon: "fa-youtube",
  //   backgroundColor: "#FF0000",
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/koushikpanda/",
  //   fontAwesomeIcon: "fa-facebook-f",
  //   backgroundColor: "#1877F2",
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/koushikpanda/",
  //   fontAwesomeIcon: "fa-instagram",
  //   backgroundColor: "#E4405F",
  // },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "App Development",
      fileName: "AppDevImg",
      skills: [
        "⚡ Building cross-platform mobile applications using Flutter and React Native",
        "⚡ Developing native Android applications using Kotlin",
        "⚡ Creating native iOS applications using Swift",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#7F52FF",
          },
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "simple-icons:swift",
          style: {
            color: "#FA7343",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "iOS",
          fontAwesomeClassname: "simple-icons:apple",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/nQjBJGNMeg/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of North Bengal",
      subtitle: "Master of Computer Applications (MCA)",
      logo_path: "north_bengal.jpeg",
      alt_name: "NBU",
      duration: "2023 - 2025",
      location: "Siliguri, West Bengal, India",
      descriptions: [
        "Pursuing advanced studies in computer applications, mobile development, and software engineering.",
        "Specializing in cross-platform mobile development, cloud computing, and modern web technologies.",
        "Building production-ready applications using React Native, Flutter, and full-stack technologies.",
      ],
      skills: [
        "Advanced Algorithms",
        "Data Structures",
        "Software Engineering",
        "Cloud Computing",
        "Mobile Development",
        "Web Technologies",
        "Database Management",
        "System Design",
      ],
      achievements: [
        "Specializing in modern mobile and web development technologies",
        "Building real-world applications with industry-standard tools",
        "Strong focus on software architecture and system design",
      ],
      website_link: "https://mba.nbu.ac.in/",
    },
    {
      title: "Panskura Banamali College",
      subtitle: "Bachelor of Computer Applications (BCA)",
      logo_path: "panskura_college.jpeg",
      alt_name: "Panskura Banamali College",
      duration: "2020 - 2023",
      location: "Panskura, West Bengal, India",
      descriptions: [
        "Studied core computer science subjects including Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks.",
        "Completed coursework in Web Development, Mobile Application Development, and Software Engineering.",
        "Built strong foundation in programming with JavaScript, Java, and mobile development technologies.",
      ],
      skills: [
        "Data Structures",
        "Algorithms",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "Web Development",
        "Mobile App Development",
        "Programming (Java, JavaScript)",
      ],
      achievements: [
        "Built strong foundation in computer science fundamentals",
        "Developed multiple projects in web and mobile development",
        "Gained expertise in programming and software development",
      ],
      website_link: "https://www.panskurabanamalicollege.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Your Certification Name",
      subtitle: "- Issuing Organization",
      logo_path: "codeInLogo.png", // Add logo to public/icons/
      certificate_link: "https://your-certificate-link.com",
      alt_name: "Organization Name",
      color_code: "#8C151599",
    },
    // Add more certifications here
    // Example certifications you can add:
    // {
    //   title: "Full Stack Web Development",
    //   subtitle: "- Coursera",
    //   logo_path: "coursera_logo.png",
    //   certificate_link: "https://coursera.org/verify/YOUR_CERT_ID",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Full Stack Developer with experience in building scalable web applications. Passionate about clean code, best practices, and continuous learning.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Evtaar",
          company_url: "https://www.evtaar.com/",
          logo_path: "evtaar_logo.jpeg",
          duration: "Dec 2025 - Present",
          location: "Dubai, United Arab Emirates · Remote",
          description:
            "Currently working as a Software Engineer at Evtaar, building innovative and scalable solutions. Developing responsive web and mobile applications using modern frameworks and technologies. Focused on delivering high-quality code with clean architecture and efficient performance.",
          color: "#0879bf",
          techStack: [
            "Next.js",
            "React.js",
            "Flutter",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Firebase",
            "REST APIs",
            "Redux",
            "Git",
          ],
          achievements: [
            "Building responsive and scalable applications with modern web technologies",
            "Implementing clean code architecture and design patterns",
            "Collaborating with cross-functional teams to deliver high-quality solutions",
          ],
        },
        {
          title: "Software Engineer",
          company: "Talk2Partners (Bunni Education)",
          company_url: "https://talk2partners.com/",
          logo_path: "talk2partners_logo.jpeg",
          duration: "Sep 2025 - Nov 2025",
          location: "Delhi, India · Remote",
          description:
            "Worked as a Software Engineer at Talk2Partners, developing educational technology platforms. Built responsive web and mobile applications to enhance learning experiences. Implemented features using Next.js, React.js, Flutter, and modern development tools.",
          color: "#ee3c26",
          techStack: [
            "Next.js",
            "React.js",
            "Flutter",
            "TypeScript",
            "Tailwind CSS",
            "Redux",
            "REST APIs",
            "Git",
            "Firebase",
          ],
          achievements: [
            "Developed educational platform features improving user engagement",
            "Built responsive cross-platform applications using React and Flutter",
            "Collaborated with product team to implement user-focused solutions",
          ],
        },
        {
          title: "Software Development Engineer",
          company: "Fördel Studios",
          company_url: "https://fordelstudios.com/",
          logo_path: "frdel_studios_logo.jpeg",
          duration: "Oct 2024 - Oct 2025",
          location: "Siliguri, West Bengal, India · On-site",
          description:
            "Started as an intern and put in extreme effort to prove myself - coding 13-14 hours a day. After 1 month of exceptional performance, I was the only one promoted to Associate Developer. Then I got asked to lead a team building a complex project that was a direct competitor to Tira Beauty. I handled everything - client meetings, requirement analysis, scope preparation, project timeline, PR reviews, merges, and deployments. Due to my excellent performance, I got a salary increment too.",
          color: "#0071c5",
          techStack: [
            "Next.js",
            "React",
            "Redux",
            "MongoDB",
            "SQL",
            "Docker",
            "Nginx",
            "Git",
            "Bitbucket",
            "Tailwind CSS",
            "Node.js",
            "TypeScript",
            "Prisma",
            "Framer Motion",
            "Shadcn/ui",
            "Vercel",
            "AWS",
            "PostgreSQL",
            "Redis",
            "WebSockets",
            "Stripe",
            "SendGrid",
            "Cloudinary",
            "Firebase",
            "ESLint",
            "Elasticsearch",
            "Swagger",
            "S3",
            "CloudFront",
            "Flutter",
            "GoRouter",
            "Riverpod",
            "Provider",
            "alot of other technologies",
          ],
          achievements: [
            "Put in extreme effort as an intern - coding 13-14 hours daily to prove myself (still coding 10-18 hours a day)",
            "Only one promoted to Associate Developer after 1 month due to exceptional performance",
            "Led a complex project competing directly with Tira Beauty - handled everything from client meetings to deployments",
            "Managed requirement analysis, scope preparation, project timeline, PR reviews, merges, and deployments",
            "Got salary increment due to excellent performance and top talent recognition",
          ],
        },
      ],
    },
    // Uncomment if you have volunteerships
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Open Source Contributor",
    //       company: "GitHub",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "2020 - Present",
    //       location: "Remote",
    //       description:
    //         "Active contributor to various open source projects.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Here are some of my projects showcasing my skills in full stack development, problem-solving, and building scalable applications using modern technologies.",
  avatar_image_path: "projects_image.svg",
};

const bigProjects = {
  title: "Featured Projects",
  subtitle: "MY WORK IN FULL-STACK DEVELOPMENT",
  projects: [
    {
      id: "formula-ecommerce",
      projectName: "Formula Shop",
      projectDesc:
        "A full-scale, advanced e-commerce platform built as a direct competitor to Tira Beauty. Architected and developed end-to-end (frontend, backend, database, deployment) with 70,000+ lines of code.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://theformulashop.com",
        },
      ],
      image: require("./assets/images/formula_image.png"),
      duration: "Oct 2024 - Present",
      level: "Advanced",
      tags: ["FRONTEND", "BACKEND"],
      codebaseConfidential: true,

      // Project at a Glance
      role: "Fullstack Developer (Solo/Lead)",
      projectDuration: "9 months",
      stack:
        "Next.js, React, TailwindCSS, Shiprocket, Razorpay, Custom Magento, Deployment - CI/CD",
      linesOfCode: "70,000+",
      team: "1 (Full ownership)",

      // My Role & Impact
      roleImpact: [
        "Architected and built the entire platform from scratch (frontend, backend, database, deployment).",
        "Designed a scalable, maintainable codebase and led all technical decisions.",
        "Implemented advanced features: real-time order tracking, personalized recommendations, routine builder, and more.",
        "Collaborated seamlessly with designers to translate Figma designs into pixel-perfect, responsive UIs.",
      ],

      // Key Features
      keyFeatures: [
        {
          title: "Routine Builder",
          description:
            "Personalized skin/hair routines with smart filters and suggestions.",
        },
        {
          title: "Global Categorization",
          description:
            "Products by Korean, Indian, African, Japanese philosophies.",
        },
        {
          title: "Wellness Profile",
          description:
            "Custom dashboard for user preferences, driving recommendations.",
        },
        {
          title: "Brand Showcase",
          description: "Dedicated brand pages with filterable product lists.",
        },
        {
          title: "Order Management",
          description: "Real-time tracking, status updates, and returns.",
        },
        {
          title: "Responsive UI/UX",
          description: "Mobile-first, luxury-brand design.",
        },
      ],

      // Tech Highlights
      techHighlights: [
        {
          tech: "Next.js",
          description: "for scalable routing and SSR.",
        },
        {
          tech: "React",
          description: "for modern, component-based UI.",
        },
        {
          tech: "TailwindCSS",
          description: "for rapid, consistent styling.",
        },
        {
          tech: "Custom Magento",
          description: "as backend engine for e-commerce logic.",
        },
        {
          tech: "Shiprocket",
          description: "for shipping and logistics integration.",
        },
        {
          tech: "Razorpay",
          description: "for payment gateway integration.",
        },
        {
          tech: "Deployment / CI/CD",
          description: "for automated, reliable releases.",
        },
      ],

      // Challenges & Solutions
      challenges: [
        {
          challenge: "Complex filtering",
          solution: "Solved with server-side logic and efficient queries.",
        },
        {
          challenge: "Personalization at scale",
          solution: "Built dynamic, profile-driven recommendations.",
        },
        {
          challenge: "Real-time order tracking",
          solution: "Engineered backend logic for live updates.",
        },
      ],

      // Results & Impact
      results: [
        "Achieved feature parity with top beauty e-commerce platforms.",
        "Scalable to thousands of users and product variants.",
        "Streamlined user journeys from discovery to purchase.",
      ],

      // What I Learned
      learnings: [
        "Deepened expertise in fullstack architecture and scalable design.",
        "Mastered advanced Next.js, TailwindCSS, and modern React patterns.",
        "Learned to balance business needs, UX, and technical complexity.",
      ],

      // Technologies
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "Shiprocket",
        "Razorpay",
        "Custom Magento",
        "+1",
      ],

      // Visual Comparison Slider (Prototype vs Final, Mobile vs Desktop, etc.)
      visualComparison: {
        before: {
          title: "Figma Design",
          image: require("./assets/images/formula_figma_image.png"),
        },
        after: {
          title: "Live UI",
          image: require("./assets/images/formula_image.png"),
        },
      },

      // Second Visual Comparison Slider
      visualComparison2: {
        before: {
          title: "Mobile UI",
          image: require("./assets/images/formula_mobile.png"),
        },
        after: {
          title: "Tablet UI",
          image: require("./assets/images/formula_tab_ui.png"),
        },
      },

      // Third Visual Comparison Slider
      visualComparison3: {
        before: {
          title: "Code View",
          image: require("./assets/images/code_image.png"),
        },
        after: {
          title: "Commit View",
          image: require("./assets/images/commit_image.png"),
        },
      },

      // Visual Showcase
      visualShowcase: [
        {
          type: "design",
          title: "UI Design Prototype",
          image: require("./assets/images/contactMail.png"), // Replace with actual design screenshot
        },
        {
          type: "mobile",
          title: "Mobile View",
          image: require("./assets/images/contactMail.png"), // Replace with actual mobile screenshot
        },
        {
          type: "desktop",
          title: "Desktop View",
          image: require("./assets/images/contactMail.png"), // Replace with actual desktop screenshot
        },
        {
          type: "code",
          title: "Code Showcase",
          image: require("./assets/images/contactMail.png"), // Replace with actual code screenshot
        },
      ],
    },
    {
      id: "bunnieducation",
      projectName: "Bunnieducation Private Limited",
      projectDesc:
        "A comprehensive educational platform providing online learning solutions. Built with modern web technologies to deliver interactive learning experiences.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://bunnieducation.com/",
        },
      ],
      image: require("./assets/images/bunni_image/Empowering Students.png"),
      duration: "2024",
      level: "Moderate",
      tags: ["FRONTEND"],
      codebaseConfidential: false,

      role: "Frontend Developer",
      projectDuration: "2 months",
      stack: "React, TailwindCSS, Redux",
      linesOfCode: "45,000+",
      team: "2-3 developers",

      roleImpact: [
        "Developed interactive learning modules and course management UI.",
        "Implemented responsive user interface for students, teachers, and administrators.",
        "Built dynamic frontend components for course browsing and enrollment.",
        "Created seamless payment integration UI for course purchases.",
      ],

      keyFeatures: [
        {
          title: "Course Management",
          description:
            "Comprehensive system for creating and managing courses.",
        },
        {
          title: "Interactive Learning",
          description: "Video lessons, quizzes, and assignments.",
        },
        {
          title: "Progress Tracking",
          description: "Real-time student progress monitoring and analytics.",
        },
        {
          title: "Payment Integration",
          description: "Secure payment processing for course enrollment.",
        },
      ],

      techHighlights: [
        {
          tech: "React",
          description: "for dynamic, interactive UI components.",
        },
        {
          tech: "TailwindCSS",
          description: "for modern, responsive styling.",
        },
        {
          tech: "Redux",
          description: "for state management and data flow.",
        },
      ],

      challenges: [
        {
          challenge: "Complex UI state management",
          solution:
            "Implemented Redux for efficient state management across components.",
        },
        {
          challenge: "Responsive design across devices",
          solution: "Built mobile-first responsive interface with TailwindCSS.",
        },
      ],

      results: [
        "Successfully launched platform with multiple courses.",
        "Positive user feedback on UI/UX and learning experience.",
      ],

      learnings: [
        "Gained expertise in building educational platform UIs.",
        "Mastered React component architecture and state management.",
      ],

      technologies: ["React", "TailwindCSS", "Redux", "JavaScript"],

      // Visual Comparison Slider
      visualComparison: {
        before: {
          title: "Empowering Students",
          image: require("./assets/images/bunni_image/Empowering Students.png"),
        },
        after: {
          title: "Our Gallery",
          image: require("./assets/images/bunni_image/Our Gallery.png"),
        },
      },
    },
    {
      id: "young-guru-academy",
      projectName: "Young Guru Academy",
      projectDesc:
        "An innovative learning platform focused on skill development and career guidance for young professionals. Features interactive courses and mentorship programs.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://youngguruacademy.com/",
        },
      ],
      image: require("./assets/images/young_guru/SPEAKING.png"),
      duration: "2023 - 2024",
      level: "Moderate",
      tags: ["FRONTEND"],
      codebaseConfidential: false,

      role: "Frontend Developer",
      projectDuration: "2 months",
      stack: "React, Next.js, TailwindCSS",
      linesOfCode: "30,000+",
      team: "3 developers",

      roleImpact: [
        "Designed and developed responsive landing pages and course interfaces.",
        "Implemented real-time chat UI for mentorship sessions.",
        "Built interactive user dashboard with progress tracking visualizations.",
      ],

      keyFeatures: [
        {
          title: "Mentorship Platform",
          description: "Connect students with industry professionals.",
        },
        {
          title: "Skill Assessments",
          description: "Interactive tests to evaluate learning progress.",
        },
        {
          title: "Career Guidance",
          description: "Personalized career path recommendations.",
        },
      ],

      techHighlights: [
        {
          tech: "Next.js",
          description: "for server-side rendering and SEO optimization.",
        },
        {
          tech: "TailwindCSS",
          description: "for responsive and modern UI design.",
        },
      ],

      challenges: [
        {
          challenge: "Real-time UI updates",
          solution:
            "Implemented optimized rendering patterns for smooth chat interface.",
        },
      ],

      results: [
        "Platform successfully connects mentors and students.",
        "High engagement rates on mentorship sessions.",
      ],

      learnings: [
        "Mastered real-time UI updates and component optimization.",
        "Improved skills in Next.js and modern React patterns.",
      ],

      technologies: ["React", "Next.js", "TailwindCSS", "JavaScript"],

      // Visual Comparison Slider
      visualComparison: {
        before: {
          title: "Speaking Module",
          image: require("./assets/images/young_guru/SPEAKING.png"),
        },
        after: {
          title: "Transform Your Career",
          image: require("./assets/images/young_guru/Transform Your.png"),
        },
      },
    },
    {
      id: "talk2partners",
      projectName: "Talk2Partners",
      projectDesc:
        "A communication and collaboration platform designed for business partnerships. Streamlines partner communication with integrated messaging and project management tools.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://talk2partners.com/",
        },
      ],
      image: require("./assets/images/talk2partners/Talk2Partners.png"),
      duration: "2023",
      level: "Moderate",
      tags: ["FRONTEND"],
      codebaseConfidential: false,

      role: "Frontend Developer",
      projectDuration: "2 months",
      stack: "React, Redux, TailwindCSS",
      linesOfCode: "35,000+",
      team: "2 developers",

      roleImpact: [
        "Built real-time messaging UI with WebSocket integration.",
        "Developed partner management and collaboration interfaces.",
        "Implemented file sharing UI and document management interface.",
      ],

      keyFeatures: [
        {
          title: "Real-time Messaging",
          description: "Instant communication between partners.",
        },
        {
          title: "Project Collaboration",
          description: "Shared workspaces and task management.",
        },
        {
          title: "Document Sharing",
          description: "Secure file upload and sharing system.",
        },
      ],

      techHighlights: [
        {
          tech: "React",
          description: "for building interactive messaging interfaces.",
        },
        {
          tech: "Redux",
          description: "for managing complex application state.",
        },
        {
          tech: "TailwindCSS",
          description: "for responsive and modern design system.",
        },
      ],

      challenges: [
        {
          challenge: "Real-time message rendering",
          solution:
            "Optimized React components and implemented virtual scrolling for chat.",
        },
      ],

      results: [
        "Reduced partner communication time by 40%.",
        "Successfully handles multiple concurrent users.",
      ],

      learnings: [
        "Gained expertise in building real-time UI components.",
        "Learned advanced React optimization techniques.",
      ],

      technologies: [
        "React",
        "Redux",
        "TailwindCSS",
        "WebSocket",
        "JavaScript",
      ],

      // Visual Comparison Slider
      visualComparison: {
        before: {
          title: "Talk2Partners Platform",
          image: require("./assets/images/talk2partners/Talk2Partners.png"),
        },
        after: {
          title: "App Launch - Otter",
          image: require("./assets/images/talk2partners/App Launch Otter - spoken english.png"),
        },
      },
    },
    {
      id: "frovo",
      projectName: "Frovo",
      projectDesc:
        "A modern food delivery and restaurant discovery platform. Connects users with local restaurants featuring real-time order tracking and seamless payment processing.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://www.frovo.in/",
        },
      ],
      image: require("./assets/images/frovo_image/Life Can't Wait.png"),
      duration: "2022 - 2023",
      level: "Advanced",
      tags: ["FRONTEND", "BACKEND"],
      codebaseConfidential: false,

      role: "Fullstack Developer",
      projectDuration: "8 months",
      stack: "React, Node.js, MongoDB, Express, Google Maps API, Razorpay",
      linesOfCode: "50,000+",
      team: "3-4 developers",

      roleImpact: [
        "Architected restaurant listing and search functionality.",
        "Implemented real-time order tracking with Google Maps integration.",
        "Built cart management and checkout flow with payment gateway.",
        "Developed admin panel for restaurant management.",
      ],

      keyFeatures: [
        {
          title: "Restaurant Discovery",
          description:
            "Smart search with filters for cuisine, rating, and distance.",
        },
        {
          title: "Real-time Tracking",
          description: "Live order tracking on interactive maps.",
        },
        {
          title: "Payment Integration",
          description:
            "Secure payments via Razorpay and multiple payment methods.",
        },
        {
          title: "Restaurant Dashboard",
          description: "Comprehensive admin panel for restaurant owners.",
        },
      ],

      techHighlights: [
        {
          tech: "Google Maps API",
          description: "for location services and real-time tracking.",
        },
        {
          tech: "Razorpay",
          description: "for payment processing.",
        },
        {
          tech: "MongoDB",
          description: "for flexible restaurant and order data management.",
        },
      ],

      challenges: [
        {
          challenge: "Real-time tracking accuracy",
          solution: "Optimized Google Maps API usage with efficient polling.",
        },
        {
          challenge: "Peak load handling",
          solution: "Implemented caching and database indexing strategies.",
        },
      ],

      results: [
        "Successfully launched in multiple cities.",
        "Handles 1000+ daily orders during peak hours.",
        "Positive ratings for UI/UX and delivery tracking.",
      ],

      learnings: [
        "Mastered Google Maps API integration and optimization.",
        "Learned scaling strategies for high-traffic applications.",
        "Gained experience in food delivery domain logistics.",
      ],

      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Google Maps",
        "Razorpay",
      ],

      // Visual Comparison Slider
      visualComparison: {
        before: {
          title: "How It Works",
          image: require("./assets/images/frovo_image/How Frovo Works.png"),
        },
        after: {
          title: "For Businesses",
          image: require("./assets/images/frovo_image/Frovo for Businesses.png"),
        },
      },

      // Second Visual Comparison Slider
      visualComparison2: {
        before: {
          title: "Smart Retail",
          image: require("./assets/images/frovo_image/Join the Future of Smart Retail - bulld with Frovo.png"),
        },
        after: {
          title: "Main Platform",
          image: require("./assets/images/frovo_image/Life Can't Wait.png"),
        },
      },
    },
    // {
    //   id: "pizza-delivery-microservices",
    //   projectName: "Pizza Delivery - Microservices Architecture (Work in Progress)",
    //   projectDesc:
    //     "🚧 Work in Progress - A scalable pizza delivery platform built using microservices architecture. Features independent services for orders, inventory, payments, and notifications with Docker containerization.",
    //   footerLink: [],
    //   image: require("./assets/images/contactMail.png"),
    //   duration: "2023",
    //   level: "Advanced",
    //   tags: ["BACKEND", "DEVOPS"],
    //   codebaseConfidential: false,
    //   workInProgress: true,

    //   role: "Backend Developer / DevOps",
    //   projectDuration: "6 months",
    //   stack:
    //     "Node.js, Express, MongoDB, PostgreSQL, RabbitMQ, Docker, Kubernetes, Redis",
    //   linesOfCode: "40,000+",
    //   team: "Solo project",

    //   roleImpact: [
    //     "Designed and implemented microservices architecture from scratch.",
    //     "Built independent services: Order Service, Inventory Service, Payment Service, Notification Service.",
    //     "Implemented message queue using RabbitMQ for inter-service communication.",
    //     "Containerized all services with Docker and orchestrated with Kubernetes.",
    //     "Set up API Gateway for routing and load balancing.",
    //   ],

    //   keyFeatures: [
    //     {
    //       title: "Microservices Architecture",
    //       description:
    //         "Independently deployable services for scalability and maintainability.",
    //     },
    //     {
    //       title: "Message Queue",
    //       description: "RabbitMQ for asynchronous communication between services.",
    //     },
    //     {
    //       title: "Containerization",
    //       description: "Docker containers for consistent deployment environments.",
    //     },
    //     {
    //       title: "API Gateway",
    //       description: "Centralized routing and authentication layer.",
    //     },
    //     {
    //       title: "Service Discovery",
    //       description: "Dynamic service registration and discovery.",
    //     },
    //     {
    //       title: "Distributed Caching",
    //       description: "Redis for performance optimization.",
    //     },
    //   ],

    //   techHighlights: [
    //     {
    //       tech: "Microservices",
    //       description: "for independent scaling and deployment.",
    //     },
    //     {
    //       tech: "RabbitMQ",
    //       description: "for reliable message queuing.",
    //     },
    //     {
    //       tech: "Docker & Kubernetes",
    //       description: "for containerization and orchestration.",
    //     },
    //     {
    //       tech: "Redis",
    //       description: "for distributed caching and session management.",
    //     },
    //     {
    //       tech: "API Gateway",
    //       description: "for centralized routing and security.",
    //     },
    //   ],

    //   challenges: [
    //     {
    //       challenge: "Service communication",
    //       solution:
    //         "Implemented event-driven architecture with RabbitMQ message broker.",
    //     },
    //     {
    //       challenge: "Data consistency",
    //       solution: "Applied saga pattern for distributed transactions.",
    //     },
    //     {
    //       challenge: "Service orchestration",
    //       solution: "Used Kubernetes for automated deployment and scaling.",
    //     },
    //     {
    //       challenge: "Monitoring and debugging",
    //       solution:
    //         "Integrated centralized logging and distributed tracing tools.",
    //     },
    //   ],

    //   results: [
    //     "Successfully deployed scalable microservices architecture.",
    //     "Each service can scale independently based on demand.",
    //     "99.9% uptime with fault-tolerant design.",
    //     "Reduced deployment time by 60% with containerization.",
    //   ],

    //   learnings: [
    //     "Mastered microservices architecture design and implementation.",
    //     "Gained deep expertise in Docker, Kubernetes, and container orchestration.",
    //     "Learned message queue patterns and event-driven architecture.",
    //     "Understood distributed systems challenges and solutions.",
    //   ],

    //   technologies: [
    //     "Node.js",
    //     "Express",
    //     "MongoDB",
    //     "PostgreSQL",
    //     "RabbitMQ",
    //     "Docker",
    //     "Kubernetes",
    //     "Redis",
    //   ],
    // },
    {
      id: "evtaar",
      projectName: "Evtaar",
      projectDesc:
        "A comprehensive event management and ticketing platform. Streamlines event creation, promotion, and ticket sales with real-time analytics and attendee management.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://www.evtaar.com/",
        },
      ],
      image: require("./assets/images/evtaar/GROW YOUR BUSINESS SEAMLESSI.png"),
      duration: "2023 - 2024",
      level: "Advanced",
      tags: ["FRONTEND"],
      codebaseConfidential: false,

      role: "Frontend Developer",
      projectDuration: "7 months",
      stack: "React, Redux, TailwindCSS, TypeScript",
      linesOfCode: "42,000+",
      team: "2-3 developers",

      roleImpact: [
        "Developed event creation and management dashboard UI for organizers.",
        "Implemented ticket booking interface with real-time seat selection visualization.",
        "Built payment integration UI with Stripe for secure transactions.",
        "Created attendee check-in interface with QR code scanning functionality.",
      ],

      keyFeatures: [
        {
          title: "Event Management",
          description:
            "Comprehensive dashboard for creating and managing events.",
        },
        {
          title: "Real-time Booking",
          description: "Live seat selection and instant ticket confirmation.",
        },
        {
          title: "Payment Processing",
          description: "Secure payment gateway with multiple payment methods.",
        },
        {
          title: "Analytics Dashboard",
          description: "Real-time event analytics and ticket sales tracking.",
        },
        {
          title: "QR Code Check-in",
          description: "Digital ticket verification system for smooth entry.",
        },
      ],

      techHighlights: [
        {
          tech: "React",
          description: "for dynamic and interactive user interfaces.",
        },
        {
          tech: "Redux",
          description: "for managing complex application state.",
        },
        {
          tech: "TypeScript",
          description: "for type-safe code and better developer experience.",
        },
        {
          tech: "TailwindCSS",
          description: "for responsive and modern UI design.",
        },
      ],

      challenges: [
        {
          challenge: "Real-time seat availability UI",
          solution:
            "Implemented optimized React rendering with WebSocket updates for instant seat status.",
        },
        {
          challenge: "Complex state management",
          solution:
            "Used Redux with normalized state for efficient booking flow management.",
        },
        {
          challenge: "Responsive design for various devices",
          solution:
            "Built mobile-first responsive interface with TailwindCSS for seamless experience.",
        },
      ],

      results: [
        "Successfully processed 50,000+ ticket bookings.",
        "Smooth user experience across all devices.",
        "Platform handles 10+ concurrent events smoothly.",
        "Positive feedback on user-friendly booking experience.",
      ],

      learnings: [
        "Mastered real-time UI updates with WebSockets.",
        "Gained expertise in building complex booking interfaces.",
        "Learned advanced React optimization techniques for high-traffic applications.",
        "Understood TypeScript patterns for large-scale applications.",
      ],

      technologies: [
        "React",
        "Redux",
        "TypeScript",
        "TailwindCSS",
        "WebSocket",
        "JavaScript",
      ],

      // Visual Comparison Slider
      visualComparison: {
        before: {
          title: "Grow Your Business",
          image: require("./assets/images/evtaar/GROW YOUR BUSINESS SEAMLESSI.png"),
        },
        after: {
          title: "Event Management",
          image: require("./assets/images/evtaar/Pasted Graphic 10.png"),
        },
      },

      // Second Visual Comparison Slider
      visualComparison2: {
        before: {
          title: "Platform Feature 1",
          image: require("./assets/images/evtaar/Pasted Graphic 11.png"),
        },
        after: {
          title: "Platform Feature 2",
          image: require("./assets/images/evtaar/Pasted Graphic 12.png"),
        },
      },
    },
    // Add more projects here following the same structure
  ],
};

// Mobile Applications Section
const mobileApps = {
  title: "Mobile Applications",
  subtitle: "FLUTTER DEVELOPMENT WITH CLEAN ARCHITECTURE",
  projects: [
    {
      id: "emsigner-app",
      projectName: "emSigner - Digital Signature Solution",
      projectDesc:
        "Enterprise-grade digital signature application enabling secure document signing, collaboration, and workflow management. Built with Flutter using clean architecture and enterprise security standards. Trusted by professionals for secure document handling.",
      footerLink: [
        {
          name: "Google Play Store",
          url: "https://play.google.com/store/apps/details?id=com.emudhra.emSigner",
        },
      ],
      image: require("./assets/images/app_images/emsigner/Simplify Your.webp"),
      duration: "2023 - 2024",
      level: "Advanced",
      tags: ["MOBILE", "FLUTTER", "ENTERPRISE"],
      codebaseConfidential: true,

      role: "Flutter Developer",
      projectDuration: "7 months",
      stack: "Flutter, Dart, Riverpod, GoRouter, Dio, Encryption APIs, Digital Signature SDK",
      linesOfCode: "22,000+",
      team: "5-8 members",

      roleImpact: [
        "Developed enterprise-level digital signature application with high security standards.",
        "Implemented encryption and digital signature workflows following industry standards.",
        "Built collaborative features for document sharing and multi-party signing.",
        "Integrated with enterprise systems for seamless document management.",
        "Achieved 2,000+ downloads in enterprise segment with excellent reviews.",
      ],

      keyFeatures: [
        {
          title: "Simplify Your Workflow",
          description: "Streamlined document signing process with intuitive interface.",
        },
        {
          title: "Choose Signature Type",
          description: "Multiple signature options including digital and electronic signatures.",
        },
        {
          title: "Collaborate with Teams",
          description: "Multi-party signing with role-based access control.",
        },
        {
          title: "Stay in Control",
          description: "Complete audit trail and document tracking capabilities.",
        },
        {
          title: "Envelope Management",
          description: "Organize and manage signed documents with envelope system.",
        },
      ],

      techHighlights: [
        {
          tech: "Flutter",
          description: "for secure mobile application.",
        },
        {
          tech: "Encryption",
          description: "for document security and data protection.",
        },
        {
          tech: "Digital Signature SDK",
          description: "for legally binding signatures.",
        },
        {
          tech: "Clean Architecture",
          description: "for enterprise-grade code quality.",
        },
        {
          tech: "Riverpod",
          description: "for complex state management.",
        },
      ],

      challengesSolutions: [
        {
          challenge: "Enterprise-level security requirements",
          solution: "Implemented end-to-end encryption with industry-standard protocols.",
        },
        {
          challenge: "Offline signing capability",
          solution: "Built local signature storage with encrypted database.",
        },
        {
          challenge: "Complex workflow management",
          solution: "Designed flexible workflow engine with role-based permissions.",
        },
      ],

      results: [
        "2,000+ downloads in enterprise market",
        "4.3+ star rating with professional user base",
        "Trusted by businesses for secure document signing",
        "Zero security incidents reported",
      ],

      technologies: ["Flutter", "Dart", "Riverpod", "GoRouter", "Dio", "Encryption", "Digital Signature"],

      screenshots: [
        require("./assets/images/app_images/emsigner/Choose signature type.webp"),
        require("./assets/images/app_images/emsigner/Collaborate with.webp"),
        require("./assets/images/app_images/emsigner/Envelope signed &.webp"),
        require("./assets/images/app_images/emsigner/Simplify Your.webp"),
        require("./assets/images/app_images/emsigner/Stay in Control.webp"),
        require("./assets/images/app_images/emsigner/• Proposa.webp"),
      ],

      additionalNote:
        "Note: In addition to these public applications, I have developed numerous confidential enterprise applications for various clients that cannot be disclosed due to NDA agreements. These projects involved complex business logic, enterprise-grade security, and custom integrations.",
    },
    {
      id: "shanghai-restaurant-app",
      projectName: "Shanghai Restaurant - Food Delivery Platform",
      projectDesc:
        "A feature-rich food ordering and delivery application with real-time tracking, exclusive deals, and personalized recommendations. Built with Flutter following clean architecture principles. Delivers seamless food ordering experience to thousands of users.",
      footerLink: [
        {
          name: "Google Play Store",
          url: "https://play.google.com/store/apps/details?id=com.shanghai.restaurant&hl=en_IN",
        },
      ],
      image: require("./assets/images/app_images/shanghai/Easy Food Ordering.webp"),
      duration: "2023 - 2024",
      level: "Advanced",
      tags: ["MOBILE", "FLUTTER", "E-COMMERCE"],
      codebaseConfidential: true,

      role: "Flutter Developer",
      projectDuration: "6 months",
      stack: "Flutter, Dart, Riverpod, GoRouter, Dio, Google Maps API, Payment Gateway",
      linesOfCode: "20,000+",
      team: "4-6 members",

      roleImpact: [
        "Developed a complete food ordering platform with real-time order tracking.",
        "Integrated payment gateways for secure transactions.",
        "Implemented Google Maps API for location services and delivery tracking.",
        "Built recommendation engine for personalized food suggestions.",
        "Achieved 3,000+ downloads with high user satisfaction ratings.",
      ],

      keyFeatures: [
        {
          title: "Easy Food Ordering",
          description: "Simple and intuitive interface for quick food ordering.",
        },
        {
          title: "Explore Top Eateries",
          description: "Discover and browse restaurants with detailed menus and ratings.",
        },
        {
          title: "Real-Time Tracking",
          description: "Live order tracking with GPS-enabled delivery updates.",
        },
        {
          title: "Exclusive Deals & Offers",
          description: "Access to special discounts and promotional offers.",
        },
        {
          title: "Personalized Recommendations",
          description: "AI-powered food recommendations based on preferences and history.",
        },
      ],

      techHighlights: [
        {
          tech: "Flutter",
          description: "for native-like mobile experience.",
        },
        {
          tech: "Riverpod",
          description: "for robust state management.",
        },
        {
          tech: "Google Maps API",
          description: "for location and tracking features.",
        },
        {
          tech: "Payment Gateway",
          description: "for secure payment processing.",
        },
        {
          tech: "Clean Architecture",
          description: "for maintainable codebase.",
        },
      ],

      challengesSolutions: [
        {
          challenge: "Real-time order tracking",
          solution: "Implemented WebSocket connections with Google Maps API integration.",
        },
        {
          challenge: "Payment security",
          solution: "Integrated industry-standard payment gateways with encryption.",
        },
        {
          challenge: "Performance with large menus",
          solution: "Implemented lazy loading and image caching strategies.",
        },
      ],

      results: [
        "3,000+ downloads with growing user base",
        "4.0+ star rating on Google Play Store",
        "Successfully processed thousands of orders",
        "High customer retention rate",
      ],

      technologies: ["Flutter", "Dart", "Riverpod", "GoRouter", "Dio", "Google Maps", "Payment Gateway"],

      screenshots: [
        require("./assets/images/app_images/shanghai/Easy Food Ordering.webp"),
        require("./assets/images/app_images/shanghai/Exclusive Deals & Offers.webp"),
        require("./assets/images/app_images/shanghai/Explore Top Eateries.webp"),
        require("./assets/images/app_images/shanghai/Personalized.webp"),
        require("./assets/images/app_images/shanghai/Real-Time Tracking.webp"),
      ],
    },
    {
      id: "emsigner-app",
      projectName: "emSigner - Digital Signature Solution",
      projectDesc:
        "Enterprise-grade digital signature application enabling secure document signing, collaboration, and workflow management. Built with Flutter using clean architecture and enterprise security standards. Trusted by professionals for secure document handling.",
      footerLink: [
        {
          name: "Google Play Store",
          url: "https://play.google.com/store/apps/details?id=com.emudhra.emSigner",
        },
      ],
      image: require("./assets/images/app_images/emsigner/Simplify Your.webp"),
      duration: "2023 - 2024",
      level: "Advanced",
      tags: ["MOBILE", "FLUTTER", "ENTERPRISE"],
      codebaseConfidential: true,

      role: "Flutter Developer",
      projectDuration: "7 months",
      stack: "Flutter, Dart, Riverpod, GoRouter, Dio, Encryption APIs, Digital Signature SDK",
      linesOfCode: "22,000+",
      team: "5-8 members",

      roleImpact: [
        "Developed enterprise-level digital signature application with high security standards.",
        "Implemented encryption and digital signature workflows following industry standards.",
        "Built collaborative features for document sharing and multi-party signing.",
        "Integrated with enterprise systems for seamless document management.",
        "Achieved 2,000+ downloads in enterprise segment with excellent reviews.",
      ],

      keyFeatures: [
        {
          title: "Simplify Your Workflow",
          description: "Streamlined document signing process with intuitive interface.",
        },
        {
          title: "Choose Signature Type",
          description: "Multiple signature options including digital and electronic signatures.",
        },
        {
          title: "Collaborate with Teams",
          description: "Multi-party signing with role-based access control.",
        },
        {
          title: "Stay in Control",
          description: "Complete audit trail and document tracking capabilities.",
        },
        {
          title: "Envelope Management",
          description: "Organize and manage signed documents with envelope system.",
        },
      ],

      techHighlights: [
        {
          tech: "Flutter",
          description: "for secure mobile application.",
        },
        {
          tech: "Encryption",
          description: "for document security and data protection.",
        },
        {
          tech: "Digital Signature SDK",
          description: "for legally binding signatures.",
        },
        {
          tech: "Clean Architecture",
          description: "for enterprise-grade code quality.",
        },
        {
          tech: "Riverpod",
          description: "for complex state management.",
        },
      ],

      challengesSolutions: [
        {
          challenge: "Enterprise-level security requirements",
          solution: "Implemented end-to-end encryption with industry-standard protocols.",
        },
        {
          challenge: "Offline signing capability",
          solution: "Built local signature storage with encrypted database.",
        },
        {
          challenge: "Complex workflow management",
          solution: "Designed flexible workflow engine with role-based permissions.",
        },
      ],

      results: [
        "2,000+ downloads in enterprise market",
        "4.3+ star rating with professional user base",
        "Trusted by businesses for secure document signing",
        "Zero security incidents reported",
      ],

      technologies: ["Flutter", "Dart", "Riverpod", "GoRouter", "Dio", "Encryption", "Digital Signature"],

      screenshots: [
        require("./assets/images/app_images/emsigner/Choose signature type.webp"),
        require("./assets/images/app_images/emsigner/Collaborate with.webp"),
        require("./assets/images/app_images/emsigner/Envelope signed &.webp"),
        require("./assets/images/app_images/emsigner/Simplify Your.webp"),
        require("./assets/images/app_images/emsigner/Stay in Control.webp"),
        require("./assets/images/app_images/emsigner/• Proposa.webp"),
      ],

      additionalNote:
        "Note: In addition to these public applications, I have developed numerous confidential enterprise applications for various clients that cannot be disclosed due to NDA agreements. These projects involved complex business logic, enterprise-grade security, and custom integrations.",
    },
  ],
};

const publicationsHeader = {
  title: "Publications",
  description: "My articles, blogs, and technical writing.", // Update based on your content
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // Add your publications, blogs, or articles here
    // {
    //   id: "your-blog-post-id",
    //   name: "Your Blog Post Title",
    //   createdAt: "2024-01-01T00:00:00Z",
    //   description: "Brief description of your publication",
    //   url: "https://yourblog.com/article",
    // },
  ],
};

// Articles Page
const articlesData = {
  title: "Articles",
  articles: [
    {
      id: "building-scalable-microservices",
      date: "January 15, 2025",
      readTime: "8 min read",
      tags: ["ARCHITECTURE", "MICROSERVICES"],
      title: "Building Scalable Microservices Architecture",
      description:
        "Learn how to design and implement microservices that can handle millions of requests while maintaining reliability and performance.",
      content: [
        {
          type: "paragraph",
          text:
            "Microservices architecture has become the standard for building scalable applications. But implementing it correctly requires careful planning and design decisions.",
        },
        {
          type: "heading",
          text: "Key Principles of Microservices",
        },
        {
          type: "list",
          items: [
            "Single Responsibility: Each service should do one thing well",
            "Independent Deployment: Services can be deployed without affecting others",
            "Decentralized Data Management: Each service owns its data",
            "Fault Isolation: Failures in one service don't cascade",
          ],
        },
        {
          type: "heading",
          text: "Common Challenges and Solutions",
        },
        {
          type: "paragraph",
          text:
            "One of the biggest challenges is managing inter-service communication. Using message queues and event-driven architecture can help maintain loose coupling between services.",
        },
        {
          type: "paragraph",
          text:
            "Another critical aspect is observability. Implement distributed tracing and centralized logging from day one to troubleshoot issues across services.",
        },
      ],
    },
    {
      id: "optimizing-react-performance",
      date: "December 20, 2024",
      readTime: "6 min read",
      tags: ["REACT", "PERFORMANCE", "FRONTEND"],
      title: "Optimizing React Performance for Production",
      description:
        "Practical techniques to improve React application performance, reduce bundle size, and enhance user experience.",
      content: [
        {
          type: "paragraph",
          text:
            "Performance optimization is crucial for user experience. Even small improvements can significantly impact user engagement and conversion rates.",
        },
        {
          type: "heading",
          text: "Code Splitting and Lazy Loading",
        },
        {
          type: "paragraph",
          text:
            "Use React.lazy() and Suspense to split your code and load components only when needed. This reduces initial bundle size dramatically.",
        },
        {
          type: "list",
          items: [
            "Split routes using React Router and lazy loading",
            "Load heavy components only when visible",
            "Use dynamic imports for large dependencies",
            "Implement skeleton screens for better perceived performance",
          ],
        },
        {
          type: "heading",
          text: "Memoization Strategies",
        },
        {
          type: "paragraph",
          text:
            "Use React.memo, useMemo, and useCallback wisely. Don't over-optimize - profile first, then optimize based on actual bottlenecks.",
        },
        {
          type: "heading",
          text: "Bundle Size Optimization",
        },
        {
          type: "paragraph",
          text:
            "Analyze your bundle with tools like webpack-bundle-analyzer. Remove unused dependencies, use tree-shaking, and consider lighter alternatives for heavy libraries.",
        },
      ],
    },
    {
      id: "modern-api-design",
      date: "November 10, 2024",
      readTime: "7 min read",
      tags: ["API", "BACKEND", "DESIGN"],
      title: "Modern API Design: REST vs GraphQL vs gRPC",
      description:
        "Choosing the right API architecture for your application. A practical comparison of REST, GraphQL, and gRPC with real-world use cases.",
      content: [
        {
          type: "paragraph",
          text:
            "API design is one of the most important decisions you'll make when building modern applications. The choice between REST, GraphQL, and gRPC impacts performance, developer experience, and maintainability.",
        },
        {
          type: "heading",
          text: "REST: The Reliable Standard",
        },
        {
          type: "paragraph",
          text:
            "REST APIs are simple, widely understood, and work everywhere. They're perfect for public APIs and when you need broad compatibility.",
        },
        {
          type: "list",
          items: [
            "Easy to cache with standard HTTP caching",
            "Simple to debug with tools like Postman",
            "Universal support across all platforms",
            "Best for CRUD operations and resource-based APIs",
          ],
        },
        {
          type: "heading",
          text: "GraphQL: Flexible Data Fetching",
        },
        {
          type: "paragraph",
          text:
            "GraphQL shines when you need flexible queries and want to avoid over-fetching. It's ideal for complex, data-heavy applications with multiple clients.",
        },
        {
          type: "heading",
          text: "gRPC: High Performance Communication",
        },
        {
          type: "paragraph",
          text:
            "For microservices and internal APIs where performance is critical, gRPC offers binary serialization, bi-directional streaming, and strong typing with Protocol Buffers.",
        },
      ],
    },
  ],
};

const contactPageData = articlesData;

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  bigProjects,
  mobileApps,
  publicationsHeader,
  publications,
  contactPageData,
  articlesData,
};
