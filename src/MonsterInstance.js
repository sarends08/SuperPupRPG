import React, { Component } from 'react';

class MonsterInstance extends Component {

  render(){
    const {turnToggle, attack, dogHP, monstHP} = this.props
    
    function attackTurn(){
      let turns = 0;
      let attackDelay = setInterval(function(){
        if (monstHP <= 0)
          clearInterval(attackDelay);
        else if(turns === 2)
          clearInterval(attackDelay);
        else{
        turnToggle();
        attack();
        turns++;}
      }, 1000)
    }
    
    

    let winner = null;
        
    let loser = null;
        
    if(dogHP <= 0)
      loser = <p>You lose!</p>;
    else if(monstHP <= 0)
      winner = <p>You win!</p>;
  
    return(
      <div>
        <button onClick={attackTurn}>Attack</button>
        <button onClick={this.props.goBack}>Run Away</button>
        <p>Monster HP:{monstHP}</p>
        <p>Your HP:{dogHP}</p>
        {winner}
        {loser}
      </div>
  )
 }
}


export default MonsterInstance;