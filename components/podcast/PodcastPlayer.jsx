import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useRef, useState } from "react";
import { Button, Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";
import Slider from "nouislider";
import wNumb from "wnumb";

const PAUSED = 0;
const LOADING = 1;
const PLAYING = 2;

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const PodcastPlayer = ({ podcast }) => {
  const sliderRef = useRef(null);

  const [audio, setAudio] = useState(null);
  const [audioState, setAudioState] = useState(PAUSED);

  const [currentTime, setCurrentTime] = useState([0, null]);
  const prevTime = usePrevious(currentTime);

  const updateSlider = (values, _) => {
    setCurrentTime([parseInt(values[0]), false]);
  }

  useEffect(() => {
    // Initialise audio object
    const newAudio = new Audio(podcast.href);
    setAudio(newAudio);
  }, []);

  useEffect(() => {
    if (audio === null) return;

    audio.addEventListener("timeupdate", () => {
      setCurrentTime([audio.currentTime, true]);
    });

    audio.addEventListener("loadedmetadata", () => {
      // Initialise slider
      Slider.create(sliderRef.current, {
        start: 0,
        connect: [true, false],
        step: 1,
        range: { min: 0, max: Math.floor(audio.duration) },
        format: wNumb({
          decimals: 0
        })
      }).on("update", updateSlider);
    });
  }, [audio]);

  useEffect(() => {
    const [time, fromAudio] = currentTime;
    // Check if we've initialised both audio and slider
    if (fromAudio === null) return;
    // Check if we've actually progressed
    if (Math.floor(prevTime[0]) === Math.floor(time)) return;

    if (fromAudio) {
      if (!sliderRef.current) return;
      sliderRef.current.noUiSlider.set(time);
    } else {
      if (audio === null) return;
      audio.currentTime = time;
    }
  }, [currentTime]);

  const playAudio = async () => {
    setAudioState(LOADING);
    await audio.play();
    setAudioState(PLAYING);
  }

  const pauseAudio = () => {
    audio.pause();
    setAudioState(PAUSED);
  }

  const buttonPress = () => {
    if (audioState === PAUSED) {
      playAudio();
    } else if (audioState === PLAYING) {
      pauseAudio();
    }
  }

  const getIcon = () => {
    switch (audioState) {
      case PAUSED:
        return faPlay;
      case LOADING:
        return faCircleNotch;
      default:
        return faPause;
    }
  }

  return (
    <Card>
      <CardBody>
        <Row>
          <Col lg={10}>
            <CardTitle>{podcast.name}</CardTitle>
            <CardText>{podcast.description}</CardText>
          </Col>

          <Col lg={2} className="d-flex align-items-center justify-content-center">
            <Button className="btn-icon icon-shape rounded-circle" onClick={buttonPress}>
              <FontAwesomeIcon icon={getIcon()} spin={audioState === LOADING} />
            </Button>
          </Col>
        </Row>

        <Row>
          <div className="slider" ref={sliderRef} style={{ width: "100%" }}></div>
          <p>{currentTime} seconds in</p>
        </Row>
      </CardBody>
    </Card>
  );
};

export default PodcastPlayer;
