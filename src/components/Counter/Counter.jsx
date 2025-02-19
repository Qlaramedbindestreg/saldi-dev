import React, { useEffect, useState, useRef } from "react";
import "./Counter.scss";

export default function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, useCount3] = useState(90);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, 
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; 
      const startTime = Date.now();

      const animateCounters = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1); 

  
        setCount1(Math.floor(20 * progress));

    
        setCount2(Math.floor(25 * progress));


        useCount3((90 + (9.9 * progress)).toFixed(1));

        if (progress < 1) {
          requestAnimationFrame(animateCounters);
        }
      };

      requestAnimationFrame(animateCounters);
    }
  }, [isVisible]);

  return (
    <div className="counter-container" ref={counterRef}>
      <div className="counter">
        <h1>{`+${count1}M`}</h1>
        <p>Fakturerede ordrer i Saldi</p>
      </div>
      <div className="counter">
        <h1>{count2}+</h1>
        <p>Års erfaring</p>
      </div>
      <div className="counter">
        <h1>{`${count3}%`}</h1>
        <p>Oppetid</p>
      </div>
    </div>
  );
}