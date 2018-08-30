'use strict'

import _gallery from './modules/_gallery'
import _footer from './modules/_footer'

(() => {
	const app = {
		init() {
			_gallery.init()
			_footer.init()
		}
	}

	app.init()
})()
