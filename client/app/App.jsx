import React from 'react';
import {Textprob} from './App2.jsx';
import {Sumit} from './App3.jsx';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pepe: "" };
    this.changeName = this.changeName.bind(this);
    this.doInsert = this.doInsert.bind(this);
  }
 
doInsert(graba) {
  
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
   if (this.readyState === 4) {
     console.log(this.responseText);
   }
  });
 xhr.open("POST", "http://localhost:3000/");
    xhr.send(<body>Hola</body>);
}
    
changeName(newName) {
    this.setState({
      pepe: newName  });
  }

  render() {
        return( 
              
                <div> 
                   <Textprob  onChange={this.changeName} />
                   <Sumit onClick={this.doInsert} />
               </div>
                 
  );
  }
}
 
export default Parent;
