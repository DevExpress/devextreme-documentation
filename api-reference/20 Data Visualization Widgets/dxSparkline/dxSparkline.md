---
id: dxSparkline
module: viz/sparkline
export: default
inherits: BaseSparkline,DataHelperMixin
---
---
##### shortDescription
The **Sparkline** widget is a compact chart that contains only one series. Owing to their size, sparklines occupy very little space and can be easily collected in a table or embedded straight in text.

##### widgettree
dataSource: [{
    arg: "1",
    val: 1
}, {
    arg: "2",
    val: 2
}, {
    arg: "3",
    val: 8
}, {
    arg: "4",
    val: 4
}, {
    arg: "5",
    val: 5
}, {
    arg: "6",
    val: 2
}, {
    arg: "7",
    val: 7
}, {
    arg: "8",
    val: 3
}]

##### lib
dx.viz.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SimpleSparklines/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/Sparkline/Visual_Elements/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget