import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
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
      </div>{" "}
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input type="text" placeholder="Enter Number" className="number-input"/>
        <button
          type="button"
          className="btn btn-info"
        >
          ADD
        </button>
        <button
          type="button"
          className="btn btn-danger"
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
