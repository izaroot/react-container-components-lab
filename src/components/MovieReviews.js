// Code MovieReviews Here
import React, { Component } from 'react';

const Movies = ({
    headline,
    byline,
    link,
    summary_short
}) => {
    return(
        <div key={headline} className="review">
            <header>
                <a href={link.url}>{headline}</a><br/>
                <span className="author">{byline}</span>
            </header>
            <blockquote>{summary_short}</blockquote>
        </div>
    )
}


const MoviesReviews = ({ movies }) => (
    <div className="review-list">
      { movies.map(Movies) }
    </div>
  )

export default MoviesReviews;