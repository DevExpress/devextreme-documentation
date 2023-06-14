---
id: dxDataGrid.Options.selection
type: Object
---
---
##### shortDescription
Configures runtime selection.

---
A user can select rows in a single or multiple [mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/selection/mode.md '{basewidgetpath}/Configuration/selection/#mode'). In multiple mode, a user can select all rows at once. To disable this feature, assign **false** to the [allowSelectAll](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/selection/allowSelectAll.md '{basewidgetpath}/Configuration/selection/#allowSelectAll').

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RowSelection/",
    name: "Single Row Selection"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MultipleRecordSelectionModes/",
    name: "Multiple Row Selection"
}

By default, once a user selects a row, the data source is instantly notified about it. This may lower the UI component performance if the data source is remote and the user is allowed to select all rows at once. In this case, we recommend making the selection [deferred](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/selection/deferred.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/#deferred').

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/DeferredSelection/",
    name: "Deferred Selection"
}

#####See Also#####
- [Selection](/concepts/05%20UI%20Components/DataGrid/50%20Selection '/Documentation/Guide/UI_Components/DataGrid/Selection/')
- [Deferred Selection](/concepts/05%20UI%20Components/DataGrid/10%20Enhance%20Performance%20on%20Large%20Datasets/015%20Deferred%20Selection.md '/Documentation/Guide/UI_Components/DataGrid/Enhance_Performance_on_Large_Datasets/#Deferred_Selection')
- [onSelectionChanged](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onSelectionChanged.md '{basewidgetpath}/Configuration/#onSelectionChanged')