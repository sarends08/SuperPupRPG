import React, {Component} from 'react';
import dog from './dog.png';

class Image extends Component {
	render(){
		return(
			<div className='image'>
			<img src = {dog} alt="Cartoon dog"/>
			</div>
			)
	}
}

export default Image;