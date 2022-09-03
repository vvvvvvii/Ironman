import React from 'react';
import { useState } from 'react';
import Menu from './Menu';

function Memo() {
  return (
    <div>
      <h1>重複渲染、條件渲染、預設值、 dangerouslySetInnerHTML</h1>
      <h3>實際撰寫</h3>
      <Menu/>
      <ul>
        <li>重複渲染： map</li>
        <li>條件渲染： &&</li>
        <li>預設值： ||</li>
        <li>dangerouslySetInnerHTML</li>
      </ul>
    </div>
  )
}

export default Memo
