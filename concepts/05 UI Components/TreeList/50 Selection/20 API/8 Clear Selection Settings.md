Call the [deselectRows(keys)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/deselectRows(keys).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#deselectRowskeys') method to clear the selection of specific rows. With the non-recursive selection, one key deselects one row; with [recursive](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/selection/recursive.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/selection/#recursive') - a row with its nested rows. 

---
##### jQuery

    <!--JavaScript-->$("#treeListContainer").dxTreeList("deselectRows", [1, 4, 10]);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        deselectRows (keys) {
            this.treeList.instance.deselectRows(keys);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ...
            v-model:selected-row-keys="selectedRowKeys">
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList
        },
        data() {
            return {
                selectedRowKeys: []
            }
        },
        methods: {
            deselectRows(keys) {
                let selectedRowKeys = this.selectedRowKeys;
                keys.forEach(function(item) {
                    const index = selectedRowKeys.indexOf(item);
                    if (index !== -1) {
                        const newRowKeys = [...this.selectedRowKeys];
                        newRowKeys.splice(index, 1);
                        this.selectedRowKeys = newRowKeys;
                    }
                });
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeList from 'devextreme-react/tree-list';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                selectedRowKeys: []
            }
            this.deselectRows = this.deselectRows.bind(this);
        	this.handleOptionChange = this.handleOptionChange.bind(this);
        }

        deselectRows(keys) {
            let selectedRowKeys = [...this.state.selectedRowKeys];
            keys.forEach(function(item) {
                const index = selectedRowKeys.indexOf(item);
                if (index !== -1) {
                    selectedRowKeys.splice(index, 1);
                }
            });
            this.setState({
                selectedRowKeys: selectedRowKeys
            });
        }

        handleOptionChange(e) {
            if(e.fullName === 'selectedRowKeys') {
                this.setState({
                    selectedRowKeys: e.value
                });
            }
        }

        render() {
            return (
                <TreeList ...
                    selectedRowKeys={this.state.selectedRowKeys}
                    onOptionChanged={this.handleOptionChange}>
                </TreeList>
            );
        }
    }
    export default App;
    
---

The [deselectAll()](/api-reference/10%20UI%20Components/dxTreeList/3%20Methods/deselectAll().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#deselectAll') method clears selection of all visible rows and can be used when you apply a [filter](/concepts/05%20UI%20Components/TreeList/40%20Filtering%20and%20Searching '/Documentation/Guide/UI_Components/TreeList/Filtering_and_Searching/') and want to keep the selection of invisible rows that do not meet the filtering conditions. To clear the selection of all rows regardless of their visibility, call the [clearSelection()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/clearSelection().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#clearSelection') method.

---
##### jQuery

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    treeList.deselectAll();
    treeList.clearSelection();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        deselectVisibleRows () {
            this.treeList.instance.deselectAll();
        }
        deselectAllRows () {
            this.treeList.instance.clearSelection();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ...
            ref="treeList"
            v-model:selected-row-keys="selectedRowKeys">
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList
        },
        data() {
            return {
                selectedRowKeys: []
            }
        },
        methods: {
            deselectAllRows() {
                this.selectedRowKeys = [];
            },
            deselectVisibleRows() {
                this.$refs['treeList'].instance.deselectAll();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeList from 'devextreme-react/tree-list';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                selectedRowKeys: []
            }
            this.treeListRef = React.createRef();
            this.deselectAllRows = this.deselectAllRows.bind(this);
            this.deselectVisibleRows = this.deselectVisibleRows.bind(this);
        }

        deselectAllRows() {
            this.setState({
                selectedRowKeys: []
            });
        }

        deselectVisibleRows() {
            this.treeListRef.current.instance().deselectAll();
        }

        handleOptionChange(e) {
            if(e.fullName === 'selectedRowKeys') {
                this.setState({
                    selectedRowKeys: e.value
                });
            }
        }

        render() {
            return (
                <TreeList ...
                    ref="treeListRef"
                    selectedRowKeys={this.state.selectedRowKeys}
                    onOptionChanged={this.handleOptionChange}>
                </TreeList>
            );
        }
    }
    export default App;
    
---

#####See Also#####
#include common-link-callmethods
