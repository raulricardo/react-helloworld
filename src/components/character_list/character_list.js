import React from 'react'
import { connect } from 'react-redux'
import './character_list.scss';

const CharacterList = (props) => {
  return (
    <ul className="list">
      <h3 className="list-title">
        List of characters
      </h3>

      {props.characters.map(item =>
        <li key={item.name}>{item.name}</li>
      )}
    </ul>
  )
}

function mapStateToProps(state) {
  return { characters: state.characters.toJS() }
}

export default connect(mapStateToProps, null)(CharacterList);
