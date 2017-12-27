import React, { Component } from 'react';
import {Directions, StartGame, GAMETEXT} from "./Directions";
import Image from "./Image";
import './App.css';

export class App extends Component {
    constructor(props){
    super(props);
    this.state = {
      itemHP: 10,
      dogHP: 100,
      monstHP: 70,
      itemAtk: 5,
      dogAtk: 15,
      monstAtk: 15,
      counter: 0,
      showStory: true,
      showButtons: true,
      foundItem: true,
      playerTurn: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.hideStory = this.hideStory.bind(this);
    this.hideButtons = this.hideButtons.bind(this);
    this.toggleFoundItem = this.toggleFoundItem.bind(this);
    this.updateStats = this.updateStats.bind(this);
    this.turnToggle = this.turnToggle.bind(this);
    this.attack = this.attack.bind(this);
    this.updateFight = this.updateFight.bind(this);
  }
  
  handleClick() {
    if(this.state.counter < 2)
      return this.setState({counter: this.state.counter + 1});
  }
  
  hideStory(){
    this.state.showStory ? this.setState({showStory:false}) : this.setState({showStory: true});
  }
  
  hideButtons(){
    this.state.showButtons ? this.setState({showButtons:false}) : this.setState({showButtons: true});
  }
  // if button is pressed 3 times stats are added again
  toggleFoundItem(){
    this.state.foundItem ? this.setState({foundItem: false}) :
    this.setState({foundItem: true});
  }
  
  updateStats(){
    if (this.state.foundItem) 
      this.setState(prevState => ({dogHP: prevState.dogHP + this.state.itemHP}));
      this.setState(prevState => ({dogAtk: prevState.dogAtk + this.state.itemAtk}));
    };
  
  turnToggle(){
    this.state.playerTurn ? this.setState({playerTurn: false}) : this.setState({playerTurn: true})
  }
  
  updateFight(hit){
    if (this.state.playerTurn){
      this.setState(prevState => ({dogHP: prevState.dogHP - (hit + this.state.monstAtk)}));
    } else {
      this.setState(prevState => ({monstHP: prevState.monstHP - (hit + this.state.dogAtk)}));
    }
  }
  
  attack(activeHP, activeAtk){
    const random = Math.floor((Math.random() * 10) + 1);
    if(random >= 1 && random <= 2){
        return console.log('MISS')
    }else if (random >= 3 && random <=4){
      return (
        this.updateFight(-5),
        console.log('ATK - 5'));
    }else if (random >=5 && random <= 8){
      return (
        this.updateFight(0),
        console.log('ATK'));
    }else if (random >=8 && random <= 10){
      return (
        console.log('ATK + 5'),
        this.updateFight(5));
    }
  }

  render() {
    const arrayStory = []
    const {gameText, story} = this.props;
    const {showButtons, showStory, dogAtk, dogHP, monstHP, itemHP, itemAtk} = this.state;

    const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    paddingTop: '10%',
  };

    story.forEach((story) => {
     if (this.state.counter === story.id)
       arrayStory.push(
     <Text
       hideStory = {this.hideStory}
       text = {story.text}
       key = {story.text} />
       );
   });

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
       <div>
        { showStory ? 
        <h1 onClick={this.handleClick}>{arrayStory}</h1>
        : null }
          { this.state.counter === 2 ?
          <div>
            <Directions
              dogAtk={dogAtk}
              monstHP={monstHP}
              turnToggle={this.turnToggle}
              attack={this.attack} 
              dogHP={dogHP}
              itemHP={itemHP}
              itemAtk={itemAtk}
              gameText={gameText}
              hideStory={this.hideStory}
              showStory={showStory}
              hideButtons={this.hideButtons}
              showButtons={showButtons}
              toggleFoundItem={this.toggleFoundItem}
              updateStats={this.updateStats}/>
          </div>
            : null }
      </div>
     </div>
    );
  }
}

export class Text extends Component {
  render(){
    return <div>{this.props.text}</div>;   
  }
}



export const STORY = [
            {
              id: 0,
              text: 'Start Game >'
            },
            {
              id: 1,
              text: 'You suddenly find yourself as a dopey hound pup named Cooper. Looking around you see that you are trapped in a backyard area, and need to find your way to the doghouse to get comfy. Unfortunately, there are several obstacles which will disrupt your path to comfiness.'
            },
            {
              id: 2,
              text: 'You look around the room and decide which way to go'
            }

]




