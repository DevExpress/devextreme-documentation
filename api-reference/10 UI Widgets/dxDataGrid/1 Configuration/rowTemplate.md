---
id: dxDataGrid.Options.rowTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for rows.

##### param(rowElement): dxElement
#include common-ref-elementparam with { element: "row" }

##### param(rowInfo): Object
The [Row](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/') object extended by the **DataGrid**'s instance (the **component** field) and the column configuration (**columns**).

---
[note]

Disable [column reordering](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/allowColumnReordering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnReordering'), [grouping](/api-reference/_hidden/dxDataGridColumn/allowGrouping.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping'), and [column fixing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnFixing '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnFixing/') when you specify the row template. Its content cannot automatically synchronize with the column layout, which makes these features inoperative. [Command columns](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types/4%20Command%20Columns/00%20Command%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/') are not supported either.

You should also implement the following features manually: [editing](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/editRow(rowIndex).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#editRowrowIndex'), [adaptability](/concepts/05%20Widgets/DataGrid/15%20Columns/50%20Adaptability.md '/Documentation/Guide/Widgets/DataGrid/Columns/Adaptability/'), [multiple selection](/concepts/05%20Widgets/DataGrid/50%20Selection/20%20API '/Documentation/Guide/Widgets/DataGrid/Selection/#API'), and [master-detail interface](/concepts/05%20Widgets/DataGrid/60%20Master-Detail%20Interface/20%20API.md '/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/#API'). Follow the links to see the API that can help you with this task.

[/note]

In AngularJS and Knockout, use the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') and declare it within a `<table>` element. In other cases, declare the markup in a `<tbody>` element with the `dx-row` class.

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
        <dx-data-grid ...
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
        </dx-data-grid>
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
            const { data: { id, name } } = this.props.data;
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

You can also use a 3rd-party template engine to customize row appearance. See the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article for more information. Note that the `<tbody>` element that represents a row should have the `dx-row` class to ensure all widget features work properly.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/Row3RdPartyEngineTemplate/"
}

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')
- [onRowPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onRowPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowPrepared')
