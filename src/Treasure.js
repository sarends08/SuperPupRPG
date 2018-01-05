import React, { Component }  from 'react';
import {DogBone, DogBall, Dog} from './Image.js'
import './Treasure.css'

export class Treasure extends Component {

  render(){
    const {toggleFoundItem, updateStats, dogHP, itemHP, itemAtk, hideButtons, hideStory, goBack, foundItem, counterToChangeInstance} = this.props;


    let treasureStatsComp = null;
    let acceptItemComp = null;
    let backButtonComp = null;
    let boneGif = null; 
    let ballGif = null;
    let dogGif = null;

    let stats = <TreasureStats itemHP={itemHP} itemAtk={itemAtk} />
    let accept = <AcceptItem update={this.props.update} />
    let back = <BackButton goBack = {goBack} />
    let bone = <DogBone/>
    let ball = <DogBall/>
    let dog = <Dog/>


      // Try to refactor
      if (this.props.direction === 'Left' && counterToChangeInstance === 0) {
        if(foundItem){
          treasureStatsComp = stats;
          acceptItemComp = accept;
          backButtonComp = back; 
          boneGif = bone; 
        }
        
        acceptItemComp = accept; 
        backButtonComp = back;
        boneGif = bone;

      }else if (this.props.direction === 'Center' && counterToChangeInstance === 0){
        backButtonComp = back; 
        dogGif = dog;
          
      }else if(this.props.direction=== 'Center' && counterToChangeInstance === 1){
        if(foundItem){
          treasureStatsComp = stats;
          acceptItemComp = accept;
          backButtonComp = back;
          ballGif = ball;

        }
        
        acceptItemComp = accept;
        backButtonComp = back;
        ballGif = ball;

      }else if(this.props.direction === 'Center' && counterToChangeInstance === 2) { 
        backButtonComp = back; 

      }else if (this.props.direction === 'Left' && counterToChangeInstance === 2) {
        backButtonComp = back;
      }
    
    return(
        <div className='image-text-container'>
          {boneGif}
          {ballGif}
          {dogGif}
          {treasureStatsComp}
          <div className='btn-container'>
            {acceptItemComp}
            {backButtonComp}
          </div>
        </div>

    );
  }
}



export const AcceptItem = ({update}) => {
    return(
      <button className='opt-btn' onClick={update}>Accept Item</button>
    );
}

export const TreasureStats = ({itemHP, itemAtk}) => {
  return(
    <p className='stat-text'>You received +{itemHP}HP and +{itemAtk}ATK!</p>
    );
}

export const BackButton = ({goBack}) => {
  return(
      <button className = 'opt-btn' onClick={goBack}>Go Back</button>
    );
}



