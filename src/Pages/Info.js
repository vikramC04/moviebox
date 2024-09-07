import {React, useState, useEffect} from 'react'
import Header from '../components/Header/Header'
import MovieInfo from '../components/Movie/MovieInfo'

const URL = `https://api.themoviedb.org/3/movie/`
const APIKEY = `da0f0262c12dc5195f32ff6b0ae01717`

function Info() {
    const [id, setID] = useState('')
    const [movie, setMovie] = useState(null)
    const [isLoaded, setLoaded] = useState(false)
    
        useEffect(() => {
            const fetchURL = async () => {
                const get = window.location.search.substring(1)
                setID(get)
                setLoaded(true)
            }
            fetchURL();
        }, [id])
        
        useEffect(() => {
            if(isLoaded) {
                const search = URL.concat(id).concat("?api_key=", APIKEY)
                const fetchMovie = async () => {
                    const result = await fetch(search)
                    result.json().then(json => {
                        setMovie(<MovieInfo key={json.id} movie={json}></MovieInfo>)
                    })
                }
                fetchMovie();
            } 
        }, [id, isLoaded])
  return (
    <div className="root">
        <Header />
        <div className="info-main">
            <div className="wrapper-info">
                {movie}
            </div> 
        </div>
    </div>
  )
}

export default Info

