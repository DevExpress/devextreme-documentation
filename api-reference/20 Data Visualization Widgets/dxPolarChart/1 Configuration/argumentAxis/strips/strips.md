---
id: dxPolarChart.Options.argumentAxis.strips
type: Array<Object>
inherits: dxPolarChart.Options.commonAxisSettings.stripStyle
notUsedInTheme: 
---
---
##### shortDescription
Specifies options for argument axis strips.

---
Strips are the highlighted areas in a chart within the defined range of values (minimum and maximum) for an axis to which they belong. In general, strips are used to visually represent a range of values behind a series to trace whether the series points' values fall in or out of that range. For more details on strips, refer to the [Strips](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/100%20Strips.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Strips') topic.

To define strips for the argument axis, use the **strips** array. When a strip's **startValue**, **endValue** and **color** properties are specified, the strip is displayed in a chart. In addition, you can show a label with descriptive information on a strip. To set the text for a label, use the strip's **label** object.

If you need to set similar values for all strips of all axes, use the **commonAxisSettings**.[stripStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/commonAxisSettings/stripStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/stripStyle/') configuration object. It exposes the properties that can be specified for strips of all axes at once. Note that the values specified for the argument axis individually (in the **argumentAxis**.**strips** object) override the values that are specified for all axes (in the **commonAxisSettings**.**stripStyle** object).