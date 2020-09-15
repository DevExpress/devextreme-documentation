---
id: dxAccordion
module: ui/accordion
export: default
inherits: CollectionWidget
---
---
##### shortDescription
The **Accordion** widget contains several panels displayed one under another. These panels can be collapsed or expanded by an end user, which makes this widget very useful for presenting information in a limited amount of space.

##### widgettree
dataSource: [
{
    title: "Personal Data",
    text: "Name: John Smith, Birth Year: 1986",
},
{
    title: "Contacts",
    text: "Phone: (555)555-5555, Email: John.Smith@example.com",
}]

##### lib
dx.web.js, dx.all.js

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Accordion/Overview/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/Accordion/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget