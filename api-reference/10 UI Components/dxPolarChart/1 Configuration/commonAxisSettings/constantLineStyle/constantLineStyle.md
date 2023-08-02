---
id: dxPolarChart.Options.commonAxisSettings.constantLineStyle
type: viz/polar_chart:CommonAxisSettingsConstantLineStyle
inheritsType: viz/polar_chart:CommonAxisSettingsConstantLineStyle
---
---
##### shortDescription
Specifies the appearance of all the UI component's constant lines.

---
Use this object to set the appearance properties for the constant lines of both the argument and value axes. For example, you can change the color, dash style and width of the line using corresponding properties or define the look of the labels using the **label** object.

To specify styles for the constant lines of the argument and value axis separately, use the **constantLineStyle** object within the [argumentAxis](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/constantLineStyle '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/argumentAxis/constantLineStyle/') or [valueAxis](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/constantLineStyle '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/valueAxis/constantLineStyle/') configuration object correspondingly. Note that the properties that are set within these objects override the corresponding properties that are set within the **commonAxisSettings**.**constantLineStyle** object.

In addition, you can define the appearance of each constant line individually. For more information, refer to the **argumentAxis**.[constantLines](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/argumentAxis/constantLines '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/argumentAxis/constantLines/') or **valueAxis**.[constantLines](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/valueAxis/constantLines '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/valueAxis/constantLines/') object description.