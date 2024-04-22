import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
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
        <button type="button" className="btn btn-info" onClick={() => dispatch({type: 'ADD', payload: inputRef.current.value})}>
          ADD
        </button>
        <button type="button" className="btn btn-danger" onClick={() => dispatch({type: 'SUBTRACT', payload: inputRef.current.value})}>
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
