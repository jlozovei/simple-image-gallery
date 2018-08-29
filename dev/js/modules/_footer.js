'use strict'

const _footer = {
	init() {
		this.cacheDOM()
	},

	cacheDOM() {
		this.footer = document.getElementById('footer')
		
		this.bindEvents()
	},

	bindEvents() {
		this.copyFooter()
	},

	copyFooter(){
		const curYear = new Date().getFullYear(),
			url = 'https://jlozovei.github.io/'

		this.footer.querySelector('p').innerHTML = `&copy; <a href="${url}" target="_new" rel="noopener">jlozovei</a> ${curYear}`
	}
}

module.exports = _footer
