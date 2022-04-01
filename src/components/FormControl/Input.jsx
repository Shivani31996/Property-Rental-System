import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Input(props) {
  return (
    <div>
        <input type={props.type} className={props.className} id={props.id} placeholder={props.placeholder} />
    </div>
  )
}

export default Input