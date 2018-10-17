import React, { Component } from 'react'

class Button extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <button onClick={this.props.filter} class='sideButton'>{this.props.name}</button>
      </div>
    )
  }
}

export default Button
