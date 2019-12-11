---
EventForAction: ..\4 Events\click.md
default: null
type: function(e) | String
---
---
##### notUsedInTheme

##### shortDescription
A function that is executed when a node is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
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
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery.

##### field(e.node): dxTreeMapNode
The clicked node; described in the [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') section.

---
This function is often used to implement item selection as shown in the following code:

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#treeMapContainer").dxTreeMap({
            // ...
            onClick: function (e) {
                e.node.select(!e.node.isSelected());
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-map ...
        (onClick)="selectItem($event)">
    </dx-tree-map>

    <!--TypeScript-->
    import { DxTreeMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectItem (e) {
            e.node.select(!e.node.isSelected());
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeMapModule
        ],
        // ...
    })

---

To identify whether the clicked node is a single tile or a group of tiles, use the node's [isLeaf()](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/isLeaf().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isLeaf') method.