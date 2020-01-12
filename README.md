# reveal-inline-svg
Automatically inlines SVG files in Reveal.js presentations.
Allows the application of fragments, animations etc. to SVG DOM elements.

## Installation

Just include `inline_svg.js` as a dependency of Reveal inside the `Reveal.initialize` function in your presentation's HTML file.

```javascript
// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({

  ...

  // More info https://github.com/hakimel/reveal.js#dependencies
  dependencies: [
    { ... },
    { src: 'plugin/inline-svg/inline_svg.js', condition: function() { return !!document.querySelector( 'object' ); }, async: true }
  ]
});
```

## Usage

The script will replace any `object` element in your presentation with an SVG element of the included SVG file. In addition, you can apply any attribute to any SVG element in the SVG DOM using `param` elements.

```html
<object type="image/svg+xml" data="drawing.svg">
  <!-- Values will be added to the class attribute -->
  <param data-selector="#element-id" data-attribute-name="class" data-attribute-value="fragment">
  <!-- Every other attribute value will be replaced -->
  <param data-selector="#element-id" data-attribute-name="data-fragment-index" data-attribute-value="0">
</object>
```

This code will replace the `object` element with an SVG element using the SVG in `drawing.svg`. In addition, it will add the `class="fragment" data-fragment-index="0"` attributes to `#element-id` inside the SVG DOM.

## Demo

To see a simple demo slide put all files within your reveal.js folder and point your browser to `test.html`.

## Dependencies

The example presentation (`test.html`) uses Velocity.js to demonstrate animation of SVG elements.
