import React from 'react'

function JsxExample() {

  return (
    <div>
      <h1>JSX</h1>
      <h2>JSX 是一種 JS 語法擴充、語法糖，用比較簡約的方式讓 JS 操控 DOM</h2>
      <h3>好處</h3>
      <ul>
        <li>寫起來比較簡單</li>
        <li>可以實現聲明式寫法</li>
        <li>不需要像 Vue 那樣使用額外的模板語言</li>
      </ul>
      <h3>注意</h3>
      <ul>
        <li>最外層只能包一個根節點</li>
        <li>不是 class 而是 className</li>
        <li>撰寫 style 行內樣式</li>
        <li>事件處理</li>
        <button>按鈕 1</button>
        <button>按鈕 2</button>
        <button>按鈕 3</button>
        <li>樣式可以搭配 ES6 擴展</li>
        <li>寫 JS 要用大括弧包覆</li>
      </ul>
    </div>
  )
}

export default JsxExample
