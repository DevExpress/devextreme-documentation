---
id: GridBase.selectRowsByIndexes(indexes)
---
---
##### shortDescription
Selects rows with specific indexes.

##### return: Promise<any>
A Promise that is resolved after the rows are selected. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

##### param(indexes): Array<Number>
The row indexes.

---
This method has the following specifics:

- This method call clears selection of all previously selected rows.
- When calculating row indexes, the widget counts data and group rows. Nevertheless, only data rows can be selected.
- If the [pager](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/pager '{basewidgetpath}/Configuration/pager/') is used, selection is cleared once a user moves to a different page. To preserve it, call this method within the [onContentReady](/api-reference/10%20UI%20Widgets/Widget/1%20Configuration/onContentReady.md '{basewidgetpath}/Configuration/#onContentReady') handler.

#####See Also#####
#include common-link-callmethods
- [Initial and Runtime Selection](/concepts/05%20Widgets/DataGrid/50%20Selection/20%20API/1%20Initial%20and%20Runtime%20Selection.md '/Documentation/Guide/Widgets/DataGrid/Selection/#API/Initial_and_Runtime_Selection')