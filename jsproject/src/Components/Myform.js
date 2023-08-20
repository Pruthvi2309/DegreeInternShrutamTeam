import React, { Component } from 'react'

class Myform extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fname:'',
         mname:'',
         lname:''
      }
    }
    changefname=event=>{
        this.setState({
            fname:event.target.value
        })
    }
    changemname=event=>{
        this.setState({
            mname:event.target.value
        })
    }
    changelname=event=>{
        this.setState({
            lname:event.target.value
        })
    }
    onsubmit=event=>{
        alert('${this.state.fname, ${this.state.mname}, ${this.state.lname')
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onsubmit}></form>
      </div>
    )
  }
}

export default Myform