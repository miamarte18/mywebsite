import React from "react";
import moon from "../../assets/moon.png";
import "./Home.css";

export const Frontpage = () => {
  return (
    <div className="frontpage">
      <div className="div">
        <div className="socials">
          <div className="resumebox">
            <div className="group">
              <div className="overlap-group">
                <div className="text-wrapper">Resume</div>
              </div>
            </div>
          </div>

          <div className="github" />

          <div className="linkedln" />
        </div>

        <div className="info-box">
          <div className="about">
            <p className="p">
              Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta
              facilis perspiciatis corporis nulla aspernatur. Autem eligendi
              rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque
              perspiciatis! Maiores minima consectetur.
            </p>
          </div>

          <div className="name-role">
            <div className="role">
              <div className="text-wrapper-2">A Software Engineer.</div>
            </div>

            <div className="name">
              <p className="hi-i-am-mia-marte">
                <span className="span">Hi, I am</span>

                <span className="text-wrapper-3">&nbsp;</span>

                <a
                  href="https://www.liinks.co/miamarte"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-4">Mia Marte.</span>
                </a>

                <span className="text-wrapper-3">&nbsp;</span>
              </p>
            </div>
          </div>
        </div>

        <div className="header-navbar">
          <div className="logo">
            <a
              className="text-wrapper-5"
              href="https://github.com/Miamarte18"
              rel="noopener noreferrer"
              target="_blank"
            >
              MM.
            </a>
          </div>

          <a href="#projects" className="text-wrapper-6">
            projects
          </a>
          <a href="#skills" className="text-wrapper-7">
            skills
          </a>
          <a href="#contact" className="text-wrapper-8">
            contact
          </a>

          <img className="moon" alt="Moon" src={moon} />
        </div>
      </div>
    </div>
  );
};
export default Frontpage;
