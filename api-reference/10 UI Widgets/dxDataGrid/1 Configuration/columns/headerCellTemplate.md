---
type: template
---
---
##### shortDescription
Specifies a custom template for the [header](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/010%20Grid%20Columns/050%20Configuring%20Column%20Headers.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Configuring_Column_Headers') of a grid column.

##### param(columnHeader): jQuery
The header under customization.

##### param(headerInfo): object
The options of the current header.

---
If you must display custom data in the header of a grid column, use the **headerCellTemplate** option. Implement a callback function customizing the content of the header and assign it to this option. This function will be invoked every time **DataGrid** rerenders itself.

When implementing the **headerCellTemplate** function, you can access the header under customization using the function's first parameter. This parameter provides access to [element-related jQuery operations](https://api.jquery.com/?s=element). In addition, you can access the options of the header using the fields of the function's second parameter. These fields are listed below.

- **columnIndex**		
Contains the index of a column that the current header belongs to. For more information on how this index is calculated, refer to the [Calculating the Column Index](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/010%20Grid%20Columns/040%20Calculating%20the%20Column%20Index.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Calculating_the_Column_Index') topic.   
- **column**		
Contains the settings of a column that the current header belongs to.  
- **component**  
Contains the **DataGrid** instance.

[note]When utilizing the [Knockout](https://knockoutjs.com) or [AngularJS](https://angularjs.org) library in your application, you can specify the template using the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. 

#####See Also#####
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')

It is also possible to define a header cell template in markup. For this purpose, use one of the following template engines. The above-mentioned cell settings can be accessed similarly inside of the template.

- [jQuery Templates](https://github.com/BorisMoore/jquery-tmpl)		
- [JsRender](https://github.com/BorisMoore/jsrender)		
- [Mustache](https://mustache.github.io)
- [Hogan](https://twitter.github.io/hogan.js)
- [Underscore](https://underscorejs.org)
- [Handlebars](https://handlebarsjs.com)
- [doT](https://olado.github.io/doT/index.html)

Using a template engine, pass one of the following values to the **headerCellTemplate** option.

- A jQuery object representing the template's container.		
- A DOM Node representing the template's container.		
- A function that returns a jQuery object or a DOM Node representing the template's container.