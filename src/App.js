import React, { Component } from 'react';
import {Directions, DirectionButtons} from "./Directions";
import {Dog, DogHouse} from "./Image";
import './App.css';

export class App extends Component {
    constructor(props){
    super(props);
    this.state = {
      itemHP: 20,
      dogHP: 100,
      monstHP: 70,
      itemAtk: 5,
      dogAtk: 15,
      monstAtk: 15,
      counter: 0,
      showStory: true,
      showButtons: true,
      foundItem: false,
      playerTurn: true,
      attackType: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.hideStory = this.hideStory.bind(this);
    this.hideButtons = this.hideButtons.bind(this);
    this.toggleFoundItem = this.toggleFoundItem.bind(this);
    this.updateStats = this.updateStats.bind(this);
    this.turnToggle = this.turnToggle.bind(this);
    this.attack = this.attack.bind(this);
    this.updateFight = this.updateFight.bind(this);
    this.storyProgression = this.storyProgression.bind(this);
    this.clearAttackType = this.clearAttackType.bind(this);
    this.resetMonster = this.resetMonster.bind(this);
    this.addToStoryCounter = this.addToStoryCounter.bind(this);
  }

  handleClick() {
    if(this.state.counter < 2)
      return this.setState({counter: this.state.counter + 1});
  }

  hideStory(){
    this.setState({showStory: !this.state.showStory});
  }

  addToStoryCounter(){
    this.setState({counter: this.state.counter + 1})
  }

  storyProgression(){
    this.hideStory()
    this.hideButtons()
    if(this.state.monstHP <= 0 && !this.state.showStory){
      this.setState({counter: this.state.counter + 1, monstHP: 100, itemHP: 120, itemAtk: 10});
    if (this.state.foundItem){
      this.toggleFoundItem();
    }
  }
}

  resetMonster(){
    this.hideStory();
    this.hideButtons();
    if (this.state.monstHP <= 0 && !this.state.showStory){
      this.setState({monstHP: 80, monstAtk: 20});
    }
  }
  
  hideButtons(){
    this.setState({showButtons: !this.state.showButtons});
  }
  // if button is pressed 3 times stats are added again
  toggleFoundItem(){
    this.setState({foundItem: !this.state.foundItem});
  }
  
  updateStats(){
    if (!this.state.foundItem) {
      return(
        this.setState(prevState => ({dogHP: prevState.dogHP + this.state.itemHP})),
        this.setState(prevState => ({dogAtk: prevState.dogAtk + this.state.itemAtk}))
      );
    }
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
        return this.setState({attackType: 'MISS!'});
    }else if (random >= 3 && random <=4){
      return (
        this.updateFight(-5),
        this.setState({attackType: 'PARRY!'}));
    }else if (random >=5 && random <= 8){
      return (
        this.updateFight(0),
        this.setState({attackType: 'HIT!'}));
    }else if (random >=8 && random <= 10){
      return (
        this.updateFight(5),
        this.setState({attackType: 'CRITICAL HIT!'}));
    }
  }

  clearAttackType(){
    if(this.state.monstHP <= 0){
      this.setState({attackType: ''})
    }
  }


  render() {
    const arrayStory = []
    const {gameText, story} = this.props;
    const {showButtons, showStory, dogAtk, dogHP, monstHP,
    itemHP, itemAtk, attackType, foundItem} = this.state;

    let dogGif = <Dog/>
    let noDog = null;

    let dogHouseGif = null;
    let doghouse = <DogHouse/>


    if (this.state.counter === 4) {
      dogHouseGif = doghouse;
      dogGif = noDog;
    }

    
    story.forEach((story) => {
     if (this.state.counter === story.id)
       arrayStory.push(
     <Text
       hideStory = {this.hideStory}
       text = {story.text}
       key = {story.id} />
       );
   });

    return (
     <div className= 'container'>
       <h1 className= 'title'>Super Pup <span className= 'title-span'>RPG</span></h1>
       
       <div className= 'inner-container'>
        { showStory ? 
        <div className= 'story-text'
        onClick={this.handleClick}>
        {dogGif}
        {dogHouseGif}
        {arrayStory}</div>
        : null }
          { this.state.counter >= 2 ?
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
              foundItem={this.state.foundItem}
              attackType={attackType}
              playerTurn={this.state.playerTurn}
              storyProgression={this.storyProgression}
              gameTextB={this.props.gameTextB}
              clearAttackType ={this.clearAttackType}
              resetMonster={this.resetMonster}
              addToStoryCounter={this.addToStoryCounter}
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
    return <p>{this.props.text}</p>;   
  }
}



export const STORY = [
            {
              id: 0,
              text: 'Start Game >'
            },
            {
              id: 1,
              text: 'You suddenly find yourself as a dopey hound dog named Cooper. Looking around, you see that you are trapped inside the house, but the best place to nap is outside in the doghouse! What will you do?'
            },
            {
              id: 2,
              text: 'You look around the room and decide which way to go.'
            },
            {
              id: 3, 
              text: 'Whew! That was close, but you made it through the doggie-door and into the backyard! Where to now?'
            },
            {
              id: 4, 
              text: "You found the doghouse! Reward yourself with a nice long nap."
            }
]




