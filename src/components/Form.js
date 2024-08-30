import React, { Component } from 'react'
import { useState, useEffect} from 'react';
import Search from './Search';

const URL = `https://api.themoviedb.org/3/search/movie`
const APIKEY = `da0f0262c12dc5195f32ff6b0ae01717`

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
        console.log(this.state.query)
        
    }
    
  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" value={this.state.query} onChange={this.handleQuery}></input>
                    <button type="submit" >Submit</button>
                </div>
            </form>
            <div>
                <h1>hello</h1>
                {<Search query={this.state.search}/>}
            </div>
        </div>
        
      
    )
  }
}

export default Form
