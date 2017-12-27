import React, { Component } from 'react';
import Treasure from './Treasure';
import MonsterInstance from './MonsterInstance';

export class Directions extends Component {
  constructor(props){
    super(props);
    this.state = {
      direction: ''
    };
    this.directionState = this.directionState.bind(this);
    this.goBack = this.goBack.bind(this);
  }

   directionState(e) {
     this.props.hideButtons();
     this.props.hideStory();
    return this.setState({direction: e.target.value});
  }
  
  goBack(){
    this.props.hideButtons();
    this.props.hideStory();
  }
  
  render(){
    const optionArray = [];
    
    const {showButtons, hideButtons, showStory, foundItem, toggleFoundItem,
    hideStory, gameText, updateStats, direction, directionState}     
    = this.props;
    
    this.props.gameText.forEach((gameText) => {
      if(this.state.direction === gameText.direction)
        optionArray.push(
          <StartGame key = {gameText.text} text = {gameText.text}/>
          );
      });
    
    !showStory && <MonsterInstance/>
    
    return (
    <div>
      { showButtons ? 
       <div>   
        <button onClick={this.directionState} value='Left'>Left</button>
        <button onClick={this.directionState} value='Center'>Center</button>
        <button onClick={this.directionState} value='Right'>Right</button>
        </div>
      : 
      <div>
        <div>{optionArray}</div>
        <Treasure 
          dogHP={this.props.dogHP}
          itemHP={this.props.itemHP}
          itemAtk={this.props.itemAtk}
          direction={this.state.direction} 
          updateStats={updateStats}
          toggleFoundItem={toggleFoundItem}
          hideButtons={this.props.hideButtons}
          hideStory={this.props.hideStory}
          />
          { this.state.direction === 'Right' ?
        <MonsterInstance
          dogHP={this.props.dogHP}
          monstHP={this.props.monstHP}
          turnToggle={this.props.turnToggle}
          attack={this.props.attack} 
          goBack={this.goBack}/>
          : null }
       </div>
       }
  </div>
    );
  }
}

export class StartGame extends Component {
  render(){   
    return (
      <div>
        <ul style={{listStyle: 'none'}}>
          <li>{this.props.text}</li>
        </ul>
      </div>
    );
  }
}

export const GAMETEXT = [
  {
    direction: 'Left', 
    text: 'You found treasure'
  },
  {
    direction: 'Center',
    text: "There's nothing here"
  },
  {
    direction: 'Right',
    text: 'Monster encounter'
  }
];

