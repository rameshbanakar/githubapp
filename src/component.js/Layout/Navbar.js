import React, { Component } from 'react'

export default class Navbar extends Component {
    static defaultProps={
          name:"GitHub finder"
          
    }
  render() {
    return (
      <nav className="bg-primary"  style={{marginBottom:"20px"}}>
        <i class="fa-brands fa-github"></i>
        {this.props.name}
        <div class="form-check form-switch" style={{float:"right"}}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" for="flexSwitchCheckDefault">Mode</label>
      </div>
        </nav>
    )
  }
}
