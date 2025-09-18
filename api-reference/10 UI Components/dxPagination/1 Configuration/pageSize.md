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

If the **pageSize** value is greater than [itemCount](/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#itemCount), Pagination hides itself. To avoid this behavior, assign `true` to at least one of the following properties:

- [showInfo](/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#showInfo)
- [showNavigationButtons](/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#showNavigationButtons)
- [showPageSizeSelector](/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#showPageSizeSelector)

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pagination/Overview/"
}