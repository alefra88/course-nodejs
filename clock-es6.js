/*
Código encerrado en una función anónima autoejecutable
http://www.etnassoft.com/2011/03/14/funciones-autoejecutables-en-javascript/
*/
'use strict'

const Clock = (()=>{
	const EventEmitter = require('events').EventEmitter,
		inherits = require('util').inherits

	//constructor
	const Clock = function ()
	{
		//const self = this

		setInterval( () => {
			//console.log('hola')
			//self.emit('tictac')
			this.emit('tictac')
		}, 1000)	
	}

	inherits(Clock, EventEmitter)

	Clock.prototype.theTime =  ()=>
	{
		const date = new Date(),
			hrsAmPm = ( date.getHours() > 12 ) ? ( date.getHours() - 12) : date.getHours(),
			hrs = addZero( hrsAmPm ),
			min = addZero( date.getMinutes() ),
			sec = addZero( date.getSeconds() ),
			ampm = ( date.getHours() < 12 ) ? 'am' : 'pm',
			//msg = hrs + ':' + min + ':' + sec + ampm
			msg = `${hrs}:${min}:${sec}${ampm}`

		function addZero(num)
		{
			return (num < 10) ? ('0' + num) : num
		}

		console.log(msg)
	}

	return Clock;
})()

module.exports = Clock