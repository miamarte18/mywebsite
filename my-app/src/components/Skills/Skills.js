import React from "react";
import btspicon from "../../assets/btspicon.png";
import frame from "../../assets/Frame.png";
import htmlicon from "../../assets/htmlicon.png";
import jsicon from "../../assets/jsicon.png";
import pythonicon from "../../assets/pythonicon.png";
import reacticon from "../../assets/reacticon.png";
import sqlicon from "../../assets/sqlicon.png";
import "./Skills.css";
import swifticon from "../../assets/swifticon.png";

export const Skills = () => {
  return (
    <div className="skills">
      <div className="div">
        <div className="overlap-group">
          <div className="skills-title">
            <div className="text-wrapper">Skills</div>
          </div>

          <div className="skills-description">
            <p className="p">
              I have broad experience working with various technologies as a
              developer, successfully building and maintaining multiple
              projects. I’m always eager to expand my knowledge and skills.
            </p>
          </div>
        </div>

        <div className="html">
          <img className="htmlicon" alt="Htmlicon" src={htmlicon} />

          <p className="htmltext">Static Webpages and portfolio projects</p>
        </div>

        <div className="react">
          <img className="img" alt="Reacticon" src={reacticon} />

          <p className="reactdescription">
            Static Webpages and portfolio projects
          </p>
        </div>

        <div className="python">
          <img className="pythonicon" alt="Pythonicon" src={pythonicon} />

          <p className="pythondescrption">
            Static Webpages and portfolio projects
          </p>
        </div>

        <div className="swift">
          <img className="swifticon" alt="Swifticon" src={swifticon} />

          <p className="swiftdescription">
            Static Webpages and portfolio projects
          </p>
        </div>

        <div className="sql">
          <img className="img" alt="Sqlicon" src={sqlicon} />

          <p className="descpritionsql">
            Static Webpages and portfolio projects
          </p>
        </div>

        <div className="css">
          <img className="img" alt="Frame" src={frame} />

          <div className="descriptioncss">Styling of my webpages</div>
        </div>

        <div className="js">
          <img className="jsicon" alt="Jsicon" src={jsicon} />

          <div className="descriptionjs">Styling of my webpages</div>
        </div>

        <div className="bootstrap">
          <p className="description">Static Webpages and portfolio projects</p>

          <img className="btspicon" alt="Btspicon" src={btspicon} />
        </div>
      </div>
    </div>
  );
};
export default Skills;
