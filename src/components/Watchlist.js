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
            let results = await fetch(`${process.env.REACT_APP_API_URL}/users/${userEmail}`).then(resp => resp.json());
            console.log(`http://localhost:3000/users/${userEmail}`);
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



