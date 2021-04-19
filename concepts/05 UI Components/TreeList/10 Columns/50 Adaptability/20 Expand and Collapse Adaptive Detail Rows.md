You can call the [expandAdaptiveDetailRow(key)](/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#expandAdaptiveDetailRowkey) or [collapseAdaptiveDetailRow()](/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#collapseAdaptiveDetailRow) method to expand or collapse an adaptive detail row. To check whether a specific row is expanded, use the [isAdaptiveDetailRowExpanded(key)](/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#isAdaptiveDetailRowExpandedkey) method. Note that only one detail row can be expanded at a time.

---
##### jQuery

    <!--JavaScript-->var expandAdaptiveDetailRow = function (key, treeListInstance) {
        if (!treeListInstance.isAdaptiveDetailRowExpanded(key)) {
            treeListInstance.expandAdaptiveDetailRow(key);
        }
    }

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        expandAdaptiveDetailRow (key) {
            if (!this.treeList.instance.isAdaptiveDetailRowExpanded(key)) {
                this.treeList.instance.expandAdaptiveDetailRow(key);
            }
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
            :ref="treeListRefKey">
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';

    const treeListRefKey = "my-tree-list";

    export default {
        components: {
            DxTreeList
        },
        data() {
            return() {
                treeListRefKey
            }
        },
        methods: {
            expandAdaptiveDetailRow(key) {
                if (!this.treeList.isAdaptiveDetailRowExpanded(key)) {
                    this.treeList.expandAdaptiveDetailRow(key);
                }
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
    import React, { useRef } from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import TreeList from 'devextreme-react/tree-list';

    export default function App() {
        const treeList = useRef(null);
        const expandAdaptiveDetailRow = (key) => {
            if (!treeList.current.instance.isAdaptiveDetailRowExpanded(key)) {
                treeList.current.instance.expandAdaptiveDetailRow(key);
            }
        };

	    return (
            <TreeList ref={treeList}>
                {/* ... */ }
            </TreeList>
        );
    }
    
---

#####See Also#####
- [Column Fixing](/Documentation/Guide/UI_Components/TreeList/Columns/Column_Fixing/)
- [Column Chooser](/Documentation/Guide/UI_Components/TreeList/Columns/Column_Chooser/)