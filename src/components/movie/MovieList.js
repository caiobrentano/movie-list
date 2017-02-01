import React from 'react'
import {MovieItem} from './MovieItem'

export const MovieList = (props) => {
  return (
    <div className="Movie-List">
      <ul>
        {props.movies.map(movie => <MovieItem handleToggle={props.handleToggle} key={movie.id} {...movie} handleRemove={props.handleRemove}/>)}
      </ul>
    </div>
  )
}

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
}