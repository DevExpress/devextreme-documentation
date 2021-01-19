Grid columns have equal widths by default. You can set each column's [width](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#width) or indicate that all columns should adjust their widths to their content ([columnAutoWidth](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#columnAutoWidth)). Users can resize columns if you enable the [allowColumnResizing](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#allowColumnResizing) option.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            columns: [
            // ...
            {
                dataField: "BirthDate", 
                dataType: "date",
                width: 100,
            }, {
                dataField: "HireDate", 
                dataType: "date",
                width: 100,
            },
            // ...
            ],
            allowColumnResizing: true,
            columnAutoWidth: true,
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        [allowColumnResizing]="true"
        [columnAutoWidth]="true">
        <!-- ... -->
        <dxi-column
            dataField="BirthDate"
            dataType="date"
            [width]="100">
        </dxi-column>
        <dxi-column
            dataField="HireDate"
            dataType="date"
            [width]="100">
        </dxi-column>
        <!-- ... -->
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxDataGrid ...
                :allow-column-reordering="true"
                :column-auto-width="true">
                <!-- ... -->
                <DxColumn
                    data-field="BirthDate"
                    data-type="date"
                    :width="100">
                </DxColumn>
                <DxColumn
                    data-field="HireDate"
                    data-type="date"
                    :width="100">
                </DxColumn>
                <!-- ... -->
            </DxDataGrid>
        </div>
    </template>

    <script>
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
                    columnAutoWidth={true}
                    allowColumnReordering={true}>
                    {/* ... */}
                    <Column
                        dataField="BirthDate"
                        dataType="date"
                        width={100}>
                    </Column>
                    <Column
                        dataField="HireDate"
                        dataType="date"
                        width={100}>
                    </Column>
                    {/* ... */}
                </DataGrid>
            </div>
        );
    }

    export default App;

---