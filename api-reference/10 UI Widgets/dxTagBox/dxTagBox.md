---
id: dxTagBox
module: ui/tag_box
export: default
inherits: dxSelectBox
---
---
##### shortDescription
The **TagBox** widget is an editor that allows an end user to select multiple items from a drop-down list.

##### widgettree
dataSource: [
    "HD Video Player",
    "SuperHD Video Player",
    "SuperPlasma 50",
    "SuperLED 50",
    "SuperLED 42",
    "SuperLCD 55",
    "SuperLCD 42",
    "SuperPlasma 65",
    "SuperLCD 70",
    "Projector Plus",
    "Projector PlusHT",
    "ExcelRemote IR",
    "ExcelRemote BT",
    "ExcelRemote IP"
]

##### lib
dx.web.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TagBox/Overview/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/TagBox/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget