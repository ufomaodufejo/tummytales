import React from 'react'

export default function Card(props) {
  const {menu} = props
  
  return (
    <div className="menucard">
      <div className="menuimg-div">
        <img src={menu.img} alt="smallchops" />
      </div>
      <div className="menucard-body">
        <h2 className="menucard-title">{menu.title}</h2>
        <p className="menucard-text">{menu.text}</p>
        <p className="menucard-price">{menu.price}</p>
        <button className="btn" onClick={props.onAdd}>Add to Cart</button>
      </div>
    </div>
  )
}
