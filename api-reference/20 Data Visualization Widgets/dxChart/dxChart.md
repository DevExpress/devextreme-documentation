---
id: dxChart
module: viz/chart
export: default
inherits: BaseChart
---
---
##### shortDescription
The **Chart** is a widget that visualizes data from a local or remote storage using a great variety of [series types](/concepts/05%20Widgets/Chart/11%20Series%20Types '/Documentation/Guide/Widgets/Chart/Series_Types/') along with different interactive elements, such as [tooltips](/concepts/05%20Widgets/Chart/30%20Tooltips/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Tooltips/Overview/'), [crosshair pointer](/concepts/05%20Widgets/Chart/80%20Crosshair.md '/Documentation/Guide/Widgets/Chart/Crosshair/'), [legend](/concepts/05%20Widgets/Chart/35%20Legend/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Legend/Overview/'), etc.

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
}],
series: {
    type: "line"
},
legend: {
    horizontalAlignment: "center",
    verticalAlignment: "bottom",
    itemTextPosition: "right"
}

##### lib
dx.viz.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/StandardBar/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/Chart/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget