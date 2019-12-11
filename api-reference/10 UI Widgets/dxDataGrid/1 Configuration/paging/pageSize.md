---
default: 20
type: number
---
---
##### shortDescription
Specifies the size of grid pages.

---
When data in a grid is loaded page by page, you can specify how many items a page must contain by setting the **pageSize** option. Once the page size is set, it can be changed at runtime using the page size selector, which can be made visible by setting the **pager** | [showPageSizeSelector](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/pager/showPageSizeSelector.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#showPageSizeSelector') option to *true*. To specify page sizes that can be selected, use the **pager** | [allowedPageSizes](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/pager/allowedPageSizes.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#allowedPageSizes') option.

In addition, you can set or get the page size from code using the [pageSize](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/pageSize().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#pageSize') method called with or without the argument.