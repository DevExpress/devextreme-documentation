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

If the **pageSize** value is greater than [itemCount](/api-reference/10%20UI%20Components/dxPagination/1%20Configuration/itemCount.md '/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#itemCount'), Pagination hides itself. To avoid this behavior, assign `true` to at least one of the following properties:

- [showInfo](/api-reference/10%20UI%20Components/dxPagination/1%20Configuration/showInfo.md '/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#showInfo')
- [showNavigationButtons](/api-reference/10%20UI%20Components/dxPagination/1%20Configuration/showNavigationButtons.md '/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#showNavigationButtons')
- [showPageSizeSelector](/api-reference/10%20UI%20Components/dxPagination/1%20Configuration/showPageSizeSelector.md '/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#showPageSizeSelector')

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pagination/Overview/"
}