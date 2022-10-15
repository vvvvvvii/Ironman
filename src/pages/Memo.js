import React from "react";

function Memo() {
  return (
    <div>
      <h1>在 Github 上傳 React 、在 Code Sandbox 使用 React</h1>
      <h3>上傳 Github 步驟</h3>
      <ul>
        <li>
          1. 連進你的 Github 創建一個儲存庫（如果你已經做好，可以跳過這步）
        </li>
        <li>2. 創建你的 React 專案（如果你已經做好，可以跳過這步）</li>
        <li>
          3. 安裝 gh-pages package ：<p>npm install gh-pages --save-dev</p>
        </li>
        <li>
          4. 在 package.json 加上幾行：
          <p>"homepage": "https://username.github.io/repo-name",</p>
          <p>"predeploy": "npm run build",</p>
          <p>"deploy": "gh-pages -d build",</p>
        </li>
        <li>
          5. 使用 git remote 將本地端連上遠端（如果你已經連接過，可以跳過這步）
          <p>git remote add origin https://username.github.io/repo-name .git</p>
        </li>
        <li>
          6. 只需在終端機輸入此指令，就會同時跑 predeploy 和 deploy ：
          <p>npm run deploy</p>
          {/* 自己設定 commit message */}
          {/* <p>npm run deploy -- -m "Deploy React app to GitHub Pages"</p> */}
        </li>
        <li>7. 在 Github 的設定把預設分支設成 gh-pages 並把儲存庫設為公開</li>
      </ul>
      <h3>Code Sandbox 介紹</h3>
    </div>
  );
}

export default Memo;
