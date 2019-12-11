---
##### shortDescription
Gets the index of the current page.

##### return: numeric
The index of the current page.

---
When using the [pager](/concepts/10%20UI%20Widgets/70%20Data%20Grid/001%20Visual%20Elements/050%20Pager.md '/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Pager'), this method returns a value that is one less than the number of the current page.

When using [scrolling](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/scrolling '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/') in a *virtual* or *infinite* mode, this method return the index of the page whose record is displayed first in the grid.