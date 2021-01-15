---
id: DOMComponent.getInstance(element)
---
---
##### shortDescription
Gets the instance of a UI component found using its DOM node.

##### return: DOMComponent
The UI component's instance.

##### param(element): Element | jQuery
The UI component's container.

---
**getInstance** is a static method that the UI component class supports. The following code demonstrates how to get the **{WidgetName}** instance found in an element with the `my{WidgetName}` ID:

    // Modular approach
    import {WidgetName} from "devextreme/ui/{widget_name}";
    ...
    let element = document.getElementById("my{WidgetName}");
    let instance = {WidgetName}.getInstance(element) as {WidgetName};
    
    // Non-modular approach
    let element = document.getElementById("my{WidgetName}");
    let instance = DevExpress.ui.dx{WidgetName}.getInstance(element);

#####See Also#####
- [3rd-Party Frameworks Integration API](/concepts/05%20UI%20Components/zz%20Common/15%20Advanced/40%203rd-Party%20Frameworks%20Integration%20API '/Documentation/Guide/UI_Components/Common/Advanced/3rd-Party_Frameworks_Integration_API/')