---
id: dxToolbar
module: ui/toolbar
export: default
inherits: CollectionWidget
---
---
##### shortDescription
The Toolbar is a UI component containing items that usually manage screen content. Those items can be plain text or UI components.

##### widgettree
dataSource: [{
        text: "Contacts",
        location: "before"
    }, {
        text: "Missed"
    }, {
        text: "Favorites",
        location: "after"
    }
]

##### lib
dx.web.js, dx.all.js

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Toolbar/Overview/"
}
#include common-tutorialbutton with {
    url: "/Documentation/Guide/UI_Components/Toolbar/Getting_Started_with_Toolbar/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget