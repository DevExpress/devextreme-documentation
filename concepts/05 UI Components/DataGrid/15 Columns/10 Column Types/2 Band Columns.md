Unlike [data columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/1%20Data%20Columns.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Types/#Data_Columns'), band columns do not hold any data. Instead, they collect two or more data columns under one column header. 

![DevExtreme HTML5 JavaScript DataGrid BandColumns MultiRowHeaders BandedLayout](/images/DataGrid/BandColumns.png)

To set up this layout, describe the hierarchy of columns directly in an object of the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/') array. For example, the following code bands three columns under the *"Contacts"* header.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                caption: "Contacts",
                columns: ["Email", "Mobile_Phone", "Skype"]
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column caption="Contacts">
            <dxi-column dataField="Email"></dxi-column>
            <dxi-column dataField="Mobile_Phone"></dxi-column>
            <dxi-column dataField="Skype"></dxi-column>
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn caption="Contacts">
                <DxColumn data-field="Email" />
                <DxColumn data-field="Mobile_Phone" />
                <DxColumn data-field="Skype" />
            </DxColumn>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Column caption="Contacts">
                        <Column dataField="Email" />
                        <Column dataField="Mobile_Phone" />
                        <Column dataField="Skype" />
                    </Column>
                </DataGrid>
            );
        }
    }
    export default App;
    
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MultiRowHeadersBands/"
}

If you use the [customizeColumns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/customizeColumns.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#customizeColumns') function to configure columns, the hierarchy cannot be described declaratively. To band columns in this case, use the [isBand](/api-reference/_hidden/GridBaseColumn/isBand.md '/Documentation//ApiReference/UI_Components/dxDataGrid/Configuration/columns/#isBand') and [ownerBand](/api-reference/_hidden/GridBaseColumn/ownerBand.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#ownerBand') properties. Using the same properties, you can distinguish band and nested columns from other columns in code.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            customizeColumns: function(columns) {
                columns.push({ // Pushes the "Contacts" band column into the "columns" array
                    caption: "Contacts",
                    isBand: true
                });
        
                var contactsFields = ["Email", "Mobile_Phone", "Skype"];
                for (var i = 0; i < columns.length - 1; i++) {
                    if (contactsFields.indexOf(columns[i].dataField) > -1) // If the column belongs to "Contacts",
                        columns[i].ownerBand = columns.length - 1; // assigns "Contacts" as the owner band column
                }
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeColumns (columns) {
            columns.push({ // Pushes the "Contacts" band column into the "columns" array
                caption: "Contacts",
                isBand: true
            });
    
            var contactsFields = ["Email", "Mobile_Phone", "Skype"];
            for (var i = 0; i < columns.length - 1; i++) {
                if (contactsFields.indexOf(columns[i].dataField) > -1) // If the column belongs to "Contacts",
                    columns[i].ownerBand = columns.length - 1; // assigns "Contacts" as the owner band column
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...
        [customizeColumns]="customizeColumns">
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            :customize-columns="customizeColumns">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
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

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    class App extends React.Component {
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

        render() {
            return (
                <DataGrid ...
                    customizeColumns={this.customizeColumns}>
                </DataGrid>
            );
        }
    }
    export default App;
    
---

[note] Nested columns have every [data column property](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/') except [fixed](/api-reference/_hidden/GridBaseColumn/fixed.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#fixed'), [fixedPosition](/api-reference/_hidden/GridBaseColumn/fixedPosition.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#fixedPosition'), [type](/api-reference/_hidden/dxDataGridColumn/type.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#type'), and [buttons](/api-reference/_hidden/dxDataGridColumn/buttons '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/buttons/'). Band columns only support the properties listed in the [isBand](/api-reference/_hidden/GridBaseColumn/isBand.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#isBand') property's description.

Band columns support hierarchies of any nesting level and enables you to use the following structure:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
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
    <dx-data-grid ... >
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
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
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
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
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
                </DataGrid>
            );
        }
    }
    export default App;
    
---

[tags] dataGrid, data grid, column types, band columns, banded layout, multi-row headers
