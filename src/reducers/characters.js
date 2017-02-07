import Immutable from 'immutable'
import {
  ADD_CHARACTER,
  SET_NEW_NAME,
  SET_NEW_SPECIES
} from '../constants/actionTypes'

const initialState = Immutable.fromJS({
  charactersList: [
    {
      name: 'Luke Skywalker',
      species: 'Human'
    },
    {
      name: 'Leia Organa',
      species: 'Human'
    },
  ],
  formCharacter: { name: '', species: ''}
})

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_CHARACTER:
      return state.updateIn(
        ['charactersList'],
        arr => arr.push({
          name: action.name,
          species: action.species
        })
      )

    case SET_NEW_NAME:
      return state.setIn(['formCharacter', 'name'], action.name)

    case SET_NEW_SPECIES:
      return state.setIn(['formCharacter', 'species'], action.species)

    default:
      return state
  }
}
