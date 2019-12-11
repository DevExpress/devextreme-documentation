---
type: event
---
---
##### notUsedInTheme

##### shortDescription
Fires when the user drills up or down.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget instance.

##### field(e.element): object
The widget's container.

##### field(e.node): dxtreemapnode
The current node.

---
When implementing a handling function, use the object passed to it as the parameter. Among the fields of this object, you can find the currently displayed node. To learn about node's members that you can use, refer to the description of the [Node](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') object.

The **drill** event can be used to enable/disable other widgets bound to **TreeMap**. For example, consider that you have a [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/'). A click on it drills the **TreeMap** widget one level up from the current node. But when the root node becomes the current, there is nowhere to drill up. In that case, disable the button in the handler of the **drill** event.

    <!--JavaScript-->// ...
    var disableBackButton = function (e) {
        if (!e.node.getParent()) // checks whether the node has a parent; if it doesn't, it is the root node
            buttonInstance.option('disabled', true);
        else
            buttonInstance.option('disabled', false);
    };
    
    treeMapInstance.on('drill', disableBackButton);

Although not provided out-of-the-box, the drill down capability is easy to implement using the API methods. Learn how to do this from the [drillDown()](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/6%20Node/3%20Methods/drillDown().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#drillDown') method description.

#####See Also#####
- [Handle Events - jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events')