import React, { Component } from 'react'

export default class Search extends Component {
  state={text:""}
  onChange=e=>{
    this.setState({[e.target.name]:e.target.value})

  }
  onSubmit=(e)=>{
     e.preventDefault()
     if(this.state.text===""){
      
        this.props.setAlert("Please enter somthing","light")
      }
      else{
    
        this.props.SearchUsers(this.state.text)
        this.setState({text:" "})
      }
  }
  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
            <input type="text" name="text" className='form-control' placeholder='search user...' value={this.state.text} onChange={this.onChange}/>
            <input type="submit" value="Search" className='btn btn-dark btn-block' />
            {this.props.showClear&&<button type="button" className='btn btn-block btn-primary' onClick={this.props.onclear} style={{float:"right"}}>Clear</button>}
      
        </form>
        </div>
       
    )
  }
}
