import React from "react";
import "../styles/CalendarView.css";
import calendarData from "../data/calendarAppointments";

const CalendarView = () => {
  const selectedDay = "Tues";
  const selectedTimes = {
    Tues: "09:00",
    Thurs: "11:00",
    Sat: "12:00",
    Sun: "09:00",
  };
  return (
    <div className="calendar-container">
      <div className="calendar">
        {calendarData.map((item) => (
          <div
            key={item.day}
            className={`calendar-day ${
              item.day === selectedDay ? "selected-day" : ""
            }`}
          >
            <p className="day-name">{item.day}</p>
            <p
              className={`day-date ${
                item.day === "Sun" ? "disabled-date" : ""
              }`}
            >
              {item.date}
            </p>

            {item.times.map((time, i) => {
              const isSelected =
                (Array.isArray(selectedTimes[item.day]) &&
                  selectedTimes[item.day].includes(time)) ||
                selectedTimes[item.day] === time;

              const isDisabledDate = item.date === "31" || item.date === "30";

              return (
                <p
                  key={i}
                  className={`time-slot ${isSelected ? "selected-time" : ""} ${
                    isDisabledDate ? "disabled-time" : ""
                  }`}
                >
                  {time}
                </p>
              );
            })}
          </div>
        ))}
      </div>

      <div className="calendar-appointments">
        <div className="appointment-1">
          <div className="appointment-card">
            <h5>Dentist</h5>
            <p>🦷</p>
          </div>
          <p>09:00-11:00</p>
          <p className="doctor-name">Dr. Cameron Williamson</p>
        </div>
        <div className="appointment-2">
          <div className="appointment-card">
            <h5>Physiotherapy Appointment</h5>
            <p>💪🏻</p>
          </div>
          <p>11:00-12:00</p>
          <p className="doctor-name">Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
