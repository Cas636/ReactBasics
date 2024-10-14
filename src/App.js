import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));  
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = "";
  }; 
 
  function resetResult(e) { 
    e.preventDefault(); 
    setResult((result) => 0);  
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Calculadora de trabajo más Simple</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          Total: {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Escribe un Número" 
        /> 
        <button onClick={plus}>Suma</button> 
        <button onClick={minus}>Resta</button> 
        <button onClick={times}>Multiplica</button> 
        <button onClick={divide}>Divide</button>  
        <button onClick={resetInput}>Reiniciar Entrada</button>  
        <button onClick={resetResult}>Reiniciar Resultado</button>  
      </form> 
    </div> 
  ); 
} 
 
export default App; 
