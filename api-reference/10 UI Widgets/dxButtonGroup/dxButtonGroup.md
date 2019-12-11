---
module: ui/button_group
export: default
inherits: ..\Widget\Widget.md
---
---
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

##### shortDescription
The **ButtonGroup** is a widget that contains a set of toggle buttons and can be used as a mode switcher.

---
#include common-tutorialbutton with {
    url: "/Documentation/Guide/Widgets/ButtonGroup/Getting_Started_with_ButtonGroup/" 
}
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/ButtonGroup/Overview/"
}