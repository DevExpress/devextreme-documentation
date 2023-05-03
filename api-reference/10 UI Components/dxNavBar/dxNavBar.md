---
id: dxNavBar
module: ui/nav_bar
export: default
inherits: dxTabs
dep: dxTabs
---
---
##### shortDescription
The NavBar is a UI component that navigates the application views.

##### widgettree
dataSource: [{
        text: "Contacts",
        icon: "user"
    }, {
        text: "Missed",
        icon: "clock",
        badge: 3
    }, {
        text: "Favorites",
        icon: "favorites"
    }
]

##### lib
dx.web.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Navbar/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget