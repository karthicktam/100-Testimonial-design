// Dribbble shot: https://dribbble.com/shots/2440153-Testimonials -->

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const testimonials = [
  {
    text:
      "I had my concerns that due to a tight deadline this project can't be done. But Karthick proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again Karthick!",
    name: "Arthur Birnbaum",
    color: "rgba(235, 59, 90,1.0)",
    image: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    text:
      "Second time hiring him. Finished everything in a timely manner and his work is excellent. Can't recommend him enough.",
    name: "Phoebe Kotliar",
    color: "rgba(250, 130, 49,1.0)",
    image: "https://randomuser.me/api/portraits/women/50.jpg"
  },
  {
    text:
      "Karthick Rajan never fails to impress me by the quality of his work and delivering on time. When it comes to front-end, he is definitely my go to guy. Always is a pleasure to work with Karthick even when deadlines are tight and pressure is great. It's reassuring to have a project in such good hands.",
    name: "Louisa P. Huard",
    color: "rgba(75, 123, 236,1.0)",
    image: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    text:
      "Karthick has been of great help on our different web projects. He is very trustworthy and serious in the work done. Keep on the good work and energy, been a pleasure to collaborate.",
    name: "Cristina Aurmoogum",
    color: "rgba(165, 94, 234,1.0)",
    image: "https://randomuser.me/api/portraits/women/76.jpg"
  },
  {
    text:
      "I hired Karthick Rajan based on others positive experiences, and I understand why he's so highly rated. His code is very clean, he communicates well, and he likes to offer alternative solutions.",
    name: "J. Kent Pepper",
    color: "rgba(32, 191, 107,1.0)",
    image: "https://randomuser.me/api/portraits/men/17.jpg"
  }
];

export default function App() {
  const [backgroundStyle, setBackground] = useState("rgba(235, 59, 90,1.0)");
  const [text, setText] = useState(
    "I had my concerns that due to a tight deadline this project can't be done. But Karthick proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again Karthick!"
  );
  const [name, setName] = useState("Arthur Birnbaum");

  const clickHandler = (testimonial) => {
    setBackground(testimonial.color);
    setText(testimonial.text);
    setName(testimonial.name);
  };

  return (
    <div
      className="testimonials-container"
      style={{
        background: `${backgroundStyle}`,
        boxShadow: `0 35px 10px -20px ${backgroundStyle.substring(
          0,
          backgroundStyle.length - 4
        )} 0.9`
      }}
    >
      <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
      <p className="text">{text}</p>
      <strong className="name">{name}</strong>
      <div className="authors-container">
        {testimonials.map((testimonial) => (
          <div
            className={
              backgroundStyle === testimonial.color
                ? "author selected"
                : "author"
            }
            key={testimonial.name}
            onClick={() => clickHandler(testimonial)}
          >
            <img src={testimonial.image} alt={testimonial.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
