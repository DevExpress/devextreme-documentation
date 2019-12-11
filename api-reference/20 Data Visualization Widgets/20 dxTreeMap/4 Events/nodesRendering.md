---
type: event
---
---
##### notUsedInTheme

##### shortDescription
Fires before nodes will be displayed.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget instance.

##### field(e.element): object
The widget's container.

##### field(e.node): dxtreemapnode
In most cases, the root node. When drilling down, the node of the highest displayed level.

---
Implement a handler for this event to customize nodes before they will be displayed. This handler will be called each time the collection of [active](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node/3%20Methods/isActive().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isActive') nodes is changed.

Within the handler, you can use the object passed to it as the parameter. Among the fields of this object, you can find the currently displayed node. Using the [getAllNodes()](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node/3%20Methods/getAllNodes().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getAllNodes'), [getAllChildren()](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node/3%20Methods/getAllChildren().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getAllChildren'), [getChild(index)](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node/3%20Methods/getChild(index).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getChildindex') and [getParent()](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node/3%20Methods/getParent().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getParent') of this node, you can access any other node in the widget. To learn about other available members of any node, refer to the description of the [Node](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') object.

#####See Also#####
- [Handle Events - jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events')