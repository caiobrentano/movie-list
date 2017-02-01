import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MovieForm, MovieList, Footer} from './components/movie'
import {addMovie, generateId, findById, toggleMovie, updateMovie, removeMovie, filterMovies} from './lib/movieHelpers'
import {pipe, partial} from './lib/utils'
import {loadMovies, createMovie, saveMovie, deleteMovie} from './lib/movieService'

class App extends Component {

  state = {
    movies: [],
    currentMovie: ''
  }

  static contextTypes = {
    route: React.PropTypes.string
  }

  componentDidMount() {
    loadMovies()
      .then(movies => this.setState({movies}))
  }

  handleInputChange = (evt) => {
    this.setState({
      currentMovie: evt.target.value  
    });    
  }

  handleRemove = (id, evt) => {
    evt.preventDefault()
    const updatedMovies = removeMovie(this.state.movies, id)
    this.setState({movies: updatedMovies})
    deleteMovie(id)
      .then(() => this.showTempMessage('Movie deleted!'))
  }

  handleToggle = (id) => {
    const getToggleMovie = pipe(findById, toggleMovie)
    const updated = getToggleMovie(id, this.state.movies)
    const getUpdatedMovies = partial(updateMovie, this.state.movies)
    const updatedMovies = getUpdatedMovies(updated)
    this.setState({movies: updatedMovies})
    saveMovie(updated)
      .then(() => this.showTempMessage('Movie updated'))
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const newId = generateId()
    const newMovie = {id: newId, name: this.state.currentMovie, isComplete: false}
    const updatedMovies = addMovie(this.state.movies, newMovie)

    this.setState({
      movies: updatedMovies,
      currentMovie: '',
      errorMessage: ''
    })
    createMovie(newMovie)
      .then(() => this.showTempMessage('Movie added'))
  }

  showTempMessage = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2500)
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please, supply a valid movie name'
    })
  }

  render() {
    const submitHandler = this.state.currentMovie ? this.handleSubmit : this.handleEmptySubmit
    const displayTodos = filterMovies(this.state.movies, this.context.route)

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Movie List</h2>
        </div>
        <div className="PCL-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          {this.state.message && <span className='success'>{this.state.message}</span>}
          <MovieForm 
            handleInputChange={this.handleInputChange}
            currentMovie={this.state.currentMovie}
            handleSubmit={submitHandler}/>
          <MovieList
            handleToggle={this.handleToggle}
            movies={displayTodos}
            handleRemove={this.handleRemove}/> 
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
