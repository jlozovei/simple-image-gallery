'use strict'

const _gallery = {
	init() {
		this.cacheDOM()
	},

	cacheDOM() {
		this.galleryWrapper = document.getElementById('gallery')
		this.galleryControllers = this.galleryWrapper.querySelectorAll('.gallery__controller')
		
		this.bindEvents()
	},

	bindEvents() {
		this.galleryControllers.forEach(controller => {
			controller.addEventListener('click', (event) => {
				if(controller.classList.contains('gallery__controller--prev'))
					this.galleryGoBack()
				else
					this.galleryGoForward()
			})
		})
	},

	galleryGoBack(){
		const active = this.galleryWrapper.querySelector('img.active')
		active.classList.remove('active')

		if(active.previousElementSibling)
			active.previousElementSibling.classList.add('active')
		else
			this.galleryWrapper.querySelector('img:last-child').classList.add('active')
	},

	galleryGoForward(){
		const active = this.galleryWrapper.querySelector('img.active')
		active.classList.remove('active')

		if(active.nextElementSibling)
			active.nextElementSibling.classList.add('active')
		else
			this.galleryWrapper.querySelector('img').classList.add('active')
	}
}

module.exports = _gallery
