export const addMovie = (list, newMovie) => [...list, newMovie]

export const generateId = () => Math.floor(Math.random()*100000)

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleMovie = (movie) => ({...movie, isComplete: !movie.isComplete})

export const updateMovie = (list, updated) => {
  const updatedId = list.findIndex(item => item.id === updated.id)
  return [
    ...list.slice(0, updatedId),
    updated,
    ...list.slice(updatedId+1)
  ]
}

export const removeMovie = (list, id) => {
  const removeId = list.findIndex(item => item.id === id)
  return [
    ...list.slice(0, removeId),
    ...list.slice(removeId+1)
  ]
}

export const filterMovies = (list, route) => {
  switch(route) {
    case '/active':
      return list.filter(item => !item.isComplete)
    case '/completed':
      return list.filter(item => item.isComplete)
    default:
      return list
  }
}