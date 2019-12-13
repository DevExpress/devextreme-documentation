To execute certain commands when the **List** is scrolled, handle the [scroll](/api-reference/10%20UI%20Widgets/dxList/4%20Events/scroll.md '/Documentation/ApiReference/UI_Widgets/dxList/Events/#scroll') event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the **onScroll** option when you configure the widget.

---
#####jQuery

    <!--JavaScript-->$(function () {
        $("#listContainer").dxList({
            // ...
            onScroll: function(e) {
                var scrollOffset = e.scrollOffset.top;
                var scrolledToTop = e.reachedTop;
                var scrolledToBottom = e.reachedBottom;
                // Handler of the "scroll" event
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-list ...
        (onScroll)="onScroll($event)">
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onScroll (e) {
            var scrollOffset = e.scrollOffset.top;
            var scrolledToTop = e.reachedTop;
            var scrolledToBottom = e.reachedBottom;
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

If you are going to change the **scroll** event handler at runtime, or if you need to attach several handlers to this event, subscribe to it using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var scrollEventHandler1 = function(e) {
        // First handler of the "scroll" event
    };

    var scrollEventHandler2 = function(e) {
        // Second handler of the "scroll" event
    };

    $("#listContainer").dxList("instance")
        .on("scroll", scrollEventHandler1)
        .on("scroll", scrollEventHandler2);

#####See Also#####
#include common-link-handleevents
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')