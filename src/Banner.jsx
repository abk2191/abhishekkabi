import { useState, useEffect } from "react";

function Banner() {
  const [slide, setSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev % 3) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      <img
        src="./abhi.jpg"
        alt="Banner"
        className={`banner-image ${slide === 1 ? "active" : ""}`}
      />
      <img
        src="./abhi2.jpg"
        alt="Banner"
        className={`banner-image ${slide === 2 ? "active" : ""}`}
      />
      <img
        src="./abhi3.jpg"
        alt="Banner"
        className={`banner-image ${slide === 3 ? "active" : ""}`}
      />
    </div>
  );
}

export default Banner;
