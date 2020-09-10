---
id: dxToast
module: ui/toast
export: default
inherits: dxOverlay
---
---
##### shortDescription
The **Toast** is a widget that provides pop-up notifications.

##### widgettree
displayTime: 20000,
visible: true,
message: "Toast message"

##### lib
dx.web.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Toast/Overview/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/Toast/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget