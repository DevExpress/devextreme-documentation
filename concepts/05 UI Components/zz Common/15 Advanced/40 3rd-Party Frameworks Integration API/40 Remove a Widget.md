Use a UI component's **dispose()** method to dispose of the resources allocated to it.

    let element = document.createElement("div");
    let instance = new Accordion(element, options);
    ...
    instance.dispose();

[note]

After the dispose method call, the HTML element associated with the UI component remains in the DOM. If you need to remove the element as well, use a native API call.

    element.remove();
    
[/note]
