Grid columns have equal widths by default. You can set a [width](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width) for individual columns or specify that all columns should adjust their widths to their contents ([columnAutoWidth](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnAutoWidth)). Users can resize columns if you enable the [allowColumnResizing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnResizing) option.


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
                width: 150,
            }, {
                dataField: "HireDate", 
                dataType: "date",
                width: 150,
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
            [width]="150">
        </dxi-column>
        <dxi-column
            dataField="HireDate"
            dataType="date"
            [width]="150">
        </dxi-column>
        <!-- ... -->
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app">
            <DxDataGrid ...
                :allow-column-reordering="true"
                :column-auto-width="true">
                <!-- ... -->
                <DxColumn
                    data-field="BirthDate"
                    data-type="date"
                    :width="150">
                </DxColumn>
                <DxColumn
                    data-field="HireDate"
                    data-type="date"
                    :width="150">
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
                        width={150}>
                    </Column>
                    <Column
                        dataField="HireDate"
                        dataType="date"
                        width={150}>
                    </Column>
                    {/* ... */}
                </DataGrid>
            </div>
        );
    }

    export default App;

---