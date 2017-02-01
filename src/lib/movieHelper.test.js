import {addMovie, findById, toggleMovie, updateMovie, removeMovie, filterMovies} from './movieHelpers'

test('addMovie should add the passed movie to the list', () => {
  const startMovies = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]

  const newMovie = {id: 3, name: 'three', isComplete: false}

  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = addMovie(startMovies, newMovie)

  expect(result).toEqual(expected)
})

test('addMovie should not mutate the existing movie array', () => {
  const startMovies = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]

  const newMovie = {id: 3, name: 'three', isComplete: false}

  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = addMovie(startMovies, newMovie)

  expect(result).not.toBe(startMovies)
})

test('findById should return the expected item from an array', () => {
  const startMovies = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const expected = {id: 1, name: 'one', isComplete: false}
  const result = findById(1, startMovies)

  expect(result).toEqual(expected)
})

test('toggleMovie should toggle isComplete prop of a movie', () => {
  const startMovie = {id: 1, name: 'one', isComplete: false}
  const expected = {id: 1, name: 'one', isComplete: true}
  const result = toggleMovie(startMovie)

  expect(result).toEqual(expected)
})

test('toggleMovie should not mutate the original movie', () => {
  const startMovie = {id: 1, name: 'one', isComplete: false}
  const result = toggleMovie(startMovie)

  expect(result).not.toBe(startMovie)
})

test('updateMovie should update an item by id', () => {
  const startMovies = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const updatedMovie = {id: 2, name: 'two', isComplete: true}

  const expectedMovies = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = updateMovie(startMovies, updatedMovie)

  expect(result).toEqual(expectedMovies)
})

test('updateMovie should mutate the original array', () => {
  const startMovies = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const updatedMovie = {id: 2, name: 'two', isComplete: true}

  const result = updateMovie(startMovies, updatedMovie)

  expect(result).not.toBe(startMovies)
})

test('removeMovie should remove an item by id', () => {
  const startMovies = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const targetId = 2

  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = removeMovie(startMovies, targetId)

  expect(result).toEqual(expected)
})

test('removeMovie should not mutate the existing movie array', () => {
  const startMovies = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const targetId = 2

  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = removeMovie(startMovies, targetId)

  expect(result).not.toBe(startMovies)
})

test('filterMovies should return all items for the root route', () => {
  const startMovies = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = filterMovies(startMovies, '/')

  expect(result).toEqual(startMovies)
})

test('filterMovies should only completed items for the complete route', () => {
  const startMovies = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ]

  const expected = [
    {id: 2, name: 'two', isComplete: true}
  ]

  const result = filterMovies(startMovies, '/completed')

  expect(result).toEqual(expected)
})

test('filterMovies should only incompleted items for the active route', () => {
  const startMovies = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ]

  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = filterMovies(startMovies, '/active')

  expect(result).toEqual(expected)
})
