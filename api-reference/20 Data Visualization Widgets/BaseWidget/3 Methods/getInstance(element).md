---
##### shortDescription
Gets the instance of a UI component found using its DOM node.

##### param(element): Node|jQuery
The UI component's container.

##### return: DOMComponent
The UI component's instance.

---
**getInstance** is a static method that the UI component class supports. The following code demonstrates how to get the **{WidgetName}** instance found in an element with the `my{WidgetName}` ID:

    // Modular approach
    import {WidgetName} from "devextreme/viz/{widget_name}";
    ...
    let element = document.getElementById("my{WidgetName}");
    let instance = {WidgetName}.getInstance(element) as {WidgetName};
    
    // Non-modular approach
    let element = document.getElementById("my{WidgetName}");
    let instance = DevExpress.viz.dx{WidgetName}.getInstance(element);

#####See Also#####
- [3rd-Party Frameworks Integration API](/concepts/05%20Widgets/zz%20Common/15%20Advanced/40%203rd-Party%20Frameworks%20Integration%20API '/Documentation/Guide/Widgets/Common/Advanced/3rd-Party_Frameworks_Integration_API/')