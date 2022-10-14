---
id: GridBase.selectRows(keys, preserve)
---
---
##### shortDescription
Selects rows with specific keys.

##### return: Promise<any>
A Promise that is resolved after the rows are selected.
#include ref-promisedistinction

##### param(keys): Array<any>
The row keys.

##### param(preserve): Boolean
Specifies whether previously selected rows should stay selected.

---
By default, this method call clears selection of previously selected rows. To keep these rows selected, call this method with **true** as the second argument.

    <!--JavaScript-->widgetInstance.selectRows([5, 10, 12], true);

If you specify DataGrid's key as composite (for example, `key: ['id', 'name']`), you need to call this method as follows:

    <!--JavaScript-->widgetInstance.selectRows([ { id: 5, name: 'Alex' }, { id: 10: name: 'Bob' } ], true);

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MultipleRecordSelectionAPI/"
}

#####See Also#####
#include common-link-callmethods
- [Initial and Runtime Selection](/concepts/05%20UI%20Components/DataGrid/50%20Selection/20%20API/1%20Initial%20and%20Runtime%20Selection.md '/Documentation/Guide/UI_Components/{WidgetName}/Selection/#API/Initial_and_Runtime_Selection')
- [selectRowsByIndexes(indexes)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/selectRowsByIndexes(indexes).md '{basewidgetpath}/Methods/#selectRowsByIndexesindexes')