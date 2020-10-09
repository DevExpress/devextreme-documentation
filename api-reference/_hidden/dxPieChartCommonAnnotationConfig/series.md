---
id: dxPieChartCommonAnnotationConfig.series
type: String
default: undefined
---
---
##### shortDescription
Anchors the annotation to a series point. Accepts the [name](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/#name) of the point's series.

---
Use this option when the annotation is positioned relative to an [argument](/api-reference/_hidden/BaseChartAnnotationConfig/argument.md '{basewidgetpath}/Configuration/annotations/#argument').

For example, the following **PieChart** fragment displays two series and an annotation. The annotation is positioned relative to the argument `B` but not anchored to any of the two series points that correspond to this argument. To anchor the annotation to a series point, specify the annotation's **series** option:

    dataSource: [
        { arg: "A", val1: 21, val2: 10 },
        { arg: "B", val1: 26, val2: 11 },
        { arg: "C", val1: 14, val2: 5 }
    ],
    series: [
        { valueField: "val1", name: "Series 1" },
        { valueField: "val2", name: "Series 2" }
    ],
    annotations: [{
        type: "text",
        text: "Text annotation",
        argument: "B",
        // series: "Series 1"
    }]    

#####See Also#####
- [x]({basewidgetpath}/Configuration/annotations/#x) | [y]({basewidgetpath}/Configuration/annotations/#y)
- [value]({basewidgetpath}/Configuration/annotations/#value)
