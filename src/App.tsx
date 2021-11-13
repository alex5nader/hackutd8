import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

import axios from "axios";

const API_KEY = "e312da15354a7d2e211682e3c535852b";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    return axios.get(`https://api.nessieisreal.com/accounts?key=${API_KEY}`)
        .then((response) => response.data)
        .then((data) => setData(data))
        .then(() => setLoading(false));
  };

  useEffect(() => {
    getData();
  });

  if (loading) {
    return <p>loading</p>
  } else {

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>

            {data.toString()}

            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </header>
        </div>
    );
  }
}

export default App;
