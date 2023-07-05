import React from "react";
import "./Films.css";
import { useState, useEffect } from "react";
import Navbar from "../../componentes/Navbar";
import axios from "axios";

const Films = () => {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "38cc707ef4cd7fbd75831aedbc974a28";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });

    setMovies(results);
    setSelectedMovie(results[0]);
  };

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
    window.scrollTo(0, 800);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Navbar />

      <div className="banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h2>¡Disfruta de películas en casa, totalmente gratis!</h2>
          <p>Encuentra todo tipo de películas para disfrutar en tu hogar.</p>
          {/* Buscador */}
          <form className="search-form" onSubmit={searchMovies}>
            <input
              type="text"
              className="search-input"
              placeholder="Ingresa el nombre de la película"
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <button className="search-button" type="submit">
              Buscar Película
            </button>
          </form>
        </div>
      </div>

      <div className="separadorBusqueda">
        <h1>MOVIES</h1>
      </div>

      <div className="posters-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-poster">
            <div className="poster-overlay"></div>
            <img src={`${URL_IMAGE + movie.poster_path}`} alt="" className="poster-image" />
            <h4 className="poster-title">{movie.title}</h4>
            <p className="poster-rating">Resume: {movie.overview}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Films;
