---
type: event
---
---
##### notUsedInTheme

##### shortDescription
Fires when all nodes in the widget are initialized.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget instance.

##### field(e.element): object
The widget's container.

##### field(e.root): dxtreemapnode
The root node.

---
Implement a handler for this event to perform certain operations on the node structure. It will be called once - at the beginning of the widget's lifetime.

Within the handler, use the object passed to it as the parameter. Among the fields of this object, you can find the root node. Using the [getAllChildren()](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node/3%20Methods/getAllChildren().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getAllChildren') and [getChild(index)](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node/3%20Methods/getChild(index).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getChildindex') of this node, you can access any other node in the widget. To learn about other available members of any node including the root node, refer to the description of the [Node](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') object.

#####See Also#####
- [Handle Events - jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events')