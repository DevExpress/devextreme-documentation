---
type: eventType
---
---
##### shortDescription
Raised before a cell or row switches to the editing state.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.data): object
The data object of the row.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in a [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key. If a row has not been transmitted to the data source yet, its key is **undefined**.

##### field(e.cancel): boolean
A flag allowing you to prevent the row from switching into the editing state.

##### field(e.column): object
The [options of the column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns') whose cell is switching into the editing state; useful in the [batch edit mode](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/30%20Batch%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Batch_Mode').

---
Main article: [onEditingStart](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onEditingStart.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onEditingStart')

#####See Also#####
#include common-link-handleevents