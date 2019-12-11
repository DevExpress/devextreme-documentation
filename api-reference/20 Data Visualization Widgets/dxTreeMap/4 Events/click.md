---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when the user clicks a node.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

##### field(e.node): dxTreeMapNode
The clicked node; described in the [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') section.

---
When implementing a handling function, use the object passed to it as the parameter. Among the fields of this object, you can find the clicked node. To learn about node's members that you can use, refer to the description of the [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') object.

To handle this event, attach a handler to it using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Methods/#oneventName_eventHandler') method. For example, the handler in the following code selects/deselects the clicked node.

    <!--JavaScript-->// ...
    var selectNode = function (e) {
        e.node.select(!e.node.isSelected());
    };
    
    treeMapInstance.on('click', selectNode);
    
#####See Also#####
#include common-link-handleevents