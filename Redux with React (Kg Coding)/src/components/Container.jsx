const Container = ({ children }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          {children}
        </div>
      </div>
    </>
  );
};

export default Container;
