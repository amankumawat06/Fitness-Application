import "./gymHours.css";
import { useEffect, useState } from "react";

const GymHours = () => {
  const gymSchedule = {
    monday: {
      morning: { open: 5.5, close: 10 },
      evening: { open: 16.5, close: 21 },
    },
    tuesday: {
      morning: { open: 5.5, close: 10 },
      evening: { open: 16.5, close: 21 },
    },
    wednesday: {
      morning: { open: 5.5, close: 10 },
      evening: { open: 16.5, close: 21 },
    },
    thursday: {
      morning: { open: 5.5, close: 10 },
      evening: { open: 16.5, close: 21 },
    },
    friday: {
      morning: { open: 5.5, close: 10 },
      evening: { open: 16.5, close: 21 },
    },
    saturday: {
      morning: { open: 6, close: 9 },
      evening: { open: 17, close: 20 },
    },
    sunday: null,
  };

  const getGymStatus = () => {
    const now = new Date();

    const day = now.toLocaleString("en-US", { weekday: "long" }).toLowerCase();

    const hours = now.getHours();
    const minutes = now.getMinutes();

    const currentTime = hours + minutes / 60;

    const todaySchedule = gymSchedule[day];

    if (!todaySchedule) {
      return "CLOSED";
    }

    const { morning, evening } = todaySchedule;

    const isMorningOpen =
      currentTime >= morning.open && currentTime <= morning.close;

    const isEveningOpen =
      currentTime >= evening.open && currentTime <= evening.close;

    return isMorningOpen || isEveningOpen ? "OPEN" : "CLOSED";
  };

  const [status, setStatus] = useState(getGymStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getGymStatus());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="schedule-section">
      <div className="schedule-container">
        <h2>
          Gym <span>Timing Schedule</span>
        </h2>
        <p className="schedule-subtitle">
          Plan your workouts with our weekly operating hours
        </p>

        <div className={`gym-status ${status.toLowerCase()} mb-4`}>
          Gym Status: <span>{status}</span>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Morning Session</th>
                <th>Evening Session</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Monday</td>
                <td>5:30 AM - 10:00 AM</td>
                <td>4:30 PM - 9:00 PM</td>
              </tr>

              <tr>
                <td>Tuesday</td>
                <td>5:30 AM - 10:00 AM</td>
                <td>4:30 PM - 9:00 PM</td>
              </tr>

              <tr>
                <td>Wednesday</td>
                <td>5:30 AM - 10:00 AM</td>
                <td>4:30 PM - 9:00 PM</td>
              </tr>

              <tr>
                <td>Thursday</td>
                <td>5:30 AM - 10:00 AM</td>
                <td>4:30 PM - 9:00 PM</td>
              </tr>

              <tr>
                <td>Friday</td>
                <td>5:30 AM - 10:00 AM</td>
                <td>4:30 PM - 9:00 PM</td>
              </tr>

              <tr>
                <td>Saturday</td>
                <td>6:00 AM - 9:00 AM</td>
                <td>5:00 PM - 8:00 PM</td>
              </tr>

              <tr>
                <td>Sunday</td>
                <td colSpan="2" className="closed">
                  Closed
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default GymHours;
