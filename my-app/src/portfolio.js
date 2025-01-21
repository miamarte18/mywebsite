const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "/",
  title: "MM.",
};

const Home = {
  // all the properties are optional - can be left empty or deleted
  name: "Mia Marte",
  role: "Software Engineer",
  description:
    "Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.",
  resume:
    "https://liinks-files.s3.amazonaws.com/files/nXuEMNu2fQA.pdf?AWSAccessKeyId=AKIAJJZ7THP6JOB5VZ6A&Expires=1737424206&Signature=ZC1szYE0EvT8E1%2BbeFYA6FniyTo%3D",
  social: {
    linkedin: "https://www.linkedin.com/in/miamarte/",
    github: "https://github.com/Miamarte18",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Owl.TA",
    description:
      "OwlTA is an innovative educational platform that combines human expertise with AI to enhance teaching and learning.",
    stack: ["JS", "AI", "SQL", "Discord"],
    sourceCode:
      "https://github.com/jhenry02/EGN-4952C-Generative-AI-Multi-agent-interaction",
  },
  {
    name: "SHPE-FAU",
    description:
      "The SHPE at FAU website highlights our mission, events, and opportunities for Hispanic students in STEM, fostering community and professional growth.",
    stack: ["React", "JS", "CSS", "Supabase"],
    livePreview: "https://shpefau.com/",
  },
  {
    name: "TaskBuddy Mobile",
    description:
      "A Collaborative application, aimed to enhance task management through the integration of a virtual pet feature.",
    stack: ["Swift", "XCode", "Figma"],
    livePreview:
      "https://www.loom.com/share/7ad46b3938f7414eb0a31c17e3023c7b?sid=adf7356e-04f6-419e-a93b-2f4a65fbbfe4",
  },
];
const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "Swift",
  "Bootstrap",
  "Git",
  "SQL",
  "Figma",
  "Node.js",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "miavictoria182002@gmail.com",
  github: "https://github.com/Miamarte18",
  linkedin: "https://www.linkedin.com/in/miamarte/",
};

export { header, Home, projects, skills, contact };
