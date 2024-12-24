import React from 'react'
import { useState, useEffect} from 'react';
import Search from './Search';

const STARTERS = ['car', 'cog', 'avenge', 'drag', 'vamp', 'hunter', 'sha', 'transformers', 'dark knight']

function Form()  {
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState(STARTERS[Math.floor(Math.random() * STARTERS.length)]);

    useEffect(() => {
        const sessionActive = sessionStorage.getItem('SESSION_ACTIVE');
        
        const setResults = async () => {
            const data = JSON.parse(window.localStorage.getItem('SEARCH_RES'));
            if (data !== null && sessionActive) {
                setSearch(data);
                setQuery(data);
            }
        }
        setResults();
    }, []);

    useEffect(() => {
        window.localStorage.setItem('SEARCH_RES', JSON.stringify(search));
    }, [search]);

    useEffect(() => {
        sessionStorage.setItem('SESSION_ACTIVE', 'true');

        const handleBeforeUnload = () => {
            if(!sessionStorage.getItem('SESSION_ACTIVE')) {
                window.localStorage.removeItem('SEARCH_RES');
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <div>
            <div className="form">
                <form onSubmit={(e) => {
                    setSearch(query)
                    e.preventDefault()
                }}>
                    <input type="text" 
                    className="search-box" 
                    value={query} 
                    onChange = {(e) => setQuery(e.target.value)} 
                    placeholder="Enter movie title..."></input>
                    <button type="submit" className="enter-button" >Submit</button>  
                </form>
            </div>
            <div>
                Browse as a Guest, Login or Sign Up to Add Movies To Watchlist!    
            </div>
            <div>
            <Search query={search}/>
            </div>
        </div>
    );

}
export default Form
