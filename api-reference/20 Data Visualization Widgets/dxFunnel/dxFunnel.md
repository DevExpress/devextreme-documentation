---
id: dxFunnel
module: viz/funnel
export: default
inherits: BaseWidget,DataHelperMixin
---
---
##### shortDescription
The **Funnel** is a widget that visualizes a value at different stages. It helps assess value changes throughout these stages and identify potential issues. The **Funnel** widget conveys information using different interactive elements ([tooltips](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/tooltip '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/tooltip/'), [labels](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/label/'), [legend](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/legend '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/legend/')) and enables you to create not only a [funnel](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/FunnelChart), but also a [pyramid chart](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PyramidChart).

##### widgettree
dataSource: [
    { action: "Visited the Website", users: 9152 },
    { action: "Downloaded a Trial", users: 6879 },
    { action: "Contacted Support", users: 5121 },
    { action: "Subscribed", users: 2224 },
    { action: "Renewed", users: 1670 }
],
argumentField: "action",
valueField: "users",
label: {
    backgroundColor: "none",
    customizeText: function(e) { return e.item.argument + '<br />' + e.item.value; },
    position: "inside"
}

##### lib
dx.viz.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/FunnelChart/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/Funnel/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget