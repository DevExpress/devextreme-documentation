---
id: dxMultiView
module: ui/multi_view
export: default
inherits: CollectionWidget
---
---
##### shortDescription
The **MultiView** is a widget that contains several views. An end user navigates through the views by swiping them in the horizontal direction.

##### widgettree
dataSource: [
    { text: "Super Mart of the West" },
    { text: "Electronics Depot" },
    { text: "Tom's Club" }
],
height: 300,
loop: true

##### lib
dx.web.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/MultiView/Overview/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/MultiView/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget