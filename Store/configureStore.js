// Store/configureStore.js

import { createStore } from 'redux';
import addDream from './Reducers/dreamReducer'

export default createStore(addDream)