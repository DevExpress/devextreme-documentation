---
id: dxGallery
module: ui/gallery
export: default
inherits: CollectionWidget
---
---
##### shortDescription
The Gallery is a UI component that displays a collection of images in a carousel. The UI component is supplied with various navigation controls that allow a user to switch between images.

##### widgettree
dataSource: [
    "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person1.png",
    "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person2.png",
    "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person3.png",
    "https://js.devexpress.com/Content/images/doc/25_1/PhoneJS/person4.png"
],
height: 400

##### lib
dx.web.js, dx.all.js

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gallery/Overview/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/UI_Components/Gallery/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
