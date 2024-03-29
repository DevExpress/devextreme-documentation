---
id: dxForm
module: ui/form
export: default
inherits: Widget
---
---
##### shortDescription
The Form UI component represents fields of a data object as a collection of label-editor pairs. These pairs can be arranged in several groups, tabs and columns.

##### widgettree
formData: {
    "ID": 1,
    "CompanyName": "Super Mart of the West",
    "Address": "702 SW 8th Street",
    "City": "Bentonville",
    "State": "Arkansas",
    "Zipcode": 72716,
    "Phone": "(800) 555-2797",
    "Fax": "(800) 555-2171",
    "Website": "http://www.nowebsite.com"
}

##### lib
dx.web.js, dx.all.js

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Overview/"
}
#include common-tutorialbutton with {
    url: "/Documentation/Guide/UI_Components/Form/Getting_Started_with_Form/"
}
 
#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget