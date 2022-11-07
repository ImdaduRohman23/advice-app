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
    <div className="app">
      <div className="app__content">
        <h2>{advice}</h2>
        <button>GIVE ME ADVICE</button>
      </div>
    </div>
  );
}

export default App;
