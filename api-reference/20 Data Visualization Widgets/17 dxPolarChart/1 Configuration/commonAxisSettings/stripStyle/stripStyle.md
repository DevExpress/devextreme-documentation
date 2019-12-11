---
type: object
---
---
##### shortDescription
An object defining configuration options for [strip](/concepts/20%20Data%20Visualization/10%20Charts/352%20PolarChart%20Elements/100%20Strips.md '/Documentation/Guide/Data_Visualization/Charts/PolarChart_Elements/#Strips') style.

---
Strips are the highlighted areas of a chart within a defined range of values (maximum and minimum) for an axis to which they belong. In general, strips are used to visually represent a range of values behind a series, to trace whether the series point values fall in or out of that range. For more details on strips, refer to the [Strips](/concepts/20%20Data%20Visualization/10%20Charts/352%20PolarChart%20Elements/100%20Strips.md '/Documentation/Guide/Data_Visualization/Charts/PolarChart_Elements/#Strips') topic.

To set options for configuring strip style, define the **stripStyle** object within the **argumentAxis** or **valueAxis** configuration object. To set common options for all strips in a chart, define the **stripStyle** object within the **commonAxisSettings** configuration object. Note that the values that are set for an individual axis override the corresponding common values.