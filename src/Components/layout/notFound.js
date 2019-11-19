import React from "react";

const NotFound = () => {
  return (
    <div className="Container" style={{ textAlign: "center" }}>
      <h1 className="mt-200" style={{ textAlign: "center" }}>
        404
      </h1>
      <h2 style={{ textAlign: "center" }}>Page Not Found</h2>
      <button className="btn btn-danger">OOPS</button>
    </div>
  );
};

export default NotFound;
