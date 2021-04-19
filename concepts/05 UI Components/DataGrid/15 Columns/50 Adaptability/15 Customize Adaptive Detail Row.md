Adaptive detail rows contain the [Form](/Documentation/ApiReference/UI_Components/dxForm/) UI component. You can implement the [onAdaptiveDetailRowPreparing](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onAdaptiveDetailRowPreparing) handler to customize the Form: change its properties in the **formOptions** attribute of the function's argument. For example, the following code marks the form's *"OrderID"* data field as required:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            onAdaptiveDetailRowPreparing: function (e) {
                for (let formItem of e.formOptions.items) {
                    if (formItem.dataField == "OrderID") {
                        formItem.isRequired = true;
                    }
                }
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onAdaptiveDetailRowPreparing (e) {
            for (let formItem of e.formOptions.items) {
                if (formItem.dataField == "OrderID") {
                    formItem.isRequired = true;
                }
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...
        (onAdaptiveDetailRowPreparing)="onAdaptiveDetailRowPreparing($event)">
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            :@adaptive-detail-row-preparing="onAdaptiveDetailRowPreparing">
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
            onAdaptiveDetailRowPreparing(e) {
                for (let formItem of e.formOptions.items) {
                    if (formItem.dataField == 'OrderID') {
                        formItem.isRequired = true;
                    }
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    const onAdaptiveDetailRowPreparing = (e) => {
        for (let formItem of e.formOptions.items) {
            if (formItem.dataField == 'OrderID') {
                formItem.isRequired = true;
            }
        }
    };

    export default function App() {
	    return (
            <DataGrid ... 
                onAdaptiveDetailRowPreparing={onAdaptiveDetailRowPreparing}>
            </DataGrid>
        );
    }
    
---
