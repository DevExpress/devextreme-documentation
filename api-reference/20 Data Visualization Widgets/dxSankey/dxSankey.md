---
id: dxSankey
module: viz/sankey
export: default
inherits: BaseWidget,DataHelperMixin
---
---
##### shortDescription
The **Sankey** is a widget that visualizes the flow magnitude between value sets. The values being connected are called nodes; the connections - links. The higher the flow magnitude, the wider the link is.

##### widgettree
dataSource: [
    { source: "Brazil", target: "Portugal", weight: 5 },
    { source: "Brazil", target: "France", weight: 1 },
    { source: "Brazil", target: "Spain", weight: 1 },
    { source: "Brazil", target: "England", weight: 1 },
    { source: "Canada", target: "Portugal", weight: 1 },
    { source: "Canada", target: "France", weight: 5 },
    { source: "Canada", target: "England", weight: 1 },
    { source: "Mexico", target: "Portugal", weight: 1 },
    { source: "Mexico", target: "France", weight: 1 },
    { source: "Mexico", target: "Spain", weight: 5 },
    { source: "Mexico", target: "England", weight: 1 }
],
link: { colorMode: "gradient" }

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SankeyChart/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/Sankey/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget