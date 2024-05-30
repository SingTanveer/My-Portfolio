import React from "react";
import "./About.css";
import mypic from "../../assets/images/myPic.jpeg";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={mypic} alt="profile_pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              I am a self-motivated, dedicated, and honest individual with a
              strong commitment to personal and professional growth. My
              immediate goal is to secure a position at a reputable company
              where I can contribute my skills and knowledge effectively. In the
              long term, I aspire to attain a leadership role that not only
              advances my career but also enables me to drive the organization’s
              success and make a meaningful impact. I am eager to take on new
              challenges, continuously learn, and collaborate with a dynamic
              team to achieve collective goals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
