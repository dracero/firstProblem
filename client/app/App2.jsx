import React from 'react';
 
export class Textprob extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {texto: ''};
    this.handleChange = this.handleChange.bind(this); 
  }
  
  
  handleChange(event) {
    this.setState({texto: event.target.value});
    this.props.onChange(event.target.value);  
  }
  

  render() {
    return (
            <textarea rows="3" cols="80" value={this.state.value} onChange={this.handleChange} /> );
  }
}
