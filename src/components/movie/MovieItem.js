import React from 'react'
import {partial} from '../../lib/utils'

export const MovieItem = (props) => {
  // const handleToggle = () => props.handleToggle(props.id)
  // const handleToggle = props.handleToggle.bind(null, props.id)
  const handleToggle = partial(props.handleToggle, props.id)
  const handleRemove = partial(props.handleRemove, props.id)
  return(
    <li>
      <span className='delete-item'><a href="#" onClick={handleRemove}>x</a></span>
      <input
        type="checkbox"
        onChange={handleToggle}
        checked={props.isComplete}/> {props.name}
    </li>
  )
}

MovieItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  handleToggle: React.PropTypes.func
}