import React from "react";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

function BackStage() {
  const { data } = useFetch("http://localhost:8000/feedback");

  const deleteMsg = (id) => {
    fetch(`http://localhost:8000/feedback/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log(`delete msg id${id}`);
    });
  };

  return (
    <div className="box">
      <h2>假裝這裡是後台</h2>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <p>姓名： {item.name}</p>
            <p>Email： {item.email}</p>
            <p>訊息： {item.msg}</p>
            <button onClick={() => deleteMsg(item.id)}>刪除</button>
          </div>
        ))}
    </div>
  );
}

export default BackStage;
