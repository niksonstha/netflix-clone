import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";
function Banner() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        setLoading(false);

        return request;
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  if (loading) {
    // Render a loading state
    return <div>Loading...</div>;
  }

  // Now you can access the movie object safely
  const backdropPath = movie?.backdrop_path || "";

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${backdropPath}")`,
        backgroundPosition: "center center",
        backgroundSize: "center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.original_name || movie?.name || movie?.title}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeButtom" />
    </header>
  );
}

export default Banner;
