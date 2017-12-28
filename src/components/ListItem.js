import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({onCLick, text}) => (
  <li
    onClick={onClick}
  >
    {text}
  </li>
)

ListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default ListItem
