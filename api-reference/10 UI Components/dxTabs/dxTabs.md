---
id: dxTabs
module: ui/tabs
export: default
inherits: CollectionWidget
---
---
##### shortDescription
The Tabs is a tab strip used to switch between pages or views. This UI component is included in the [TabPanel](/concepts/05%20UI%20Components/TabPanel/00%20Overview.md '/Documentation/Guide/UI_Components/TabPanel/Overview/') UI component, but you can use the Tabs separately as well.

##### widgettree
dataSource: [
    { text: "Home", icon: "home" },
    { text: "About", icon: "info" }
]

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tabs/Overview/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/UI_Components/Tabs/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget