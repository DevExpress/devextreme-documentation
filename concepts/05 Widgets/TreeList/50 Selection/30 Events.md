The **TreeList** widget raises the [selectionChanged](/api-reference/10%20UI%20Widgets/GridBase/4%20Events/selectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Events/#selectionChanged') event when a row is selected or when the selection is cancelled. If the function that handles this event is going to remain unchanged, assign it to the [onSelectionChanged](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onSelectionChanged') option when you configure the widget.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            onSelectionChanged: function(e) { // Handler of the "selectionChanged" event
                var currentSelectedRowKeys = e.currentSelectedRowKeys;
                var currentDeselectedRowKeys = e.currentDeselectedRowKeys;
                var allSelectedRowKeys = e.selectedRowKeys;
                var allSelectedRowsData = e.selectedRowsData;
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-list ...
        (onSelectionChanged)="onSelectionChanged($event)">
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onSelectionChanged (e) { // Handler of the "selectionChanged" event
            let currentSelectedRowKeys = e.currentSelectedRowKeys;
            let currentDeselectedRowKeys = e.currentDeselectedRowKeys;
            let allSelectedRowKeys = e.selectedRowKeys;
            let allSelectedRowsData = e.selectedRowsData;
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

If you are going to change the event handler at runtime, or if you need to attach several handlers to the event, subscribe to it using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var selectionChangedEventHandler1 = function(e) {
        // First handler of the "selectionChanged" event
    };

    var selectionChangedEventHandler2 = function(e) {
        // Second handler of the "selectionChanged" event
    };

    $("#treeListContainer").dxTreeList("instance")
        .on("selectionChanged", selectionChangedEventHandler1)
        .on("selectionChanged", selectionChangedEventHandler2);

#####See Also#####
#include common-link-handleevents
