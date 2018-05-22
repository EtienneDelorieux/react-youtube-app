// React
import React from 'react'


const Button = (props) => {
  return (
    <button type={props.type} className={props.btnClass}>{props.text}</button>
  )
}


export default Button
