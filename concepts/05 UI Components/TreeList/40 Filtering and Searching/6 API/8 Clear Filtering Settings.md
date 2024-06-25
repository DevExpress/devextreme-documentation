The [clearFilter(filterName)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/clearFilter(filterName).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#clearFilterfilterName') method allows you to clear different filter settings depending on the argument. Acceptable arguments are listed in the method's description.

<!---->

---
##### jQuery

    <!--JavaScript-->// Clears the search panel
    $("#treeListContainer").dxTreeList("clearFilter", "search");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        clearSearchPanel () {
            this.treeList.instance.clearFilter("search");
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
            :ref="gridRefKey"
        />       
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';

    const treeListRefKey = 'tree-list';

    export default {
        components: {
            DxTreeList,
        },
        data() {
            return {
                // ...
                treeListRefKey
            };
        },
        methods: {
            clearSearchPanel = () => {
                this.treeList.clearFilter("search");
            }
        },
        computed: {
            treeList: function() {
                return this.$refs[treeListRefKey].instance;
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
            this.gridRef = React.createRef();                  
        }
        get treeList() {
            return this.gridRef.current.instance();
        }
        
        render() {
            return (
                <TreeList ... 
                    :ref="gridRef" 
                />
            );
        }

        clearSearchPanel = () => {
            this.treeList.clearFilter("search");
        }
    }
    
---

#####See Also#####
- [remoteOperations](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/remoteOperations/')
