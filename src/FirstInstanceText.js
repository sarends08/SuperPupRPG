import React, {Component} from 'react';

export class FirstInstanceText extends Component {
	render(){

		const optionArray = [];

		this.props.gameText.forEach((gameText) => {
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

export class StartGame extends Component {
  render(){   
    return (
      <div className= 'div-container'>
        <ul 
        className='text'>
          <li>{this.props.text}</li>
        </ul>
      </div>
    );
  }
}

export const GAMETEXT = [
  {
    direction: 'Left', 
    text: 'You found your bone on the ground! You should definitely bring this to the doghouse.'
  },
  {
    direction: 'Center',
    text: "You spot the doghouse outside the living room window. You should try to find your way outside!"
  },
  {
    direction: 'Right',
    text: "Oh no! Your human has started the vacuum! You've got to get around it!"
  }
];