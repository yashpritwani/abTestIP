import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [data,setData] = useState(null);

  async function fetchData(){
    setData(await axios.get("http://localhost:3001"))
  }
  return (
    <div className="App">
      <h2>Data is {data === null ? "null": JSON.stringify(data)}</h2>
      <button onClick={fetchData}>Test IP</button>
    </div>
  );
}

export default App;
