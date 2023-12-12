import { useState, useEffect } from "react";

const Result = ({result, input}) => {
    const [msg, setMsg] = useState("");
  
    useEffect(() => {
      const answer = result === parseInt(input)
      setMsg(answer ? "You guessed right!" : "Try it again! :("); 
      if(!result){
          setMsg("");
        } 
    }, [result, input]);
  
    return(
      <div
        className="d-flex flex-column justify-content-between"
        style={{ width: "50%" }}
      >
        <div className="d-flex text-success justify-content-center mb-5">
          <p className="h1">{msg}</p>
        </div>
      </div>
    );
  };

export default Result;