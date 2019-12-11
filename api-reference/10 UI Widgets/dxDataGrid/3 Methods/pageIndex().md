---
##### shortDescription
Gets the index of the current page.

##### return: Number
The index of the current page.

---
When using the [pager](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/050%20Pager.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Pager'), this method returns a value that is one less than the number of the current page.

When using [scrolling](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/scrolling '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/') in a *virtual* or *infinite* mode, this method return the index of the page whose record is displayed first in the grid.