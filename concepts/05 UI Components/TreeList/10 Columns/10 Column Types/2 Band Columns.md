Unlike [data columns](/concepts/05%20UI%20Components/TreeList/10%20Columns/10%20Column%20Types/1%20Data%20Columns.md '/Documentation/Guide/UI_Components/TreeList/Columns/Column_Types/#Data_Columns'), band columns do not hold any data. Instead, they collect two or more data columns under one column header. 

![DevExtreme HTML5 JavaScript TreeList BandColumns MultiRowHeaders BandedLayout](/images/treelist/visual_elements/column-types_band.png)

To set up this layout, describe the hierarchy of columns directly in an object of the [columns](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/') array. For example, the following code bands three columns under the *"Contacts"* header.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                caption: "Contacts",
                columns: ["Email", "Mobile_Phone", "Skype"]
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column caption="Contacts">
            <dxi-column dataField="Email"></dxi-column>
            <dxi-column dataField="Mobile_Phone"></dxi-column>
            <dxi-column dataField="Skype"></dxi-column>
        </dxi-column>
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
            <DxColumn caption="Contacts">
                <DxColumn data-field="Email" />
                <DxColumn data-field="Mobile_Phone" />
                <DxColumn data-field="Skype" />
            </DxColumn>
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
                <Column caption="Contacts">
                    <Column dataField="Email" />
                    <Column dataField="Mobile_Phone" />
                    <Column dataField="Skype" />
                </Column>
            </TreeList>
        );
    }
    
---

If you use the [customizeColumns](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/customizeColumns.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#customizeColumns') function to configure columns, the hierarchy cannot be described declaratively. To band columns in this case, use the [isBand](/api-reference/_hidden/GridBaseColumn/isBand.md '/Documentation//ApiReference/UI_Components/dxTreeList/Configuration/columns/#isBand') and [ownerBand](/api-reference/_hidden/GridBaseColumn/ownerBand.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#ownerBand') properties. Using the same properties, you can distinguish band and nested columns from other columns in code.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            customizeColumns: function(columns) {
                columns.push({ // Pushes the "Contacts" band column into the "columns" array
                    caption: "Contacts",
                    isBand: true
                });
        
                const contactsFields = ["Email", "Mobile_Phone", "Skype"];
                for (var i = 0; i < columns.length - 1; i++) {
                    if (contactsFields.indexOf(columns[i].dataField) > -1) // If the column belongs to "Contacts",
                        columns[i].ownerBand = columns.length - 1; // assigns "Contacts" as the owner band column
                }
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeColumns (columns) {
            columns.push({ // Pushes the "Contacts" band column into the "columns" array
                caption: "Contacts",
                isBand: true
            });
    
            const contactsFields = ["Email", "Mobile_Phone", "Skype"];
            for (var i = 0; i < columns.length - 1; i++) {
                if (contactsFields.indexOf(columns[i].dataField) > -1) // If the column belongs to "Contacts",
                    columns[i].ownerBand = columns.length - 1; // assigns "Contacts" as the owner band column
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
                columns.push({ // Pushes the "Contacts" band column into the "columns" array
                    caption: 'Contacts',
                    isBand: true
                });
        
                const contactsFields = ['Email', 'Mobile_Phone', 'Skype'];
                for (let i = 0; i < columns.length - 1; i++) {
                    if (contactsFields.indexOf(columns[i].dataField) > -1) // If the column belongs to "Contacts",
                        columns[i].ownerBand = columns.length - 1; // assigns "Contacts" as the owner band column
                }
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
        columns.push({ // Pushes the "Contacts" band column into the "columns" array
            caption: 'Contacts',
            isBand: true
        });

        const contactsFields = ['Email', 'Mobile_Phone', 'Skype'];
        for (let i = 0; i < columns.length - 1; i++) {
            if (contactsFields.indexOf(columns[i].dataField) > -1) // If the column belongs to "Contacts",
                columns[i].ownerBand = columns.length - 1; // assigns "Contacts" as the owner band column
        }
    };

    export default function App() {
        return (
            <TreeList ...
                customizeColumns={customizeColumns}>
            </TreeList>
        );
    }
    
---

[note] Nested columns have almost every [property of a data column](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/'), except [fixed](/api-reference/_hidden/GridBaseColumn/fixed.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#fixed') and [fixedPosition](/api-reference/_hidden/GridBaseColumn/fixedPosition.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#fixedPosition'). Band columns, on the contrary, support a very limited set of properties; all of them are listed in the [isBand](/api-reference/_hidden/GridBaseColumn/isBand.md '/Documentation//ApiReference/UI_Components/dxTreeList/Configuration/columns/#isBand') property's description. 

Band columns support hierarchies of any nesting level making the following structure acceptable.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                caption: 'A',
                columns: [ 'A1', 'A2', {
                    caption: 'A3',
                    columns: ['A31', 'A32', {
                        caption: 'A33',
                        columns: ['A331', 'A332', 'A333']
                    }]
                }]
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column caption="A">
            <dxi-column dataField="A1"></dxi-column>
            <dxi-column dataField="A2"></dxi-column>
            <dxi-column caption="A3">
                <dxi-column dataField="A31"></dxi-column>
                <dxi-column dataField="A32"></dxi-column>
                <dxi-column caption="A33">
                    <dxi-column dataField="A331"></dxi-column>
                    <dxi-column dataField="A332"></dxi-column>
                    <dxi-column dataField="A333"></dxi-column>
                </dxi-column>
            </dxi-column>
        </dxi-column>
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
            <DxColumn caption="A">
                <DxColumn data-field="A1" />
                <DxColumn data-field="A2" />
                <DxColumn caption="A3">
                    <DxColumn data-field="A31" />
                    <DxColumn data-field="A32" />
                    <DxColumn caption="A33">
                        <DxColumn data-field="A331" />
                        <DxColumn data-field="A332" />
                        <DxColumn data-field="A333" />
                    </DxColumn>
                </DxColumn>
            </DxColumn>
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
                <Column caption="A">
                    <Column dataField="A1" />
                    <Column dataField="A2" />
                    <Column caption="A3">
                        <Column dataField="A31" />
                        <Column dataField="A32" />
                        <Column caption="A33">
                            <Column dataField="A331" />
                            <Column dataField="A332" />
                            <Column dataField="A333" />
                        </Column>
                    </Column>
                </Column>
            </TreeList>
        );
    }
    
---

[tags] treelist, tree list, column types, band columns, banded layout, multi-row headers
