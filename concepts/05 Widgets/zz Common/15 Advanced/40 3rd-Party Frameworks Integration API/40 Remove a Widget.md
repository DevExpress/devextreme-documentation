To dispose of all resources allocated by a widget, remove it using the jQuery **remove()** method.

    let $element = $("<div>").appendTo($container);
    $element.dxAccordion(options).dxAccordion("instance");
    ...
    $element.remove();
