When the total width of columns exceeds component width, the TreeList either truncates column cell text or adds horizontal scrolling. As an alternative, the component can hide one or several columns to prevent horizontal scrolling and display cell text in full. To enable this feature, set the [columnHidingEnabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnHidingEnabled.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnHidingEnabled') property to **true**.

Each column has a unique default hiding priority. The rightmost column has the priority of 0. This value is incremented by 1 for columns from right to left; the column with the lowest priority is hidden first.

You can use the **columns[]**.[hidingPriority](/api-reference/_hidden/GridBaseColumn/hidingPriority.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#hidingPriority') property to specify custom hiding priorities for those columns that you want to hide. Other columns will never be hidden. This will override the default behavior described above. In this case, the **columnHidingEnabled** property can be omitted.


---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columnHidingEnabled: true,
            // These columns will be hidden in the following order:
            columns: [{
                // ...
                hidingPriority: 0 // first
            }, {
                // ...
                hidingPriority: 1 // second 
            }, {
                // ...
                hidingPriority: 2 // third
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... 
        [columnHidingEnabled]="true">
        <!-- These columns will be hidden in the following order: -->
        <dxi-column [hidingPriority]="0" ... ></dxi-column> <!-- first -->
        <dxi-column [hidingPriority]="1" ... ></dxi-column> <!-- second -->
        <dxi-column [hidingPriority]="2" ... ></dxi-column> <!-- third -->
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
            :column-hiding-enabled="true">
            <!-- These columns will be hidden in the following order: -->
            <DxColumn :hiding-priority="0" ... /> <!-- first -->
            <DxColumn :hiding-priority="1" ... /> <!-- second -->
            <DxColumn :hiding-priority="2" ... /> <!-- third -->
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
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Column
    } from 'devextreme-react/tree-list';

    export default function App() {
	    return (
            <TreeList ...
                columnHidingEnabled={true}>
                {/* These columns will be hidden in the following order: */}
                <Column defaultHidingPriority={0} ... /> {/* first */}
                <Column defaultHidingPriority={1} ... /> {/* second */}
                <Column defaultHidingPriority={2} ... /> {/* third */}
            </TreeList>
        );
    }
    
---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Adaptability/"
}

[note]

If your TreeList is inside a resizable container, you must call the [updateDimensions()](/api-reference/10%20UI%20Components/GridBase/3%20Methods/updateDimensions().md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#updateDimensions') method on each container resize to rerender the component:

---
##### jQuery

    <!--JavaScript-->$("#treeListContainer").dxTreeList("updateDimensions");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxTreeListModule, DxTreeListComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent, { static: false }) treeList: DxTreeListComponent;
        // Prior to Angular 8
        // @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        renderTreeList () {
            this.treeList.instance.updateDimensions();
        };
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
            renderTreeList() {
                this.treeList.updateDimensions();
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
        const renderTreeList = () => {
            treeList.current.instance().updateDimensions();
        };

	    return (
            <TreeList ref={treeList}>
                {/* ... */ }
            </TreeList>
        );
    }

---

[/note]
