import React, {Component} from 'react';
import {StartGame} from './FirstInstanceText'

export class SecondInstanceText extends Component {
	render(){
		
		const optionArray = [];


		this.props.gameTextB.forEach((gameText) => {
      		if(this.props.direction === gameText.direction)
      			if (this.props.showStartGame)
        			optionArray.push(
          				<StartGame key = {gameText.text} text = {gameText.text}/>
          			);
    	});
		return(
			<div>{optionArray}</div>
			)
	}
}

export const GAMETEXTB = [
	{
		direction: 'Left',
		text: 'Oh no! It looks like a storm is coming! You hate thunderstorms!'
	},
	{
		direction: 'Center',
		text: 'You found your favorite ball! You receive a surge of energy!'
	},
	{
		direction: 'Right',
		text: 'Drat! An evil black cat is blocking your way to the doghouse!'
	}
]