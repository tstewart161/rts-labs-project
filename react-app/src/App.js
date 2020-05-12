import React from 'react';
import './App.css';
import UserInput from './components/UserInput.js';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

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