import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { Welcome } from './components/Welcome';
import UserInput from './components/UserInput.js';

function App() {
  return (
    <div className="App">
      <div>
        <Welcome />
      </div>
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