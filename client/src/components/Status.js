import React from 'react';

const status = (props) => {
  return (
    <div className='status'>
      <img className="status-image" src='images/status.png' alt ="loading"/>
      {props.children}
    </div>
  )
}

export default status;