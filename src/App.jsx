import styles from "./App.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display.jsx";
import ButtonsContainer from "./components/ButtonsContainer.jsx";
import { useState } from "react";

function App() {
  const[calVal,setCalVal] = useState("");

const onButtonClicked=(buttonText)=>{
  if(buttonText==='C'){
   setCalVal("");
  }
  else if(buttonText==='='){
  const result = eval(calVal);
  setCalVal(result);
  }
  else{
    const newDisplayValue = calVal + buttonText;
    setCalVal(newDisplayValue);
  }
}
   return (
   <center>
    <h1>CALCULATOR</h1>
   <div className={styles.calculator}>
     <Display displayValue={calVal}></Display>
    <ButtonsContainer onButtonClicked = {onButtonClicked}
    ></ButtonsContainer>
   </div>
   </center>
  );
}

export default App;
