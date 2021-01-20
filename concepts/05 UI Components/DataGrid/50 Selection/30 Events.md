The **DataGrid** UI component raises the [selectionChanged](/api-reference/10%20UI%20Widgets/GridBase/4%20Events/selectionChanged.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Events/#selectionChanged') event when a row is selected, or the selection is cleared. If the function that handles this event is going to remain unchanged, assign it to the [onSelectionChanged](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onSelectionChanged') property when you configure the UI component. Note that information on selected and deselected rows is passed to the handler only when selection is not [deferred](/concepts/05%20Widgets/DataGrid/10%20Enhance%20Performance%20on%20Large%20Datasets/015%20Deferred%20Selection.md '/Documentation/Guide/UI_Components/DataGrid/Enhance_Performance_on_Large_Datasets/#Deferred_Selection').

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
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
    <dx-data-grid ...
        (onSelectionChanged)="onSelectionChanged($event)">
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onSelectionChanged (e) { // Handler of the "selectionChanged" event
            const currentSelectedRowKeys = e.currentSelectedRowKeys;
            const currentDeselectedRowKeys = e.currentDeselectedRowKeys;
            const allSelectedRowKeys = e.selectedRowKeys;
            const allSelectedRowsData = e.selectedRowsData;
            // ...
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
            @selection-changed="onSelectionChanged">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        methods: {
            onSelectionChanged(e) {
                const currentSelectedRowKeys = e.currentSelectedRowKeys;
                const currentDeselectedRowKeys = e.currentDeselectedRowKeys;
                const allSelectedRowKeys = e.selectedRowKeys;
                const allSelectedRowsData = e.selectedRowsData;
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.onSelectionChanged = this.onSelectionChanged.bind(this);
        }
        
        onSelectionChanged(e) {
            const currentSelectedRowKeys = e.currentSelectedRowKeys;
            const currentDeselectedRowKeys = e.currentDeselectedRowKeys;
            const allSelectedRowKeys = e.selectedRowKeys;
            const allSelectedRowsData = e.selectedRowsData;
            // ...
        }

        render() {
            return (
                <DataGrid ...
                    onSelectionChanged={this.onSelectionChanged}>
                </DataGrid>
            );
        }
    }
    export default App;
    
---

If you are going to change the event handler at runtime, or if you need to attach several handlers to the event, subscribe to it using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var selectionChangedEventHandler1 = function(e) {
        // First handler of the "selectionChanged" event
    };

    var selectionChangedEventHandler2 = function(e) {
        // Second handler of the "selectionChanged" event
    };

    $("#dataGridContainer").dxDataGrid("instance")
        .on("selectionChanged", selectionChangedEventHandler1)
        .on("selectionChanged", selectionChangedEventHandler2);

#####See Also#####
#include common-link-handleevents
