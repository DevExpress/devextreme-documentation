---
default: 0
type: number
---
---
##### shortDescription
Specifies the grid page that should be displayed by default.

---
When this option is not specified, a grid displays records starting from the first page. If you need to specify a particular page to start displaying from, assign the index of this page to the **pageIndex** option.

[note] The page index is one less than the page number displayed by the [pager](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/050%20Pager.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Pager'). Thus, the first page has 0 index, the second - 1, etc.

In addition, you can set or get the current page index from code using the [pageIndex](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/pageIndex().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#pageIndex') method called with or without the argument.