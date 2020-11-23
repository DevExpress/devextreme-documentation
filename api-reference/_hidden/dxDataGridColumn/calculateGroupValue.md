---
id: dxDataGridColumn.calculateGroupValue
type: String | function(rowData)
---
---
##### shortDescription
A field name by which to group cells or a function that returns a field name or a value to perform this operation. This value is also used to sort **DataGrid**'s groups.

##### param(rowData): Object
The current row's data.

##### return: any
The calculated value to be used for grouping and group sorting.

---

If you want to use modified values of a grouping column, assign

By default, [grouping](/concepts/05%20Widgets/DataGrid/45%20Grouping '/Documentation/Guide/Widgets/DataGrid/Grouping/') is conducted using the exact values that the grouping column contains. If you want to use calculated values, implement the **calculateGroupValue** function. As a consequence, group cells' headers may display extra or missing information. To remove or add it, implement the [groupCellTemplate](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupCellTemplate) option ([groupCellRender](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupCellRender) in React). The example below displays the *"California"* group always on top regardless of the sort order. For this, **calculateGroupValue** and **groupCellTemplate** are used:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [ "City",
                {
                    dataField: "State",
                    groupIndex: 0,
                    calculateGroupValue: function(rowData) {
                        let sortValue = rowData.State === "California" ? this.sortOrder == "asc" ? "aaa" : "zzz" : rowData.State;
                        let displayValue = rowData.State;
                        return sortValue + ";" + displayValue;
                    },
                    groupCellTemplate: function(element, options) {
                        let column = options.column;
                        let displayValue = options.value.split(";")[1];
                        element.text(column.caption + ": " + displayValue);
                    }
            // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...>
        <!-- ... -->
        <dxi-column dataField="City"></dxi-column>
        <dxi-column
            dataField="State"
            [groupIndex]="0"
            [calculateGroupValue]="calculateGroupValue"
            groupCellTemplate="groupCellTemplate">
        </dxi-column>

        <div *dxTemplate="let data of 'groupCellTemplate'">
            <div>
                {{data.column.caption}}: {{data.value.split(";")[1]}}
            </div>
        </div>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        stateSortOrder: string;

        constructor(private service: Service) {
            // ...
            this.stateSortOrder = 'asc';
        }

        calculateGroupValue(this: any, rowData: any) {
            const sortValue = rowData.State === 'California' ? this.sortOrder == 'asc' ? 'aaa' : 'zzz' : rowData.State;
            const displayValue = rowData.State;
            return sortValue + ';' + displayValue;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <!-- ... -->
            <DxColumn data-field="City"/>
            <DxColumn
                data-field="State"
                :group-index="0"
                :calculate-group-value="calculateGroupValue"
                group-cell-template="groupCellTemplate"
            />
            <template #groupCellTemplate="{ data }">
                <div>
                    {{data.column.caption + ": " + data.value.split(";")[1]}}
                </div>
            </template>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn,
        // ...
    } from 'devextreme-vue/data-grid';

    // ...
    export default {
        components: {
            // ...
            DxDataGrid,
            DxColumn
        },
        data() {
            return {
                // ...
                sortOrder: 'asc'
            };
        },
        methods: {
            calculateGroupValue(rowData) {
                let sortValue = rowData.State === "California" ? this.sortOrder == "asc" ? "aaa" : "zzz" : rowData.State;
                let displayValue = rowData.State;
                return sortValue + ";" + displayValue;
            }
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid, { Column } from 'devextreme-react/data-grid';

    export default function App() {
        // ...

        const GroupCell = (options) => {
            let column = options.column;
            let displayValue = options.value.split(";")[1];
            return <div>{column.caption + ": " + displayValue}</div>;
        };

        const calculateGroupValue = useCallback(function (rowData) {
            let sortValue = rowData.State === "California" ? this.sortOrder == "asc" ? "aaa": "zzz" : rowData.State;
            let displayValue = rowData.State;
            return sortValue + ";" + displayValue;
        }, []);

        return (
            <DataGrid ...>
                <Column
                    dataField="Country"
                    defaultGroupIndex={0}
                    groupCellRender={GroupCell}
                    calculateGroupValue={calculateGroupValue}
                />
            </DataGrid>
        );
    }

---

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}