---
id: dxPagination.Options.itemCount
type: Number
default: 1
---
---
##### shortDescription
Specifies the total number of items.

---
Define this property to ensure Pagination functions properly.

[note]

If the [pageSize](/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#pageSize) value is greater than **itemCount**, Pagination is hidden. To avoid this behavior, assign `true` to at least one of the following properties:

- [showInfo](/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#showInfo)
- [showNavigationButtons](/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#showNavigationButtons)
- [showPageSizeSelector](/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#showPageSizeSelector)

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pagination/Overview/"
}