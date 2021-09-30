---
id: GridBase.selectRowsByIndexes(indexes)
---
---
##### shortDescription
Selects rows with specific indexes.

##### return: Promise<any>
A Promise that is resolved after the rows are selected.
#include ref-promisedistinction

##### param(indexes): Array<Number>
The row indexes.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MasterDetailAPI/"
}

This method has the following specifics:

- This method call clears selection of all previously selected rows.
- When calculating row indexes, the UI component counts data and group rows. Nevertheless, only data rows can be selected.
- If the [pager](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/pager '{basewidgetpath}/Configuration/pager/') is used, selection is cleared once a user moves to a different page. To preserve it, call this method within the [onContentReady](/api-reference/10%20UI%20Components/Widget/1%20Configuration/onContentReady.md '{basewidgetpath}/Configuration/#onContentReady') handler.

#####See Also#####
#include common-link-callmethods
- [Initial and Runtime Selection](/concepts/05%20UI%20Components/DataGrid/50%20Selection/20%20API/1%20Initial%20and%20Runtime%20Selection.md '/Documentation/Guide/UI_Components/{WidgetName}/Selection/#API/Initial_and_Runtime_Selection')