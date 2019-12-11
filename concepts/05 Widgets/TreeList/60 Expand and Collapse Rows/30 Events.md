To execute certain commands before or after a row was expanded or collapsed, handle the [rowExpanding](/api-reference/10%20UI%20Widgets/GridBase/4%20Events/rowExpanding.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Events/#rowExpanding'), [rowExpanded](/api-reference/10%20UI%20Widgets/GridBase/4%20Events/rowExpanded.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Events/#rowExpanded'), [rowCollapsing](/api-reference/10%20UI%20Widgets/GridBase/4%20Events/rowCollapsing.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Events/#rowCollapsing') or [rowCollapsed](/api-reference/10%20UI%20Widgets/GridBase/4%20Events/rowCollapsed.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Events/#rowCollapsed') event. Assign event handling functions to the corresponding **on*EventName*** options when you configure the widget if these functions are going to remain unchanged. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            onRowExpanding: function (e) {
                // Handler of the "rowExpanding" event
            },
            onRowExpanded: function (e) {
                // Handler of the "rowExpanded" event
            },
            onRowCollapsing: function (e) {
                // Handler of the "rowCollapsing" event
            },
            onRowCollapsed: function (e) {
                // Handler of the "rowCollapsed" event
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-list ...
        (onRowExpanding)="onRowExpanding($event)"
        (onRowExpanded)="onRowExpanded($event)"
        (onRowCollapsing)="onRowCollapsing($event)"
        (onRowCollapsed)="onRowCollapsed($event)">
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onRowExpanding (e) {
            // Handler of the "rowExpanding" event
        },
        onRowExpanded (e) {
            // Handler of the "rowExpanded" event
        },
        onRowCollapsing (e) {
            // Handler of the "rowCollapsing" event
        },
        onRowCollapsed (e) {
            // Handler of the "rowCollapsed" event
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

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var rowCollapsedEventHandler1 = function (e) {
        // First handler of the "rowCollapsed" event
    };

    var rowCollapsedEventHandler2 = function (e) {
        // Second handler of the "rowCollapsed" event
    };

    $("#treeListContainer").dxTreeList("instance")
        .on("rowCollapsed", rowCollapsedEventHandler1)
        .on("rowCollapsed", rowCollapsedEventHandler2);

#####See Also#####
#include common-link-handleevents
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview)
