---
##### shortDescription
Gets a cell with specific row and column indexes.

##### param(rowIndex): Number
The index of the row to which the cell belongs.

##### param(visibleColumnIndex): Number
The visible index of the column to which the cell belongs.

##### return: dxElement|undefined
The cell's container. An [HTML element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery element](https://api.jquery.com/Types/#jQuery) when you use jQuery. If the specified row or column does not exist, the method returns **undefined**.

---
#####See Also#####
#include common-link-callmethods