import React from "react";
import uniqid from "uniqid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import "./ProjectContainer.css";

// Project Data
// export const projectData = [
//   {
//     name: "SHPE-FAU",
//     description:
//       "The SHPE at FAU website highlights our mission, events, and opportunities for Hispanic students in STEM, fostering community and professional growth.",
//     stack: ["React", "JS", "CSS", "Supabase"],
//     sourceCode: "https://github.com/example/shpe-fau",
//     livePreview: "https://shpe-fau.com",
//   },
//   {
//     name: "TaskBuddy Mobile",
//     description:
//       "A Collaborative application, aimed to enhance task management through the integration of a virtual pet feature.",
//     stack: ["Swift", "XCode", "Figma"],
//     sourceCode: "https://github.com/example/taskbuddy-mobile",
//     livePreview: "https://taskbuddy.com",
//   },
//   {
//     name: "TaskBuddy",
//     description:
//       "A Collaborative web application, aimed to enhance task management through the integration of a virtual pet feature.",
//     stack: ["HTML", "CSS", "JS", "Bootstrap"],
//     sourceCode: "https://github.com/example/taskbuddy",
//     livePreview: "https://taskbuddy.com",
//   },
//   {
//     name: "Owl.TA",
//     description:
//       "OwlTA is an innovative educational platform that combines human expertise with AI to enhance teaching and learning.",
//     stack: ["JS", "AI", "SQL", "Discord"],
//     sourceCode: "https://github.com/example/owlta",
//     livePreview: "https://owlta.com",
//   },
// ];

// ProjectContainer Component
const ProjectContainer = ({ project }) => (
  <div className="project">
    <h3>{project.name}</h3>
    <p className="project__description">{project.description}</p>
    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}
    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label="source code"
        className="link link--icon"
      >
        <GitHubIcon />
      </a>
    )}
    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label="live preview"
        className="link link--icon"
      >
        <LaunchIcon />
      </a>
    )}
  </div>
);

export default ProjectContainer;
