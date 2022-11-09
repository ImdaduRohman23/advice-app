import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
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

  const buttonRef = useRef();

  useEffect(() => {
    const applyContainerProperties = () => {
      buttonRef.current.classList.add("effect-container");
    };

    const applyStyles = (e) => {
      const {offsetX, offsetY} = e;
      const {style} = buttonRef.current;
      const sizeOffset = 50;

      style.setProperty("--effect-top", `${offsetY - sizeOffset}px`);
      style.setProperty("--effect-left", `${offsetX - sizeOffset}px`);
    }

    const onClick = (e) => {
      buttonRef.current.classList.remove("active");
      applyStyles(e);
      buttonRef.current.classList.add("active");
    };

    applyContainerProperties();

    buttonRef.current.addEventListener("mouseup", onClick);

    const cleanupRef = buttonRef.current;
    return () => {
      cleanupRef.removeEventListener("mouseup", onClick)
    };
  });



  return (
    <div className="app">
      <div className="app__content">
        <h1>{advice}</h1>
        <div className="button-container" ref={buttonRef} onClick={fetchData}>
          <button><strong>GIVE ME ADVICE</strong></button>
        </div>
        {/* <a href="#" onClick={() => fetchData()}><span>GIVE ME ADVICE</span></a> */}
      </div>
      <div className="footer">
        <p> <strong>&copy; 2022 Imdadu Rohman</strong> </p>
      </div>
    </div>
  );
}

export default App;
