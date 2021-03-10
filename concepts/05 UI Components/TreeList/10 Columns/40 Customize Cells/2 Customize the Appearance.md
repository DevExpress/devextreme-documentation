To customize cell appearance, use a column's [cellTemplate](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#cellTemplate). In Angular and Vue, you can declare the template in the markup. In React, you can use a rendering function (shown in the code below) or component:

---

##### Angular

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column dataField="Title" cellTemplate="cellTemplate"></dxi-column>
        <div *dxTemplate="let cell of 'cellTemplate'">
            <div style="color:blue">{{ cell.text }}</div>
        </div>
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
        <DxTreeList ... >
            <DxColumn
                data-field="Title"
                cell-template="cell"
            />
            <template #cell="{ data }">
                <div style="color:blue">{{ data.cell.text }}</div>
            </template>
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

    const renderCell = (data) => {
        return <div style={{ color: 'blue' }}>{data.cell.text}</div>;
    };

    export default function App() {
	    return (
            <TreeList ... >
                <Column
                    dataField="Title"
                    cellRender={renderCell}
                />
            </TreeList>
        );
    }

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for cells. To apply this markup, use the **cellTemplate** function as shown in the following code:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "Title",
                cellTemplate: function(element, info) {
                     element.append("<div>" + info.text + "</div>")
                            .css("color", "blue");
                }
            }]
        });
    });

---

While **cellTemplate** customizes data cells only, the [onCellPrepared](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onCellPrepared.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onCellPrepared') function can customize any cell. Unlike **cellTemplate**, this function does customizations after a cell is created, so you cannot use it to change the cell value. Check the [rowType](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row/rowType.md '/Documentation/ApiReference/UI_Components/dxTreeList/Row/#rowType') field of the function's argument to detect the UI element that owns the cell.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            onCellPrepared: function(e) {
                if (e.rowType == "detailAdaptive") {
                    e.cellElement.addClass("adaptiveRowStyle"); 
                }
            }
        });
    });

    <!--CSS-->
    .adaptiveRowStyle { 
        background-color: #cce6ff;
        font-size: 12pt
    }

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onCellPrepared (e) {
            if (e.rowType == "detailAdaptive") {
                e.cellElement.addClass("adaptiveRowStyle");
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

    <!--HTML-->
    <dx-tree-list
        (onCellPrepared)="onCellPrepared($event)">
    </dx-tree-list>

    <!--CSS-->
    .adaptiveRowStyle { 
        background-color: #cce6ff;
        font-size: 12pt
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ...
            @cell-prepared="onCellPrepared">
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
            onCellPrepared(e) {
                if (e.rowType == 'detailAdaptive') {
                    e.cellElement.addClass('adaptiveRowStyle');
                }
            }
        }
    }
    </script>
    <style scoped>
        .adaptiveRowStyle { 
            background-color: #cce6ff;
            font-size: 12pt
        }
    </style>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import TreeList from 'devextreme-react/tree-list';

    const onCellPrepared = (e) => {
        if (e.rowType == 'detailAdaptive') {
            e.cellElement.addClass('adaptiveRowStyle');
        }
    };

    export default function App() {
	    return (
            <TreeList ...
                onCellPrepared={onCellPrepared}>
            </TreeList>
        );
    }
    
---

#####See Also#####
- [Customize Column Headers](/concepts/05%20Widgets/TreeList/10%20Columns/15%20Customize%20Column%20Headers.md '/Documentation/Guide/UI_Components/TreeList/Columns/Customize_Column_Headers/')
