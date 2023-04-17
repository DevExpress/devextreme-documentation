---
id: dxPolarChart.Options.valueAxis.constantLines
type: Array<viz/polar_chart:dxPolarChartValueAxisConstantLines>
inherits: dxPolarChart.Options.commonAxisSettings.constantLineStyle
notUsedInTheme: 
inheritsType: viz/polar_chart:dxPolarChartValueAxisConstantLines
---
---
##### shortDescription
Defines an array of the value axis constant lines.

---
A constant line is a straight line that can be used to display, for example, an asymptote of a graph. To display constant lines on a chart, assign an array of objects specifying the properties of each constant line to the **constantLines** field. It is necessary to set the **value** property within these objects. The other properties can be set if required.

You can customize the appearance of all the value axis constant lines at once. For this purpose, use the **valueAxis**.[constantLineStyle](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/constantLineStyle '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/valueAxis/constantLineStyle/') configuration object. Note that the properties that are set within the **valueAxis**.**constantLine** object override the corresponding properties that are set within the **valueAxis**.**constantLineStyle** object.