import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const store = useSelector((store) => store);
  return (
    <>
      {store.privacy ? (
        <p>This is Privacy</p>
      ) : (
        <p className="lead mb-4">Counter Current Value : {store.counter}</p>
      )}
    </>
  );
};

export default DisplayCounter;
