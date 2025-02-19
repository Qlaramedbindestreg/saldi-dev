import React, { useEffect, useState } from "react";
import "./Counter.scss";

export default function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {

    let interval1 = setInterval(() => {
      if (count1 < 20) {
        setCount1(count1 + 1000000);
      } else {
        clearInterval(interval1);
      }
    }, 100);


    let interval2 = setInterval(() => {
      if (count2 < 25) {
        setCount2(count2 + 1);
      } else {
        clearInterval(interval2);
      }
    }, 100);


    let interval3 = setInterval(() => {
      if (count3 < 99) {
        setCount3(count3 + 1);
      } else {
        clearInterval(interval3);
      }
    }, 30);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [count1, count2, count3]);

  return (
    <div className="counter-container">
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
