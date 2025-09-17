---
id: dxPagination.Options.pageSize
firedEvents: optionChanged
type: Number
default: 5
---
---
##### shortDescription
Specifies the page size.

---

[note]

Pagination hides itself when the [pageSize](/) value is greater than [itemCount](/). To avoid this behavior, assign `true` to at least one of the following properties:

- [showInfo]()
- [showNavigationButtons]()
- [showPageSizeSelector]()

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pagination/Overview/"
}