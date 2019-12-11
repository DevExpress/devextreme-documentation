---
id: dxDataGrid.getSelectedRowsData()
---
---
##### shortDescription
Gets the selected rows' data objects.

##### return: Array<any> | Promise<any>
The selected rows' data objects.        
The objects are not processed by the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') and have the same order in which the rows were selected.     
When selection is [deferred](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/deferred.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred'), the method returns a Promise (a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery) that is resolved with the selected rows' data objects.

---
---
##### jQuery

    <!-- tab: index.js -->
    var dataGrid = $("#dataGridContainer").dxDataGrid("instance");

    var selectedRowsData = dataGrid.getSelectedRowsData();

    // ===== or when deferred selection is used =====
    dataGrid.getSelectedRowsData().then(function(selectedRowsData) {
        // Your code goes here
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { DxDataGridComponent } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild('dataGridRef', { static: false }) dataGrid: DxDataGridComponent;
        // Prior to Angular 8
        // @ViewChild('dataGridRef') dataGrid: DxDataGridComponent;

        selectedRowsData = [];

        getSelectedData() {
            this.selectedRowsData = this.dataGrid.instance.getSelectedRowsData();

            // ===== or when deferred selection is used =====
            this.dataGrid.instance.getSelectedRowsData().then((selectedRowsData) => {
                // Your code goes here
            });
        }
    }

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        #dataGridRef
    ></dx-data-grid>

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
        <dx-data-grid ...
            :ref="dataGridRef">
        <dx-data-grid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    const dataGridRef = 'dataGrid';

    export default {
        components: {
            DxDataGrid
        },
        data() {
            return {
                dataGridRef,
                selectedRowsData: []
            }
        },
        computed: {
            dataGrid: function() {
                return this.$refs[dataGridRef].instance;
            }
        },
        methods: {
            getSelectedData() {
                this.selectedRowsData = this.dataGrid.getSelectedRowsData();

                // ===== or when deferred selection is used =====
                this.dataGrid.getSelectedRowsData().then((selectedRowsData) => {
                    // Your code goes here
                });
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

            this.selectedRowsData = [];

            this.getSelectedData = () => {
                this.selectedRowsData = this.dataGrid.getSelectedRowsData();

                // ===== or when deferred selection is used =====
                this.dataGrid.getSelectedRowsData().then((selectedRowsData) => {
                    // Your code goes here
                });
            }
        }

        get dataGrid() {
            return this.dataGridRef.current.instance;
        }

        render() {
            return (
                <DataGrid ...
                    ref={this.dataGridRef}>
                </DataGrid>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().DataGrid()
        .ID("dataGrid")
        @* ... *@
    )

    <script type="text/javascript">
        function getSelectedData() {
            var dataGrid = $("#dataGrid").dxDataGrid("instance");
            var selectedRowsData = dataGrid.getSelectedRowsData();
            // ...

            // ===== or when deferred selection is used =====
            dataGrid.getSelectedRowsData().then(function(selectedRowsData) {
                // Your code goes here
            });
        }
    </script>

---

[note][Calculated values](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue') cannot be obtained because this method gets data objects from the data source.

#####See Also#####
#include common-link-callmethods
- [Initial and Runtime Selection](/concepts/05%20Widgets/DataGrid/50%20Selection/20%20API/1%20Initial%20and%20Runtime%20Selection.md '/Documentation/Guide/Widgets/DataGrid/Selection/#API/Initial_and_Runtime_Selection')
- [cellValue(rowIndex, dataField)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/cellValue(rowIndex_dataField).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cellValuerowIndex_dataField')
- [cellValue(rowIndex, visibleColumnIndex)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/cellValue(rowIndex_visibleColumnIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cellValuerowIndex_visibleColumnIndex')
- [getSelectedRowKeys()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowKeys().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys')
