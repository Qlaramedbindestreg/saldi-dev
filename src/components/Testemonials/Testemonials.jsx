import React, { useState, useEffect, useRef } from "react";
import "./Testemonials.scss";

const testimonials = [
  {
    id: 1,
    name: "Leif Olsen",
    company: "Havemøbelland",
    review: '"Siden 2015 har vi benyttet Saldi som leverandør af systemer til håndtering af en stor del af vores virksomheds drift. Det at have alt samlet på ét enkelt system har resulteret i at vores driftsprocesser har været nemmere at håndtere for vores ansatte i alle afdelinger, da kommunikationen mellem de forskellige led er 100% synkroniseret i systemet. I de 10 år vi har samarbejdet har vi ikke behøvet at kigge os tilbage, for Saldi leverer altid."',
  },
  {
    id: 2,
    name: "Trine Jensen",
    review: '"I Saldi har jeg regnskab, lagerstyring og kassesystem i ét program - og derud over eminent support. En klar anbefaling herfra. Sælgere der forsøger at sælge mig et andet system går forgæves her - jeg vil ikke af med Saldi."',
  },
  {
    id: 3,
    company: "CAP guide IVS",
    review: '"Jeg valgte i 2003 Saldi som bogføringsprogram i min freelance regnskabsforretning. For mig var det vigtigt, at det var et billigt og nemt program med masser af funktionalitet. Jeg anvender stadig Saldi, kender folkene bag og oplever altid en super service fra firmaet ved udfordringer - også når det en sjælden gang sker en søndag. De bedste anbefalinger herfra."',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length);
      }, 500);
    } else if (currentIndex === testimonials.length + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 500);
    }
  }, [currentIndex]);

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="testimonials-container">
      <div className="testimonial-slider">
        <div className="gradient-overlay left"></div>
        <div className="gradient-overlay right"></div>
        <div
          className={`testimonial-track ${isTransitioning ? "transitioning" : ""}`}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 20}px))`,
          }}
          ref={trackRef}
          onTransitionEnd={() => setIsTransitioning(false)}
        >
          <div className="testimonial">
            <p>{testimonials[testimonials.length - 1].review}</p>
            <h3>{testimonials[testimonials.length - 1].name}</h3>
            <p>{testimonials[testimonials.length - 1].company}</p>
          </div>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`testimonial ${currentIndex === testimonial.id ? "active" : ""
                }`}
            >
              <p>{testimonial.review}</p>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.company}</p>
            </div>
          ))}
          <div className="testimonial">
            <p>{testimonials[0].review}</p>
            <h3>{testimonials[0].name}</h3>
            <p>{testimonials[0].company}</p>
          </div>
        </div>
        <button className="slider-control prev" onClick={goToPrevious}>
          &lt;
        </button>
        <button className="slider-control next" onClick={goToNext}>
          &gt;
        </button>
      </div>
    </div>
  );
}
