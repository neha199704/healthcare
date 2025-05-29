import "../styles/SimpleAppointmentCard.css";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import UpcomingSchedule from "./UpcomingSchedule";
import CalendarView from "./CalendarView";
function SimpleAppointmentCard() {
  return (
    <div className="SimpleAppointment">
      <div className="SimpleAppointmentCard">
        <p>October 2021</p>{" "}
        <div>
          <RiArrowLeftFill />
          <RiArrowRightFill />
        </div>
      </div>
      <CalendarView />
      <UpcomingSchedule />
    </div>
  );
}

export default SimpleAppointmentCard;
