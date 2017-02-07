import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  addCharacter,
  setNewName,
  setNewSpecie } from '../../actions/'

import './new_character.scss'

const NewCharacter = (props) => {
  function handleInputChange(e) {
    switch(e.target.name) {
      case 'character-name':
        props.setNewName(e.target.value)
        return
      case 'character-specie':
        props.setNewSpecie(e.target.specie)
        return
      default:
        return
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (props.character.name && props.character.specie) {
      props.addCharacter(props.character.name, props.character.specie);
      // e.target.reset()
    }
  }

  return (
    <div>
      <h2>Add New Character</h2>

      <form className="form" action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="character-name"
          value={props.character.name}
          onChange={handleInputChange}/>
        <br/>

        <label htmlFor="">Specie</label>
        <input
          type="text"
          name="character-specie"
          value={props.character.specie}
          onChange={handleInputChange}/>

        <button type="submit">Add</button>
      </form>
    </div>
  )
}

function mapStateToProps(state) {
  return { character: state.characters.get('formCharacter').toJS() }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCharacter, setNewName, setNewSpecie }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCharacter);
