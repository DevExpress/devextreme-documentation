To execute certain commands when an item changes its position, handle the [itemReordered](/api-reference/10%20UI%20Widgets/dxList/4%20Events/itemReordered.md '/Documentation/ApiReference/UI_Widgets/dxList/Events/#itemReordered') event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the **onItemReordered** option when you configure the widget.

---
#####jQuery

    <!--JavaScript-->$(function () {
        $("#listContainer").dxList({
            // ...
            onItemReordered: function(e) {
                var itemData = e.itemData;
                var itemDomNode = e.itemElement;
                var from = e.fromIndex;
                var to = e.toIndex;
                // Handler of the "itemReordered" event
            }
        });
    });

#####Angular

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

If you are going to change the **itemReordered** event handler at runtime, or if you need to attach several handlers to this event, subscribe to it using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var itemReorderedEventHandler1 = function(e) {
        // First handler of the "itemReordered" event
    };

    var itemReorderedEventHandler2 = function(e) {
        // Second handler of the "itemReordered" event
    };

    $("#listContainer").dxList("instance")
        .on("itemReordered", itemReorderedEventHandler1)
        .on("itemReordered", itemReorderedEventHandler2);

#####See Also#####
#include common-link-handleevents
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')