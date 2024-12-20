The DataGrid generates column headers based on the names of [data fields](/api-reference/_hidden/GridBaseColumn/dataField.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataField') by default. For example, if a data field is *"fullName"*, the column header text is "Full Name". 

![DevExtreme HTML5 JavaScript jQuery Angular Knockout UI component DataGrid ColumnHeaders](/images/DataGrid/ColumnHeaders.png)

Specify the **columns**.[caption](/api-reference/_hidden/GridBaseColumn/caption.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#caption') property to change the column header text.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [
                { dataField: "CompanyName", caption: "Company" },
                // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column dataField="CompanyName" caption="Company"></dxi-column>
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
            <DxColumn data-field="CompanyName" caption="Company" />
        </DxDataGrid>
    </template>

    <script>
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

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Column dataField="CompanyName" caption="Company" />
                </DataGrid>
            );
        }
    }
    export default App;
    
---

If you need a more specific customization, define a custom template in the **columns**.[headerCellTemplate](/api-reference/_hidden/dxDataGridColumn/headerCellTemplate.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#headerCellTemplate') property. This property accepts a function or template container. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
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
    <dx-data-grid ... >
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
            <template #address-header>
                <i style="color: black">Mailing Address</i>
            </template>
        </DxDataGrid>
    </template>

    <script>
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

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    const renderTitleHeader = (data) => {
        return <p style={{ font-size: '16px' }}>{data.column.caption}</p>;
    }
    const renderAddressHeader = () => {
        return <i style={{ color: 'black' }}>Mailing Address</i>;
    }

    class App extends React.Component {
        render() {
            return (
                <DataGrid ... >
                    <Column
                        dataField="Title"
                        caption="Position"
                        headerCellRender={renderTitleHeader}
                    />
                    <Column
                        dataField="Address"
                        headerCellRender={renderAddressHeader}
                    />
                </DataGrid>
            );
        }
    }
    export default App;
    
---

DataGrid column headers are attached to columns. To make headers fixed/sticky during page scrolling, adjust the DataGrid's stylesheet. Add the following attributes to the `.dx-datagrid-headers` CSS class:

    <!--CSS-->
    .dx-datagrid .dx-datagrid-headers{  
        position: sticky;  
        top: 0;  
        z-index: 1000;  
    }  

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-datagrid-sticky-headers"
}

To hide column headers, assign **false** to the [showColumnHeaders](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/showColumnHeaders.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#showColumnHeaders') property.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            showColumnHeaders: false
        });
     });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        [showColumnHeaders]="false">
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
        <DxDataGrid ...
            :show-column-headers="false">
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid from 'devextreme-react/data-grid';

    class App extends React.Component {
        render() {
            return (
                <DataGrid ...
                    showColumnHeaders={false}>
                </DataGrid>
            );
        }
    }
    export default App;
    
---

#####See Also#####
- [DataGrid Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/LocalDataSource)
