import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{

    constructor(){
        super()
        this.state = {
            searchTerm: "",
            reviews:[]
        }
    }

    handleSearchChange = (event) => {
        this.setState(({
            searchTerm: event.target.value
        }), console.log(this.state.searchTerm))
    }
    

    handleClick = (event) => {
        fetch(URL+`query=${this.state.searchTerm}&`+NYT_API_KEY)
        .then(resp => resp.json())
        .then(respObj => {
            this.setState({
               reviews: respObj.results  
            })

       })
    }
    render(){
        return (
            <div className="searchable-movie-reviews">
                <input onChange={(e) => {this.handleSearchChange(e)}} type="text" 
                name="search" placeholder="" />
                <button onClick={this.handleClick}>Search</button>
                <MovieReviews movies={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer