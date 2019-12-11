---
type: template
---
---
##### shortDescription
Specifies a custom template for grid column cells.

##### param(cellElement): jQuery
The cell under customization.

##### param(cellInfo): object
The options of the current cell.

---
To represent custom data in column cells, use the **cellTemplate** option. Implement a callback function defining the markup of column cells and assign it to this option. This function will be invoked every time **DataGrid** re-renders itself.

When implementing the **cellTemplate** function, you can access the cell under customization using the function's first parameter. This parameter provides access to [element-related jQuery operations](https://api.jquery.com/?s=element). In addition, you can access the options of the cell using the fields of the function's second parameter. These fields are listed below.

- **data**		
Contains the object of the data source represented by the row to which the current cell belongs.
- **component**  
Contains the **DataGrid** instance.
- **value**		
Contains the value of the current cell as it is specified in the data source.
- **text**		
Contains the value of the current cell in a string format. Use this field to get the value with applied [format](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/format.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format').
- **displayValue**		
Contains the value displayed by the current cell. Differs from the **value** field only when the column to which the current cell belongs uses [lookup](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/lookup '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/').
- **columnIndex**		
Contains the index of the column to which the current cell belongs. For more information on how this index is calculated, refer to the [Calculating the Column Index](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/010%20Grid%20Columns/040%20Calculating%20the%20Column%20Index.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Calculating_the_Column_Index') topic.
- **rowIndex**		
Contains the index of the row to which the current cell belongs. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that group cells are counted as rows as well, and thus have row indexes. For further information about row indexes, see the [Grid Rows](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/020%20Grid%20Rows.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows') topic.
- **column**		
Contains the settings of the column to which the current cell belongs.
- **rowType**		
Represents the type of the row to which the current cell belongs. This field equals *'data'* for ordinary rows or *'group'* for group rows. Use this field to distinguish rows by type.

[note]When utilizing the [Knockout](https://knockoutjs.com) or [AngularJS](https://angularjs.org) library in your application, you can specify a cell template using the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. 

#####See Also#####
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')

It is also possible to define a cell template in markup by utilizing one of the following template engines. The above-mentioned cell settings can be accessed in a similar manner inside the template.

- [jQuery Templates](https://github.com/BorisMoore/jquery-tmpl)		
- [JsRender](https://github.com/BorisMoore/jsrender)		
- [Mustache](https://mustache.github.io)
- [Hogan](https://twitter.github.io/hogan.js)
- [Underscore](https://underscorejs.org)
- [Handlebars](https://handlebarsjs.com)
- [doT](https://olado.github.io/doT/index.html)

Using a template engine, pass one of the following values to the **cellTemplate** option.

- A jQuery object representing the template's container.		
- A DOM Node representing the template's container.		
- A function that returns a jQuery object or a DOM Node representing the template's container.

[note]If you implement two-way data binding in your template, make sure that you have switched off the built-in implementation of this feature by setting the [twoWayBindingEnabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/twoWayBindingEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#twoWayBindingEnabled') option to *false*.

To customize a cell without defining the entire template, handle the [cellPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/cellPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#cellPrepared') event.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-templates-column_template" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Function Template Demo</a>
<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-templates-column_3rd_party_engine_template" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Underscore Template Demo</a>