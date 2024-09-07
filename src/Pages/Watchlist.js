import React from 'react'
import { useState, useEffect} from 'react';
import Movie from '../components/Movie/Movie';
import Header from '../components/Header/Header';
import { useAuth } from '../auth/AuthContext'



function Watchlist() {
    const { currentUser } = useAuth()
    const [movies, setMovies] = useState([])
    const userEmail = currentUser.email
    useEffect(() => {
        const mov =  async () => {
            let results = await fetch(`${process.env.REACT_APP_API_URL}/users/${userEmail}`).then(resp => resp.json());
            const movieList = results.map(mov => (<Movie key={mov.movid} id={mov.movid} title={mov.title} poster={mov.poster}></Movie>))
            setMovies(movieList);
        }
        mov();
    }, [userEmail])
  return (
    <div>
        <Header />
        <div className="App">
          <div className="content">
            <div className="header">
                <h1>Movie Watchlist</h1>
            </div>
            <div className="wrapper">
              {movies}
            </div>
          </div>     
        </div>
    </div>
  )
}

export default Watchlist



