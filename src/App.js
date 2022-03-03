import React, { useState, useEffect } from "react";
import axios from 'axios'


import AdviceCard from "./AdviceCard";



function App() {
  const [advice, setAdvice] = useState({})

  const fetchAdvice = async () => {
    try {
      
      const result = await axios.get(`https://api.adviceslip.com/advice`)
      const advice = result.data.slip
      setAdvice(advice)
    } catch (error) {
      
      console.log(error)
    }
  }

  console.log(advice)

  useEffect(() => {

    fetchAdvice()
  }, [])

  return (
    <div className="App">
      <AdviceCard advice={advice} />
    </div>
  );
}

export default App;
