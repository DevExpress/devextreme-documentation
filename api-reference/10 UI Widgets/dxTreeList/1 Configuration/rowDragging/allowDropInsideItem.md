<!-- %fullDescription% -->      

This option requires that you also implement a distinct handler for the drop of a row inside a target row. Implement the handler in the [onReorder](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/rowDragging/#onReorder) function to drag and drop items inside a single component. Use the [onAdd](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/rowDragging/#onAdd) and [onRemove](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/rowDragging/#onRemove) functions to perfrom cross-component drag and drop. Use the `dropInsideItem` parameter as follows:

##### jQuery

    <!-- tab: index.js -->
    $(function(){
        function onReorder(e) {
            // Handle the drop of a row to a target row inside a single component.
        }
        function onAdd(e) {
            // Handle the drop of a row to a target row inside a single component. This function is executed in the target component.
        }
        function onRemove(e) {            
            // Handle the drop of a row to a target row inside a single component. This function is executed in the source component.
        }

        function getTreeListConfiguration(index) {
            return {
                // ...
                rowDragging: {
                    // ...
                    allowDropInsideItem: true,
                    allowReordering: true,
                    onAdd: onAdd,
                    onReorder: onReorder,
                    onRemove: onRemove
                }
            }
        }
        
        $("#treeList1").dxTreeList(getTreeListConfiguration(1));
        $("#treeList2").dxTreeList(getTreeListConfiguration(2));
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list ...
        #treeListRef
    ></dx-tree-list>

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
        <DxTreeList ...
            :ref="treeListRef">
        </DxTreeList>
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

---
<!-- import * from 'api-reference\10 UI Widgets\GridBase\1 Configuration\rowDragging\AllowDropInsideItem.md' -->