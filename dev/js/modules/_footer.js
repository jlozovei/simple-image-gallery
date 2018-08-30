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

		this.footer.querySelector('p').innerHTML = `with <span class="heart">&#x2764;</span> by <a href="${url}" target="_new" rel="noopener">jlozovei</a> | &copy; ${curYear}`
	}
}

module.exports = _footer
