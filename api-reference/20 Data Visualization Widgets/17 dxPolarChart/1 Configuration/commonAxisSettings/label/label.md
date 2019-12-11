---
type: object
---
---
##### shortDescription
An object defining the [label](/concepts/20%20Data%20Visualization/10%20Charts/352%20PolarChart%20Elements/070%20Axis%20Labels.md '/Documentation/Guide/Data_Visualization/Charts/PolarChart_Elements/#Axis_Labels') configuration options that are common for all axes in the **PolarChart** widget.

---
Axis labels represent textual values for [axis ticks](/concepts/20%20Data%20Visualization/10%20Charts/352%20PolarChart%20Elements/060%20Axis%20Ticks/01%20Axis%20Ticks.md '/Documentation/Guide/Data_Visualization/Charts/PolarChart_Elements/#Axis_Ticks'), which are not visible by default. Use the **label** object's properties to set common label options for all axes simultaneously.

To set a common option for labels of a particular axis, use the **label** object within the [argumentAxis](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/1%20Configuration/argumentAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/') or [valueAxis](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart/1%20Configuration/valueAxis '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/') configuration object. The values that are set individually override the corresponding common values.