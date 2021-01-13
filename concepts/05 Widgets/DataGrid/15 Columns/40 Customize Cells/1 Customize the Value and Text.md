Use the [customizeText](/api-reference/_hidden/GridBaseColumn/customizeText.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#customizeText') function to customize the text displayed in cells. Note that this text is not used to sort, filter, and group data or calculate summaries. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "Price",
                customizeText: function(cellInfo) {
                    return cellInfo.value + "$";
                }
            }]
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        constructor() {
            // Uncomment the line below if the function should be executed in the component's context
            // this.priceColumn_customizeText = this.priceColumn_customizeText.bind(this);
        }

        priceColumn_customizeText (cellInfo) {
            return cellInfo.value + "$";
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
    <dx-data-grid ... >
        <dxi-column dataField="Price" [customizeText]="priceColumn_customizeText"></dxi-column>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn
                data-field="Price"
                :customize-text="priceColumn_customizeText"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        methods: {
            priceColumn_customizeText(cellInfo) {
                return cellInfo.value + '$';
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor(props) {
            super(props);

            // Uncomment the line below if the function should be executed in the component's context
            // this.priceColumn_customizeText = this.priceColumn_customizeText.bind(this);
        }

        priceColumn_customizeText(cellInfo) {
            return cellInfo.value + '$';
        }

        render() {
            return (
                <DataGrid ... >
                    <Column
                        dataField="Price"
                        customizeText={priceColumn_customizeText}
                    />
                </DataGrid>
            );
        }
    }
    export default App;
    
---

To use the text displayed in cells in those data processing operations, specify the [calculateCellValue](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue') function instead. It populates a column with custom values and allows you to create unbound columns - columns that are not bound to any individual data field. In the following example, this function combines full names using data from the **firstName** and **lastName** fields: 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                caption: "Full Name",
                calculateCellValue: function (rowData) {
                    return rowData.firstName + " " + rowData.lastName;
                }
            }]
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        constructor() {
            // Uncomment the line below if the function should be executed in the component's context
            // this.fullNameColumn_calculateCellValue = this.fullNameColumn_calculateCellValue.bind(this);
        }

        fullNameColumn_calculateCellValue (rowData) {
            return rowData.firstName + " " + rowData.lastName;
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
    <dx-data-grid ... >
        <dxi-column caption="Full Name" [calculateCellValue]="fullNameColumn_calculateCellValue"></dxi-column>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn
                caption="Full Name"
                :calculate-cell-value="fullNameColumn_calculateCellValue"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        methods: {
            fullNameColumn_calculateCellValue(rowData) {
                return rowData.firstName + ' ' + rowData.lastName;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor(props) {
            super(props);

            // Uncomment the line below if the function should be executed in the component's context
            // this.fullNameColumn_calculateCellValue = this.fullNameColumn_calculateCellValue.bind(this);
        }

        fullNameColumn_calculateCellValue(rowData) {
            return rowData.firstName + ' ' + rowData.lastName;
        }

        render() {
            return (
                <DataGrid ... >
                    <Column
                        caption="Full Name"
                        calculateCellValue={fullNameColumn_calculateCellValue}
                    />
                </DataGrid>
            );
        }
    }
    export default App;
    
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnCustomization/"
} 

Some features are disabled in columns with calculated values. Refer to the [calculateCellValue](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue') description for a list of disabled features and the properties that enable them.
