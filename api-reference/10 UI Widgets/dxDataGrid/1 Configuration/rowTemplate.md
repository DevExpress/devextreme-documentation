---
type: template
---
---
##### shortDescription
Specifies a custom template for rows.

##### param(rowElement): dxElement
The row's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### param(rowInfo): Object
The [Row](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/') object.

---
The **rowInfo** object has the following fields:

- **data**        
Contains the object of the data source represented by the current row.
- **component**  
Contains the **DataGrid** instance.
- **values**    
Contains an array of values of the current row in the order they exist in the data source.
- **rowIndex**        
Contains the index of the current row. When you have several pages in the grid, grid rows are indexed beginning with 0 on each page. Note that group cells count as rows and have row indexes. For further information about row indexes, see the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.
- **columns**        
Contains an array of grid columns. An object with column settings represents each column in this array. The order of columns in this array coincides with the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array.
- **isSelected**    
Indicates whether or not the current row is selected.
- **rowType**        
Defines the type of the current row. This field equals *'data'* for data rows or *'group'* for group rows. Use this field to distinguish rows by type.
- **groupIndex**    
Contains the group index of the current row. This field is useful if the **rowType** field is *'group'*.
- **isExpanded**    
Indicates whether or not the current row is expanded. This field is useful if the **rowType** field is *'group'*.

When using the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component for AngularJS, and Knockout apps, declare it within a `<table>` HTML element. For Angular - within a `<tbody>` element with the `dx-row` class.

---
#####Angular

    <!--HTML-->
    <dx-data-grid ...
        rowTemplate="rowTemplateName">
        <tbody class="dx-row" *dxTemplate="let data of 'rowTemplateName'" >
            <tr class="main-row">
                <td>{{data.id}}</td>
                <td>{{data.name}}</td>
            </tr>
        </tbody>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
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
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
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
                    <td data-bind="text: id"></td>
                    <td data-bind="text: name"></td>
                </tr>
            </table>
        </div>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RowTemplate/jQuery/Light/"
}

You can also use a 3rd-party template engine to customize row appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article. Note that the `<tbody>` element that represents a row should have the `dx-row` class for correct operation of all widget features.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/Row3RdPartyEngineTemplate/jQuery/Light/"
}

[note] Disable the [column reordering](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/allowColumnReordering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnReordering'), [grouping](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowGrouping.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping'), and [column fixing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnFixing '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnFixing/') features when specifying the row template. Its content cannot automatically synchronize with the column layout, which makes these features inoperative.

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')
- [onRowPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onRowPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowPrepared')