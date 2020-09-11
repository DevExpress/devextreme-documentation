Use this option when the annotation is positioned relative to an [argument](/api-reference/_hidden/BaseChartAnnotationConfig/argument.md '{basewidgetpath}/Configuration/annotations/#argument').

For example, the following **PolarChart** fragment displays two series and an annotation. The annotation is positioned relative to the argument `B` but not anchored to any of the two series points that correspond to this argument. To anchor the annotation to a series point, specify the annotation's **series** option:

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


<img style="margin-right:50px" src="/Content/images/doc/20_1/ChartJS/annotations/polar-chart-annotation-unanchored-with-caption.png" alt="Polar chart annotation anchored to an argument"> <img  src="/Content/images/doc/20_1/ChartJS/annotations/polar-chart-annotation-anchored-with-caption.png" alt="Polar chart annotation anchored to a series point">

#####See Also#####
- [x](/api-reference/_hidden/BaseChartAnnotationConfig/x.md '{basewidgetpath}/Configuration/annotations/#x') | [y](/api-reference/_hidden/BaseChartAnnotationConfig/y.md '{basewidgetpath}/Configuration/annotations/#y')
- [value](/api-reference/_hidden/BaseChartAnnotationConfig/value.md '{basewidgetpath}/Configuration/annotations/#value')
