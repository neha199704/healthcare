import React from "react";
import anatomyData, { healthData } from "../data/anatomyData";
import "../styles/AnatomySection.css";
import body from "../assets/body.png";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { CgSearchFound } from "react-icons/cg";

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <div className="anatomy-image">
        <img src={body} alt="Human Body Illustration" />
        <p className="heart">♥️ Healthy Heart</p>
        <p className="leg">🦵 Healthy Leg</p>
        <p className="search-arrow">
          <CgSearchFound />
        </p>
      </div>

      <div className="health-cards-container">
        {healthData.map((item) => (
          <div key={item.id} className="health-card">
            <div className="card-header">
              {item.name === "Lungs" && <div className="emoji red">🫁</div>}
              {item.name === "Teeth" && <div className="emoji gray">🦷</div>}
              {item.name === "Bone" && <div className="emoji orange">🦴</div>}
              <h3>{item.name}</h3>
            </div>
            <p className="card-date">Date: {item.date}</p>
            <div className="progress-bar">
              <div
                className={`progress-fill ${item.color}`}
                style={{ width: item.color === "red" ? "70%" : "85%" }}
              ></div>
            </div>
          </div>
        ))}
        <div className="details">
          <p>Details</p> <HiOutlineArrowSmRight />
        </div>
      </div>
    </div>
  );
}

export default AnatomySection;
