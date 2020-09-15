---
id: dxPieChart
module: viz/pie_chart
export: default
inherits: BaseChart
---
---
##### shortDescription
The **PieChart** is a widget that visualizes data as a circle divided into sectors that each represents a portion of the whole.

##### widgettree
dataSource: [{
    arg: "Russia",
    val: 12
}, {
    arg: "Canada",
    val: 7
}, {
    arg: "USA",
    val: 7
}, {
    arg: "China",
    val: 7
}, {
    arg: "Brazil",
    val: 6
}, {
    arg: "Australia",
    val: 5
}, {
    arg: "India",
    val: 2
}, {
    arg: "Others",
    val: 55
}],
series: 
{
    argumentField: "arg",
    valueField: "val"
},
legend: {
    horizontalAlignment: "center",
    verticalAlignment: "bottom"
}

##### lib
dx.viz.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Pie/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/PieChart/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget