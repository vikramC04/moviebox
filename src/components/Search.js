import React from 'react'
import { useState, useEffect} from 'react';

const URL = `https://api.themoviedb.org/3/search/movie`
const APIKEY = `da0f0262c12dc5195f32ff6b0ae01717`

let q = "cars 2"
function Search(props) {
    let search = URL.concat("?query=", q.replaceAll(" ", "+")).concat("&api_key=", APIKEY)
    const [movie, setMovie] = useState(0)
    useEffect(() => {
        const fetchMovie = async () => {
            const result = await fetch(search)
            result.json().then(json => {
                setMovie(json.results)
            })
            
            
        }
        fetchMovie();
    }, [])

  return (
    <div>
      <h1>Bet</h1>
    </div>
  )
}

export default Search
