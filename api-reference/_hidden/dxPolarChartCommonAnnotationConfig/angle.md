---
id: dxPolarChartCommonAnnotationConfig.angle
type: Number
default: undefined
---
---
##### shortDescription
<!-- Description goes here -->

---
<!-- Description goes here -->

$(function(){
    var radarOptions = {
        margin: {
            top: 50,
            bottom: 50,
            left: 100
        },
        dataSource: dataSource,
        series: [{valueField: "day", name: "Series 1", color: "#ba4d51" }, 
                 /*{ valueField: "night", name: "Series 2", color: "#5f8b95" }*/],
        commonSeriesSettings: {     
            type: "scatter"
        },
        commonAnnotationSettings: {
            type: "text",
        },
        annotations: [{
            angle: 45,
            radius: 80,
            text: "Text annotation",
            allowDragging: true,
        }]
    };
    
    var radar = $("#radarChart").dxPolarChart(radarOptions).dxPolarChart("instance");
    
});

var dataSource = [{
    arg: "A",
    day: 21,
    night: 10
}, {
    arg: "B",
    day: 23,
    night: 11
}, {
    arg: "C",
    day: 17,
    night: 9
}, {
    arg: "April",
    day: 22,
    night: 21
}, {
    arg: "May",
    day: 22,
    night: 21
}, {
    arg: "June",
    day: 21,
    night: 11
}, {
    arg: "July",
    day: 22,
    night: 13
}, {
    arg: "August",
    day: 22,
    night: 13
}, {
    arg: "September",
    day: 19,
    night: 11
}, {
    arg: "October",
    day: 23,
    night: 22
}, {
    arg: "November",
    day: 20,
    night: 21
}, {
    arg: "December",
    day: 22,
    night: 21
}];