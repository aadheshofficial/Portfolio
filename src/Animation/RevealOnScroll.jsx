
import React, { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children, animation = "fade-up" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);  // 🔥 This is the change
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

export default RevealOnScroll;
