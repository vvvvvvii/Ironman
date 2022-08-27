import React from 'react'
import Item from './Item'

function ComponentExample() {
  return (
    <div>
      <h1>元件</h1>
      <h3>好處</h3>
      <ul>
        <li>關注點分離</li>
        <li>減少重複撰寫</li>
      </ul>
      <h3>實際撰寫</h3>
      <Item/>
      <h3>區別</h3>
      <ul>
        <li>寫法： class component / functional component</li>
        <li>狀態： 無狀態 / 有狀態</li>
        <li>職責： 展示型 / 容器型</li>
      </ul>
    </div>
  )
}

export default ComponentExample
