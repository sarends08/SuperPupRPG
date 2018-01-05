import React, { Component } from 'react';
import {Treasure, BackButton, AcceptItem, TreasureStats} from './Treasure';
import {MonsterInstance, AttackResult, Winner, Loser, Reload} from './MonsterInstance';
import {FirstInstanceText, StartGame, GAMETEXT} from './FirstInstanceText';
import {SecondInstanceText, GAMETEXTB} from './SecondInstanceText';
import {VacuumMonster, CloudMonster, KittyMonster} from './Image'
import './Directions.css'

export class Directions extends Component {
  constructor(props){
    super(props);
    this.state = {
      direction: '',
      showInstance: true,
      showStartGame: false,
      counterToChangeInstance: 0
    };
    this.directionState = this.directionState.bind(this);
    this.goBack = this.goBack.bind(this);
    this.hideInstance= this.hideInstance.bind(this);
    this.hideStartGame= this.hideStartGame.bind(this);
    this.changeInstance= this.changeInstance.bind(this);
    this.update= this.update.bind(this);
  }

   directionState(e) {
     this.props.hideButtons();
     this.props.hideStory();
     this.hideStartGame();
    return this.setState({direction: e.target.value});
  }
  
  goBack(){
    this.props.hideButtons();
    this.props.hideStory();
    this.hideStartGame();
    if(this.state.showInstance){
    	this.hideInstance();
    }
    return this.setState({direction: ''});
  }

  hideInstance(){
  	this.setState({showInstance: !this.state.showInstance})
  }

  hideStartGame(){
  	this.setState({showStartGame: !this.state.showStartGame})
  }

  changeInstance(){
  	this.setState({counterToChangeInstance: this.state.counterToChangeInstance + 1});
  	this.setState({direction: ''});
  }

  update(){
  	this.props.toggleFoundItem();
  	this.props.updateStats();
  };
  
  render(){
    const optionArray = [];
    
    const {showButtons, hideButtons, showStory, foundItem, toggleFoundItem,
    hideStory, gameText, updateStats, directionState}     
    = this.props;

    const {showInstance, showStartGame, direction} = this.state;

    let vacuumGif = null;
    let vacuum = <VacuumMonster/>
    
    let cloudGif = null;
    let cloud = <CloudMonster/>

    let kittyGif = null;
    let kitty = <KittyMonster/>

    let treasureComponent = null;
    let treasure = <Treasure
		    		dogHP={this.props.dogHP}
			      	itemHP={this.props.itemHP}
			      	itemAtk={this.props.itemAtk}
			      	direction={this.state.direction} 
			      	updateStats={updateStats}
			      	toggleFoundItem={toggleFoundItem}
			      	hideButtons={this.props.hideButtons}
			      	hideStory={this.props.hideStory}
			      	goBack={this.goBack}
			      	update={this.update}
			      	foundItem={this.props.foundItem}
			      	counterToChangeInstance={this.state.counterToChangeInstance}/>;

	let monsterComponent = null; 
	let monster = <MonsterInstance
	          dogHP={this.props.dogHP}
	          monstHP={this.props.monstHP}
	          turnToggle={this.props.turnToggle}
	          attack={this.props.attack} 
	          storyProgression={this.props.storyProgression}
	          hideInstance={this.hideInstance}
	          hideStartGame={this.hideStartGame}
	          showInstance={this.state.showInstance}
	          changeInstance={this.changeInstance}
	          direction={this.state.direction}
	          attackType={this.props.attackType}
	          clearAttackType={this.props.clearAttackType}
	          counterToChangeInstance={this.state.counterToChangeInstance}
	          hideStory={this.props.hideStory}
	          hideButtons={this.props.hideButtons}
	          resetMonster={this.props.resetMonster}
	          addToStoryCounter={this.props.addToStoryCounter}
	          goBack={this.goBack}/>
 

    //Try to refactor
    if (this.state.direction === 'Left' && this.state.counterToChangeInstance === 0){
		treasureComponent = treasure;

    }else if (this.state.direction === 'Center' && this.state.counterToChangeInstance === 0){
    	treasureComponent = treasure;
    }else if (this.state.direction === 'Center' && this.state.counterToChangeInstance === 1){
    	treasureComponent = treasure;
    }else if (this.state.direction === 'Center' && this.state.counterToChangeInstance === 2){
    	treasureComponent = treasure;	
  	}else if (this.state.direction === 'Right' && this.state.counterToChangeInstance === 0) {
  		monsterComponent = monster;
      vacuumGif = vacuum;
  	}else if (this.state.direction === 'Left' && this.state.counterToChangeInstance === 1){
  		monsterComponent = monster;
      cloudGif = cloud;
  	}else if (this.state.direction === 'Left' && this.state.counterToChangeInstance === 2){
    	cloudGif = cloud;
      treasureComponent = treasure;	
  	}else if (this.state.direction === 'Right' && this.state.counterToChangeInstance === 1){
  		monsterComponent = monster;
      kittyGif = kitty;
  	}else if (this.state.direction === 'Right' && this.state.counterToChangeInstance === 2){
  		monsterComponent = monster;
      kittyGif = kitty;
  	}



    return (
    <div>
      	{ showButtons ? 
       	<DirectionButtons 
       	directionState={this.directionState}/>
      : null }
	    <div>
	        <div>
	        	{this.state.counterToChangeInstance === 0 ?
	        	<FirstInstanceText 
	        	direction={this.state.direction}
	        	showStartGame={this.state.showStartGame}
	        	gameText={this.props.gameText}/>
	        	: null}
	        	{this.state.counterToChangeInstance === 1 ?
	        	<SecondInstanceText
	        	direction={this.state.direction}
	        	showStartGame={this.state.showStartGame}
	        	gameTextB={this.props.gameTextB}/>
	        	: null}
	        	{this.state.counterToChangeInstance === 2 ?
	        	<SecondInstanceText
	        	direction={this.state.direction}
	        	showStartGame={this.state.showStartGame}
	        	gameTextB={this.props.gameTextB}/>
	        	: null}
	        </div>
	        <div className='div-container'>
	        {treasureComponent}
	 		    </div>
          <div className='div-container'>
          {vacuumGif}
          {cloudGif}
          {kittyGif}
           </div>
	        {monsterComponent}
	    </div>
  </div>
    );
  }
}



export class DirectionButtons extends Component{
	render(){
		const {directionState} = this.props;
		return(
			<div className='div-container'>   
	        <button className='dir-btn' onClick={directionState} value='Left'>Left</button>
	        <button className='dir-btn' onClick={directionState} value='Center'>Center</button>
	        <button className='dir-btn' onClick={directionState} value='Right'>Right</button>
        </div>
			)
	}
}






