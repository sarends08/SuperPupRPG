import React, {Component}  from 'react';

class Text extends Component {
	render(){
		const text = this.props.text
		return (
			<div className = 'text'

			style= {{
				padding: '5%',
				fontFamily: "'Press Start 2P', cursive",
				fontSize: '1em',
				textAlign: 'center',
				color: '#26004d'
			}}>{text}
			</div>
			)
	}
}

// const Story = {
// 	story: "The story is starting, you have 3 options",
// 	show: false
// }

export default Text;