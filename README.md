12
# previewer

![Giphy](https://media.giphy.com/media/xUOrwnP6582IGswTaU/giphy.gif)

[Demo 1](https://ajayns.github.io/previewer/)
[Demo 2](https://ajayns.github.io/sidworks-website/)

A JavaScript image previewer for the web, which uses a Picasa inspired UI and is super light-weight.

## Setup

Make sure you have the previewer.js and previewer.css files (or the minified versions) included in the html document.

```html
<link rel="stylesheet" href="Path/To/previewer.css" />

<script src="Path/To/previewer.js" type="text/javascript"></script>
```
For adding the preview functionality to a single image, just add a `preview-image` class.

```html
<img src="Path/To/Image" alt="" class="preview-image"/>
```

For multiple images, arranged as a list, add a `preview-images` class to the parent.

```html
<ul class="preview-images">
  <li><img src="Path/To/Image1" alt="" /></li>
  <li><img src="Path/To/Image2" alt="" /></li>
  <li><img src="Path/To/Image3" alt="" /></li>
</ul>
```

To finish up, initialize previewer by adding the following code:
```javascript
var previewer = new Previewer;
```

## Features to be added
* Popup and close animations
* <s> Keyboard support </s>
* Add Gulp to auto-minify
* <s> Mobile support </s>
* Add loader
* <s> Remove jQuery dependancy </s>
