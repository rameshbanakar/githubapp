import React from 'react'

const Alert = ({alert}) => {
   return(
    alert!==null &&(
        <div style={{
            backgroundColor:"red"
        }}>
           <i class="fa-regular fa-circle-exclamation"></i>
            {alert.msg}
           
        
        
  
        </div>
    ))
  
}
export default Alert