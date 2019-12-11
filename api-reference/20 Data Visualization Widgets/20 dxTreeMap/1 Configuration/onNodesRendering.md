---
EventForAction: ..\4 Events\nodesRendering.md
type: function
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [nodesRendering](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/4%20Events/nodesRendering.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#nodesRendering') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget instance.

##### field(e.element): object
The widget's container.

##### field(e.node): dxtreemapnode
In most cases, the root node. When drilling down, the node of the highest displayed level.

---
Use this handler to customize nodes before they will be displayed. This handler will be called each time the collection of [active](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node/3%20Methods/isActive().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isActive') nodes is changed.

Within the handler, you can use the object passed to it as the parameter. Among the fields of this object, you can find the currently displayed node. Using the [getAllNodes()](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node/3%20Methods/getAllNodes().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getAllNodes'), [getAllChildren()](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node/3%20Methods/getAllChildren().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getAllChildren'), [getChild(index)](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node/3%20Methods/getChild(index).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getChildindex') and [getParent()](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node/3%20Methods/getParent().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getParent') of this node, you can access any other node in the widget. To learn about other available members of any node, refer to the description of the [Node](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') object.