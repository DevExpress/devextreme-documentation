---
id: dxList
module: ui/list
export: default
inherits: CollectionWidget,SearchBoxMixin
---
---
##### shortDescription
The **List** is a widget that represents a collection of items in a scrollable list.

##### widgettree
dataSource: ["Prepare 2013 Financial","Prepare 3013 Marketing Plan","Update Personnel Files","Review Health Insurance Options Under the Affordable Care Act","Choose between PPO and HMO Health Plan",
    "Google AdWords Strategy","New Brochures","2013 Brochure Designs","Brochure Design Review","Website Re-Design Plan","Rollout of New Website and Marketing Brochures",
    "Update Sales Strategy Documents","Create 2012 Sales Report","Direct vs Online Sales Comparison Report"]

##### lib
dx.web.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndApi/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/List/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget