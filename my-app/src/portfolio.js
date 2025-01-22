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
    "I'm a computer science graduate who loves making digital tools that are easy to use. I focus on web development and app design, always looking for ways to make technology work better for people. Whether it's coding, fixing bugs, or trying new tools, I’m always curious and ready to learn. When I’m not coding, I enjoy cooking, journaling, and vlogging, which help keep me inspired. I try to bring creativity and simplicity into everything I do.",
  resume:
    "https://liinks-files.s3.amazonaws.com/files/nXuEMNu2fQA.pdf?AWSAccessKeyId=AKIAJJZ7THP6JOB5VZ6A&Expires=1737514994&Signature=UmXLvtzdkJAIfUo1vltTiNoQNsw%3D",
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
