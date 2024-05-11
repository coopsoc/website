import { MutableRefObject, useEffect, useRef } from "react";
import Slider, { target } from "nouislider";
import wNumb from "wnumb";

interface PodcastSliderProps {
  duration: number;
  currentTime: number;
  onChange: (values: string[], handle: number) => void;
}

const PodcastSlider = ({
  duration,
  currentTime,
  onChange,
}: PodcastSliderProps) => {
  const sliderRef = useRef<target>(null);

  useEffect(() => {
    const node = sliderRef.current;

    Slider.create(node, {
      start: 0,
      connect: [true, false],
      step: 1,
      range: { min: 0, max: duration },
      format: wNumb({
        decimals: 0,
      }),
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

  const toTimestamp = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainder = seconds % 60;

    return `${minutes}:${String(remainder).padStart(2, "0")}`;
  };

  return (
    <>
      <div
        className="slider w-100"
        ref={sliderRef as MutableRefObject<HTMLDivElement>}
      ></div>
      <p>
        {toTimestamp(Math.floor(currentTime))} /{" "}
        {toTimestamp(Math.floor(duration))}
      </p>
    </>
  );
};

export default PodcastSlider;
