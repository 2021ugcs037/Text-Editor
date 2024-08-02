import React from 'react'

function Alert(props) {
  return (
    
      <div classname="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>{props.alert}</strong>
      {/* <button type="button" classname="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
    
  )
}

export default Alert
