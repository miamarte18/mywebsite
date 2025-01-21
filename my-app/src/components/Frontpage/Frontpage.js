import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Home } from "../../portfolio";
import AnimText from "../Animations/AnimText.tsx";

import "./Home.css";

const Frontpage = () => {
  const { name, role, description, resume, social } = Home;

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi,{" "}
          <AnimText
            delay={0.5}
            className="about__name"
            baseText={`I am ${name}`}
          />
          .
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      <p className="about__desc">{description && description}</p>

      <div className="about__contact center">
        {resume && (
          <a href={resume}>
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Frontpage;
