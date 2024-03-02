import { calculateInvestmentResults } from "./util/investment.js"
import { formatter } from "./util/investment.js"
import UserInput from "./components/UserInput";
import { useState } from 'react';
import Results from "./components/Results.jsx";

console.log("hello World");

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const inputIsValid = userInput.duration >=1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    });
  }

  

  return (
    <>
  <UserInput onChange={handleChange} userInput={userInput}/>  
  {!inputIsValid && <p className = 'center'>Duration must be at least 1 year</p>}
  {inputIsValid && <Results input={userInput}/>}
  </>
  ); 
}

export default App
