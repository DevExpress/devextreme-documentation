---
id: dxDataGrid.Options.rowTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for rows.

##### param(rowElement): DxElement
#include common-ref-elementparam with { element: "row" }

##### param(rowInfo): Object
The [Row](/api-reference/10%20UI%20Components/dxDataGrid/6%20Row '/Documentation/ApiReference/UI_Components/dxDataGrid/Row/') object extended by the DataGrid's instance (the **component** field) and column configuration (**columns**).

##### field(rowInfo.columns): Array<dxDataGridColumn>
<!-- %field(e.columns)% -->

##### field(rowInfo.component): dxDataGrid
<!-- %field(e.component)% -->

##### field(rowInfo.data): any
<!-- %field(e.data)% -->

##### field(rowInfo.groupIndex): Number
<!-- %field(e.groupIndex)% -->

##### field(rowInfo.isExpanded): Boolean
<!-- %field(e.isExpanded)% -->

##### field(rowInfo.isSelected): Boolean
<!-- %field(e.isSelected)% -->

##### field(rowInfo.key): any
<!-- %field(e.key)% -->

##### field(rowInfo.rowIndex): Number
<!-- %field(e.rowIndex)% -->

##### field(rowInfo.rowType): String
<!-- %field(e.rowType)% -->

##### field(rowInfo.values): Array<any>
<!-- %field(e.values)% -->

##### return: any
A template name or container.

---
Follow these steps to migrate from the deprecated **rowTemplate** property to the [dataRowTemplate](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataRowTemplate) property:

---
##### jQuery

1. Rename the **rowTemplate** property to **dataRowTemplate**.

1. Remove `<tbody>`.

#include datagrid-rowtemplate-migration-steps

<!---->

**Before**: 

    <!-- tab: index.js -->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            rowTemplate: function(container, item) {
                const { data } = item;
                const markup = "<tbody class='dx-row my-custom-class'>" +
                    "<tr>" +
                        "<td>" + item.data.id + "</td>" +
                        "<td>" + item.data.name + "</td>" +  
                    "</tr>" +
                "</tbody>";
                container.append(markup);
            }
        });
    });

**After**:

    <!-- tab: index.js -->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            dataRowTemplate: function(container, item) {
                const { data } = item;
                const markup = "<tr>" +
                    "<td>" + item.data.id + "</td>" +
                    "<td>" + item.data.name + "</td>" +  
                "</tr>";

                container.append(markup);
            },
            onRowPrepared: function({ rowElement }) {
                rowElement.addClass("my-custom-class");
            }
        });
    });

    <!-- tab: index.css -->
    #dataGridContainer tbody.dx-state-hover {
        background-color: #ebebeb;
    }

##### Angular

1. Rename the **rowTemplate** property to **dataRowTemplate**.

1. Replace `<tbody>` with `<ng-container>`.

#include datagrid-rowtemplate-migration-steps

<!---->

**Before**: 

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        rowTemplate="rowTemplateName">
        <tbody class="dx-row" *dxTemplate="let item of 'rowTemplateName'" >
            <tr>
                <td>{{item.data.id}}</td>
                <td>{{item.data.name}}</td>
            </tr>
        </tbody>
    </dx-data-grid>

**After**: 

    <!-- tab: app.component.html -->
    <dx-data-grid ...
        id="dataGridContainer"
        dataRowTemplate="dataRowTemplateName"
        (onRowPrepared)="addRowClasses">
        <ng-container *dxTemplate="let item of 'dataRowTemplateName'">
            <tr>
                <td>{{item.data.id}}</td>
                <td>{{item.data.name}}</td>
            </tr>
        </ng-container>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        addRowClasses({ rowElement }) {
            rowElement.classList.add('my-custom-class');
        }
    }

    <!-- tab: app.component.css -->
    #dataGridContainer tbody.dx-state-hover {
        background-color: #ebebeb;
    }

##### Vue

1. Rename the **rowTemplate** property to **dataRowTemplate**.

1. In Vue 3, remove `<tbody>`. In Vue 2, change `<tbody>` for a `<div>` with the following attribute: `style="display: contents"`.

#include datagrid-rowtemplate-migration-steps

<!---->

**Before**:

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            row-template="rowTemplate">
            <!-- Vue 3 -->
            <template #rowTemplate="{ data: { data: { id, name } }">
                <tbody class="dx-row">
                    <tr>
                        <td>{{id}}</td>
                        <td>{{name}}</td>
                    </tr>
                </tbody>
            </template>

            <!-- Vue 2 -->
            <tbody slot="rowTemplate"
                slot-scope="{ data: { data: { id, name } } }"
                class="dx-row">
                <tr>
                    <td>{{id}}</td>
                    <td>{{name}}</td>
                </tr>
            </tbody>
        </DxDataGrid>
    </template>
    <script>
    import { DxDataGrid } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        }
    };
    </script>

**After**:

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ...
            id="dataGridContainer"
            data-row-template="dataRowTemplate"
            @row-prepared="addRowClasses">
            <!-- Vue 3 -->
            <template #dataRowTemplate="{ data: { data: { id, name } }">
                <tr>
                    <td>{{id}}</td>
                    <td>{{name}}</td>
                </tr>
            </template>

            <!-- Vue 2 -->
            <div slot="dataRowTemplate"
                slot-scope="{ data: { data: { id, name } } }"
                style="display: contents">
                <tr>
                    <td>{{id}}</td>
                    <td>{{name}}</td>
                </tr>
            </div>
        </DxDataGrid>
    </template>
    <script>
    import { DxDataGrid } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid
        },
        methods: {
            addRowClasses({ rowElement }) {
                rowElement.classList.add('my-custom-class');
            }
        }
    };
    </script>
    <style>
    #dataGridContainer tbody.dx-state-hover {
        background-color: #ebebeb;
    }
    </style>

##### React

1. Rename the **rowRender** property to **dataRowRender**.

1. Replace `<tbody>` with `<React.Fragment>`.

#include datagrid-rowtemplate-migration-steps

<!---->

**Before**:

    <!-- tab: App.js -->
    import DataGrid from 'devextreme-react/data-grid';

    const Row = ({ data: { id, name } }) => {
        return (
            <tbody className={"dx-row"}>
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                </tr>
            </tbody>
        );
    };

    export default function App() {
        return (
            <DataGrid ...
                rowRender={Row}>
            </DataGrid>
        );
    }

**After**:

    <!-- tab: App.js -->
    import DataGrid from 'devextreme-react/data-grid';
    import './App.css'

    const Row = ({ data: { id, name } }) => {
        return (
            <React.Fragment>
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                </tr>
            </React.Fragment>
        );
    };

    const addRowClasses = ({ rowElement }) => {
        rowElement.classList.add('my-custom-class');
    };

    export default function App() {
        return (
            <DataGrid ...
                id="dataGridContainer"
                dataRowRender={Row}
                onRowPrepared={addRowClasses}>
            </DataGrid>
        );
    }

    <!-- App.css -->
    #dataGridContainer tbody.dx-state-hover {
        background-color: #ebebeb;
    }

---

<!-- import * from 'api-reference\10 UI Components\dxDataGrid\1 Configuration\onRowClick.md' -->