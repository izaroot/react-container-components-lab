import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component{
    constructor(){
        console.log(URL)
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount(){
        fetch(URL)
        .then(resp => resp.json())
        .then(respObj => {
             this.setState({
                reviews: respObj.results  
             })
        })
    }
    render(){
        return (
            <div className="latest-movie-reviews">
                <MovieReviews movies={this.state.reviews} />
            </div>
        )
    }
}
// console.log(URL)
export default LatestMovieReviewsContainer