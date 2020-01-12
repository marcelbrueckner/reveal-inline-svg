Reveal.getSlides().forEach(function(slide) {

  // Hope external data has been loaded after timeout
  window.setTimeout( function() {

    slide.querySelectorAll("object").forEach(function(e) {

      var params;
      params = e.querySelectorAll("param");

      // Replace object with inline svg
      if (e.contentDocument)
        e.parentElement.replaceChild(e.contentDocument.documentElement.cloneNode(true), e);
      
      // Set "preserveAspectRatio" for each SVG to scale correctly
      slide.querySelectorAll("svg").forEach(function(e) {
        e.setAttribute("preserveAspectRatio","xMinYMin meet");
      });
      
      // Apply formating according to param's attributes
      params.forEach(function(param) {
        var element,
          attributeName,
          attributeValue;

        // <param data-selector="#element-id" data-attribute-name="class" data-attribute-value="fragment">
        // <param data-selector="#element-id" data-attribute-name="data-fragment-index" data-attribute-value="0">
        element = slide.querySelector(param.dataset.selector);
        attributeName = param.getAttribute("data-attribute-name");
        attributeValue = param.getAttribute("data-attribute-value");
        
        if (attributeName == "class") {
          element.className.baseVal += " " + attributeValue;
        } else {
          element.setAttribute(attributeName, attributeValue);
        }
      });
    }), 1000
  });
});
