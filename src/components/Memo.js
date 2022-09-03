import React from 'react';
import Booking from "./Booking";
import Booking2 from "./Booking2";

function Memo() {
  return (
    <div>
      <h1>Props</h1>
      <h2>「單向傳遞」父元件到子元件的資料</h2>
      <h3>實際撰寫</h3>
      <Booking/>
      <Booking2/>
      <h3>注意</h3>
      <ul>
        <li>單向傳遞原則</li>
        <li>和 State 的差別</li>
        {/* <table>
          <thead>
            <tr>
              <td></td>
              <td>State</td>
              <td>Props</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>控制</td>
              <td>自己本身</td>
              <td>讓父元件來控制自己</td>
            </tr>
            <tr>
              <td>改變</td>
              <td>可被改變</td>
              <td>唯讀、不可改變</td>
            </tr>
          </tbody>
        </table> */}
      </ul>
    </div>
  )
}

export default Memo
