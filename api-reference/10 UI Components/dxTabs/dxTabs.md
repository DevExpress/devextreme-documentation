---
id: dxTabs
module: ui/tabs
export: default
inherits: CollectionWidget
---
---
##### shortDescription
The Tabs is a tab strip used to switch between pages or views. This UI component is included in the [TabPanel](/api-reference/10%20UI%20Components/dxTabPanel '/Documentation/ApiReference/UI_Components/dxTabPanel/') UI component, but you can use the Tabs separately as well.

##### widgettree
dataSource: [
    { text: "Home", icon: "home" },
    { text: "About", icon: "info" }
]

##### lib
dx.web.js, dx.all.js

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