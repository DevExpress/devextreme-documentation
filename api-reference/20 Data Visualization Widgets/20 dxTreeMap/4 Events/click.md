---
type: event
---
---
##### notUsedInTheme

##### shortDescription
Fires when the user clicks a node.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget instance.

##### field(e.element): object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.node): dxtreemapnode
The clicked node.

---
When implementing a handling function, use the object passed to it as the parameter. Among the fields of this object, you can find the clicked node. To learn about node's members that you can use, refer to the description of the [Node](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') object.

To handle this event, attach a handler to it using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Methods/#oneventName_eventHandler') method. For example, the handler in the following code selects/deselects the clicked node.

    <!--JavaScript-->// ...
    var selectNode = function (e) {
        e.node.select(!e.node.isSelected());
    };
    
    treeMapInstance.on('click', selectNode);
    
#####See Also#####
- [Handle Events - jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events')