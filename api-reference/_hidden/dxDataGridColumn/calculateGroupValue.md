---
id: dxDataGridColumn.calculateGroupValue
type: String | function(rowData)
---
---
##### shortDescription
Sets custom column values used to group grid records.

##### param(rowData): Object
The current row's data.

##### return: any
The calculated value used to create and sort groups.

---
This property accepts the name of the data source field that provides values by which to group grid records...

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            columns: [{
                dataField: "ColumnValues",
                groupIndex: 0,
                calculateGroupValue: "GroupingValues"
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column
            dataField="ColumnValues"
            [groupIndex]="0"
            calculateGroupValue="GroupingValues">
        </dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })
    

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn
                data-field="ColumnValues"
                :group-index="0"
                calculate-group-value="GroupingValues" 
            />
        </DxDataGrid>
    </template>
    <script>
    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';

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
    import DataGrid, { Column } from 'devextreme-react/data-grid';

    function App() {
        // ...
        return (
            <DataGrid ...>
                <Column
                    dataField="ColumnValues"
                    groupIndex={0}
                    calculateGroupValue="GroupingValues" 
                />
            </DataGrid>
        );
    }

    export default App();

---

... or a function that creates custom groups:


---
##### jQuery

    <!--JavaScript-->
    const convertDateToString = date => {
        return date.toISOString().split('T')[0].replaceAll('-', '/');
    };

    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            columns: [
                // ...
                {
                    dataField: "HireDate",
                    dataType: "date",
                    groupIndex: 0,
                    calculateGroupValue: function(rowData){       
                        const date = rowData.HireDate;
                        const yesterdayDate = new Date();
                        yesterdayDate.setDate(yesterdayDate.getDate() - 1);

                        const today = convertDateToString(new Date());
                        const yesterday = convertDateToString(yesterdayDate);

                        switch (date) {
                            case today:
                                return "Today";
                            case yesterday:
                                return "Yesterday";
                            // ...
                            default:
                                return "Earlier";
                        }      
                    }
                }
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-{widget-name} ... >
        <!-- ... -->
        <dxi-column
            dataField="HireDate"
            [groupIndex]="0"
            [calculateGroupValue]="groupByDate"
            dataType="date">
        </dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...

    const convertDateToString = (date) => {
        return date.toISOString().split("T")[0].replaceAll("-", "/");
    };

    export class AppComponent {
        // ...
        groupByDate(rowData) {         
            const date = rowData.HireDate;
            const yesterdayDate = new Date();
            yesterdayDate.setDate(yesterdayDate.getDate() - 1);

            const today = convertDateToString(new Date());
            const yesterday = convertDateToString(yesterdayDate);

            switch (date) {
                case today:
                    return "Today";
                case yesterday:
                    return "Yesterday";
                // ...
                default:
                    return "Earlier";
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })
    

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn
                data-field="HireDate"
                data-type="date"
                :group-index="0"
                :calculate-group-value="groupByDate"
            />
        </DxDataGrid>
    </template>
    <script>
    import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';

    const convertDateToString = (date) => {
        return date.toISOString().split("T")[0].replaceAll("-", "/");
    };

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        methods: {
            groupByDate(rowData) {               
                const date = rowData.HireDate;
                const yesterdayDate = new Date();
                yesterdayDate.setDate(yesterdayDate.getDate() - 1);

                const today = convertDateToString(new Date());
                const yesterday = convertDateToString(yesterdayDate);

                switch (date) {
                    case today:
                        return "Today";
                    case yesterday:
                        return "Yesterday";
                    // ...
                    default:
                        return "Earlier";
                }
            }
        }
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid, { Column } from 'devextreme-react/data-grid';

    const convertDateToString = (date) => {
        return date.toISOString().split("T")[0].replaceAll("-", "/");
    };

    function App() {
        // ...
        const groupByDate = (rowData) => {          
            const date = rowData.HireDate;
            const yesterdayDate = new Date();
            yesterdayDate.setDate(yesterdayDate.getDate() - 1);

            const today = convertDateToString(new Date());
            const yesterday = convertDateToString(yesterdayDate);

            switch (date) {
                case today:
                    return "Today";
                case yesterday:
                    return "Yesterday";
                // ...
                default:
                    return "Earlier";
            }
        };  

        return (
            <DataGrid ...>
                <Column
                    dataField="HireDate"
                    dataType="date"
                    groupIndex={0}
                    calculateGroupValue={groupByDate}
                />
            </DataGrid>
        );
    }

    export default App;

---

Group captions and appearance can be customized. To do this, define the [groupCellTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#groupCellTemplate). Refer to the following GitHub repository for an example: <a href="https://github.com/DevExpress-Examples/DataGrid---How-to-apply-custom-sorting-to-a-grouped-column" target="_blank">DataGrid - How to apply custom sorting to a grouped column</a>.

**calculateGroupValue** is also used to sort groups when grid records are grouped by this column.

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}
