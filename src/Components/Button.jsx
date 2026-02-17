import React from 'react'

const Button = ({color ,setselectedColor,children}) => {
  console.log(color)
 function setcolor(){
setselectedColor(color)
 }
  return ( 
    
      <button onClick={setcolor} style={{
        backgroundColor:color
      }}>{children}</button>
    
  )
}

export default Button
