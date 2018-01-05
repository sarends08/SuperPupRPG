import React, { Component } from 'react';
import './MonsterInstance.css'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'


export class MonsterInstance extends Component {
	constructor(props){
		super(props);
		this.state = {
			attackDelay: '',
			turns: 0,
			click: false
		}
	this.attackNow = this.attackNow.bind(this);
	this.attackTimer = this.attackTimer.bind(this);
	this.moveToNextLevel = this.moveToNextLevel.bind(this);
	this.moveToNextMonster = this.moveToNextMonster.bind(this);
	this.moveToEndGame = this.moveToEndGame.bind(this);
	}


	componentDidUpdate(prevProps, prevState){
		if(this.props.monstHP <= 0){
			clearInterval(this.state.attackDelay)
		}else if(this.state.turns === 2){
			clearInterval(this.state.attackDelay)
			this.setState({turns: 0, click: false})
		}
	}


  	attackNow(){
  		this.props.turnToggle();
  		this.props.attack();
  		this.setState({turns: this.state.turns + 1})
  	}
	
  	attackTimer(){
  		if(!this.state.click){
  			let attackDelay = setInterval(this.attackNow, 2000)
      		this.setState({attackDelay: attackDelay, click: true})
  		}
      	
  	}

  	moveToNextLevel(){
  		this.props.hideStartGame();
  		this.props.storyProgression();
  		this.props.changeInstance();
  		this.props.clearAttackType();
  	}

  	moveToNextMonster(){
  		this.props.hideStartGame();
  		this.props.resetMonster();
  		this.props.changeInstance();
  		this.props.clearAttackType();
  	}

  	moveToEndGame(){
  		this.props.hideStory();
  		this.props.hideStartGame();
  		this.props.clearAttackType();
  		this.props.changeInstance(); 
  		this.props.addToStoryCounter();
  	}

  	render(){
	    const {turnToggle, attack, dogHP, monstHP, goBack, 
	    storyProgression, hideInstance, hideStartGame} = this.props;

	    return(
	    	<div> 
		    	<div className='instance-container'>
		    		<AttackResult 
			      	attackType={this.props.attackType}/>
			      	<div className='inner-instance-container'>
			        	<button className='atk-btns' onClick={this.attackTimer}>Attack</button>
			        	<button className='atk-btns' onClick={goBack}>Run Away</button>
			      	</div>
			        <p>Monster HP:<span style={{color: 'red'}}>{monstHP}</span></p>
			        <p>Your HP:<span style={{color: 'blue'}}>{dogHP}</span></p>
			       	<Winner monstHP={monstHP}/>
			        <Loser dogHP={dogHP} />
			        <Reload dogHP={dogHP} />
			        <Move monstHP={monstHP} 
			        moveToNextLevel={this.moveToNextLevel} 
			        moveToNextMonster={this.moveToNextMonster}
			        counterToChangeInstance={this.props.counterToChangeInstance}
			        moveToEndGame={this.moveToEndGame}
			        direction = {this.props.direction}/>
		      	</div>
	      	</div>
	  	)
	}
}

export const Move = ({monstHP, moveToNextLevel, moveToNextMonster, counterToChangeInstance, moveToEndGame, direction}) => {
	let moveButton = null;

	if(counterToChangeInstance === 0){
		moveButton = <button className='atk-btns' onClick={moveToNextLevel}> Move Forward </button>
	}else if(counterToChangeInstance === 1 && direction === 'Left'){
		moveButton = <button className='atk-btns' onClick={moveToNextMonster}> Go Back </button>
	}else if (counterToChangeInstance === 1 && direction === 'Right'){
		moveButton = <button className='atk-btns' onClick={moveToEndGame}> Move Forward </button>
	}else if (counterToChangeInstance === 2 && direction === 'Right'){
		moveButton = <button className='atk-btns' onClick={moveToEndGame}> Move Forward </button>
	}
	return(
		<div>
		{monstHP <= 0 ?
			moveButton
		: null }
		</div>
	);
}

export const Reload = ({dogHP}) => {
	let reload = function(){
		window.location.reload();
	}
	return (
		<div>
		{dogHP <= 0 ?
			<button className='atk-btns' onClick={reload}>Start Over!</button>
		: null }
		</div>
		)
}

export const Loser = ({dogHP}) => {
	return (
		<div>
		{dogHP <= 0 ? 
			<p>You Lose!</p>
		: null}
		</div>
	);
}

export const Winner = ({monstHP}) => {
		return(
			<div>
			{monstHP <= 0 ? 
				<p>You win!</p>
			: null }
			</div>
		)
}

export class AttackResult extends Component{
	render(){
		const {attackType, playerTurn} = this.props


		return(
			<div>
				<CSSTransitionGroup
					transitionName="fade"
					transitionEnterTimeout={300}
					transitionLeave={false}>
				<p className = 'attack-type' key={attackType}>{attackType}</p>
				</CSSTransitionGroup>
			</div>
		);
	}
}

