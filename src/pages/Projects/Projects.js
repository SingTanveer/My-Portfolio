import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Explore my top 3 projects, complete with live demos and source
          code!
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">MERN Stack</span>
                <img
                  src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Ai GPT 3.O</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/SingTanveer/Ai-GPT-3.o"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Mobile App</span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR356D-1YtSagN4-_ZdjZ5H9o6PKUO4h12dvw&usqp=CAU"
                  alt="project2"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Java / Android Studio</span>

                <span className="card-detail-badge">ANDROID</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Android_OCR App</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/SingTanveer/Android_OCR-main"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img
                  src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML/CSS</span>
                <span className="card-detail-badge">JavaScript</span>

                <span className="card-detail-badge">Bootstrap</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">DCRR Web App</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/SingTanveer/DRRC_Website"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
