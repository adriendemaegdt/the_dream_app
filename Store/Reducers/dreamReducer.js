

import data_dream from "../../data/data_dream"

const initialState = { myDreams: data_dream }

function addDream(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'ADD_DREAM':
        console.log('create one dream')
        return nextState
    case 'UPDATE_DREAM':
        console.log('update one dream')
        return nextState
    case 'DELETE_DREAM':
        console.log('delete one dream')
        return nextState
  default:
    return state
  }
}

export default addDream 