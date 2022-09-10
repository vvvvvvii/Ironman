import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  // useEffect(() => {
  //   console.log(name);
  // }, [name]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      msg,
    };
    fetch("http://localhost:8000/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("success");
      setName("");
      setEmail("");
      setMsg("");
    });
  };
  return (
    <div className="box" style={{ backgroundColor: "#e3c3d1" }}>
      <h2>聯繫我們</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="contactName">姓名</label>
        <input
          type="text"
          id="contactName"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="contactEmail">Email</label>
        <input
          type="text"
          id="contactEmail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="contactMsg">意見</label>
        <textarea
          name="contactMsg"
          id="contactMsg"
          cols="30"
          rows="10"
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <div className="text-center">
          <button>送出</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
