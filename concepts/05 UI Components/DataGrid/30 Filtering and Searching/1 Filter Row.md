The filter row allows a user to filter data by individual columns' values.  Usually, the filter row's cells are text boxes, but the cells of columns that hold date or Boolean values contain other filtering controls (calendars or select boxes).

![DevExtreme HTML5 JavaScript jQuery Knockout Angular DataGrid Filtering FilterRow](/images/DataGrid/visual_elements/filter_row.png)

To make the filter row visible, assign **true** to the [filterRow](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/filterRow/').**visible** property. You can set a column's [allowFiltering](/api-reference/_hidden/dxDataGridColumn/allowFiltering.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowFiltering') property to **false** if data should never be filtered by it.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            filterRow: { visible: true },
            columns: [{
                // ...
                allowFiltering: false
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-filter-row [visible]="true"></dxo-filter-row>
        <dxi-column [allowFiltering]="false" ... ></dxi-column>
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
            <DxFilterRow :visible="true" />
            <DxColumn :allow-filtering="false" ... />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn,
        DxFilterRow
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            DxFilterRow
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column,
        FilterRow
    } from 'devextreme-react/data-grid';

    function App() {
        return (
            <DataGrid ... >
                <FilterRow visible={true} />
                <Column allowFiltering={false} ... />
            </DataGrid>
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        @* ... *@
        .FilterRow(fr => fr.Visible(true))
        .Columns(columns => {
            columns.Add().AllowFiltering(false);
        })
    )

---

A user-specified filter is automatically applied with a delay by default. Alternatively, it can be applied by a click on the *"Apply Filter"* button if you set the **filterRow**.[applyFilter](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterRow/applyFilter.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/filterRow/#applyFilter') property to *"onClick"*.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            filterRow: {
                visible: true,
                applyFilter: "onClick"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-filter-row
            [visible]="true"
            applyFilter="onClick">
        </dxo-filter-row>
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
        <DxDataGrid ...>
            <DxFilterRow 
                :visible="true" 
                apply-filter="onClick"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxFilterRow
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxFilterRow
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        FilterRow
    } from 'devextreme-react/data-grid';

    function App() {
        return (
            <DataGrid ... >
                <FilterRow 
                    visible={true} 
                    applyFilter="onClick" 
                />
            </DataGrid>
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        @* ... *@
        .FilterRow(fr => fr
            .Visible(true)
            .ApplyFilter(GridApplyFilterMode.OnClick)
        )           
    )
    
---

Each cell in the filter row contains a magnifying glass icon. Hovering the mouse pointer over it opens a drop-down list with the column's available filter operations.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular DataGrid Filtering FilterRow](/images/DataGrid/visual_elements/filter_row_operation_chooser.png)


The set of available filter operations can be restricted using the [filterOperations](/api-reference/_hidden/GridBaseColumn/filterOperations.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#filterOperations') property. 

[note] Filter row operations depend on the column [data type](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataType). If a column starts with empty values, DataGrid cannot assign the data type automatically. You must assign the column data type for the filter row to function correctly.

You can also preselect a filter operation and specify the initial filter value with the [selectedFilterOperation](/api-reference/_hidden/GridBaseColumn/selectedFilterOperation.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#selectedFilterOperation') and [filterValue](/api-reference/_hidden/GridBaseColumn/filterValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#filterValue') properties. Call the [columnOption](/api-reference/10%20UI%20Components/GridBase/3%20Methods/columnOption(id_options).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#columnOptionid_options') method at runtime to change these properties:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            filterRow: { visible: true },
            columns: [{
                dataField: "Status",
                filterOperations: ["contains", "="],
                selectedFilterOperation: "contains",
                filterValue: "Pending"
            }]
        })
    });

<!---->

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("instance").columnOption("Status", {
        selectedFilterOperation: "=",
        filterValue: "Finished"
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-filter-row [visible]="true"></dxo-filter-row>
        <dxi-column 
            dataField="Status"
            [filterOperations]="['contains', '=']"
            [(selectedFilterOperation)]="selectedOperation"
            [(filterValue)]="filterValue">
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectedOperation: string = "contains";
        filterValue: any = "Pending";
        applyFilter (operation, value) {
            this.selectedOperation = operation;
            this.filterValue = value;
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
        <DxDataGrid ... >
            <DxFilterRow :visible="true />
            <DxColumn 
                :filter-operations="allowedOperations"
                v-model:selected-filter-operation="selectedOperation"
                v-model:filter-value="filterValue" 
                data-field="Status"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn,
        DxFilterRow
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            DxFilterRow
        },
        data() {
            return {
                allowedOperations: ['contains', '='],
                selectedOperation: 'contains',
                filterValue: 'Pending'
            }
        },
        methods: {
            applyFilter (operation, value) {
                this.selectedOperation = operation;
                this.filterValue = value;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useState, useCallback } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column,
        FilterRow
    } from 'devextreme-react/data-grid';

    function App() {
        const filterOperations = ['contains', '='];
        const [selectedOperation, setSelectedOperation] = useState('contains');
        const [filterValue, setFilterValue] = useState('Pending');

        const optionChanged = useCallback((e) => {
            if (e.fullName === "columns[0].filterValue") {
                setFilterValue(e.value);
            }
            if (e.fullName === "columns[0].selectedFilterOperation") {
                setSelectedOperation(e.value);
            }
        }, []);

        return (
            <DataGrid onOptionChanged={optionChanged} ... >
                <FilterRow visible={true} />
                <Column 
                    dataField="Status"
                    filterOperations={filterOperations}
                    selectedFilterOperation={selectedOperation}
                    filterValue={filterValue}
                />
            </DataGrid>
        );
    }

    export default App;


##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        @* ... *@
        .ID("dataGridContainer")
        .FilterRow(fr => fr.Visible(true))
        .Columns(columns => {
            columns.Add()
                .DataField("Status")
                .FilterOperations(new FilterOperations[] { FilterOperations.Contains, FilterOperations.Equal })
                .SelectedFilterOperation(FilterOperations.Equal)
                .FilterValue("Pending");
        })
    )

    <script type="text/javascript">       
        $("#dataGridContainer").dxDataGrid("instance").columnOption("Status", {
            selectedFilterOperation: "=",
            filterValue: "Finished"
        });
    </script>

---

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/concepts/05%20UI%20Components/DataGrid/30%20Filtering%20and%20Searching/6%20API/1%20Initial%20and%20Runtime%20Filtering.md '/Documentation/Guide/UI_Components/DataGrid/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering')
- [remoteOperations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/')
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Filtering)
