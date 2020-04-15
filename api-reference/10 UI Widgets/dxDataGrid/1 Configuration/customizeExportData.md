---
id: dxDataGrid.Options.customizeExportData
type: function(columns, rows)
deprecated: [important]Since v20.1, we recommend using export based on the ExcelJS library. See the [export](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/) topic.
---
---
##### shortDescription
Customizes data before export. 

##### param(columns): Array<dxDataGridColumn>
All column [configurations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/').

##### param(rows): Array<dxDataGridRowObject>
The [Row](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/') objects. This array contains only exported rows.

---

This function is called between the [onExporting](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onExporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting') and [onExported](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onExported.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExported') functions. This function customizes data; the other functions can be used to customize grid columns.
 
In the following code, the **customizeExportData** function replaces empty values with the *"Is Blank"* value:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            customizeExportData: function (columns, rows) {
                rows.forEach(function (row) {
                    var rowValues = row.values;
                    for (var i = 0; i < rowValues.length; i++) {
                        if (rowValues[i] == "")
                            rowValues[i] = "Is Blank";
                    }
                })
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeExportData (columns, rows) {
            rows.forEach(function (row) {
                let rowValues =  row.values;
                for(let i = 0; i < rowValues.length; i++) {
                    if (rowValues[i] == "")
                        rowValues[i] = "Is Blank";
                }
            })
        };
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
        [customizeExportData]="customizeExportData">
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            :customize-export-data="customizeExportData"
        >
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDataGrid } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        methods: {
            customizeExportData(columns, rows) {
                rows.forEach(function (row) {
                    var rowValues = row.values;
                    for (var i = 0; i < rowValues.length; i++) {
                        if (rowValues[i] == "")
                            rowValues[i] = "Is Blank";
                    }
                })
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
        render() {
            return (
                <DataGrid ...
                    customizeExportData={customizeExportData}
                >
                </{DataGrid}>
            );
        }
    }

    function customizeExportData(columns, rows) {
        rows.forEach(function (row) {
            var rowValues = row.values;
            for (var i = 0; i < rowValues.length; i++) {
                if (rowValues[i] == "")
                    rowValues[i] = "Is Blank";
            }
        })
    }

    export default App;

---

#####See Also#####
- [export](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/')
- **columns[]**.[allowExporting](/api-reference/_hidden/dxDataGridColumn/allowExporting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowExporting')
