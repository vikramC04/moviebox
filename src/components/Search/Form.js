import React, { Component } from 'react'
import Search from './Search';

const STARTERS = ['car', 'cog', 'avenge', 'drag', 'vamp', 'hunter', 'sha', 'transformers', 'dark knight']

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         query : '',
         search : STARTERS[Math.floor(Math.random() * STARTERS.length)]
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
                Browse as a Guest, Login or Sign Up to Add Movies To Watchlist!    
            </div>
            <div>
            <Search query={this.state.search}/>
            </div>
        </div>
    )
  }
}

export default Form
