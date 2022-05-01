import React from 'react'

const status = (props) => {
  return (
    <div>
      <img src='images/status.png'/>
      {props.children}
    </div>
  )
}

export default status;