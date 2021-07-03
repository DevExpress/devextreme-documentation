---
id: DOMComponent.Options.rtlEnabled
type: Boolean
default: false
---
---
##### shortDescription
Switches the UI component to a right-to-left representation.

---
When this property is set to **true**, the UI component text flows from right to left, and the layout of elements is reversed. To switch the entire application/site to the right-to-left representation, assign **true** to the **rtlEnabled** field of the object passed to the [DevExpress.config(config)](/api-reference/50%20Common/utils/config(config).md '/Documentation/ApiReference/Common/utils/#configconfig') method.

    <!--JavaScript-->DevExpress.config({
        rtlEnabled: true
    });

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RightToLeftSupport",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/NavigationRightToLeftSupport",
    name: "Navigation UI"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/EditorsRightToLeftSupport",
    name: "Editors"
}
