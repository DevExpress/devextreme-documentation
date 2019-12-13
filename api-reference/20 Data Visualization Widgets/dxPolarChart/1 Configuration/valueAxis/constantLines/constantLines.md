---
id: dxPolarChart.Options.valueAxis.constantLines
type: Array<Object>
inherits: dxPolarChart.Options.commonAxisSettings.constantLineStyle
notUsedInTheme: 
---
---
##### shortDescription
Defines an array of the value axis constant lines.

---
A constant line is a straight line that can be used to display, for example, an asymptote of a graph. To display constant lines on a chart, assign an array of objects specifying the options of each constant line to the **constantLines** field. It is necessary to set the **value** option within these objects. The other options can be set if required.

You can customize the appearance of all the value axis constant lines at once. For this purpose, use the **valueAxis**.[constantLineStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/constantLineStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/constantLineStyle/') configuration object. Note that the options that are set within the **valueAxis**.**constantLine** object override the corresponding options that are set within the **valueAxis**.**constantLineStyle** object.