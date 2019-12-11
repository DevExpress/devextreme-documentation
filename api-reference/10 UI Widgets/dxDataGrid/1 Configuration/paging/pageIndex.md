---
default: 0
type: Number
---
---
##### shortDescription
Specifies the grid page that should be displayed by default.

---
When this option is not specified, a grid displays records starting from the first page. If you need to specify a particular page to start displaying from, assign the index of this page to the **pageIndex** option.

[note] The page index is one less than the page number displayed by the pager. Thus, the first page has 0 index, the second - 1, etc.

In addition, you can set or get the current page index from code using the [pageIndex](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/pageIndex().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#pageIndex') method called with or without the argument.

#####See Also#####
- [Paging](/concepts/05%20Widgets/DataGrid/35%20Paging '/Documentation/Guide/Widgets/DataGrid/Paging/')