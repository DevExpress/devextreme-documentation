---
id: dxMenu
module: ui/menu
export: default
inherits: dxMenuBase
---
---
##### shortDescription
The Menu UI component is a panel with clickable items. A click on an item opens a drop-down menu, which can contain several submenus.

##### widgettree
dataSource: [
    { text: "Video Players" },
    { text: "Televisions" },
    {
        text: "Monitors",
        items: [
            { text: "DesktopLCD 19" },
            { text: "DesktopLCD 21" },
            { text: "DesktopLED 21" }
        ]
    }
]

##### lib
dx.web.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Menu/Overview/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/UI_Components/Menu/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget