

import data_dream from "../../data/data_dream"

const initialState = { 
    myDreams: data_dream,
    newDream: {}
}

function addDream(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'SAVE_VALUE':
        const key = Object.keys(action.value)[0]
        const value = action.value[key]
        nextState = {...state}
        nextState.newDream[key] = value
        console.log(nextState)
        return nextState

  default:
    return state
  }
}

export default addDream 