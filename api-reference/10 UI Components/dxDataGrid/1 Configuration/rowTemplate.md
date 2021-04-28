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
<!-- Description goes here -->

---
The following details should be taken into account when you use a **rowTemplate**:

- Disable [column reordering](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/allowColumnReordering.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#allowColumnReordering'), [grouping](/api-reference/_hidden/dxDataGridColumn/allowGrouping.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowGrouping'), and [column fixing](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnFixing '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columnFixing/') when you specify the row template. Its content cannot automatically synchronize with the column layout, which makes these features inoperative. [Command columns](/concepts/05%20UI%20Components/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns/00%20Command%20Columns.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Types/Command_Columns/') are not supported either.

- You should implement the following features manually: [editing](/api-reference/10%20UI%20Components/GridBase/3%20Methods/editRow(rowIndex).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#editRowrowIndex'), [adaptability](/concepts/05%20UI%20Components/DataGrid/15%20Columns/50%20Adaptability.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Adaptability/'), [selection](/concepts/05%20UI%20Components/DataGrid/50%20Selection/20%20API '/Documentation/Guide/UI_Components/DataGrid/Selection/#API'), [master-detail interface](/concepts/05%20UI%20Components/DataGrid/60%20Master-Detail%20Interface/20%20API.md '/Documentation/Guide/UI_Components/DataGrid/Master-Detail_Interface/#API'), and [focused row](/concepts/05%20UI%20Components/DataGrid/73%20Focused%20Row.md '/Documentation/Guide/UI_Components/DataGrid/Focused_Row/'). Follow the links to see the API that can help you with this task.

- When the DataGrid is [exported](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/'), it omits customizations made in the template. However, you can recreate them in the exported file using the ExcelJS API. Use the [customizeCell](/api-reference/50%20Common/Object%20Structures/ExcelExportDataGridProps/customizeCell.md '/Documentation/ApiReference/Common/Object_Structures/ExcelExportDataGridProps/#customizeCell') function to do this.

In AngularJS and Knockout, use the [dxTemplate](/api-reference/10%20UI%20Components/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Components/Markup_Components/dxTemplate/') and declare it within a `<table>` element. In other cases, declare the markup in a `<tbody>` element with the `dx-row` class.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            rowTemplate: function(container, item) {
                var data = item.data,
                    markup = "<tbody class='dx-row'>" +
                        "<tr>" +
                            "<td>" + item.data.id + "</td>" +
                            "<td>" + item.data.name + "</td>" +  
                        "</tr>" +
                    "</tbody>";
                container.append(markup);
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...
        rowTemplate="rowTemplateName">
        <tbody class="dx-row" *dxTemplate="let item of 'rowTemplateName'" >
            <tr>
                <td>{{item.data.id}}</td>
                <td>{{item.data.name}}</td>
            </tr>
        </tbody>
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

#####AngularJS

        <!--HTML--><div dx-data-grid="{
            ...
            rowTemplate: 'rowTemplateName'
        }" dx-item-alias="item">
            <table data-options="dxTemplate: { name: 'rowTemplateName' }" >
                <tr>
                    <td>{{item.data.id}}</td>
                    <td>{{item.data.name}}</td>
                </tr>
            </table>
        </div>

#####Knockout

        <!--HTML--><div data-bind="dxDataGrid: {
            ...
            rowTemplate: 'rowTemplateName'
        }">
            <table data-options="dxTemplate: { name: 'rowTemplateName' }" >
                <tr>
                    <td data-bind="text: data.id"></td>
                    <td data-bind="text: data.name"></td>
                </tr>
            </table>
        </div>

#####Vue

    <template>
        <DxDataGrid ...
            row-template="dataRowTemplate">
            <tbody
                slot="dataRowTemplate"
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

#####React

    import React from 'react';
    import DataGrid from 'devextreme-react/data-grid';

    class Row extends React.PureComponent {
        render() {
            const {�data:�{�id,�name�}�} = this.props.data;
            return (
                <tbody className={"dx-row"}>
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                    </tr>
                </tbody>
            );
        }
    }

    class App extends React.Component {
        render() {
            return (
                <DataGrid ...
                    rowComponent={Row}>
                </DataGrid>
            );
        }
    }
    export default App;

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        // ...
        .RowTemplate(@<text>
            <tbody class="dx-row">
                <tr>
                    <td><%= data.id %></td>
                    <td><%= data.name %></td>
                </tr>
            </tbody>
        </text>)
    )

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RowTemplate/"
}

You can also use a 3rd-party template engine to customize row appearance. See the [3rd-Party Template Engines](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/UI_Components/Common/Templates/#3rd-Party_Template_Engines') article for more information. Note that the `<tbody>` element that represents a row should have the `dx-row` class to ensure all UI component features work properly.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/Row3RdPartyEngineTemplate/"
}

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')
- [onRowPrepared](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onRowPrepared.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onRowPrepared')

<!-- import * from 'api-reference\10 UI Components\dxDataGrid\1 Configuration\onRowClick.md' -->