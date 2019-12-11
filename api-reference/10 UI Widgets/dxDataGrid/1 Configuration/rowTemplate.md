---
type: template
---
---
##### shortDescription
Specifies a custom template for grid rows.

##### param(rowElement): jQuery
The row under customization.

##### param(rowInfo): object
The options of the current row.

---
Use the **rowTemplate** option to define the markup of all rows in a grid. Implement a callback function defining the content of a grid row and assign it to this option. This function will be invoked every time **DataGrid** rerenders itself.

When implementing the **rowTemplate** function, you can access the row under customization using the function's first parameter. This parameter provides access to [element-related jQuery operations](https://api.jquery.com/?s=element). In addition, you can access row options using the fields of the function's second parameter. These fields are listed below.

- **data**		
Contains the object of the data source represented by the current row.
- **values**	
Contains an array of values of the current row as they exist in the data source.
- **rowIndex**		
Contains the index of the current row. When you have several pages in the grid, grid rows are indexed beginning with 0 on each page. Note that group cells are also counted as rows, and thus have row indexes. For further information about row indexes, see the [Grid Rows](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/020%20Grid%20Rows.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Rows') topic.
- **columns**		
Contains an array of grid columns. Each column in this array is represented by an object with column settings. The order of columns in this array and columns in the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array coincides.
- **isSelected**	
Indicates whether or not the current row is selected.
- **rowType**		
Represents the type of the current row. This field equals *'data'* for [ordinary rows](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/020%20Grid%20Rows.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Rows') or *'group'* for [group rows](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/100%20Group%20Rows '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Group_Rows'). Use this field to distinguish rows by type.
- **groupIndex**	
Contains the group index of the current row. This field is useful if the **rowType** field is *'group'*.
- **isExpanded**	
Indicates whether or not the current row is expanded. This field is useful if the **rowType** field is *'group'*.

When utilizing the [Knockout](https://knockoutjs.com) or [AngularJS](https://angularjs.org) library in your application, you can specify the row template using the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. Note that the dxTemplate should be bound to a `<table>` HTML element.

* **Knockout**

        <!--HTML--><div data-bind="dxDataGrid: {
            <!-- other grid settings go here -->
            rowTemplate: 'rowTemplateName'
        }">
            <table data-options="dxTemplate: { name: 'rowTemplateName' }" >
                <tr>
                    <td data-bind="text: data.id"></td>
                    <td data-bind="text: data.name"></td>
                </tr>
            </table>
        </div>

* **AngularJS**

        <!--HTML--><div dx-data-grid="{
            <!-- other grid settings go here -->
            rowTemplate: 'rowTemplateName'
        }" dx-item-alias="item">
            <table data-options="dxTemplate: { name: 'rowTemplateName' }" >
                <tr>
                    <td>{{ item.data.id }}</td>
                    <td>{{ item.data.name }}</td>
                </tr>
            </table>
        </div>

It is also possible to define a row template in markup. For this purpose, use one of the following template engines. The above mentioned cell settings can be accessed in a similar manner inside the template.

- [jQuery Templates](https://github.com/BorisMoore/jquery-tmpl)		
- [JsRender](https://github.com/BorisMoore/jsrender)		
- [Mustache](https://mustache.github.io)
- [Hogan](https://twitter.github.io/hogan.js)
- [Underscore](https://underscorejs.org)
- [Handlebars](https://handlebarsjs.com)
- [doT](https://olado.github.io/doT/index.html)

Using a template engine, pass one of the following values to the **rowTemplate** option.

- A jQuery object representing the template's container.		
- A DOM Node representing the template's container.		
- A function that returns a jQuery object or a DOM Node representing the template's container.

[note] When you use a row template, we recommend you to disable the [column reordering](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/allowColumnReordering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnReordering'), [grouping](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowGrouping.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping') and [column fixing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columnFixing '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnFixing/') features. It is desirable because the template content can not be automatically synchronized with the column layout what makes these features inoperative.

To customize a row without defining the entire template, handle the [rowPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/rowPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowPrepared') event.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridtemplatesrowunderscoretemplate/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>