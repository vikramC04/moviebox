import React from 'react'
import { useAuth } from '../../auth/AuthContext'

const POSTER_IMAGE = `https://image.tmdb.org/t/p/w185`

function MovieInfo({movie}) {
    const { userLoggedIn } = useAuth()
    const { currentUser } = useAuth()
    const image = `${POSTER_IMAGE}${movie.poster_path}`
    
    const createMovie = async () => {
      const userEmail = currentUser.email
      await fetch(`${process.env.REACT_APP_API_URL}/users/${userEmail}`, {
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
        })
    }

    
    
    return (
      <div>
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
