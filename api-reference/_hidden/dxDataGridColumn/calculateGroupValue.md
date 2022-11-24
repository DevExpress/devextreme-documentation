---
id: dxDataGridColumn.calculateGroupValue
type: String | function(this, rowData)
---
---
##### shortDescription
Sets custom column values used to group grid records.

##### param(rowData): Object
Current row data.

##### return: any
The calculated value used to create and sort groups.

##### param(this): GridBaseColumn
<!-- Description goes here -->

---
This property accepts the name of the data source field that provides values used to group grid records...

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            columns: [{
                dataField: "ColumnValues",
                groupIndex: 0,
                calculateGroupValue: "GroupingValues"
            }]
        });
    });

##### Angular
    
    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column
            dataField="ColumnValues"
            [groupIndex]="0"
            calculateGroupValue="GroupingValues">
        </dxi-column>
    </dx-data-grid>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser'; 
    import { NgModule } from '@angular/core'; 
    import { AppComponent } from './app.component'; 
    import { DxDataGridModule } from 'devextreme-angular'; 
    
    @NgModule({ 
        declarations: [ 
            AppComponent 
        ], 
        imports: [ 
            BrowserModule, 
            DxDataGridModule 
        ], 
        providers: [ ], 
        bootstrap: [AppComponent] 
    }) 
    
    export class AppModule { }
    

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

... or a function that creates custom groups. In the code below, **calculateGroupValue** creates groups like Today, Yesterday, and Earlier:


---
##### jQuery

    <!--JavaScript-->
    const getDayDifference = (date1, date2) => {
        const timeDiff = Math.abs(date1.getTime() - date2.getTime());
        return Math.ceil(timeDiff / (1000 * 3600 * 24));  
    }

    $(function() {
        $("#dataGridContainer").dxDataGrid({
            columns: [
                // ...
                {
                    dataField: "HireDate",
                    dataType: "date",
                    groupIndex: 0,
                    calculateGroupValue: function(rowData) {       
                        const currentHireDate = rowData.HireDate;
                        const today = new Date();
                        today.setHours(0,0,0,0);

                        const dayDifference = getDayDifference(today, currentHireDate);
                        switch (dayDifference) {
                            case 0: return "Today";
                            case 1: return "Yesterday";
                            // ...
                            default: return "Earlier";
                        }
                    }
                }
            ]
        });
    });

##### Angular
    
    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <!-- ... -->
        <dxi-column
            dataField="HireDate"
            [groupIndex]="0"
            [calculateGroupValue]="groupByDate"
            dataType="date">
        </dxi-column>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    const getDayDifference = (date1, date2) => {
        const timeDiff = Math.abs(date1.getTime() - date2.getTime());
        return Math.ceil(timeDiff / (1000 * 3600 * 24));  
    }

    export class AppComponent {
        // ...
        groupByDate(rowData) {         
            const currentHireDate = rowData.HireDate;
            const today = new Date();
            today.setHours(0,0,0,0);

            const dayDifference = getDayDifference(today, currentHireDate);
            switch (dayDifference) {
                case 0: return "Today";
                case 1: return "Yesterday";
                // ...
                default: return "Earlier";
            };  
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser'; 
    import { NgModule } from '@angular/core'; 
    import { AppComponent } from './app.component'; 
    import { DxDataGridModule } from 'devextreme-angular'; 
    
    @NgModule({ 
        declarations: [ 
            AppComponent 
        ], 
        imports: [ 
            BrowserModule, 
            DxDataGridModule 
        ], 
        providers: [ ], 
        bootstrap: [AppComponent] 
    }) 
    
    export class AppModule { }
    

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

    const getDayDifference = (date1, date2) => {
        const timeDiff = Math.abs(date1.getTime() - date2.getTime());
        return Math.ceil(timeDiff / (1000 * 3600 * 24));  
    }

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        methods: {
            groupByDate(rowData) {               
                const currentHireDate = rowData.HireDate;
                const today = new Date();
                today.setHours(0,0,0,0);

                const dayDifference = getDayDifference(today, currentHireDate);
                switch (dayDifference) {
                    case 0: return "Today";
                    case 1: return "Yesterday";
                    // ...
                    default: return "Earlier";
                };  
            }
        }
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid, { Column } from 'devextreme-react/data-grid';

    const getDayDifference = (date1, date2) => {
        const timeDiff = Math.abs(date1.getTime() - date2.getTime());
        return Math.ceil(timeDiff / (1000 * 3600 * 24));  
    }

    function App() {
        // ...
        const groupByDate = (rowData) => {          
            const currentHireDate = rowData.HireDate;
            const today = new Date();
            today.setHours(0,0,0,0);

            const dayDifference = getDayDifference(today, currentHireDate);
            switch (dayDifference) {
                case 0: return "Today";
                case 1: return "Yesterday";
                // ...
                default: return "Earlier";
            };  
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

Group captions and appearance can be customized. To do this, define the [groupCellTemplate](/api-reference/_hidden/dxDataGridColumn/groupCellTemplate.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#groupCellTemplate'). Refer to the following GitHub repository for an example: <a href="https://github.com/DevExpress-Examples/DataGrid---How-to-apply-custom-sorting-to-a-grouped-column" target="_blank">DataGrid - How to apply custom sorting to a grouped column</a>.

**calculateGroupValue** is also used to sort groups when grid records are grouped by this column.

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}
