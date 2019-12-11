---
type: event
---
---
##### shortDescription
Fires when a grid record has been selected/deselected.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.currentSelectedRowKeys): array
The keys of the rows that have been selected currently.

##### field(e.currentDeselectedRowKeys): array
The keys of the rows that have been deselected currently.

##### field(e.selectedRowKeys): array
The keys of all selected rows.

##### field(e.selectedRowsData): array
The data of all selected rows.

---
Instead, you can use the [onSelectionChanged](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onSelectionChanged') option to handle the event.

When implementing a function that handles this event, you can use arrays of keys of those grid records that have been currently selected or deselected. These arrays can be accessed through the fields of the object passed as the function's parameter. Arrays of all selected records and their data are also accessible through the same object.

If a field providing key values is not specified in a [data source](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource'), the whole data object is considered the key for a grid record. In this case, all arrays passed to the **selectionChanged** event handler contain data objects instead of keys.

To retrieve data by a key, use the [byKey(key)](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/byKey(key).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#byKeykey') method.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')