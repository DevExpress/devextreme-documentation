You can clear sorting settings for all columns by calling the [clearSorting()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/clearSorting().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#clearSorting') method, or for a specific column - by setting its [sortIndex](/api-reference/_hidden/GridBaseColumn/sortIndex.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#sortIndex') property to **undefined** using the [columnOption](/api-reference/10%20UI%20Components/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#columnOptionid_optionName_optionValue') method.

---
##### jQuery

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    treeList.columnOption("Name", "sortIndex", undefined);
    treeList.clearSorting();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        clearSortingByNames () {
            this.treeList.instance.columnOption("Name", "sortIndex", undefined);
        }
        clearAllSorting () {
            this.treeList.instance.clearSorting();
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
        <DxTreeList :ref="treeListRefKey">
            <DxColumn
                data-field="Name"
                v-model:sort-index="nameSortIndex"
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxTreeList, DxColumn } from 'devextreme-vue/tree-list';

    const treeListRefKey = "my-tree-list";

    export default {
        components: {
            DxTreeList
        },
        data() {
            return {
                treeListRefKey,
                nameSortIndex: 0
            };
        },
        methods: {
            clearNameColumnSorting() {
                this.nameSortIndex = undefined;
            },
            clearAllSorting() {
                this.treeList.clearSorting();
            }
        },
        computed: {
            treeList() {
                return this.$refs[treeListRefKey].instance;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { TreeList, Column } from 'devextreme-react/tree-list';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.treeListRef = React.createRef();
        }

        get treeList() {
            return this.treeListRef.current.instance();
        }

        render() {
            return (
                <TreeList ref={this.treeListRef} ...>
                    <Column
                        dataField="Name"
                        defaultSortIndex={0} />
                </TreeList>
            );
        }

        clearNameColumnSorting = () => {
            this.treeList.columnOption("Name", "sortIndex", undefined);
        }
        
        clearAllSorting = () => {
            this.treeList.clearSorting();
        }
    }
    export default App;
    
---

#####See Also#####
- [remoteOperations](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/remoteOperations/')
