---
id: dxPolarChart
module: viz/polar_chart
export: default
inherits: BaseChart
---
---
##### shortDescription
The PolarChart is a UI component that visualizes data in a polar coordinate system.

##### widgettree
dataSource: [{
    arg: "Monday",
    val: 3
}, {
    arg: "Tuesday",
    val: 2
}, {
    arg: "Wednesday",
    val: 3
}, {
    arg: "Thursday",
    val: 4
}, {
    arg: "Friday",
    val: 6
}, {
    arg: "Saturday",
    val: 11
}, {
    arg: "Sunday",
    val: 4
}]

##### lib
dx.viz.js, dx.viz-web.js, dx.all.js

---
The PolarChart UI component visualizes data in a polar coordinate system. In this system, each point on a plane is determined by the distance from the center (the point's value) and the angle from a fixed direction (the point's argument). To understand how a chart is displayed in a polar coordinate system, imagine how it would be displayed in a rectangular coordinate system and then round off the argument axis in your mind.

<img src="/images/ChartJS/PolarChart_rectangular.png" alt="DevExtreme HTML5 Charts DataVisualization" style="display:inline-block; vertical-align:bottom" />
<img src="/images/ChartJS/PolarChart_polar.png" alt="DevExtreme HTML5 Charts PolarChart RadarChart DataVisualization" style="display:inline-block; vertical-align:bottom" />

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ContinuousData/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/UI_Components/PolarChart/Visual_Elements/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget