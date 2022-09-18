import React from "react";
import { Link, useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();
  const backToPrevious = () => {
    // history.go(-1);
    history.push("/");
  };
  return (
    <div className="box text-center">
      <h2>404 Not Found (Ｔ▽Ｔ)</h2>
      <Link to="/" className="btn">
        回到首頁
      </Link>
      <button className="btn btn-outline ml-1" onClick={backToPrevious}>
        回上頁
      </button>
    </div>
  );
}

export default NotFound;