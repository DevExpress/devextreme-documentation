---
type: template
---
---
##### shortDescription
Specifies a custom template for the column header.

##### param(columnHeader): jQuery
The header that you are customizing.

##### param(headerInfo): object
The settings of the header.

---
Below is the list of fields passed as the **headerInfo** object.

- **component**: <font size="-1">jQuery</font>  
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').
- **columnIndex**: <font size="-1">Number</font>        
The index of the column to which the header belongs. For details on how this index is calculated, refer to the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.
- **column**: <font size="-1">Object</font>        
The settings of the column to which the header belongs.

It is also possible to define the template using the following template engines. You can access the aforementioned header settings inside the template in a similar manner.

- [jQuery Templates](https://github.com/BorisMoore/jquery-tmpl)        
- [JsRender](https://github.com/BorisMoore/jsrender)        
- [Mustache](https://mustache.github.io)
- [Hogan](https://twitter.github.io/hogan.js)
- [Underscore](https://underscorejs.org)
- [Handlebars](https://handlebarsjs.com)
- [doT](https://olado.github.io/doT/index.html)

When you use a template engine, the **headerCellTemplate** option should be given a jQuery object or a DOM node representing the template's container, or a function that returns either of them.

#####See Also#####
- [Customize Widget Element Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')