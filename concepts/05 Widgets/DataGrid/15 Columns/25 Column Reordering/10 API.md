The [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array determines columns' order. You can reorder columns by moving their objects within the array or by changing the column's [visibleIndex](/api-reference/_hidden/GridBaseColumn/visibleIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visibleIndex') if you prefer to configure columns using the [customizeColumns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/customizeColumns.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeColumns') function.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            customizeColumns: function(columns) {
                column[2].visibleIndex = 1;
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeColumns (columns) {
            column[2].visibleIndex = 1;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...
        [customizeColumns]="customizeColumns">
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            :customize-columns="customizeColumns">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        methods: {
            customizeColumns(columns) {
                column[2].visibleIndex = 1;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    class App extends React.Component {
        customizeColumns(columns) {
            column[2].visibleIndex = 1;
        }

        render() {
            return (
                <DataGrid ...
                    customizeColumns={this.customizeColumns}>
                </DataGrid>
            );
        }
    }
    export default App;
    
---

The **visibleIndex** option can also be changed at runtime to reorder columns regardless of the way you configured them. For this, call the [columnOption(id, optionName, optionValue)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue') method. The following code swaps the second and first column:

---
##### jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("columnOption", 1, "visibleIndex", 0);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        swapColumns () {
            this.dataGrid.instance.columnOption(1, "visibleIndex", 0);
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
            <DxColumn ... />
            <DxColumn ...
                v-model:visible-index="secondColVisibleIndex"
            />
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
        data() {
            return() {
                secondColVisibleIndex: 1
            }
        },
        methods: {
            swapColumns() {
                this.secondColVisibleIndex = 0;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.dataGridRef = React.createRef();

            this.swapColumns = () => {
                this.dataGrid.columnOption(1, 'visibleIndex', 0);
            }
        }

        get dataGrid() {
            return this.dataGridRef.current.instance;
        }

        render() {
            return (
                <DataGrid ref={this.dataGridRef}>
                    {/* ... */ }
                </DataGrid>
            );
        }
    }
    export default App;
    
---

#####See Also#####
#include common-link-callmethods
- [Data Columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/1%20Data%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Data_Columns/')
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ColumnCustomization)
