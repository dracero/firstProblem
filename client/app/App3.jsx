import React from 'react';
 
export class Sumit extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); 
  }
  
  
  handleClick(event) {
    this.props.onClick(); 
   }
  

  render() {
    return (
            <button onClick={this.handleClick}>Enviar</button> );
  }
}
