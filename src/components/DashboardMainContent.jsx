import "../styles/DashboardMainContent.css";
import ActivityFeed from "./ActivityFeed";
import AnatomySection from "./AnatomySection";

function DashboardMainContent() {
  return (
    <div>
      <div className="center-content-dashboard">
        <h2>Dashboard</h2>
        <p>This Week</p>
      </div>
      {/* <div className="">
        <div className="img-container">
          <img
            className="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoXmVhT-kk8B2eNBO4Dx5q6VJLDGXrffUvKg&s"
            alt=""
          />
        </div>
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div> */}
      {/* </div> */}
      <AnatomySection />
      <ActivityFeed />
    </div>
  );
}

export default DashboardMainContent;
