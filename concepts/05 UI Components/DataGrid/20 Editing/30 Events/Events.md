The DataGrid UI component raises events before and after a row is inserted, updated or removed from the data source. If the event handlers are going to remain unchanged during the UI component's lifetime, assign them to corresponding **on*EventName*** properties:

- [onRowInserting](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowInserting.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowInserting')
- [onRowInserted](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowInserted.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowInserted')
- [onRowUpdating](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowUpdating.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowUpdating')
- [onRowUpdated](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowUpdated.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowUpdated')
- [onRowRemoving](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowRemoving.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowRemoving')
- [onRowRemoved](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowRemoved.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowRemoved')

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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            @row-inserting="onRowInserting">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        methods: {
            onRowInserting(e) {
                // Handler of the "rowInserting" event
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    class App extends React.Component {
        onRowInserting(e) {
            // Handler of the "rowInserting" event
        }

        render() {
            return (
                <DataGrid ...
                    onRowInserting={this.onRowInserting}>
                </DataGrid>
            );
        }
    }
    export default App;
    
---

---
##### jQuery

If you are going to change the event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#oneventName_eventHandler') method.

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

---

In addition, the DataGrid raises the [initNewRow](/api-reference/10%20UI%20Components/GridBase/4%20Events/initNewRow.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Events/#initNewRow') event when a new row is added and the [editingStart](/api-reference/10%20UI%20Components/dxDataGrid/4%20Events/editingStart.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Events/#editingStart') event when a row enters the editing state. These events can be handled just like others - using the **on*EventName*** property or the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#oneventName_eventHandler') method. In the following example, the [onInitNewRow](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onInitNewRow.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onInitNewRow') event handler specifies initial values for an added row:

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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            @init-new-row="onInitNewRow">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        methods: {
            onInitNewRow(e) { // Handler of the "initNewRow" event
                // Sets an initial value for the "Hire_Date" field
                e.data.Hire_Date = new Date();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    class App extends React.Component {
        onInitNewRow(e) { // Handler of the "initNewRow" event
            // Sets an initial value for the "Hire_Date" field
            e.data.Hire_Date = new Date();
        }

        render() {
            return (
                <DataGrid ...
                    onInitNewRow={this.onInitNewRow}>
                </DataGrid>
            );
        }
    }
    export default App;
    
---
    
#####See Also#####
#include common-link-handleevents
