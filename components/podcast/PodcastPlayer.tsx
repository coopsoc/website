import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import PodcastSlider from "./PodcastSlider";
import { Podcast } from "data/types";

enum AudioState {
  PAUSED,
  LOADING,
  PLAYING,
}

interface PodcastPlayerProps {
  podcast: Podcast;
}

const PodcastPlayer = ({ podcast }: PodcastPlayerProps) => {
  const [audio, setAudio] = useState<HTMLAudioElement>(null);
  const [audioState, setAudioState] = useState<AudioState>(AudioState.PAUSED);

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(NaN);

  const onChange = (values: string[], _: number) => {
    const newTime = parseInt(values[0]);

    setCurrentTime((prevTime) => {
      if (prevTime === newTime) return;
      console.log(prevTime, newTime);

      audio.currentTime = newTime;
      return newTime;
    });
  };

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
    });
  }, [audio]);

  const playAudio = async () => {
    setAudioState(AudioState.LOADING);
    await audio.play();
    setAudioState(AudioState.PLAYING);
  };

  const pauseAudio = () => {
    audio.pause();
    setAudioState(AudioState.PAUSED);
  };

  const buttonPress = () => {
    if (audioState === AudioState.PAUSED) {
      playAudio();
    } else if (audioState === AudioState.PLAYING) {
      pauseAudio();
    }
  };

  const getIcon = () => {
    switch (audioState) {
      case AudioState.PAUSED:
        return faPlay;
      case AudioState.LOADING:
        return faCircleNotch;
      default:
        return faPause;
    }
  };

  return (
    <Card>
      <CardBody>
        <Row>
          <Col lg={10}>
            <CardTitle>{podcast.name}</CardTitle>
            <CardText>{podcast.description}</CardText>
          </Col>

          <Col
            lg={2}
            className="d-flex align-items-center justify-content-center"
          >
            <Button
              className="btn-icon icon-shape rounded-circle"
              onClick={buttonPress}
            >
              <FontAwesomeIcon
                icon={getIcon()}
                spin={audioState === AudioState.LOADING}
              />
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            {audio !== null && !isNaN(duration) && (
              <PodcastSlider
                currentTime={currentTime}
                duration={duration}
                onChange={onChange}
              />
            )}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default PodcastPlayer;
