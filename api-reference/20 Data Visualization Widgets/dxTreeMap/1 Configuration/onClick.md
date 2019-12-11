---
EventForAction: ..\4 Events\click.md
default: null
type: function(e) | String
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [click](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/4%20Events/click.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#click') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
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
When implementing a handling function, use the object passed to it as the parameter. Among the fields of this object, you can find the clicked node. For example, the following function uses the node's [select(state)](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/select(state).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#selectstate') and [isSelected()](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/isSelected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isSelected') methods to select/deselect the node on a click.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        onClick: function (e) {
            e.node.select(!e.node.isSelected());
        }
    };

To identify whether the clicked node is a tile or a group of tiles, use the [isLeaf()](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/isLeaf().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isLeaf') method. To learn about other available members of a node, refer to the description of the [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') object.

Alternatively, you can navigate to a specific URL when the **click** event fires. For this purpose, assign this URL to the **onClick** option.