import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../../../API/Requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fecthData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fecthData();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button banner__btn--play">
            <FontAwesomeIcon icon={faPlay} />
            Play
          </button>
          <button className="banner__button banner__btn--info">
            <FontAwesomeIcon icon={faCircleExclamation} />
            More Info
          </button>
        </div>
        <div className="banner__description">
          <p>{movie?.overview}</p>
        </div>
      </div>
      <div className="banner__fadeBottom" />
    </div>
  );
}

export default Banner;
