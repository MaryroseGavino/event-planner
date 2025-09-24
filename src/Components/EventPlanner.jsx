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
      <section className="events_categories">
        <ul>
          <h2>Wedding Services:</h2>
          <li>Dreamy Proposals</li>
          <li>Engagement Photoshoots</li>
          <li>Full Wedding Day Management</li>
          <li>Romantic Honeymoon Planning</li>
        </ul>

        <ul>
          <h2>Corporate Services:</h2>
          <li>Company Gatherings & Conferences</li>
          <li>Professional Networking Events</li>
          <li>Recognition & Award Nights</li>
          <li>Workshops and Panel Discussions</li>
        </ul>
      </section>
      <section className="features">
        <h2>Features: </h2>
        <ul>
          <li>Custom Event Planning Dashboard</li>
          <li>Instant RSVP Tracking & Updates</li>
          <li>Handpicked Vendor Suggestions</li>
          <li>Smart & Interactive Seating Plans</li>
          <li>All-in-One Budget Management Tool</li>
          <li>Professional Event Coordinator Support</li>
        </ul>
      </section>
      <section className="testimonials">
        <h2>Testimonials: </h2>
        <div className="testimonial">
          <p>
            "Our wedding felt like a dream come true! The team handled every
            detail flawlessly, making the whole day stress-free."
          </p>
          <p>
            <strong>- Mr & Mrs Dela Fuente</strong>
          </p>
        </div>

        <div className="testimonial">
          <p>
            "Highly professional and meticulous. Our corporate gala was a huge
            success and left a lasting impression on our partners."
          </p>
          <p>
            <strong>- Roger Roxas</strong>
          </p>
        </div>
      </section>
      <section className="contact">
        
      </section>
    </div>
  );
};

export default EventPlanner;
