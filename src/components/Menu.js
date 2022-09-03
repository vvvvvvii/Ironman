import React from 'react'
import { useState } from 'react';


function Menu() {
  const [menu, setMenu] = useState([
    {
      title:'大麥克',
      price: null,
      img: '/'
    },
    {
      title:'薯條',
      price: 20,
      img: '/'
    },
    {
      title:'可樂',
      price: 40,
      img: '/'
    },
  ])
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState('<p>article...</p>')
  return (
    <div className='box'>
      <h3>菜單</h3>
      {loading&&(<p>LOADING.......</p>)}
      {menu.map(item=>(
        <div key={item.title}>
          <p>{item.title}</p>
          <p>{item.price || '時價'}</p>
        </div>
      ))}
      <div dangerouslySetInnerHTML={{__html: article}}></div>
    </div>
  )
}

export default Menu
