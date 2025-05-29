import schedule from "../data/upcomingAppointments";
import "../styles/UpcomingSchedule.css";
const UpcomingSchedule = () => (
  <div className="upcoming-schedule-wrapper">
    <h2 className="schedule-title">The Upcoming Schedule</h2>

    <div className="appointments">
      {schedule.map((item, idx) => (
        <div key={idx}>
          <div className="day-label">{item.day}</div>
          <div className="cards">
            {item.appointments.map((appt, i) => (
              <div key={i} className="card">
                <div className="card-title">
                  {appt.title} <span>{appt.emoji}</span>
                </div>
                <div className="card-time">{appt.time}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default UpcomingSchedule;
