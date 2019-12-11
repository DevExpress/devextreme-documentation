The **TreeList** widget raises events before and after a row is inserted, updated or removed from the data source. If the event handlers are going to remain unchanged during the widget's lifetime, assign them to corresponding **on*EventName*** options:

- [onRowInserting](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowInserting.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowInserting')
- [onRowInserted](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowInserted.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowInserted')
- [onRowUpdating](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowUpdating.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowUpdating')
- [onRowUpdated](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowUpdated.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowUpdated')
- [onRowRemoving](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowRemoving.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowRemoving')
- [onRowRemoved](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowRemoved.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowRemoved')

<!---->

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#treeListContainer").dxTreeList({
            // ...
            onRowInserting: function(e) {
                // Handler of the "rowInserting" event
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ...
        (onRowInserting)="onRowInserting($event)">
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onRowInserting (e) {
            // Handler of the "rowInserting" event
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

If you are going to change the event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var rowUpdatingEventHandler1 = function(e) {
        // First handler of the "rowUpdating" event
    };
    
    var rowUpdatingEventHandler2 = function(e) {
        // Second handler of the "rowUpdating" event
    };
    
    $("#treeListContainer").dxTreeList("instance")
        .on("rowUpdating", rowUpdatingEventHandler1)
        .on("rowUpdating", rowUpdatingEventHandler2);

In addition, the **TreeList** raises the [initNewRow](/api-reference/10%20UI%20Widgets/GridBase/4%20Events/initNewRow.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Events/#initNewRow') event when a new row is added and the [editingStart](/api-reference/10%20UI%20Widgets/dxTreeList/4%20Events/editingStart.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Events/#editingStart') event when a row enters the editing state. These events can be handled just like others - using the **on*EventName*** option or the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#oneventName_eventHandler') method. In the following example, the [onInitNewRow](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onInitNewRow.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onInitNewRow') event handler specifies initial values for an added row:

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#treeListContainer").dxTreeList({
            // ...
            onInitNewRow: function(e) { // Handler of the "initNewRow" event
                // Sets an initial value for the "Hire_Date" field
                e.data.Hire_Date = new Date();
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ...
        (onInitNewRow)="onInitNewRow($event)">
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onInitNewRow (e) { // Handler of the "initNewRow" event
            // Sets an initial value for the "Hire_Date" field
            e.data.Hire_Date = new Date();
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
    
#####See Also#####
#include common-link-handleevents
