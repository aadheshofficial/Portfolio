import React, { useEffect, useRef, useState } from "react";

const RevealOnScrollNoRepeat = ({ children, animation = "fade-up" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-element ${animation} ${visible ? "active" : ""}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScrollNoRepeat;