---
id: dxTreeList.getSelectedRowsData()
---
---
##### shortDescription
Gets the data objects of the rows selected explicitly [via the API](/concepts/05%20Widgets/TreeList/50%20Selection/20%20API/1%20Initial%20and%20Runtime%20Selection.md '/Documentation/Guide/Widgets/TreeList/Selection/#API/Initial_and_Runtime_Selection') or via a click or tap.

##### return: Array<any>
The selected rows' data objects.        
The objects are not processed by the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') and have the same order in which the rows were selected.

---
---
##### jQuery

    <!-- tab: index.js -->
    var treeList = $("#treeListContainer").dxTreeList("instance");

    var selectedRowsData = treeList.getSelectedRowsData();

##### Angular

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { DxTreeListComponent } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild('treeListRef', { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild('treeListRef') treeList: DxTreeListComponent;

        selectedRowsData = [];

        getSelectedData() {
            this.selectedRowsData = this.treeList.instance.getSelectedRowsData();
        }
    }

    <!-- tab: app.component.html -->
    <dx-tree-list ...
        #treeListRef
    ></dx-tree-list>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxTreeListModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTreeListModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-tree-list ...
            :ref="treeListRef">
        <dx-tree-list>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';

    const treeListRef = 'treeList';

    export default {
        components: {
            DxTreeList
        },
        data() {
            return {
                treeListRef,
                selectedRowsData: []
            }
        },
        computed: {
            treeList: function() {
                return this.$refs[treeListRef].instance;
            }
        },
        methods: {
            getSelectedData() {
                this.selectedRowsData = this.treeList.getSelectedRowsData();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList from 'devextreme-react/tree-list';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.treeListRef = React.createRef();

            this.selectedRowsData = [];

            this.getSelectedData = () => {
                this.selectedRowsData = this.treeList.getSelectedRowsData();
            }
        }

        get treeList() {
            return this.treeListRef.current.instance;
        }

        render() {
            return (
                <TreeList ...
                    ref={this.treeListRef}>
                </TreeList>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().TreeList()
        .ID("treeList")
        @* ... *@
    )

    <script type="text/javascript">
        function getSelectedData() {
            var treeList = $("#treeList").dxTreeList("instance");
            var selectedRowsData = treeList.getSelectedRowsData();
            // ...
        }
    </script>

---

[note][Calculated values](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateCellValue') cannot be obtained because this method gets data objects from the data source.

#####See Also#####
#include common-link-callmethods
- [getSelectedRowsData(mode)](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/getSelectedRowsData(mode).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getSelectedRowsDatamode')
- [cellValue(rowIndex, dataField)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/cellValue(rowIndex_dataField).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#cellValuerowIndex_dataField')
- [cellValue(rowIndex, visibleColumnIndex)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/cellValue(rowIndex_visibleColumnIndex).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#cellValuerowIndex_visibleColumnIndex')