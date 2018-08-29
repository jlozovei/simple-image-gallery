'use strict'

const config = {
	dev: {
		base: './dev',
		css: './dev/css',
		js: './dev/js'
	},

	dist: {
		base: './dist',
		css: './dist/css',
		js: './dist/js'
	},

	connect: {
		host: 'localhost',
		port: '9797',
		name: 'Simple Image Gallery'
	}
}

module.exports = config
