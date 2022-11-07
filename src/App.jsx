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
        <h1>{advice}</h1>
        <a href="#" onClick={() => fetchData()}><span>GIVE ME ADVICE</span></a>
      </div>
    </div>
  );
}

export default App;
