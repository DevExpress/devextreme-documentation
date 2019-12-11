---
type: template
---
---
##### shortDescription
Specifies a custom template for column headers.

##### param(columnHeader): dxElement
The current header's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### param(headerInfo): Object
The header's properties.

---
The **headerInfo** object has the following fields:

- **component**: <font size="-1">Object</font>  
The widget's instance.
- **columnIndex**: <font size="-1">Number</font>        
The index of the column to which the header belongs. For details on how this index is calculated, refer to the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.
- **column**: <font size="-1">Object</font>        
The settings of the column to which the header belongs.

[note] In [fixed columns](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnFixing '{basewidgetpath}/Configuration/columnFixing/'), a **headerCellTemplate** is initialized and rendered twice for each column header.

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')