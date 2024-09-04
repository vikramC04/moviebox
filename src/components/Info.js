import {React, useState, useEffect} from 'react'
import Header from './Header'
import Movie from './Movie'


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
                        console.log(json)
                        setMovie(<Movie key={json.id} movie={json} display={true}></Movie>)
                    })
                }
                fetchMovie();
            } 
        }, [id])
  return (
    <div className="root">
        <Header />
        <div className="info-main">
            <div className="wrapper-info">
                {movie}
            </div>
            <div>
                
            </div>
            
        </div>
        
        
    </div>
  )
}

export default Info

