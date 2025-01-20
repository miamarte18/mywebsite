const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://rjshkhr.github.io/cleanfolio",
  title: "MM.",
};

const Home = {
  // all the properties are optional - can be left empty or deleted
  name: "Mia Marte",
  role: "Software Engineer",
  description:
    "Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.",
  resume: "https://example.com",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
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
    sourceCode: "https://github.com/example/owlta",
    livePreview: "https://owlta.com",
  },
  {
    name: "SHPE-FAU",
    description:
      "The SHPE at FAU website highlights our mission, events, and opportunities for Hispanic students in STEM, fostering community and professional growth.",
    stack: ["React", "JS", "CSS", "Supabase"],
    sourceCode: "https://github.com/example/shpe-fau",
    livePreview: "https://shpe-fau.com",
  },
  {
    name: "TaskBuddy Mobile",
    description:
      "A Collaborative application, aimed to enhance task management through the integration of a virtual pet feature.",
    stack: ["Swift", "XCode", "Figma"],
    sourceCode: "https://github.com/example/taskbuddy-mobile",
    livePreview: "https://taskbuddy.com",
  },
];
const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "SASS",
  "Material UI",
  "Git",
  "CI/CD",
  "Jest",
  "Enzyme",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "johnsmith@mail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

export { header, Home, projects, skills, contact };
