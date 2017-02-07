import Immutable from 'immutable'
import {
  ADD_CHARACTER,
  SET_NEW_NAME,
  SET_NEW_SPECIE
} from '../constants/actionTypes'

const initialState = Immutable.fromJS({
  charactersList: [
    {
      name: 'Luke Skywalker',
      specie: 'Human'
    },
    {
      name: 'Leia Organa',
      specie: 'Human'
    },
  ],
  formCharacter: { name: 'Defaul name', specie: 'Default Specie'}
})

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_CHARACTER:
      return state.updateIn(
        ['charactersList'],
        arr => arr.push({
          name: action.name,
          specie: action.specie
        })
      )

    case SET_NEW_NAME:
      return state.setIn(['formCharacter', 'name'], action.name)

    case SET_NEW_SPECIE:
      return state.setIn(['formCharacter', 'specie'], action.specie)

    default:
      return state
  }
}
