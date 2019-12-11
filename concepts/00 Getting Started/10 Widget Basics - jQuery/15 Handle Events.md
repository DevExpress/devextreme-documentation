<div style="height:5px"></div>
###Subscribe to an Event###

You can subscribe to an event using a configuration option. All event handling options are given names that begin with *on*.

    <!--JavaScript-->$("#menuContainer").dxMenu({
        onItemClick: function (info) {
            // Handles the "itemClick" event
        },
        onSelectionChanged: function (info) {
            // Handles the "selectionChanged" event
        }
    });

 As a more flexible solution, you can use the **on()** method. It allows you to subscribe to events at runtime and even to attach several handlers to a single event.

    <!--JavaScript-->
    var menuInstance = $("#menuContainer").dxMenu("instance");
    // Subscribes to the "itemClick" and "selectionChanged" events
    menuInstance
        .on({
            "itemClick": handler1,
            "selectionChanged": handler2
        });

<!-------------->

    <!--JavaScript-->
    var menuInstance = $("#menuContainer").dxMenu("instance");
    // Attaches several handlers to the "itemClick" event
    menuInstance
        .on("itemClick", handler1)
        .on("itemClick", handler2);

#####See Also#####
- [Call Methods](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/10%20Call%20Methods.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/')

###Unsubscribe from an Event###

To detach a specific handler from an event, call the **off(eventName, handler)** method.

    <!--JavaScript-->
    var menuInstance = $("#menuContainer").dxMenu("instance");
    // Detaches the "handler1" from the "itemClick" event leaving other handlers (if any) intact
    menuInstance.off("itemClick", handler1)

You can also use this method to detach all handlers from a particular event.

    <!--JavaScript-->
    var menuInstance = $("#menuContainer").dxMenu("instance");
    // Detaches all handlers from the "itemClick" event
    menuInstance.off("itemClick")

If you subscribed to an event using an **on*EventName*** option, you can unsubscribe from it by setting this option to **undefined**.

    <!--JavaScript-->
    var menuInstance = $("#menuContainer").dxMenu("instance");
    menuInstance.option("onItemClick", undefined);

#####See Also#####
- **API Reference**.**WidgetName**.**Events**, for example, **API Reference**.[Menu](/api-reference/10%20UI%20Widgets/dxMenu '/Documentation/ApiReference/UI_Widgets/dxMenu/').[Events](/api-reference/10%20UI%20Widgets/dxMenu/4%20Events '/Documentation/ApiReference/UI_Widgets/dxMenu/Events/')

[tags]basics, jquery, handle events, subscribe, unsubscribe, on, off