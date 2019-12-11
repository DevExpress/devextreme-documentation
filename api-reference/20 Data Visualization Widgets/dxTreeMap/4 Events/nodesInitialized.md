---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when all nodes in the widget are initialized.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.root): dxTreeMapNode
The root node; described in the [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') section.

---
Implement a handler for this event to perform certain operations on the node structure. It will be called once - at the beginning of the widget's lifetime.

Within the handler, use the object passed to it as the parameter. Among the fields of this object, you can find the root node. Using the [getAllChildren()](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/getAllChildren().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getAllChildren') and [getChild(index)](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/getChild(index).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getChildindex') of this node, you can access any other node in the widget. To learn about other available members of any node including the root node, refer to the description of the [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') object.

#####See Also#####
#include common-link-handleevents