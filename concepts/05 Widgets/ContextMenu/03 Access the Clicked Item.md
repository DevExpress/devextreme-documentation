To access the clicked item, handle the [itemClick](/api-reference/10%20UI%20Widgets/CollectionWidget/4%20Events/itemClick.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Events/#itemClick') event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the [onItemClick](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onItemClick.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#onItemClick') option when you configure the widget.

---
#####jQuery

    <!--JavaScript-->$(function () {
        $("#contextMenuContainer").dxContextMenu({
            // ...
            onItemClick: function (e) {
                var itemData = e.itemData;
                var itemElement = e.itemElement;
                var itemIndex = e.itemIndex;
                // ...
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-context-menu ...
        (onItemClick)="handleItemClickEvent($event)">
    </dx-context-menu>

    <!--TypeScript-->
    import { DxContextMenuModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        handleItemClickEvent (e) {
            let itemData = e.itemData;
            let itemElement = e.itemElement;
            let itemIndex = e.itemIndex;
            // ...
        }
    }
    @NgModule({
         imports: [
             // ...
             DxContextMenuModule
         ],
         // ...
     })

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to the **itemClick** event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var itemClickHandler1 = function (e) {
        // First handler of the "itemClick" event
    };

    var itemClickHandler1 = function (e) {
        // Second handler of the "itemClick" event
    };

    $("#contextMenuContainer").dxContextMenu("instance")
        .on("itemClick", itemClickHandler1)
        .on("itemClick", itemClickHandler2);

#####See Also#####
#include common-link-handleevents
- [ContextMenu - Customize Item Appearance](/concepts/05%20Widgets/ContextMenu/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/ContextMenu/Customize_Item_Appearance')
- [ContextMenu - Open and Close](/concepts/05%20Widgets/ContextMenu/10%20Open%20and%20Close%20the%20Context%20Menu '/Documentation/Guide/Widgets/ContextMenu/Open_and_Close_the_Context_Menu/')
- [ContextMenu Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/ContextMenu/Basics)
- [ContextMenu API Reference](/api-reference/10%20UI%20Widgets/dxContextMenu '/Documentation/ApiReference/UI_Widgets/dxContextMenu/')

[tags]context menu, contextMenu, access the clicked item, onItemClick, itemClick