A specific widget instance is required to call methods and subscribe to events. Call the widget class's static **getInstance(element)** method to retrieve the existing widget instance.

    // Modular approach
    import Accordion from "devextreme/ui/accordion";
    ...
    let element = document.getElementById("myAccordion");
    let instance = Accordion.getInstance(element) as Accordion;

    // Non-modular approach:
    let element = document.getElementById("myAccordion");
    let instance = DevExpress.ui.dxAccordion.getInstance(element);

You can get and set widget options at runtime using the **option()** method. 

    // Get an option value
    let isVisible = instance.option("visible");

    // Set an option value
    instance.option("visible", false);

To subscribe to an event, you can use an option whose name starts with "on" (for example, "onItemClick").

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
