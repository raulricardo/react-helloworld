/* Action creators */
import * as types from '../constants/actionTypes'

export const addCharacter = (name, species) => ({
  type: types.ADD_CHARACTER, name, species
})

export const setNewName = name => ({
  type: types.SET_NEW_NAME, name
})

export const setNewSpecies = species => ({
  type: types.SET_NEW_SPECIES, species
})
