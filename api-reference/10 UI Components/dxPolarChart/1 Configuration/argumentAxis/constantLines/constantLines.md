---
id: dxPolarChart.Options.argumentAxis.constantLines
type: Array<Object>
inherits: dxPolarChart.Options.commonAxisSettings.constantLineStyle
notUsedInTheme: 
---
---
##### shortDescription
Defines an array of the argument axis constant lines.

---
A constant line is a straight line that can be used to display, for example, an asymptote of a graph. To display constant lines on a chart, assign an array of objects specifying the properties of each constant line to the **constantLines** field. It is necessary to set the **value** property within these objects. The other properties can be set if required.

You can customize the appearance of all the argument axis constant lines at once. For this purpose, use the **argumentAxis**.[constantLineStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/constantLineStyle '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/argumentAxis/constantLineStyle/') configuration object. Note that the properties that are set within the **argumentAxis**.**constantLine** object override the corresponding properties that are set within the **argumentAxis**.**constantLineStyle** object.