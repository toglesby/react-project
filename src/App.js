import React from "react";
import './App.css';

export default function App() {
  const [number, setNumber] = React.useState(0);
  const [textValue, setTextValue] = React.useState("");
  const [formStage, setFormStage] = React.useState(0);
  const [names, setNames] = React.useState(["Trevor"])
  
  let content; 
  if (formStage === 0) {
    content = (
      <>
      <h1>Let's Use State</h1>
      <input onChange={(e) => setTextValue(e.target.value)} type="text" />
      {textValue}
      {textValue.length > 10 && <div>Input too long</div>}
      <button onClick={() => setFormStage(formStage + 1)}>Next</button>
      </>
    );
  }

  if (formStage === 1) {
    content = (
      <>
      <h1>Step 2</h1>
      <h2>{number}</h2>
      <button onClick={() => setNumber (number + 1)}>+</button>
      <button onClick={() => setFormStage(formStage - 1)}>Prev</button>
      <button onClick={() => setFormStage(formStage + 1)}>Next</button>
      </>
    );
  }

  if (formStage === 2) {
    content = (
      <>
          {names.map((name) => (
            <div>{name}</div>
          ))}
          <button onClick={() => setNames([...names,])}>Add Name</button>
          <button onClick={() => setFormStage(formStage - 1)}>Prev</button>
      </>
    );
  }

  return <div className="App">{content}</div>;

}
