import React from 'react'
import { Spinner } from '../Layout/Spinner'
import "./style.css"
import PropTypes from 'prop-types'
const Users= ({loading,users})=> {
  if(loading){
    return(
      <div>
        <Spinner/>
      </div>
    )
  }
  else{
    return(
      <div>
        {users.map(user=>(
        <div className='card ' key={user.id}>
        <img src={user.avatar_url} alt="" className='round-img' style={{width:"80px"}}/>
        {user.login}
        <a href={user.html_url} className="btn btn-dark">More</a>
        
      </div>
      ))}
      </div>
    )

  }
}
Users.propTypes={
  users:PropTypes.array.isRequired,
  loading:PropTypes.bool.isRequired
  
}

export default Users