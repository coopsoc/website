import { useEffect, useRef } from "react";
import Slider from "nouislider";
import wNumb from "wnumb";

const PodcastSlider = ({ duration, currentTime, onChange }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const node = sliderRef.current;

    Slider.create(node, {
      start: 0,
      connect: [true, false],
      step: 1,
      range: { min: 0, max: duration },
      format: wNumb({
        decimals: 0
      })
    }).on("change", onChange);

    return () => {
      if (node) {
        node.noUiSlider.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    sliderRef.current.noUiSlider.set(currentTime);
  }, [currentTime]);

  return (
    <>
      <div className="slider w-100" ref={sliderRef}></div>
      <p>{Math.floor(currentTime)} seconds in</p>
    </>
  );
};

export default PodcastSlider;
