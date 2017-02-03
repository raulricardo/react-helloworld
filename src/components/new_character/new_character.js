import React from 'react'

import './new_character.scss'

const NewCharacter = () => {
  return (
    <div>
      <h2>Add New Character</h2>

      <form className="form" action="">
        <label htmlFor="">Name</label>
        <input type="text" />
        <br/>
        <label htmlFor="">Specie</label>
        <input type="text" />
      </form>
    </div>
  )
}

export default NewCharacter
