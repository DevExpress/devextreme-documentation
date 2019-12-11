---
##### shortDescription
Gets the index of the current page.

##### return: Number
The index of the current page.

---
When using the [pager](/concepts/05%20Widgets/DataGrid/35%20Paging/10%20User%20Interaction.md '/Documentation/Guide/Widgets/DataGrid/Paging/#User_Interaction'), this method returns a value that is one less than the number of the current page.

When using [scrolling](/concepts/05%20Widgets/DataGrid/40%20Scrolling '/Documentation/Guide/Widgets/DataGrid/Scrolling/') in a *virtual* or *infinite* mode, this method return the index of the page whose record is displayed first in the grid.

#####See Also#####
#include common-link-callmethods
- [Paging - API](/concepts/05%20Widgets/DataGrid/35%20Paging/20%20API.md '/Documentation/Guide/Widgets/DataGrid/Paging/#API')