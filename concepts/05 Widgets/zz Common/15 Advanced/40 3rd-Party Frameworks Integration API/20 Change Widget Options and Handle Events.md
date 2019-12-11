You can get and set widget options at runtime using the **option()** method. 

    // Get an option value
    let isVisible = instance.option("visible");

    // Set an option value
    instance.option("visible", false);

For more information, refer to the [Get and Set Options](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/05%20Get%20and%20Set%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_and_Set_Options/') article.

To subscribe to an event, you can use an option whose name starts with "on" (e.g. "onItemClick").

    $element.dxAccordion({
        . . .,
        onItemClick: function(e){
            alert("An item is clicked!");
        }
    })

Alternatively, you can use the "on()" method.

    instance.on("itemClick", function(e){
        alert("An item is clicked!");
    })

For complete information about subscribing to/unsubscribing from events, refer to the [Handle Events](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/') article.
