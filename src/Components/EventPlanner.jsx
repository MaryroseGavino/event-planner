import React from "react";
import "./EventPlanner.css"; // Import CSS file for styling

const EventPlanner = () => {
  return (
    <div className="event-planner-container">
      <header>
        <h1>Welcome to Event Planner</h1>
      </header>
      <section className="description">
        <p>
          ✨ Whether it’s an intimate dinner or a grand celebration, our Event
          Planner ensures your special day is smooth and effortless. Cherish the
          moments—while we take care of every detail.
        </p>
        <button className="get-started-button">Get Started</button>
      </section>
    </div>
  );
};

export default EventPlanner;
