Use this option when the annotation is positioned relative to an [argument]({basewidgetpath}/Configuration/annotations/#argument').

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
        //series: "Series 1"
    }]    

<div style="display:flex; flex-direction:row">
    <figure>
        <img src="/Content/images/doc/20_1/ChartJS/annotations/polar-chart-annotation-unanchored-2.png" alt="Polar chart annotation anchored to an argument">
        <figcaption>Annotation positioned relative to the argument <i>B</i></figcaption>
    </figure> 
    <figure>
        <img src="/Content/images/doc/20_1/ChartJS/annotations/polar-chart-annotation-anchored-2.png" alt="Polar chart annotation anchored to a series point">
        <figcaption>Annotation anchored to a series point</figcaption>
    </figure>
</div>

#####See Also#####
- [x]({basewidgetpath}/Configuration/annotations/#x) | [y]({basewidgetpath}/Configuration/annotations/#y)
- [value]({basewidgetpath}/Configuration/annotations/#value)
