import React, { Component } from 'react';
import Choices from "./Choices";
import Image from "./Image";
import Text from "./Text";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'You suddenly find yourself as a dopey hound pup named Cooper. Looking around you see that you are trapped in a backyard area, and need to find your way to the doghouse to get comfy. Unfortunately, there are several obstacles which will disrupt your path to comfiness.',
      choices: ['Move forward >']
    }
  }
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
       {{fontFamily: 'Bungee',
         fontSize: '4em',
         color: '#00ffcc',
         textShadow: '3px 2px #00b38f' }}
       >Super Pup <span style={{
        color: 'blue'
       }}>RPG</span></h1>
       <Image />
       <Text text={this.state.text}/>
       <Choices choices={this.state.choices}/>
     </div>
    );
  }
}


export default App;
