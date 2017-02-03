import * as types from '../constants/actionTypes'

export const addCharacter = (name, specie) => ({
  type: types.ADD_CHARACTER, name, specie
})
