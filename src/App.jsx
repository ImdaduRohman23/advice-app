import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState();

  const fetchData = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then(res => setAdvice(res.data.slip.advice))
      .catch(err => console.log(err))

  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Advice App</h1>
      <h2>{advice}</h2>
    </div>
  );
}

export default App;
