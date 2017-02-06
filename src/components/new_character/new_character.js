import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addCharacter } from '../../actions/'

import './new_character.scss'

const NewCharacter = (props) => {
  function onSubmitHandler(e) {
    // const name =
    // const specie =

    e.preventDefault();

    // if (name && specie) {
    //   addCharacter(name, specie)
    //   e.target.reset()
    // }
    props.addCharacter('alsdnbasld', 'telsnf');
  }

  return (
    <div>
      <h2>Add New Character</h2>

      <form className="form" action="" onSubmit={onSubmitHandler}>
        <label htmlFor="">Name</label>
        <input type="text" name="character-name"/>
        <br/>
        <label htmlFor="">Specie</label>
        <input type="text" name="character-specie" />

        <button type="submit">Add</button>
      </form>
    </div>
  )
}

function mapStateToProps(state) {
  return { characters: state.characters.toJS() }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCharacter }, dispatch)
}

export default connect(null, mapDispatchToProps)(NewCharacter);
