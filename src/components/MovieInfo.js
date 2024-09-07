import React from 'react'
import { useAuth } from './contexts/authContexts';

const POSTER_IMAGE = "https://image.tmdb.org/t/p/w185"

function MovieInfo({movie}) {
    const { userLoggedIn } = useAuth()
    const { currentUser } = useAuth()
    const image = POSTER_IMAGE.concat(movie.poster_path)
    const url = process.env.REACT_APP_API_URL
    
    const createMovie = async () => {
        const userEmail = currentUser.email
        console.log(userEmail)
        const mov = {
            email: userEmail,
            movid: movie.id.toString(),
            title: movie.title,
            poster: movie.poster_path
        }
        console.log(mov)

        await fetch(`https://moviebox-an28.onrender.com/users/${userEmail}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail,
                movid: movie.id,
                title: movie.title,
                poster: movie.poster_path
            })
          }).then(res => {
            console.log(res.json())
        })


        console.log('Added Movie')
    }

    
    
    return (
      <div>
        {/* Hello: Not In
        {userLoggedIn ?
        
            <>
            {currentUser.email}
            </>
            :
            <div>
            </div>
        } */}
        <h1>{movie.title}</h1>
          <div className="card">
            <div className="poster">
              <img src={image} alt="error"></img>
            </div>
        </div>
        
        
          <div className="side-info">
            <div>
              Rating: {movie.vote_average}
            </div>
            <div>
              User Reviews: {movie.vote_count}
            </div>
            {userLoggedIn ? <button className="enter-button" onClick={createMovie}>Add To WatchList</button> : ''}
            
            
          </div>
        <div>
          <h1>Synopsis:</h1>
          <div className="desc-mov">
            {movie.overview}
          </div>
          
        </div>
          
      </div>
    )
}

export default MovieInfo
