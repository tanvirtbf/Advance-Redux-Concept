import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch({ type: "increment", payload: 1 })}
      >
        +1
      </button>
      <button type="button" className="btn btn-success">
        -1
      </button>
    </div>
  );
};

export default Controls;
