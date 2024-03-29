A specific UI component instance is required to call methods and subscribe to events. Call the UI component class's static **getInstance(element)** method to retrieve the existing UI component instance.

    // Modular approach
    import Accordion from "devextreme/ui/accordion";
    ...
    let element = document.getElementById("myAccordion");
    let instance = Accordion.getInstance(element) as Accordion;

    // Non-modular approach:
    let element = document.getElementById("myAccordion");
    let instance = DevExpress.ui.dxAccordion.getInstance(element);

You can get and set UI component properties at runtime using the **option()** method. 

    // Get a property value
    let isVisible = instance.option("visible");

    // Set a property value
    instance.option("visible", false);

To subscribe to an event, you can use a property whose name starts with "on" (for example, "onItemClick").

    Accordion(element, {
        ...,
        onItemClick: function(e){
            alert("An item is clicked!");
        }
    })

Alternatively, you can use the "on()" method.

    instance.on("itemClick", function(e){
        alert("An item is clicked!");
    })
