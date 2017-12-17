import React, { Component } from 'react';
import Choices from "./Choices";
import Image from "./Image";
import Text from "./Text";
import './App.css';

class App extends Component {
  
  render() {
    const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    paddingTop: '10%',
  };

    return (
     <div className= 'container' style={containerStyle}>
       <h1 style= 
       {{fontFamily: 'Bungee'}}
       >Super Pup RPG</h1>
       <Image />
       <Text />
       <Choices />
     </div>
    );
  }
}



export default App;
