import { useState } from 'react';
import CalculatorSVG from '../../assets/calculator.svg'
import { Calculator } from '../../service'
import './calculator.style.css'

export function CalculatorComponent() {
  const [problem, setProblem] = useState<string>()
  const [result, setResult] = useState<number[]>();

  const handleChange = (event: any) => {
    setProblem(event?.target?.value);
  }

  const handleSubmit = () => {
    setResult(Calculator.solve(`(${problem})`));
  }

  return (
    <div className="container">
      <div className="visor">
        <input className="input" value={problem} onChange={handleChange}/>
        <p className="result">={result}</p>
      </div>
      <img src={CalculatorSVG} alt="calculator-img" className="calcImage"/>
      <button className="submitButton" onClick={handleSubmit}>RESOLVER</button>
    </div>
  )
}