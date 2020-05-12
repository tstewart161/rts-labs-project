import { createStore } from 'redux';
import { reducer } from './reducer.js'

export const store = createStore(reducer);

store.dispatch({
  type: "INPUT",
  searchTerms: {
    query: '',
    tags: '',
    numComments: 'num_comments>=0',
    points: 'points>=0',
    sortBy: 'search'
  }
})