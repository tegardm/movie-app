import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import searchIcon from './search.svg';
import MovieCard from "./MovieCard";

const App = () => {

    const movie1 = {
        "Title": "Italian Spiderman",
        "Year": "2007",
        "imdbID": "tt2705436",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
    }   
    const [searchTerm, setSearchTerm] = useState('')
    const [movie, getMovie] = useState([])

    const API_KEY = 48233321;
    const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`

    async function getMovies (title) {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        console.log(data.Search)
        getMovie(data.Search)
        console.log(movie)
    }

    useEffect(() => {
   
    }, [])

    function searchAction () {
        getMovies(searchTerm)

        setSearchTerm = ''
    }

    return (
        <div className="app">
            <h1>Movies Finder Tian</h1>
            <div className="search">
                <input placeholder="Masukan judul Film"
                value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value)}} />
                <img src={searchIcon} alt='Search'
                onClick={() => {searchAction()}}/>
            </div>

            {
                movie.length > 0 ? (
                    <div className="container">
                    
                    { movie.map(mov => {
                        return <MovieCard movie1={mov} />
                    })}
                    </div>
                ) : (
                    <div>
                        <h2 className="empty">Tidak Ada Movie Ditemukan</h2>
                    </div>
                )
            }
        </div>
    )
}

export default App;
