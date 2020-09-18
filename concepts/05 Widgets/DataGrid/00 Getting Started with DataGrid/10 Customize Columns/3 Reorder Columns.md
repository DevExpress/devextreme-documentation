To reorder grid columns, change their order in the **columns** array. Users also can reorder columns if you enable the [allowColumnReordering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnReordering) option.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            columns: [{
                dataField: "FullName"
            }, {
                dataField: "Position"
            }, {
                dataField: "BirthDate", 
                dataType: "date",
            }, {
                dataField: "HireDate", 
                dataType: "date",
            },"City", {
                dataField: "Country"
            },
            "Address",
            "HomePhone",
            {
                dataField: "PostalCode",
            }],
            allowColumnReordering: true,
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        [allowColumnReordering]="true">
        <dxi-column dataField="FullName"></dxi-column>
        <dxi-column dataField="Position"></dxi-column>
        <dxi-column
            dataField="BirthDate"
            dataType="date">
        </dxi-column>
        <dxi-column
            dataField="HireDate"
            dataType="date">
        </dxi-column>
        <dxi-column dataField="City"></dxi-column>
        <dxi-column dataField="Country"></dxi-column>
        <dxi-column dataField="Address"></dxi-column>
        <dxi-column dataField="HomePhone"></dxi-column>
        <dxi-column dataField="PostalCode"></dxi-column>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app">
            <DxDataGrid ...
                :allow-column-reordering="true">
                <DxColumn data-field="FullName"></DxColumn>
                <DxColumn data-field="Position"></DxColumn>
                <DxColumn
                    data-field="BirthDate"
                    data-type="date">
                </DxColumn>
                <DxColumn
                    data-field="HireDate"
                    data-type="date">
                </DxColumn>
                <DxColumn data-field="City" />
                <DxColumn data-field="Country"></DxColumn>
                <DxColumn data-field="Address" />
                <DxColumn data-field="HomePhone" />
                <DxColumn data-field="PostalCode" />
            </DxDataGrid>
        </div>
    </template>

    <script>
    // ...
    import {
        DxDataGrid,
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

    import {
        DataGrid,
        Column
    } from 'devextreme-react/data-grid';

    function App() {
        return (
            <div className="App">
                <DataGrid ...
                    allowColumnReordering={true}>
                    <Column dataField="FullName"></Column>
                    <Column dataField="Position"></Column>
                    <Column
                        dataField="BirthDate"
                        dataType="date">
                    </Column>
                    <Column
                        dataField="HireDate"
                        dataType="date">
                    </Column>
                    <Column dataField="City" />
                    <Column dataField="Country"></Column>
                    <Column dataField="Address" />
                    <Column dataField="HomePhone" />
                    <Column dataField="PostalCode" />
                </DataGrid>
            </div>
        );
    }

    export default App;

---

In the code above, we also specify the *"date"* [dataType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType) for the `BirthDate` and `HireDate` columns. This is needed because the **DataGrid** detects data types automatically based on column values, and `BirthDate` and `HireDate` values are stored in the data source as strings.