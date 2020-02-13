import React, {useState} from 'react';
import './App.css';
import Button from "./components/button/Button";
import Search from "./components/search/Search";
import Result from "./components/results/Results"
 import UsersContext from "./utils/UsersContext"

function App() {

  const [usersState, setUsersState] = useState({
    users: []
  });



  return (
    <>
      <div className="App">
        <div className="jumbotron">
          <h1 className="title">Employee-Tracker</h1>
        </div>
        <UsersContext.Provider value={usersState}>
        <div className="searchDiv">
          <Search />
        </div>
        <div className="resultsDisplay">
          <Result />
        </div>
        </UsersContext.Provider>




      </div>
  </>
  );
  
}

export default App;
