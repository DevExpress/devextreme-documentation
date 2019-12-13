The **List** widget fires the [selectionChanged](/api-reference/10%20UI%20Widgets/CollectionWidget/4%20Events/selectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxList/Events/#selectionChanged') event when an item is selected or when the selection is cancelled. The widget also fires the [selectAllValueChanged](/api-reference/10%20UI%20Widgets/dxList/4%20Events/selectAllValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxList/Events/#selectAllValueChanged') event when the [*"Select All"*](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/selectAllMode.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectAllMode') check box has changed its value. If the functions that handle these events are not going to be changed during the lifetime of the widget, assign them to the corresponding **on*EventName*** options when you configure the widget.

---
#####jQuery

    <!--JavaScript-->$(function () {
        $("#listContainer").dxList({
            // ...
            onSelectionChanged: function(e) {
                var addedItems = e.addedItems;
                var removedItems = e.removedItems;
                // Handler of the "selectionChanged" event
            },
            onSelectAllValueChanged: function(e) {
                var newCheckBoxValue = e.value;
                // Handler of the "selectAllValueChanged" event
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-list ...
        (onSelectionChanged)="onSelectionChanged($event)"
        (onSelectAllValueChanged)="onSelectAllValueChanged($event)">
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onSelectionChanged (e) {
            let addedItems = e.addedItems;
            let removedItems = e.removedItems;
            // Handler of the "selectionChanged" event
        }
        onSelectAllValueChanged (e) {
            let newCheckBoxValue = e.value;
            // Handler of the "selectAllValueChanged" event
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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection/"
}

If you are going to change the event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var selectionChangedEventHandler1 = function(e) {
        // First handler of the "selectionChanged" event
    };

    var selectionChangedEventHandler2 = function(e) {
        // Second handler of the "selectionChanged" event
    };

    $("#listContainer").dxList("instance")
        .on("selectionChanged", selectionChangedEventHandler1)
        .on("selectionChanged", selectionChangedEventHandler2);

#####See Also#####
#include common-link-handleevents
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')