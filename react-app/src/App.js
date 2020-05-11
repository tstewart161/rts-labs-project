import React from 'react';
import './App.css';
import UserInput from './components/UserInput.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  searchTerms: {
    query: '',
    tags: '',
    numComments: 'num_comments>=0',
    points: 'points>=0',
    sortBy: 'search'
  }
}

function reducer(state = initialState, action) {
  switch(action.type) {
    // case "INPUT": 
    //   let newSearchTerms = action.payload;
    //   return {
    //     searchTerms: newSearchTerms
    //   }
    default:
      return state;
  }
}

const store = createStore(reducer);
store.dispatch({
  type: "INPUT",
  payload: {}
})

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserInput searchTerms={{
          query: '',
          tags: '',
          numComments: 'num_comments>=0',
          points: 'points>=0',
          sortBy: 'search'}}
        />
      </Provider>
    </div>
  );
}

export default App;