The [columns](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/') array determines columns' order. You can reorder columns by moving their objects within the array or by changing the column's [visibleIndex](/api-reference/_hidden/GridBaseColumn/visibleIndex.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#visibleIndex') if you prefer to configure columns using the [customizeColumns](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/customizeColumns.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#customizeColumns') function.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            customizeColumns: function(columns) {
                columns[2].visibleIndex = 1;
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeColumns (columns) {
            columns[2].visibleIndex = 1;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ...
        [customizeColumns]="customizeColumns">
    </dx-tree-list>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ...
            :customize-columns="customizeColumns">
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxTreeList from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList
        },
        methods: {
            customizeColumns(columns) {
                columns[2].visibleIndex = 1;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import TreeList from 'devextreme-react/tree-list';

    const customizeColumns = (columns) => {
        columns[2].visibleIndex = 1;
    };

    export default function App() {
	    return (
            <TreeList ...
                customizeColumns={customizeColumns}>
            </TreeList>
        );
    }
    
---

The **visibleIndex** property can also be changed at runtime to reorder columns regardless of the way you configured them. For this, call the [columnOption(id, optionName, optionValue)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#columnOptionid_optionName_optionValue') method. The following code swaps the second and first column:

---
##### jQuery

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("columnOption", 1, "visibleIndex", 0);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        swapColumns () {
            this.treeList.instance.columnOption(1, "visibleIndex", 0);
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
        <DxTreeList ... >
            <DxColumn ... />
            <DxColumn ...
                v-model:visible-index="secondColVisibleIndex"
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxTreeList, {
        DxColumn
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
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
    import React, { useRef } from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import TreeList from 'devextreme-react/tree-list';
    
    export default function App() {
        const treeList = useRef(null);
        const swapColumns = () => {
            treeList.current.instance().columnOption(1, 'visibleIndex', 0);
        };

	    return (
            <TreeList ref={treeList}>
                {/* ... */ }
            </TreeList>
        );
    }
    
---

#####See Also#####
#include common-link-callmethods
- [Data Columns](/concepts/05%20UI%20Components/TreeList/10%20Columns/10%20Column%20Types/1%20Data%20Columns.md '/Documentation/Guide/UI_Components/TreeList/Columns/Column_Types/Data_Columns/')
