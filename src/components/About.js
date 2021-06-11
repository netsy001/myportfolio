import React from "react";
import Resume from '../../src/Resume.PDF';

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "assets/" + data.image;
    var aboutme = data.aboutme;
    var address = data.address;
    var email = data.email;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Suri"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{aboutme}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
              <span>{name}</span>
                <br />
                <span>{address}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={Resume} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;