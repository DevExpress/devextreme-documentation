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

If the [pageSize](/api-reference/10%20UI%20Components/dxPagination/1%20Configuration/pageSize.md '/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#pageSize') value is greater than **itemCount**, Pagination is hidden. To avoid this behavior, assign `true` to at least one of the following properties:

- [showInfo](/api-reference/10%20UI%20Components/dxPagination/1%20Configuration/showInfo.md '/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#showInfo')
- [showNavigationButtons](/api-reference/10%20UI%20Components/dxPagination/1%20Configuration/showNavigationButtons.md '/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#showNavigationButtons')
- [showPageSizeSelector](/api-reference/10%20UI%20Components/dxPagination/1%20Configuration/showPageSizeSelector.md '/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#showPageSizeSelector')

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pagination/Overview/"
}