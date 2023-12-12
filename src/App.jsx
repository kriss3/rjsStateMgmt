import { useReducer } from "react";
import Form from "./components/Form";
import Result from "./components/Result";
import "./App.css";


const initState = {
  values: { random1: 0, random2: 0 },
  input: 0,
  result: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case "setValues": 
      return {
        ...state,
        values: action.payload.values
      }
    case "setInput": 
      return {
        ...state,
        input: action.payload.input
      }  
    case "checkResult":
      return {
        ...state,
        result: action.payload.result
      }
    default:
      return state;
  }
};


const App = () => {
  const[state, dispatch] = useReducer(reducer, initState);

  //const [values, setValues] = useState({ random1: 0, random2: 0 });
  //const [input, setInput] = useState(0);
  //const [result, checkResult] = useState(0);


  const generateRandomValues = () => {
    const random1 = Math.floor(Math.random() * 50);
    const random2 = Math.floor(Math.random() * 50);
    //setValues({random1, random2});
    dispatch({
      type: "setValues", 
      payload: {values: {random1, random2}}
    });
  };

  const guessTheNumber = () => {
 //   checkResult(state.values.random1 + state.values.random2);
    dispatch({
      type: "checkResult",
      payload: {result: state.values.random1 + state.values.random2}
    });
  };

  return (
    <div className="p-5" style={{ width: "80%" }}>
      <fieldset>
        <legend className="text-bold">Guess the Number</legend>

        <div className="d-flex justify-content-around">

          <Form 
            generate={generateRandomValues}
            guess = {guessTheNumber}
            onChange={value => dispatch({type: "setInput", payload: {input: value}})}
            values={state.values} 
          />
          <Result result={state.result} input={state.input} />
          
        </div>
      </fieldset>
    </div>
  );
}

export default App;
