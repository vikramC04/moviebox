import React from 'react'
import { useState, useEffect} from 'react';
import Movie from './Movie';
import Header from './Header';
import { useAuth } from './contexts/authContexts';



function Watchlist() {
    const { currentUser } = useAuth()
    const [movies, setMovies] = useState([])
    const userEmail = currentUser.email
    console.log(userEmail)
    useEffect(() => {
        const mov =  async () => {
            let results = await fetch(`https://moviebox-an28.onrender.com/users/${userEmail}`).then(resp => resp.json());
            console.log(`https://moviebox-an28.onrender.com/users/${userEmail}`);
            const movieList = results.map(mov => (<Movie key={mov.movid} id={mov.movid} title={mov.title} poster={mov.poster}></Movie>))
            setMovies(movieList);
            console.log("Got it")
            console.log(results);
        }
        mov();
    }, [userEmail])
  return (
    <div>
        <Header />
        <div className="wrapper">
      {movies}
    </div>
    </div>
    
  )
}

export default Watchlist



