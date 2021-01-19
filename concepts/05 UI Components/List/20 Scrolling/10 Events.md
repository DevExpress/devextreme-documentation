To execute certain commands when the **List** is scrolled, handle the [scroll](/api-reference/10%20UI%20Widgets/dxList/4%20Events/scroll.md '/Documentation/ApiReference/UI_Components/dxList/Events/#scroll') event. If the event handling function is not going to be changed during the lifetime of the UI component, assign it to the **onScroll** option when you configure the UI component.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#listContainer").dxList({
            // ...
            onScroll: function(e) {
                const scrollOffset = e.scrollOffset.top;
                const scrolledToTop = e.reachedTop;
                const scrolledToBottom = e.reachedBottom;
                // Handler of the "scroll" event
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-list ...
        (onScroll)="onScroll($event)">
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onScroll (e) {
            const scrollOffset = e.scrollOffset.top;
            const scrolledToTop = e.reachedTop;
            const scrolledToBottom = e.reachedBottom;
            // Handler of the "scroll" event
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

If you are going to change the **scroll** event handler at runtime, or if you need to attach several handlers to this event, subscribe to it using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxList/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    const scrollEventHandler1 = function(e) {
        // First handler of the "scroll" event
    };

    const scrollEventHandler2 = function(e) {
        // Second handler of the "scroll" event
    };

    $("#listContainer").dxList("instance")
        .on("scroll", scrollEventHandler1)
        .on("scroll", scrollEventHandler2);

#####See Also#####
#include common-link-handleevents
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Components/dxList/')