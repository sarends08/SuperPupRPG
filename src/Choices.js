import React, {Component} from 'react';

class Choices extends Component {
	render(){
		const choices = this.props.choices
		return(
			<div>
				<a href= '#'
				style={{
					fontFamily: "'Press Start 2P', cursive",
					textDecoration: 'none',
				}}
				>{choices}</a>
			</div>
			)
	}
}


// const options = {
// 	stage1: ['Option 1', 'Option 2', 'Option 3'],
// 	stage2: ['Option 1', 'Option 2', 'Option 3'],
// 	stage3: ['Option 1', 'Option 2', 'Option 3'],
// 	stage4: ['Option 1', 'Option 2', 'Option 3'],
// 	stage5: ['Option 1', 'Option 2', 'Option 3']
// }

export default Choices

