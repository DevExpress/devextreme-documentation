---
id: dxTreeList.getSelectedRowsData(mode)
---
---
##### shortDescription
Gets the selected rows' data objects.

##### return: Array<any>
The selected rows' data objects.        
The objects are not processed by the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') and have the same order in which the rows were selected.

##### param(mode): String
*"all"*, *"excludeRecursive"*, or *"leavesOnly"*.

---
Below is an example of a **TreeList** with several selected rows:

![Selection in the DevExtreme TreeList widget](/images/treelist/getselectedrowkeys.png)

The **getSelectedRowsData(mode)** method called for this **TreeList** returns different results depending on the **mode** argument:

- *"all"*        
Returns all the selected rows' data objects.

        getSelectedRowsData("all") // returns data objects with the following keys: 2, 5, 8, 9, 6, 10, and 4

- *"excludeRecursive"*        
Excludes recursively selected rows' data objects.

        getSelectedRowsData("excludeRecursive") // returns data objects with the following keys: 2, 6, 10, and 4

- *"leavesOnly"*          
Returns only leaves' data objects.

        getSelectedRowsData("leavesOnly") // returns data objects with the following keys: 8, 9, 6, 10, and 4

---
##### jQuery

    <!-- tab: index.js -->
    var treeList = $("#treeListContainer").dxTreeList("instance");

    var selectedRowsData = treeList.getSelectedRowsData("leavesOnly");

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
            this.selectedRowsData = this.treeList.instance.getSelectedRowsData('leavesOnly');
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
                this.selectedRowsData = this.treeList.getSelectedRowsData('leavesOnly');
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
                this.selectedRowsData = this.treeList.getSelectedRowsData('leavesOnly');
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
- [getSelectedRowKeys(mode)](/api-reference/10%20UI%20Widgets/dxTreeList/3%20Methods/getSelectedRowKeys(mode).md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getSelectedRowKeysmode')