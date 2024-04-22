import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  function handleADD(){
    const number = inputRef.current.value
    dispatch({type: 'ADD', payload: Number(number)})
    inputRef.current.value = ""
  }
  function handleSUBTRACT(){
    dispatch({type: 'SUBTRACT', payload: Number(inputRef.current.value)})
    inputRef.current.value = ""
  }
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch({ type: "increment", payload: 1 })}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => dispatch({ type: "decrement", payload: 1 })}
        >
          -1
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="number"
          placeholder="Enter Number"
          className="number-input"
          ref={inputRef}
        />
        <button type="button" className="btn btn-info" onClick={handleADD}>
          ADD
        </button>
        <button type="button" className="btn btn-danger" onClick={handleSUBTRACT}>
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
