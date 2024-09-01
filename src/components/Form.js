import React, { Component } from 'react'
import Search from './Search';

const URL = `https://api.themoviedb.org/3/search/movie`
const APIKEY = `da0f0262c12dc5195f32ff6b0ae01717`
const STARTERS = ['car', 'cog', 'avenge', 'drag', 's', 'vamp', 'hunter', 'sha', 'transformers']

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         query : '',
         search : ''
      }
    }


    handleQuery = (event) => {
        this.setState({
            query : event.target.value
        })
    }

    handleSubmit = (event) => {
        this.setState({
            search : this.state.query
        })
        event.preventDefault()
        
    }
    
  render() {
    return (
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" 
                        className="search-box" 
                        value={this.state.query} 
                        onChange={this.handleQuery} 
                        placeholder="Enter movie title..."></input>
                        <button type="submit" className="enter-button" >Submit</button>  
                    </form>
                </div>
                <div>
                    Browse as a Guest, Login or Sign Up to Save and Rate Movies!
                </div>
                <div>
                <Search query={this.state.search}/>
                </div>
                
            </div>
            
            
                
       
        
      
    )
  }
}

export default Form
