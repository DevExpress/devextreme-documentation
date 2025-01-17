---
id: dxTreeMap.Options.maxDepth
type: Number | undefined
default: undefined
---
---
##### shortDescription
Specifies how many hierarchical levels must be visualized.

---
If you have a structure with deep nesting level, displaying all levels at once produces visual clutter. To reduce it, specify the number of levels that can be visualized at a time using the **maxDepth** property.

![DevExpress DevExtreme HTML5 TreeMap](/images/ChartJS/TreeMap_maxDepth.png)

When you set this property, data that occupies the lowest levels may become unavailable to the user. For such cases, implement the [drill down feature](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node/3%20Methods/drillDown().md '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/Methods/#drillDown').