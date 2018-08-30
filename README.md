# Simple Image Gallery

No dependencies, no libs, no frameworks - a simple and fancy image gallery, crafted with a few lines of pure JavaScript!  

### How To:

To use this simple gallery, just add the next markups:

#### HTML:
```html
<div id="gallery" class="gallery">
    <!-- controllers -->
    <a class="gallery__controller gallery__controller--prev"></a>
    <a class="gallery__controller gallery__controller--next"></a>

    <div class="gallery__images">
        <!-- images -->
        <img src="https://picsum.photos/1000/600/?random" class="active">
        <img src="https://picsum.photos/780/430/?random">
        <img src="https://picsum.photos/910/450/?random">
        <img src="https://picsum.photos/560/1040/?random">
        <img src="https://picsum.photos/1024/512/?random">
    </div>
</div>
```

#### JS:
```js
const galleryWrapper = document.getElementById('gallery'),
    galleryControllers = galleryWrapper.querySelector('.gallery__controller')

galleryControllers.forEach(controller => {
    controller.addEventListener('click', (event) => {
        if(controller.classList.contains('gallery__controller--prev'))
            galleryGoBack()
        else
            galleryGoForward()
    })
})

function galleryGoBack(){
    const active = galleryWrapper.querySelector('img.active')
    active.classList.remove('active')

    if(active.previousElementSibling)
        active.previousElementSibling.classList.add('active')
    else
        this.galleryWrapper.querySelector('img:last-child').classList.add('active')
}

function galleryGoForward(){
    const active = galleryWrapper.querySelector('img.active')
    active.classList.remove('active')

    if(active.nextElementSibling)
        active.nextElementSibling.classList.add('active')
    else
        this.galleryWrapper.querySelector('img').classList.add('active')
}
```

### Cloning this repo
Also, you can clone/download this repo to change `HTML`, `CSS` and/or `JS` files locally. To do so:

```bash
# clone repo
git clone https://github.com/jlozovei/simple-image-gallery.git


# install dependencies
yarn


# serve with hot reload at localhost:9797
gulp
```
