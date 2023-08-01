import React from "react";
import { Link } from "react-router-dom";
import BitWizards from "/src/assets/bitwizards.png";
import "./AboutPage.css";
function AboutPage() {
  return (
    <div className="mainDiv">
      <div className="headerDiv">
        <h1 className="title">
          <Link className="toLink" to="/">
            <img
              src={BitWizards}
              width="200em"
              height="200em"
              loading="lazy"
            ></img>
          </Link>
        </h1>
      </div>
      <div className="allTeam">
        <div className="teamDiv">
          <h2 className="team">Team</h2>
        </div>
        <div className="membersDiv">
          <h3 className="members">Isaac</h3>
          <h3 className="members">Nathanael</h3>
          <h3 className="members">Brandon</h3>
          <h3 className="members">Pedro</h3>
          <h3 className="members">Carl</h3>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
