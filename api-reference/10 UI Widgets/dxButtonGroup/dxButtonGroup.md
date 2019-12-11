---
id: dxButtonGroup
module: ui/button_group
export: default
inherits: Widget
---
---
##### shortDescription
The **ButtonGroup** is a widget that contains a set of toggle buttons and can be used as a mode switcher.

##### widgettree
items: [{
    style: "bold",
    icon: "bold"
}, {
    style: "italic",
    icon: "italic"
}, {
    style: "underline",
    icon: "underline"
}, {
    style: "strike",
    icon: "strike"
}],
keyExpr: "style",
stylingMode: "outlined",
selectionMode: "multiple"

---
#include common-tutorialbutton with {
    url: "/Documentation/Guide/Widgets/ButtonGroup/Getting_Started_with_ButtonGroup/" 
}
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/ButtonGroup/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget