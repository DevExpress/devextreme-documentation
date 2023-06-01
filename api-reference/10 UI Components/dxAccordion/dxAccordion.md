---
id: dxAccordion
module: ui/accordion
export: default
inherits: CollectionWidget
---
---
##### shortDescription
The Accordion UI component contains several panels displayed one under another. These panels can be collapsed or expanded by an end user, which makes this UI component very useful for presenting information in a limited amount of space.

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
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Accordion/Overview/"
}
#include common-tutorialbutton with {
    url: "/Documentation/Guide/UI_Components/Accordion/Getting_Started_with_Accordion/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget