---
id: dxPolarChart.Options.valueAxis.label
type: Object
---
---
##### shortDescription
Specifies options for value axis labels.

---
Axis labels represent textual values for [axis ticks](/concepts/05%20UI%20Components/PolarChart/10%20Visual%20Elements/060%20Axis%20Ticks/01%20Axis%20Ticks.md '/Documentation/Guide/UI_Components/PolarChart/Visual_Elements/#Axis_Ticks'), which are not visible by default. To specify custom settings for the value axis labels, use the **label** configuration object. If you need to set a common value for labels on all axes, use the **commonAxisSettings**.[label](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/commonAxisSettings/label '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/commonAxisSettings/label/') configuration object. This object exposes the properties that can be specified for labels on all axes simultaneously. Note that a value specified for the value axis individually (in the **valueAxis**.**label** object) overrides the value that is specified in the **commonAxisSettings**.**label** object.