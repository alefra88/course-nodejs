'use strict'

const express = require('express'),
	app = express()

app
	.get('/', (req, res) => {
		//res.end('<h1>Hola Mundo desde Express</h1>')
		res.send('<h1>Hola Mundo desde Express</h1>')
	})

	.get('/alanef88', (req, res) => {
		//res.send('<h1>Bienvenid@s a mi pagina web de prueba xd.</h1>')
		res.redirect(301, 'http://github.com/alefra88')
	})

	.get('/json', (req, res) => {
		res.json({
			name : "Alan",
			age : 35,
			github : "@alefra88"
		})
	})

	.get('/render', (req, res) => {
		//res.render('assets/index.html')
		res.render(`${__dirname}/assets/index.html`)
	})	
	
	.listen(3000)

console.log('Iniciando Express en el puerto 3000')