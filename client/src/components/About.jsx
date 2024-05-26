import React from 'react';
import newton from '../assets/icon/NEWTon.jpg';
const AboutPage = () => {
  return (
    <div className="about_page" id="about">
      <div className="container1">
        <h1 className="title">About Me</h1>
      </div>

      <div className="myself">
        <div className="description">
          <p>My name is Newton, and I'm currently pursuing Computer Science and Engineering at Chittagong University of Engineering and Technology. I have a fervent interest in competitive programming, continually pushing my boundaries by tackling problems from diverse online judges.</p>
          <p>One aspect I particularly enjoy is brainstorming problems. I love exploring different ideas and collaborating with others to find the best solutions. This skill is invaluable in both mathematics and computer science, fostering creativity and teamwork. Mathematics has been a source of fascination for me, and I delight in delving into its complexities. Lately, my enthusiasm for programming has soared as I recognize its profound capability for problem-solving and fostering creativity.</p>
          <p>I see programming as a powerful tool for problem-solving and creativity. Whether it's optimizing algorithms or developing innovative projects, programming allows me to translate abstract ideas into tangible solutions. At Spring Rain Pvt Ltd., where I'm currently engaged in career development, I have the opportunity to apply my skills to real-world projects and contribute to innovative solutions.</p>
        </div>

        <div className="profile">
          <img className="picture" src={newton} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
