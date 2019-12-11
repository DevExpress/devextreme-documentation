---
##### shortDescription
Gets the element of a row by its index.

##### param(rowIndex): Number
The visible index of the row.

##### return: jQuery|undefined
The element of the row; provides access to [element-related jQuery operations](https://api.jquery.com/?s=element).

---
Note that if the widget has [fixed columns](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnFixing '{basewidgetpath}/Configuration/columnFixing/'), the method returns an array of two separate elements: with unfixed and with fixed columns.

#####See Also#####
#include common-link-callmethods