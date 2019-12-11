---
EventForAction: ..\4 Events\nodesInitialized.md
default: null
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [nodesInitialized](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/4%20Events/nodesInitialized.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#nodesInitialized') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.root): dxTreeMapNode
The root node; described in the [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') section.

---
Use this handler to perform certain operations on the node structure. It will be called once - at the beginning of the widget's lifetime.

Within the handler, you can use the object passed to it as the parameter. Among the fields of this object, you can find the root node. Using the [getAllNodes()](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/getAllNodes().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getAllNodes'), [getAllChildren()](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/getAllChildren().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getAllChildren') and [getChild(index)](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/getChild(index).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getChildindex') methods of this node, you can access any other node in the widget. To learn about other available members of any node including the root node, refer to the description of the [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') object.