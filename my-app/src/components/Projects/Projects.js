import React from "react";
import Img from "../../assets/linkprojects.png";
import image from "../../assets/linkprojects.png";
import img2 from "../../assets/linkprojects.png";
import img from "../../assets/linkprojects.png";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="div">
        <div className="SHPE-FAU">
          <div className="project">
            <div className="overlap-group">
              <div className="project-2">
                <div className="projectname">
                  <div className="text-wrapper">SHPE-FAU</div>
                </div>

                <div className="projectdescription">
                  <p className="p">
                    The SHPE at FAU website highlights our mission, events, and
                    opportunities for Hispanic students in STEM, fostering
                    community and professional growth.
                  </p>
                </div>

                <div className="techstack">
                  <p className="text-wrapper-2">React | JS | CSS | Supabase</p>
                </div>

                <img className="img-2" alt="Owl.TA" src={Img} />
              </div>
            </div>
          </div>
        </div>

        <div className="taskbuddy-mobile">
          <div className="project">
            <div className="overlap-group">
              <div className="project-3">
                <div className="projectname">
                  <div className="text-wrapper-3">TaskBuddy Mobile</div>
                </div>

                <div className="div-wrapper">
                  <p className="text-wrapper-4">
                    A Collaborative application, aimed to enhance task
                    management through the integration of a virtual pet feature.
                  </p>
                </div>

                <div className="techstack-2">
                  <p className="text-wrapper-2">Swift | XCode | Figma</p>
                </div>

                <img className="img-2" alt="Owl.TA" src={Img} />
              </div>
            </div>
          </div>
        </div>

        <div className="taskbuddy">
          <div className="project">
            <div className="overlap-group">
              <div className="project-3">
                <div className="projectname-2">
                  <div className="text-wrapper-5">TaskBuddy</div>
                </div>

                <div className="div-wrapper">
                  <p className="text-wrapper-4">
                    A Collaborative web application, aimed to enhance task
                    management through the integration of a virtual pet feature.
                  </p>
                </div>

                <div className="techstack-2">
                  <p className="text-wrapper-2">HTML | CSS | JS | Boostrap</p>
                </div>

                <img className="img-2" alt="Owl.TA" src={Img} />
              </div>
            </div>
          </div>
        </div>

        <div className="owl-ta">
          <div className="project">
            <div className="overlap-group">
              <div className="project-3">
                <div className="projectname-3">
                  <div className="text-wrapper-6">Owl.TA</div>
                </div>

                <div className="div-wrapper">
                  <p className="text-wrapper-4">
                    OwlTA is an innovative educational platform that combines
                    human expertise with AI to enhance teaching and learning.
                  </p>
                </div>

                <div className="techstack-3">
                  <p className="text-wrapper-7">JS | AI | SQL | Discord</p>
                </div>
                <img className="img-2" alt="Owl.TA" src={Img} />
              </div>
            </div>
          </div>
        </div>

        <div className="projects-title">
          <div className="text-wrapper-8">Projects</div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
