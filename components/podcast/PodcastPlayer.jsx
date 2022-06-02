import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";
import PodcastSlider from "./PodcastSlider";

const PAUSED = 0;
const LOADING = 1;
const PLAYING = 2;

const PodcastPlayer = ({ podcast }) => {
  const [audio, setAudio] = useState(null);
  const [audioState, setAudioState] = useState(PAUSED);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(NaN);

  const onChange = (values, _) => {
    const newTime = parseInt(values[0]);

    setCurrentTime(prevTime => {
      if (prevTime === newTime) return;
      console.log(prevTime, newTime);

      audio.currentTime = newTime;
      return newTime;
    });
  }

  useEffect(() => {
    // Initialise audio object
    const newAudio = new Audio(podcast.href);
    setAudio(newAudio);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (audio === null) return;

    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime);
    });

    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    })
  }, [audio]);

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
          {audio !== null && !isNaN(duration) && (
            <PodcastSlider
              currentTime={currentTime}
              duration={duration}
              onChange={onChange} />
          )}
        </Row>
      </CardBody>
    </Card>
  );
};

export default PodcastPlayer;
