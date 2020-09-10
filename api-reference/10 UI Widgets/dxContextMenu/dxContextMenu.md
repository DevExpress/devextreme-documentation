---
id: dxContextMenu
module: ui/context_menu
export: default
inherits: dxMenuBase
---
---
##### shortDescription
The **ContextMenu** widget displays a single- or multi-level context menu. An end user invokes this menu by a right click or a long press.

##### widgettree
dataSource: [
    { text: "Hide" },
    { text: "Delete" },
    {
        text: "Clipboard",
        items: [
            { text: "Copy" },
            { text: "Clear" },
            { text: "Paste" }
        ]
    }
],
visible: true

##### lib
dx.web.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/ContextMenu/Basics/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/ContextMenu/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget