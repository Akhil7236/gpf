import React, { useState, useEffect, useRef } from 'react';

// Counter component
const Counter = ({ target, children }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const checkVisibility = () => {
      const targetRect = counterRef.current.getBoundingClientRect();
      if (targetRect.top >= 0 && targetRect.bottom <= window.innerHeight) {
        const intervalId = setInterval(() => {
          if (count < target) {
            setCount(count + 1);
          } else {
            clearInterval(intervalId);
          }
        }, 20);
        return () => clearInterval(intervalId);
      }
    };
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
    return () => window.removeEventListener('scroll', checkVisibility);
  }, [count, target]);

  return (
    <div className="countingSize" ref={counterRef}>
      <h3 className="countingSizeNum counter">{count}</h3>
      <p className="countingSizehead">{children}</p>
    </div>
  );
};

const SectionThree = () => {
  // Function to start the counting effect
  const countUp = (element) => {
    const target = element.getAttribute('data-target');
    const counter = element.querySelector('.counter');
    setCount(parseInt(target));
  };

  return (
    <div className="sectionThree fullSideMarginPadding">
      <div className="numberOfShoot">
        <div className="counting">
          <Counter target={60}>
            <p className="countingSizehead">Engagement</p>
          </Counter>
          <span className="verticalLine"></span>
          <Counter target={100}>
            <p className="countingSizehead">Wedding</p>
          </Counter>
          <span className="verticalLine"></span>
          <Counter target={70}>
            <p className="countingSizehead">Pre Wedding</p>
          </Counter>
          <span className="verticalLine"></span>
          <div className="location" onClick={(e) => countUp(e.target)}>
            <h3 className="countingSizeNum counter">0</h3>
            <span>+</span>
            {/* eslint-disable-next-line */}
            <p className="countingSizehead" dangerouslySetInnerHTML={{ __html: '&nbsp;Location' }}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;