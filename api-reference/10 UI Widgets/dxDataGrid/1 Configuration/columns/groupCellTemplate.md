---
type: template
---
---
##### shortDescription
Specifies a custom template for the group cell of a grid column.

##### param(cellElement): jQuery
The cell under customization.

##### param(cellInfo): object
The options of the current cell.

---
By default, a group cell displays the name of the column used for grouping combined with the value from this column by which grid records are grouped. If you need to represent custom data in a group cell, use the **groupCellTemplate** option. Implement a callback function customizing the content of a group cell and assign it to this option. This function will be invoked every time the column with the specified template is involved in grouping.

When implementing the **groupCellTemplate** function, you can access the group cell under customization using the function's first parameter. This parameter provides access to [element-related jQuery operations](https://api.jquery.com/?s=element). In addition, you can access the options of the cell using the fields of the function's second parameter. These fields are listed below.

- **data**        
Contains a data object that represents data items matching a grouping key. For example, if you group grid records by country, the following object can be obtained from the **data** field.

        <!--JavaScript-->{
            key: 'Spain', // The name of a country
            items: [      // Data source objects corresponding to the key
                { ... }, 
                { ... },
                // ...
            ]
        }
- **component**  
Contains the **DataGrid** instance.
- **value**        
Contains the value of the current group cell as it is specified in a data source.
- **text**        
Contains the value of the current group cell in a string format. Use this field to get a value with applied [format](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/format.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format').
- **displayValue**        
Contains the value displayed by the current group cell. Differs from the **value** field only when the column to which the current cell belongs uses [lookup](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/lookup '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/').
- **columnIndex**        
Contains the index of the column to which the current group cell belongs. For more information on how this index is calculated, refer to the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.
- **rowIndex**        
Contains the index of the row that the current group cell occupies. For further information about row indexes, see the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.
- **column**        
Contains the settings of the column to which the current group cell belongs.
- **summaryItems**  
An array of [group summary items](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/') that are defined to be displayed in a group row. The array objects have the structure of the group summary items with an addition of the **value** (the summary item value) and **columnCaption** (usually used to present a summary value) fields.
- **groupContinuesMessage**        
If the current group continues on the next page, this field contains a corresponding message. The value of this field equals the value of the **grouping**.[groupContinuesMessage](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/groupContinuesMessage.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#groupContinuesMessage') property. If the current group does not continue on the next page, this field equals **undefined**.
- **groupContinuedMessage**        
If the current group is continued from the previous page, this field contains a corresponding message. The value of this field equals the value of the **grouping**.[groupContinuedMessage](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping/groupContinuedMessage.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#groupContinuedMessage') property. If the current group is not continued from the previous page, this field equals **undefined**.

[note]When utilizing the [Knockout](https://knockoutjs.com) or [AngularJS](https://angularjs.org) library in your application, you can specify the template using the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. 

#####See Also#####
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')

It is also possible to define a group cell template in markup. For this purpose, use one of the following template engines. The above-mentioned cell settings can be accessed in a similar manner inside the template.

- [jQuery Templates](https://github.com/BorisMoore/jquery-tmpl)        
- [JsRender](https://github.com/BorisMoore/jsrender)        
- [Mustache](https://mustache.github.io)
- [Hogan](https://twitter.github.io/hogan.js)
- [Underscore](https://underscorejs.org)
- [Handlebars](https://handlebarsjs.com)
- [doT](https://olado.github.io/doT/index.html)

Using a template engine, pass one of the following values to the **groupCellTemplate** option.

- A jQuery object representing the template's container.        
- A DOM Node representing the template's container.        
- A function that returns a jQuery object or a DOM Node representing the template's container.