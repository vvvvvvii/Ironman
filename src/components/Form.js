import React from "react";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <div className="box" style={{ backgroundColor: "#e3c3d1" }}>
      <h2>聯繫我們</h2>
      <form>
        <label htmlFor="contactName">姓名</label>
        <input type="text" id="contactName" />
        <label htmlFor="contactEmail">Email</label>
        <input type="text" id="contactEmail" />
        <label htmlFor="contactMsg">意見</label>
        <textarea
          name="contactMsg"
          id="contactMsg"
          cols="30"
          rows="10"
        ></textarea>
        <div className="text-center">
          <button>送出</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
