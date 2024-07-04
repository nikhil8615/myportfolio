import React from "react";
import "./About.css";
import profileImage from "../../assets/Nikhil.jpg";
import pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={pattern} alt="Pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profileImage} alt="Nikhil Singh" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I'm Nikhil Singh. I'm a web developer and software
              developer. I love creating websites and web applications using
              HTML, CSS, JavaScript, React.js, Next.js, and Node.js. These tools
              help me make websites that look good and are easy to use. Besides
              web development, I also work with C++ and Data Structures and
              Algorithms (DSA).
            </p>
            <p>
              I always try to learn new things and keep up with the latest
              trends in technology. Whether I'm working on the front end or the
              back end, my goal is to build high-quality, reliable solutions
              that meet the needs of users and clients.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React.Js</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>Next.Js</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>C++(DSA)</p>
              <hr style={{ width: "84%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="personal-info">
        <h2>Personal Information</h2>
        <div className="personal-info-content">
          <div className="personal-info-item">
            <strong>Birthday:</strong> <span>12 October 2005</span>
          </div>
          <div className="personal-info-item">
            <strong>Age:</strong> <span>19</span>
          </div>
          <div className="personal-info-item">
            <strong>Phone:</strong> <span>+917352972097</span>
          </div>
          <div className="personal-info-item">
            <strong>City:</strong> <span>Hajipur, Bihar</span>
          </div>
          <div className="personal-info-item">
            <strong>Status:</strong>{" "}
            <span>Available for Internship and Freelance Work</span>
          </div>
          <div className="personal-info-item">
            <strong>Email:</strong> <span>nikhilbdps1256@gmail.com</span>
          </div>
          <div className="personal-info-item">
            <strong>Degree:</strong>{" "}
            <span>Pursuing B.Tech From NIT Jalandhar</span>
          </div>
        </div>
      </div>
      <div className="education-experience">
        <div className="education">
          <h2>Education</h2>
          <EducationItem
            title="Pursuing B.Tech in Chemical Engg"
            period="2022-2026"
            institution="Dr B R Ambedkar National Institute Of Technology"
          />
          <EducationItem
            title="Class 12TH Related Information"
            period="2021-2022"
            institution="VV Niketan, Patna, Bihar"
            details="Stream-PCM : Physics, Chemistry, Mathematics"
            score="With 92%"
          />
          <EducationItem
            title="Class 10TH Related Information"
            period="2019-2020"
            institution="B D Public School, Hajipur, Bihar"
            score="With 90%"
          />
        </div>

        <div className="experience">
          <h2>Experience</h2>
          <ExperienceItem
            title="React.Js"
            period="2022-PRESENT"
            description="Portfolio Website"
          />
          <ExperienceItem
            title="PROJECTS"
            period="2021-2022"
            description="Click On The GitHub Icon in the NavBar to View My Projects Or Click Here https://linktr.ee/nikhil_8615"
          />
          <ExperienceItem
            title="WIREFRAMING"
            period="2022-PRESENT"
            description="My projects wireframe and some freelancing wireframe"
          />
        </div>
      </div>
    </div>
  );
};

const EducationItem = ({ title, period, institution, details, score }) => (
  <div className="education-item">
    <h3>{title}</h3>
    <p className="period">{period}</p>
    <p>{institution}</p>
    {details && <p>{details}</p>}
    {score && <p>{score}</p>}
  </div>
);

const ExperienceItem = ({ title, period, description }) => (
  <div className="experience-item">
    <h3>{title}</h3>
    <p className="period">{period}</p>
    <p>{description}</p>
  </div>
);

export default About;
