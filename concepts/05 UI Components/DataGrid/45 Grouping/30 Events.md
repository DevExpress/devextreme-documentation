You can execute certain commands before or after a row was expanded or collapsed by handling the [rowExpanding](/api-reference/10%20UI%20Components/GridBase/4%20Events/rowExpanding.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Events/#rowExpanding'), [rowExpanded](/api-reference/10%20UI%20Components/GridBase/4%20Events/rowExpanded.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Events/#rowExpanded'), [rowCollapsing](/api-reference/10%20UI%20Components/GridBase/4%20Events/rowCollapsing.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Events/#rowCollapsing') or [rowCollapsed](/api-reference/10%20UI%20Components/GridBase/4%20Events/rowCollapsed.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Events/#rowCollapsed') event. Assign event handling functions to the corresponding **on*EventName*** properties when you configure the UI component if these functions are going to remain unchanged. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
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
    <dx-data-grid ...
        (onRowExpanding)="onRowExpanding($event)"
        (onRowExpanded)="onRowExpanded($event)"
        (onRowCollapsing)="onRowCollapsing($event)"
        (onRowCollapsed)="onRowCollapsed($event)">
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
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
            DxDataGridModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            @row-expanding="onRowExpanding"
            @row-expanded="onRowExpanded"
            @row-collapsing="onRowCollapsing"
            @row-collapsed="onRowCollapsed">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        // ...
        methods: {
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
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DataGrid, Column } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... 
                    onRowExpanding={this.onRowExpanding}
                    onRowExpanded={this.onRowExpanded}
                    onRowCollapsing={this.onRowCollapsing}
                    onRowCollapsed={this.onRowCollapsed}>
                </DataGrid>
            );
        }

        onRowExpanding (e) {
            // Handler of the "rowExpanding" event
        }

        onRowExpanded (e) {
            // Handler of the "rowExpanded" event
        }

        onRowCollapsing (e) {
            // Handler of the "rowCollapsing" event
        }

        onRowCollapsed (e) {
            // Handler of the "rowCollapsed" event
        }
    }
    export default App;
  
---

---
##### jQuery

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#oneventName_eventHandler') method.

    <!--JavaScript-->
    var rowCollapsedEventHandler1 = function (e) {
        // First handler of the "rowCollapsed" event
    };

    var rowCollapsedEventHandler2 = function (e) {
        // Second handler of the "rowCollapsed" event
    };

    $("#dataGridContainer").dxDataGrid("instance")
        .on("rowCollapsed", rowCollapsedEventHandler1)
        .on("rowCollapsed", rowCollapsedEventHandler2);

---

#####See Also#####
#include common-link-handleevents
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalDataSource)
