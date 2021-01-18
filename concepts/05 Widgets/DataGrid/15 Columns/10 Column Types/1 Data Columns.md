Data columns are the most common type of columns used in the **DataGrid** UI component. They are generated for all [column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array members that do not configure [band columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/2%20Band%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/#Band_Columns'). Data columns display values from a [data field](/api-reference/_hidden/GridBaseColumn/dataField.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField') to which they are bound, but you can populate them with custom values (see [Customize Cells](/concepts/05%20Widgets/DataGrid/15%20Columns/40%20Customize%20Cells '/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Cells/')).

![DevExtreme HTML5 JavaScript DataGrid DataColumns](/images/DataGrid/visual_elements/column-types_data.png)

A data column automatically detects the type of its values. However, if the values should be converted (for example, if dates are stored as strings), set the target type using the [dataType](/api-reference/_hidden/GridBaseColumn/dataType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType') property. The UI component takes the data type into account when [filtering](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/'), [sorting](/concepts/05%20Widgets/DataGrid/25%20Sorting '/Documentation/Guide/Widgets/DataGrid/Sorting/'), and performing other data operations.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            dataSource: [{
                HireDate: "2017/04/13",
                // ...
            },
            //...
            ],
            columns: [{
                dataField: "HireDate",
                dataType: "date"
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column dataField="HireDate" dataType="date"></dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
        <DxDataGrid ... >
            <DxColumn data-field="HireDate" data-type="date" />
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
        // ...
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
        render() {
            return (
                <DataGrid ... >
                    <Column dataField="HireDate" dataType="date" />
                </DataGrid>
            );
        }
    }
    export default App;
    
---

#####See Also#####
- [Customize Cells](/concepts/05%20Widgets/DataGrid/15%20Columns/40%20Customize%20Cells '/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Cells/')
- [Lookup Columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/3%20Lookup%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/#Lookup_Columns')
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/SimpleArray)

[tags] dataGrid, data grid, column types, data columns
