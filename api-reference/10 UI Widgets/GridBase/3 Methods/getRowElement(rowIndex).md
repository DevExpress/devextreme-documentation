---
##### shortDescription
Gets the container of a row with a specific index.

##### param(rowIndex): Number
The row's visible index.

##### return: Array<Node>|jQuery|undefined
The row's container.

---
Note that if the widget has [fixed columns](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columnFixing '{basewidgetpath}/Configuration/columnFixing/'), the method returns an array of two separate elements: with unfixed and with fixed columns.

#####See Also#####
#include common-link-callmethods