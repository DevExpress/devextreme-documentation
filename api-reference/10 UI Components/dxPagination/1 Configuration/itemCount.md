---
id: dxPagination.Options.itemCount
type: Number
default: 1
---
---
##### shortDescription
Specifies the total number of items.

---
`itemCount` is the main configuration setting of the component. Specify the total number of items to ensure the Pagination component functions properly.

[note]

Pagination hides itself when the [pageSize](/) value is greater than [itemCount](/). To avoid this behavior, assign `true` to at least one of the following properties:

- [showInfo]()
- [showNavigationButtons]()
- [showPageSizeSelector]()

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pagination/Overview/"
}