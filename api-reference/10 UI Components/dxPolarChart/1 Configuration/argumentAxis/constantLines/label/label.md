---
id: dxPolarChart.Options.argumentAxis.constantLines.label
type: viz/polar_chart:ArgumentAxisConstantLinesLabel
inheritsType: viz/polar_chart:ArgumentAxisConstantLinesLabel
---
---
##### shortDescription
An object defining constant line label properties.

---
A constant line label shows information on the constant line. You can configure label appearance using the **label** object. Within this object, you can set font properties, a position and text using corresponding fields. In addition, you can specify the horizontal and vertical alignments for the label.

You can set the label properties for all the argument axis constant lines simultaneously. For this purpose, use the **argumentAxis**.**constantLineStyle**.[label](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/constantLineStyle '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/argumentAxis/constantLineStyle/') object. Note that the properties that are set within the **argumentAxis**.**constantLine**.**label** object override the corresponding properties that are set within the **argumentAxis**.**constantLineStyle**.**label** object.