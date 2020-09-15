---
id: dxTabPanel
module: ui/tab_panel
export: default
inherits: dxMultiView
---
---
##### shortDescription
The **TabPanel** is a widget consisting of the [Tabs](/concepts/05%20Widgets/Tabs/00%20Overview.md '/Documentation/Guide/Widgets/Tabs/Overview/') and [MultiView](/concepts/05%20Widgets/MultiView/00%20Overview.md '/Documentation/Guide/Widgets/MultiView/Overview/') widgets. It automatically synchronizes the selected tab with the currently displayed view and vice versa.

##### widgettree
dataSource: [
        {
            title: "Info",
            text: "John Smith, 1986"
        },
        {
            title: "Contacts",
            text: "phone: (555)555-5555, email: John.Smith@example.com"
        },
        {
            title: "Address",
            text: "CA San Francisco Stanford Ave st."
        }
],
height: 200

##### lib
dx.web.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TabPanel/Overview/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/TabPanel/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget