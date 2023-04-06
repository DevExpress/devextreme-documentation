---
id: dxPolarChart.Options.commonAxisSettings.constantLineStyle.label
type: viz\polar_chart:dxPolarChartCommonAxisSettingsConstantLineStyleLabel
inherits: viz\polar_chart:dxPolarChartCommonAxisSettingsConstantLineStyleLabel
---
---
##### shortDescription
An object defining constant line label properties.

---
A constant line label shows information on the constant line. Use the **label** object to configure all the constant line labels simultaneously. Within this object you can set font properties, a position and text using corresponding fields.

To specify styles for the constant line labels of the argument and value axis separately, use the **argumentAxis**.**constantLineStyle**.[label](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/constantLineStyle/label '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/argumentAxis/constantLineStyle/label/') or **valueAxis**.**constantLineStyle**.[label](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/constantLineStyle/label '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/valueAxis/constantLineStyle/label/') configuration object correspondingly. Note that the properties that are set within these objects override the corresponding properties that are set within the **commonAxisSettings**.**constantLineStyle**.**label** object.

In addition, you can define the appearance of each constant line label individually. For more information, refer to the **argumentAxis**.**constantLines**.[label](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/argumentAxis/constantLines/label '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/argumentAxis/constantLines/label/') or **valueAxis**.**constantLines**.[label](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/valueAxis/constantLines/label '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/valueAxis/constantLines/label/') object description.