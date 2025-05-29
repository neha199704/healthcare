import React from "react";
import "../styles/ActivityFeed.css";

const data = [
  { day: "Mon", bars: [40, 60, 90] },
  { day: "Tues", bars: [70, 50, 90] },
  { day: "Wed", bars: [30, 20, 90] },
  { day: "Thurs", bars: [20, 50, 70] },
  { day: "Fri", bars: [90, 90, 70] },
  { day: "Sat", bars: [70, 50, 90] },
  { day: "Sun", bars: [80, 60, 90] },
];

function ActivityFeed() {
  return (
    <div className="activity-card">
      <div className="activity-header">
        <h2>Activity</h2>
        <span>3 appointments on this week</span>
      </div>

      <div className="activity-chart">
        {data.map((item, index) => (
          <div className="day-column" key={index}>
            <div className="bars">
              <div
                className="bar bar-1"
                style={{ height: `${item.bars[0]}px` }}
              ></div>
              <div
                className="bar bar-2"
                style={{ height: `${item.bars[1]}px` }}
              ></div>
              <div
                className="bar bar-3"
                style={{ height: `${item.bars[2]}px` }}
              ></div>
            </div>
            <div className="day-label">{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
