---
id: dxActionSheet
module: ui/action_sheet
export: default
inherits: CollectionWidget
---
---
##### shortDescription
The ActionSheet UI component is a sheet containing a set of buttons located one under the other. These buttons usually represent several choices relating to a single task.

##### widgettree
dataSource: [
        { text: "Call" },
        { text: "Send message" },
        { text: "Edit" },
        { text: "Delete" }
    ],
    title: "Choose action",
    visible: true

##### lib
dx.web.js, dx.all.js

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/ActionSheet/Basics/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/UI_Components/ActionSheet/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget