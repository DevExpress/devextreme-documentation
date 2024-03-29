---
id: dxContextMenu
module: ui/context_menu
export: default
inherits: dxMenuBase
---
---
##### shortDescription
The ContextMenu UI component displays a single- or multi-level context menu. An end user invokes this menu by a right click or a long press.

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
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/ContextMenu/Basics/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/UI_Components/ContextMenu/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget