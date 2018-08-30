'use strict'

const config           = require('./gulp.config')

const gulp             = require('gulp')
const babel            = require('gulp-babel')
const plumber          = require('gulp-plumber')
const connect          = require('gulp-connect')
const postCSS          = require('gulp-postcss')

const preCSS           = require('precss')
const rucksack         = require('rucksack-css')
const cssnano          = require('cssnano')
const cssPresetEnv     = require('postcss-preset-env')
const customProperties = require('postcss-custom-properties')
const customSelector   = require('postcss-custom-selectors')

const webpack          = require('webpack-stream')
const UglifyJsPlugin   = require('uglifyjs-webpack-plugin')

const processors       = [preCSS(), cssPresetEnv(), rucksack(), customSelector(), customProperties(), cssnano()]



function handleError(err) {
	console.log(err.toString())
	this.emit('end')
}


/**
 * tasks
 */

// task styles
gulp.task('styles', () => {
	return gulp
		.src(`${config.dev.css}/*.css`)
		.pipe(plumber())
		.pipe(postCSS(processors))
		.on('error', handleError)
		.pipe(gulp.dest(config.dist.css))
		.pipe(connect.reload())
})

// task scripts
gulp.task('scripts', () => {
	return gulp
		.src(`${config.dev.js}/**/*.js`)
		.pipe(
			webpack({
				mode: 'production',
				module: {
					rules: [{
						test: /\.js$/,
						loader: 'babel-loader',
						options: {
							presets: ['es2015']
						}
					}]
				},
				output: {
					filename: 'index.js'
				},
				plugins: [new UglifyJsPlugin()]
			})
		)
		.on('error', handleError)
		.pipe(gulp.dest(config.dist.js))
		.pipe(connect.reload())
})


/**
 *
 * gulp task default
 *
 */

gulp.task('default', () => {
	connect.server({
		livereload: true,
		root: ['.'],
		port: config.connect.port,
		host: config.connect.host
	})

	gulp.watch(`${config.dev.css}/**/*.css`, ['styles'])
	gulp.watch(`${config.dev.js}/**/*.js`, ['scripts'])
})
