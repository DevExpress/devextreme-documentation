---
id: dxPolarChart.Options.commonAxisSettings.constantLineStyle
type: Object
---
---
##### shortDescription
Specifies the appearance of all the widget's constant lines.

---
Use this object to set the appearance options for the constant lines of both the argument and value axes. For example, you can change the color, dash style and width of the line using corresponding options or define the look of the labels using the **label** object.

To specify styles for the constant lines of the argument and value axis separately, use the **constantLineStyle** object within the [argumentAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/constantLineStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/constantLineStyle/') or [valueAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/constantLineStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/constantLineStyle/') configuration object correspondingly. Note that the options that are set within these objects override the corresponding options that are set within the **commonAxisSettings**.**constantLineStyle** object.

In addition, you can define the appearance of each constant line individually. For more information, refer to the **argumentAxis**.[constantLines](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/argumentAxis/constantLines '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/constantLines/') or **valueAxis**.[constantLines](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/constantLines '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/constantLines/') object description.