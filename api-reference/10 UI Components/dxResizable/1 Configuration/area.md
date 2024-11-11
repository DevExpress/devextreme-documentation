---
id: dxResizable.Options.area
type: String | UserDefinedElement | undefined
default: undefined
---
---
##### shortDescription
Specifies the area within which users can resize the UI component.

---

![Area Available For Resize](/images/Editors/resizable-area.png)

You can use a selector string, jQuery object, or DOM element to specify this property:

- String

        <!-- tab: JavaScript -->
        area: '.test-div'

- jQuery object

        <!-- tab: JavaScript -->
        area: $('.test-div')

- DOM element

        <!-- tab: JavaScript -->
        area: $('.test-div')[0]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Resizable/Overview/"
}


