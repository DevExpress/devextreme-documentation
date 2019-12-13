All columns are configured in the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array. Assign a command column's name to the [type](/api-reference/_hidden/dxDataGridColumn/type.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#type') option and specify the other column options.

The following example shows how to specify the adaptive column's [width](/api-reference/_hidden/GridBaseColumn/width.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width'):

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                type: "adaptive",
                width: 50
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column type="adaptive" [width]="50"></dxi-column>
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
        <dx-data-grid ... >
            <dx-column type="adaptive" :width="50" />
        </dx-data-grid>
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
        data() {
            return {
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

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {

        render() {
            return (
                <DataGrid ... >
                    <Column type="adaptive" width={50} />
                </DataGrid>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().DataGrid()
        // ...
        .Columns(cols => {
            cols.Add().Type(GridCommandColumnType.Adaptive).Width(50);
        })
    )
    
---

If a command column should have custom content, specify the column's [cellTemplate](/api-reference/_hidden/dxDataGridColumn/cellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate') and [headerCellTemplate](/api-reference/_hidden/dxDataGridColumn/headerCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#headerCellTemplate'):

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                type: "selection",
                cellTemplate: function ($cellElement, cellInfo) {
                    // Render custom cell content here
                },
                headerCellTemplate: function ($headerElement, headerInfo) {
                    // Render custom header content here
                }
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column
            type="selection"
            cellTemplate="selectionCellTemplate"
            headerCellTemplate="selectionHeaderCellTemplate">
        </dxi-column>
        <div *dxTemplate="let cellInfo of 'selectionCellTemplate'">
            <!-- Declare custom cell content here -->
        </div>
        <div *dxTemplate="let headerInfo of 'selectionHeaderCellTemplate'">
            <!-- Declare custom header content here -->
        </div>
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
        <dx-data-grid ... >
            <dx-column
                type="selection"
                cell-template="selectionCellTemplate"
                header-cell-template="selectionHeaderCellTemplate"
            />
            <template #selectionCellTemplate="{ data }">
                <!-- Declare custom cell content here -->
            </template>
            <template #selectionHeaderCellTemplate="{ data }">
                <!-- Declare custom header content here -->
            </template>
        </dx-data-grid>
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
        data() {
            return {
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

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    const renderCell = (cellInfo) => {
        {/* Declare custom cell content here */}
    }

    const renderHeaderCell = (headerInfo) => {
        {/* Declare custom header content here */}
    }

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Column
                        type="selection"
                        cellRender={renderCell}
                        headerCellRender={renderHeaderCell}
                    />
                </DataGrid>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().DataGrid()
        // ...
        .Columns(cols => {
            cols.Add()
                .Type(GridCommandColumnType.Selection)
                .CellTemplate(@<text>
                   @* Declare custom cell content here *@
                </text>)
                .HeaderCellTemplate(@<text>
                    @* Declare custom header content here *@
                </text>);
        })
    )
    
---