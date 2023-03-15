---
id: dxRangeSelector.Options.scale.minorTickInterval
type: Number | Object | Enums.TimeInterval
inherits: VizTimeInterval
---
---
##### shortDescription
Specifies an interval between minor ticks.

---
In the case of a numeric scale, assign a numeric value to this property. If the scale is of the date-time type, assign one of the predefined string values. To set an interval to several days, hours, etc., assign an object with the corresponding field specified (**days**, **hours** or another field). Note that this object should contain only one of the fields described in this section.

[note]Minor ticks are unavailable for a discrete and semi-discrete scale.

When the [snapToTicks](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/behavior/snapToTicks.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/behavior/#snapToTicks') property is set to **true**, sliders are docked to both major and minor ticks.

To prohibit the display of minor ticks, set the scale's **showMinorTicks** property to **false**.

To set a custom tick interval between major ticks, use the scale's **tickInterval** property.
