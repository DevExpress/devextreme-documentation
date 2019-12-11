---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when the user drills up or down.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.node): dxTreeMapNode
The [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') object.

---
When implementing a handling function, use the object passed to it as the parameter. Among the fields of this object, you can find the currently displayed node. To learn about node's members that you can use, refer to the description of the [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') object.

The **drill** event can be used to enable/disable other widgets bound to **TreeMap**. For example, consider that you have a [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/'). A click on it drills the **TreeMap** widget one level up from the current node. But when the root node becomes the current, there is nowhere to drill up. In that case, disable the button in the handler of the **drill** event.

    <!--JavaScript-->// ...
    var disableBackButton = function (e) {
        if (!e.node.getParent()) // checks whether the node has a parent; if it doesn't, it is the root node
            buttonInstance.option('disabled', true);
        else
            buttonInstance.option('disabled', false);
    };
    
    treeMapInstance.on('drill', disableBackButton);

Although not provided out-of-the-box, the drill down capability is easy to implement using the API methods. Learn how to do this from the [drillDown()](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/drillDown().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#drillDown') method description.

#####See Also#####
#include common-link-handleevents