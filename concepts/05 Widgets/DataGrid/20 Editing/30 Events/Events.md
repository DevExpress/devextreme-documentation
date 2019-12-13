The **DataGrid** widget raises events before and after a row is inserted, updated or removed from the data source. If the event handlers are going to remain unchanged during the widget's lifetime, assign them to corresponding **on*EventName*** options:

- [onRowInserting](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowInserting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowInserting')
- [onRowInserted](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowInserted.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowInserted')
- [onRowUpdating](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowUpdating.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowUpdating')
- [onRowUpdated](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowUpdated.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowUpdated')
- [onRowRemoving](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowRemoving.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowRemoving')
- [onRowRemoved](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onRowRemoved.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowRemoved')

<!---->

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#dataGridContainer").dxDataGrid({
            // ...
            onRowInserting: function(e) {
                // Handler of the "rowInserting" event
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        (onRowInserting)="onRowInserting($event)">
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onRowInserting (e) {
            // Handler of the "rowInserting" event
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })
    
---

If you are going to change the event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var rowUpdatingEventHandler1 = function(e) {
        // First handler of the "rowUpdating" event
    };
    
    var rowUpdatingEventHandler2 = function(e) {
        // Second handler of the "rowUpdating" event
    };
    
    $("#dataGridContainer").dxDataGrid("instance")
        .on("rowUpdating", rowUpdatingEventHandler1)
        .on("rowUpdating", rowUpdatingEventHandler2);

In addition, the **DataGrid** raises the [initNewRow](/api-reference/10%20UI%20Widgets/GridBase/4%20Events/initNewRow.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#initNewRow') event when a new row is added and the [editingStart](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/editingStart.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#editingStart') event when a row enters the editing state. These events can be handled just like others - using the **on*EventName*** option or the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#oneventName_eventHandler') method. In the following example, the [onInitNewRow](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onInitNewRow.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onInitNewRow') event handler specifies initial values for an added row:

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            onInitNewRow: function(e) { // Handler of the "initNewRow" event
                // Sets an initial value for the "Hire_Date" field
                e.data.Hire_Date = new Date();
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        (onInitNewRow)="onInitNewRow($event)">
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
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
            DxDataGridModule
        ],
        // ...
    })
    
---
    
#####See Also#####
#include common-link-handleevents
