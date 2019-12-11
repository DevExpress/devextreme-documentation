---
default: undefined
acceptValues: 'datetime' | 'numeric' | 'string'
type: string
---
---
##### shortDescription
Specifies the type of values on the scale.

---
When the scale is built on values from a [data source](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#dataSource'), scale values and data source values have the same type. For example, if numeric values are specified in the data source, scale values will also be of a numeric type. In some scenarios, you may need to convert data source values into another type if, for instance, numbers are stored as strings in your data source. In this case, use the **valueType** option to specify the type of scale values implicitly.

[note]If dates in your data source are stored as strings, make sure that they have a [valid format](https://www.w3schools.com/js/js_date_formats.asp).

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposerangeselectorrangeselectorscaledatatypedatatimesupport/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>