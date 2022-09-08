import React,{Component} from 'react';

import './App.css';
import axios from "axios"
import Navbar from './component.js/Layout/Navbar';
import Users from './component.js/users/users';
import Search from './component.js/Layout/Search';
import  Alert  from './component.js/Layout/Alert';
class App extends Component {
  state={
    users:[],
    loading:false,
    alert:null
  }
  async componentDidMount()
  {
    
    this.setState({loading:true})
    const res=await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users:res.data,loading:false })
  }
  SearchUsers= async text=>{
    this.setState({loading:true})
    const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users:res.data.items,loading:false })
  }
  onClear=()=>this.setState({users:[],loading:false})
 
  
  setAlert=(msg)=>{
    this.setState({alert:{msg}})
    setTimeout(()=>(
      this.setState({alert:null})
    ),3000)
   
  }
  render(){
  return (
 
      <div>
        <Navbar/>
        
        <div className='container'>
        <Alert alert={this.state.alert}/>
        <Search SearchUsers={this.SearchUsers} 
                  onclear={this.onClear} 
                  showClear={this.state.users.length>0?true:false} 
                  setAlert={this.setAlert.bind(this)}/>
              <Users loading={this.state.loading} users={this.state.users}/>
        </div>
       
      </div>  
  )
}
}

export default App;
