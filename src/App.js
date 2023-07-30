import logo from "./logo.svg";
import "./App.css";

import "./styles/SearchEngine.css";
import { getResources } from "./search_engine/api/search-engine";
import { useState, useEffect } from "react";
import SearchBar from "./search_engine/SearchBar";
import ListPage from "./search_engine/ListPage";

function App() {
  const [resources, setResources] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getResources()
      .then((json) => {
        setResources(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, []);

  console.log(searchResults);
  console.log(Array.isArray(searchResults));

  return (
    <>
      <div className="App">
        <body>
          <h1>Resource search engine</h1>
          <SearchBar
            resources={resources}
            setSearchResults={setSearchResults}
          />
          <ListPage searchResults={searchResults} />
        </body>
      </div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //   <div>Talent seeker</div>
    //     {/* <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload. By Jorge Mostajo
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}

    //   </header>
    //   <body>
    //     <h1>Resource search engine</h1>
    //     <form id='search-form'>
    //       <input type='text' id='search-box' placeholder='Search resources here...'></input>
    //       <button>Search</button>
    //     </form>
    //     <div id='search-result'></div>
    //   </body>
    // </div>
  );
}

export default App;
