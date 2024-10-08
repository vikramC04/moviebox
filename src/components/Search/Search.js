import React from 'react'
import { useState, useEffect} from 'react';
import Movie from '../Movie/Movie';

const URL = `https://api.themoviedb.org/3/search/movie`
const APIKEY = `${process.env.REACT_APP_API_KEY}`

function Search({query}) {
    let search = URL.concat("?query=", query.replaceAll(" ", "+")).concat("&api_key=", APIKEY)
    const [movie, setMovie] = useState([])
    useEffect(() => {
        const fetchMovie = async () => {
            const result = await fetch(search)
            result.json().then(json => {
              const movieList = ParseInfo(json.results).map(mov => (<Movie key={mov.id} id={mov.id} title={mov.title} poster={mov.poster}></Movie>))
              setMovie(movieList)
            })
        }
        fetchMovie();
    }, [search])

    const ParseInfo = (parse) => {
      let arr = []
      for (const element of parse) {
        if(element.poster_path == null) {
          continue;
        }
        const temp = {
          'id' : element.id,
          'title' : element.title,
          'poster' : element.poster_path
        }
        arr.push(temp) 
      }
      return arr;
    };

  return (
    <div className="wrapper">
      {movie}
    </div>
  )
}

export default Search