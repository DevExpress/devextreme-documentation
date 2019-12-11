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
Use the **rowTemplate** option to define the markup of all rows in a grid. Implement a callback function defining the content of a grid row and assign it to this option. This function is invoked every time **DataGrid** rerenders itself.

When implementing the **rowTemplate** function, you can access the row under customization using the function's first parameter. This parameter provides access to [element-related jQuery operations](https://api.jquery.com/?s=element), and you can access row options using the fields of the function's second parameter that are listed below.

- **data**		
Contains the object of the data source represented by the current row.
- **component**  
Contains the **DataGrid** instance.
- **values**	
Contains an array of values of the current row in the order they exist in the data source.  
- **rowIndex**		
Contains the index of the current row. When you have several pages in the grid, grid rows are indexed beginning with 0 on each page. Note that group cells count as rows and have row indexes. For further information about row indexes, see the [Grid Rows](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/020%20Grid%20Rows.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows') topic.  
- **columns**		
Contains an array of grid columns. An object with column settings represents each column in this array. The order of columns in this array coincides with the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') array.
- **isSelected**	
Indicates whether or not the current row is selected.
- **rowType**		
Defines the type of the current row. This field equals *'data'* for [ordinary rows](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/020%20Grid%20Rows.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows') or *'group'* for [group rows](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/100%20Group%20Rows '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows'). Use this field to distinguish rows by type.
- **groupIndex**	
Contains the group index of the current row. This field is useful if the **rowType** field is *'group'*.
- **isExpanded**	
Indicates whether or not the current row is expanded. This field is useful if the **rowType** field is *'group'*.

When utilizing the [Knockout](https://knockoutjs.com) or [AngularJS](https://angularjs.org) library in your application, you can specify the row template using the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. Note that dxTemplate should be bound to a `<table>` HTML element.

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

It is also possible to define a row template in markup. For this purpose, use one of the following template engines. The cell settings mentioned above can be accessed in a similar manner inside the template.

- [jQuery Templates](https://github.com/BorisMoore/jquery-tmpl)		
- [JsRender](https://github.com/BorisMoore/jsrender)		
- [Mustache](https://mustache.github.io)
- [Hogan](https://twitter.github.io/hogan.js)
- [Underscore](https://underscorejs.org)
- [Handlebars](https://handlebarsjs.com)
- [doT](https://olado.github.io/doT/index.html)

Using a template engine, pass one of the following values to the **rowTemplate** option:

- A jQuery object representing the template's container.		
- A DOM Node representing the template's container.		
- A function that returns a jQuery object or a DOM Node representing the template's container.

When you implement a row template with a template engine, take into account certain specifics. Particularly, the `<tr>` element that represents a row should have the `dx-row` class for correct operation of all widget features.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/Row3RdPartyEngineTemplate/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

[note] When you use a row template, we recommend you disable the [column reordering](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/allowColumnReordering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnReordering'), [grouping](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowGrouping.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping'), and [column fixing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columnFixing '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnFixing/') features. The template's content cannot automatically synchronize with the column layout, which makes these features inoperative.

To customize a row without defining the entire template, handle the [rowPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/rowPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#rowPrepared') event.