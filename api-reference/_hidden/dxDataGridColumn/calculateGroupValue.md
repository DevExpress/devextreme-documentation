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

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            columns: [
                {
                    dataField: "Country",
                    groupIndex: 0,
                    calculateGroupValue: "City" // specifies the column used to group grid records
                },
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column
            dataField="Country"
            [groupIndex]="0"
            calculateGroupValue="City"> <!-- specifies the column used to group grid records -->
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
                data-field="Position"
                :group-index="0"
                calculate-group-value="City" <!-- specifies the column used to group grid records -->
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
                    dataField="Position"
                    groupIndex={0}
                    calculateGroupValue="City" // specifies the column used to group grid records
                />
            </DataGrid>
        );
    }

    export default App();

---

... or a function that creates custom groups:


---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            columns: [
                // ...
                {
                    dataField: "HireDate",
                    dataType: "date",
                    groupIndex: 0,
                    calculateGroupValue: function(rowData){
                        const convertDateToString = date => {
                            return date.toISOString().split('T')[0].replaceAll('-', '/');
                        };

                        const date = rowData.HireDate;
                        const yesterdayDate = new Date();
                        yesterdayDate.setDate(yesterdayDate.getDate() - 1);

                        const today = convertDateToString(new Date());
                        const yesterday = convertDateToString(yesterdayDate);

                        switch (date) {
                            case today:
                                return "Today";
                                break;
                            case yesterday:
                                return "Yesterday";
                                break; 
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
    export class AppComponent {
        // ...
        groupByDate(rowData) {
            const convertDateToString = (date) => {
                return date.toISOString().split("T")[0].replaceAll("-", "/");
            };

            const date = rowData.HireDate;
            const yesterdayDate = new Date();
            yesterdayDate.setDate(yesterdayDate.getDate() - 1);

            const today = convertDateToString(new Date());
            const yesterday = convertDateToString(yesterdayDate);

            switch (date) {
                case today:
                    return "Today";
                    break;
                case yesterday:
                    return "Yesterday";
                    break; 
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

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        methods: {
            groupByDate(rowData) {
                const convertDateToString = (date) => {
                    return date.toISOString().split("T")[0].replaceAll("-", "/");
                };

                const date = rowData.HireDate;
                const yesterdayDate = new Date();
                yesterdayDate.setDate(yesterdayDate.getDate() - 1);

                const today = convertDateToString(new Date());
                const yesterday = convertDateToString(yesterdayDate);

                switch (date) {
                    case today:
                        return "Today";
                        break;
                    case yesterday:
                        return "Yesterday";
                        break; 
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

    const groupByDate = (rowData) => {
        const convertDateToString = (date) => {
            return date.toISOString().split("T")[0].replaceAll("-", "/");
        };

        const date = rowData.HireDate;
        const yesterdayDate = new Date();
        yesterdayDate.setDate(yesterdayDate.getDate() - 1);

        const today = convertDateToString(new Date());
        const yesterday = convertDateToString(yesterdayDate);

        switch (date) {
            case today:
                return "Today";
                break;
            case yesterday:
                return "Yesterday";
                break; 
            // ...
            default:
                return "Earlier";
        }
    };

    function App() {
        // ...
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

**calculateGroupValue** is also used to sort groups when the column is grouped.

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}
