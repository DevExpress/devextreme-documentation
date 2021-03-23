The TreeList generates column headers based on the names of [data fields](/api-reference/_hidden/GridBaseColumn/dataField.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#dataField') by default. For example, if a data field is *"fullName"*, the column header text is "Full Name". 

![DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component TreeList ColumnHeaders](/images/treelist/visual_elements/column_headers.png)

Specify the **columns**.[caption](/api-reference/_hidden/GridBaseColumn/caption.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#caption') property to change the column header text.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [
                { dataField: "CompanyName", caption: "Company" },
                // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column dataField="CompanyName" caption="Company"></dxi-column>
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
            <DxColumn data-field="CompanyName" caption="Company" />
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
            <TreeList ... >
                <Column dataField="CompanyName" caption="Company" />
            </TreeList>
        );
    }
    
---

If you need a more specific customization, define a custom template in the **columns**.[headerCellTemplate](/api-reference/_hidden/dxTreeListColumn/headerCellTemplate.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#headerCellTemplate') property. This property accepts a function or template container. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "Title",
                caption: "Position",
                headerCellTemplate: function (header, info) {
                    $('<div>')
                        .html(info.column.caption)
                        .css('font-size', '16px')
                        .appendTo(header);
                }
            }, {
                dataField: "Address",
                headerCellTemplate: $('<i style="color: black">Mailing Address</i>')
            }]
        });
     });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column
            dataField="Title"
            caption="Position"
            headerCellTemplate="titleHeaderTemplate">
        </dxi-column>
        <dxi-column
            dataField="Address"
            headerCellTemplate="addressHeaderTemplate">
        </dxi-column>
        <div *dxTemplate="let info of 'titleHeaderTemplate'">
            <p style="font-size:16px">{{info.column.caption}}</p>
        </div>
        <div *dxTemplate="let info of 'addressHeaderTemplate'">
            <i style="color: black">Mailing Address</i>
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
                caption="Position"
                header-cell-template="title-header"
            />
            <DxColumn
                data-field="Address"
                header-cell-template="address-header"
            />
            <template #title-header="{ data }">
                <p style="font-size:16px">{{ data.column.caption }}</p>
            </template>
            <template #address-header">
                <i style="color: black">Mailing Address</i>
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

    const renderTitleHeader = (data) => {
        return <p style={{ font-size: '16px' }}>{data.column.caption}</p>;
    }
    const renderAddressHeader = () => {
        return <i style={{ color: 'black' }}>Mailing Address</i>;
    }

    export default function App() {
	    return (
            <TreeList ... >
                <Column
                    dataField="Title"
                    caption="Position"
                    headerCellRender={renderTitleHeader}
                />
                <Column
                    dataField="Address"
                    headerCellRender={renderAddressHeader}
                />
            </TreeList>
        );
    }    
    
---

To hide column headers, assign **false** to the [showColumnHeaders](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/showColumnHeaders.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#showColumnHeaders') property.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            showColumnHeaders: false
        });
     });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ...
        [showColumnHeaders]="false">
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
            :show-column-headers="false">
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import TreeList from 'devextreme-react/tree-list';

    export default function App() {
	    return (
            <TreeList ...
                showColumnHeaders={false}>
            </TreeList>
        );
    }

---

#####See Also#####
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview)
