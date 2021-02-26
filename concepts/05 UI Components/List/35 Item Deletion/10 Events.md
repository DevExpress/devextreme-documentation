To execute certain commands before or after an item is deleted from the List, handle the [itemDeleting](/api-reference/10%20UI%20Widgets/dxList/4%20Events/itemDeleting.md '/Documentation/ApiReference/UI_Components/dxList/Events/#itemDeleting') or [itemDeleted](/api-reference/10%20UI%20Widgets/dxList/4%20Events/itemDeleted.md '/Documentation/ApiReference/UI_Components/dxList/Events/#itemDeleted') event. If the functions that handle these events are not going to be changed during the lifetime of the UI component, assign them to the **on*EventName*** property when you configure the UI component.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#listContainer").dxList({
            // ...
            onItemDeleting: function(e) {
                const itemData = e.itemData;
                const itemDomNode = e.itemElement;
                const itemIndex = e.itemIndex;
                // Handler of the "itemDeleting" event
            },
            onItemDeleted: function(e) {
                const itemData = e.itemData;
                const itemDomNode = e.itemElement;
                const itemIndex = e.itemIndex;
                // Handler of the "itemDeleted" event
            },
        });
    });

##### Angular

    <!--HTML-->
    <dx-list ...
        (onItemDeleting)="onItemDeleting($event)"
        (onItemDeleted)="onItemDeleted($event)">
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onItemDeleting (e) {
            let itemData = e.itemData;
            let itemDomNode = e.itemElement;
            let itemIndex = e.itemIndex;
            // Handler of the "itemDeleting" event
        }
        onItemDeleted (e) {
            let itemData = e.itemData;
            let itemDomNode = e.itemElement;
            let itemIndex = e.itemIndex;
            // Handler of the "itemDeleted" event
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

[note]The **itemDeleted** event is raised when an item is deleted from the List. However, this does not mean that the item was actually deleted from the data source.

If you are going to change the event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxList/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    const itemDeletingEventHandler1 = function(e) {
        // First handler of the "itemDeleting" event
    };

    const itemDeletingEventHandler2 = function(e) {
        // Second handler of the "itemDeleting" event
    };

    $("#listContainer").dxList("instance")
        .on("itemDeleting", itemDeletingEventHandler1)
        .on("itemDeleting", itemDeletingEventHandler2);

#####See Also#####
#include common-link-handleevents
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Components/dxList/')

