import Immutable from 'immutable'
import { ADD_CHARACTER } from '../constants/actionTypes'

const initialState = Immutable.fromJS([
  {
    name: 'Luke Skywalker',
    specie: 'Human'
  },
  {
    name: 'Leia Organa',
    specie: 'Human'
  },
])

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_CHARACTER:
      return state.push({
        name: action.name,
        specie: action.specie
      })

    default:
      return state
  }
}
