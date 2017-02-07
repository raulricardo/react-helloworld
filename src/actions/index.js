import * as types from '../constants/actionTypes'

export const addCharacter = (name, specie) => ({
  type: types.ADD_CHARACTER, name, specie
})

export const setNewName = name => ({
  type: types.SET_NEW_NAME, name
})

export const setNewSpecie = specie => ({
  type: types.SET_NEW_SPECIE, specie
})
