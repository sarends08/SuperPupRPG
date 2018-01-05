import React from 'react';
import Cooper from './Cooper.gif';
import Bone from './Bone.gif';
import Vacuum from './Vacuum.gif';
import Ball from './Ball.gif';
import Cloud from './Cloud.gif';
import Kitty from './Kitty.gif';
import House from './Doghouse.gif';

export const Dog = props => {
	return(
		<div className='image'>
		<img src = {Cooper} alt="sprite of a dog"/>
		</div>
		)
}

export const DogBone = props => {
	return(
		<div className='image'>
		<img src = {Bone} alt="sprite of a dog-bone"/>
		</div>
		)
}

export const VacuumMonster = props => {
	return(
		<div className='image'>
		<img src = {Vacuum} alt="sprite of a vacuum"/>
		</div>
		)
}

export const DogBall = props => {
	return(
		<div className='image'>
		<img src = {Ball} alt="sprite of a ball"/>
		</div>
		)
}

export const CloudMonster = props => {
	return(
		<div className='image'>
		<img src = {Cloud} alt="sprite of a cloud with lightning"/>
		</div>
		)
}

export const KittyMonster = props => {
	return(
		<div className='image'>
		<img src = {Kitty} alt="sprite of a black cat"/>
		</div>
		)
}

export const DogHouse = props => {
	return(
		<div className='image'>
		<img src = {House} alt="sprite of a red dog house"/>
		</div>
		)
}