---
id: dxVectorMap
module: viz/vector_map
export: default
inherits: BaseWidget
---
---
##### shortDescription
The **VectorMap** is a widget that visualizes geographical locations. This widget represents a geographical map that contains areas and markers. Areas embody continents and countries. Markers flag specific points on the map, for example, towns, cities or capitals.

##### widgettree
layers: [{
    type: 'area',
    dataSource: '/Content/data/vectorMap-sources/world.txt'
}]

##### lib
dx.viz.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/ColorsCustomization/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/VectorMap/Visual_Elements/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget