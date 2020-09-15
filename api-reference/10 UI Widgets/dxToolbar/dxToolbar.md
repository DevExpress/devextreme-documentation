---
id: dxToolbar
module: ui/toolbar
export: default
inherits: CollectionWidget
---
---
##### shortDescription
The **Toolbar** is a widget containing items that usually manage screen content. Those items can be plain text or widgets.

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
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Toolbar/Overview/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/Toolbar/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget