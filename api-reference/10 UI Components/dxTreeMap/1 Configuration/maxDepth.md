---
id: dxTreeMap.Options.maxDepth
type: Number
default: undefined
---
---
##### shortDescription
Specifies how many hierarchical levels must be visualized.

---
If you have a structure with deep nesting level, displaying all levels at once produces visual clutter. To reduce it, specify the number of levels that can be visualized at a time using the **maxDepth** property.

![DevExpress DevExtreme HTML5 TreeMap](/images/ChartJS/TreeMap_maxDepth.png)

When you set this option, data that occupies the lowest levels may become unavailable to the user. For such cases, implement the [drill down feature](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node/3%20Methods/drillDown().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#drillDown').