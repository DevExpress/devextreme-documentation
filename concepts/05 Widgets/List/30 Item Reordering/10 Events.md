To execute certain commands when an item changes its position, handle the [itemReordered](/api-reference/10%20UI%20Components/dxList/4%20Events/itemReordered.md '/Documentation/ApiReference/UI_Components/dxList/Events/#itemReordered') event. If the event handling function is not going to be changed during the lifetime of the UI component, assign it to the **onItemReordered** option when you configure the UI component.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#listContainer").dxList({
            // ...
            onItemReordered: function(e) {
                const itemData = e.itemData;
                const itemDomNode = e.itemElement;
                const from = e.fromIndex;
                const to = e.toIndex;
                // Handler of the "itemReordered" event
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-list
        (onItemReordered)="onItemReordered($event)">
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxListComponent, { static: false }) list: DxListComponent;
        // Prior to Angular 8
        // @ViewChild(DxListComponent) list: DxListComponent;
        onItemReordered (e) {
            let itemData = e.itemData;
            let itemDomNode = e.itemElement;
            let from = e.fromIndex;
            let to = e.toIndex;
            // Handler of the "itemReordered" event
        }
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

---

If you are going to change the **itemReordered** event handler at runtime, or if you need to attach several handlers to this event, subscribe to it using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxList/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    const itemReorderedEventHandler1 = function(e) {
        // First handler of the "itemReordered" event
    };

    const itemReorderedEventHandler2 = function(e) {
        // Second handler of the "itemReordered" event
    };

    $("#listContainer").dxList("instance")
        .on("itemReordered", itemReorderedEventHandler1)
        .on("itemReordered", itemReorderedEventHandler2);

#####See Also#####
#include common-link-handleevents
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection)
- [List API Reference](/api-reference/10%20UI%20Components/dxList '/Documentation/ApiReference/UI_Components/dxList/')