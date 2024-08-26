import React from "react";
import { Link } from "react-router-dom";

export default function HomePge() {
  return (
    <div>
      {" "}
      <main className="main">
        <img src="./Images/image.jpg" alt="imag" className="image"></img>
        <div className="main-text">
          <h2>Quiz Builer And Assessment Tool</h2>
          <p>
            Using Quiz,it's super fast and easy to create a quiz- perfect for
            revision guides,driving theory practice and trivia.
          </p>
          <Link to="/LandingPage" className="link">
            Start building
          </Link>
        </div>
      </main>
    </div>
  );
}
