---
id: dxRadioGroup
module: ui/radio_group
export: default
inherits: Editor,DataExpressionMixin
---
---
##### shortDescription
The **RadioGroup** is a widget that contains a set of radio buttons and allows an end user to make a single selection from the set.

##### widgettree
dataSource: [
        { text: "red", value: "#FF0000" },
        { text: "green", value: "#00AA00" },
        { text: "blue", value: "#0000FF" }
    ]

##### lib
dx.web.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RadioGroup/Overview/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/RadioGroup/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget