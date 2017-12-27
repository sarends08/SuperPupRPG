import React, { Component }  from 'react';

class Treasure extends Component {

  render(){
    const {toggleFoundItem, updateStats, dogHP, itemHP, itemAtk, hideButtons, hideStory} = this.props;
    function update(){
      toggleFoundItem()
      updateStats()
    }
    function goBack(){
      hideStory()
      hideButtons()
    }
    
    let backButton = <button onClick={goBack}>Go Back</button>;
    
    let acceptItem = null;
    
    let treasureStats = null;
       
    this.props.direction === 'Left' && 
    (acceptItem = <button onClick={update}>Accept Item</button>,
    treasureStats = <p>You just received +{itemHP}HP and +{itemAtk}ATK!</p>);
    
    this.props.direction === 'Right' && (backButton = null)
    
    return(
      <div>
       {backButton}
       {acceptItem}
       {treasureStats}
      </div>
    );
  }
}

export default Treasure;