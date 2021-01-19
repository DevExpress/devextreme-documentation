The **DataGrid** caches data by default. This allows the UI component to decrease the loading time when a user sorts and filters data or expands a row the second time. To update data in cache, call the [refresh()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/refresh().md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#refresh') method of the UI component or the [reload()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload') method of the **DataSource**.

---
##### jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("refresh");
    // ===== or =====
    var dataGridDataSource = $("#dataGridContainer").dxDataGrid("getDataSource");
    dataGridDataSource.reload();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        refreshData () {
            this.dataGrid.instance.refresh();
            // ===== or =====
            let dataGridDataSource = this.dataGrid.instance.getDataSource();
            dataGridDataSource.reload();
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
        <DxDataGrid :ref="dataGridRefKey">
            <!-- ... -->
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    const dataGridRefKey = "my-data-grid";

    export default {
        components: {
            DxDataGrid
        },
        data() {
            return {
                dataGridRefKey
            }
        },
        methods: {
            refreshData() {
                this.dataGrid.refresh();
                // ===== or =====
                let dataGridDataSource = this.dataGrid.getDataSource();
                dataGridDataSource.reload();
            }
        },
        computed: {
            dataGrid: function() {
                return this.$refs[dataGridRefKey].instance;
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

            this.refreshData = () => {
                this.dataGrid.refresh();
                // ===== or =====
                let dataGridDataSource = this.dataGrid.getDataSource();
                dataGridDataSource.reload();
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

[note]When data processing operations are [delegated to the server](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/'), data is loaded every time these operations are performed even if caching is enabled. 

If your data source changes frequently, disable caching by assigning **false** to the **cacheEnabled** option. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({ 
            // ...
            cacheEnabled: false
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        [cacheEnabled]="false">
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
        <DxDataGrid ...
            :cache-enabled="false">
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
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ...
                    cacheEnabled={false}>
                </DataGrid>
            );
        }
    }
    export default App;
    
---

#####See Also#####
#include common-link-callmethods
- [DataGrid - Access the DataSource](/concepts/05%20Widgets/DataGrid/05%20Data%20Binding/30%20Access%20the%20DataSource.md '/Documentation/Guide/Widgets/DataGrid/Data_Binding/Access_the_DataSource/')
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalDataSource)

[tags] dataGrid, data grid, caching, cache, enable caching, cacheEnabled