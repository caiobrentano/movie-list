const baseUrl = 'http://localhost:8080/movies'

export const loadMovies = () => {
  return fetch(baseUrl)
    .then(res => res.json())
}

export const createMovie = (movie) => {
  return fetch(baseUrl, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  }).then(res => res.json())
}

export const saveMovie = (movie) => {
  return fetch(`${baseUrl}/${movie.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  }).then(res => res.json())
}

export const deleteMovie = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}