import React from "react";

const Header = () => {
  return (
    <div className="position-relative">
      {/* shape Hero */}
      <section className="section section-lg section-shaped pb-100">
        <div className="shape shape-style-1 shape-primary">
          <span className="floating" />
          <span className="floating" />
          <span className="floating" />
          <span className="floating" />
          <span className="floating" />
          <span className="floating" />
          <span className="floating" />
        </div>

        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-white"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
      </section>
      {/* 1st Hero Variation */}
    </div>
  );
};

export default Header;
