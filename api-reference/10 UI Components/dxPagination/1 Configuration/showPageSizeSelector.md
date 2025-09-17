---
id: dxPagination.Options.showPageSizeSelector
type: Boolean | Enums.Mode
default: 'auto'
---
---
##### shortDescription
Specifies whether to show the page size selector.

---

The default Pagination behavior is to hide the page size selector if you assign an empty array to [allowedPageSizes]().

[note]

Pagination hides itself when the [pageSize](/) value is greater than [itemCount](/). To prevent the component from hiding, set at least one of the following properties to `true`:

- [showInfo]()
- [showNavigationButtons]()
- [showPageSizeSelector]()

[/note]