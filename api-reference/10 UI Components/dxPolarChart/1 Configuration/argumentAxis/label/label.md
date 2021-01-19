---
id: dxPolarChart.Options.argumentAxis.label
type: Object
---
---
##### shortDescription
Specifies options for argument axis labels.

---
Axis labels represent textual values for [axis ticks](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/060%20Axis%20Ticks/01%20Axis%20Ticks.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axis_Ticks'), which are not visible by default. To specify custom settings for the argument axis labels, use the **label** configuration object. To set a common value for labels on all axes, use the **commonAxisSettings**.[label](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/label/') configuration object. This object exposes the properties that can be specified for labels on all axes at once. Note that values specified for the argument axis individually (in the **argumentAxis**.**label** object) override values that are specified for all axes (in the **commonAxisSettings**.**label** object).