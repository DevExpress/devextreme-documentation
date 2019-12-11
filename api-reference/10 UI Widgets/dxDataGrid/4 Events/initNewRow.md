---
type: event
---
---
##### shortDescription
Fires on row insertion.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.data): object
Data of the inserted row; initially empty.

---
Instead, you can use the [onInitNewRow](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onInitNewRow.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onInitNewRow') option to handle the event.

By default, a row inserted into a grid contains no data. If you need this row to contain some data, e.g., default values of row cells, implement a function handling the **initNewRow** event. Use the **data** field of the object passed to this function as the argument to access the data object of the new row. Initially, this data object is empty. Populate this object with data in such a manner that its fields correspond to the fields of a [data source](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource') object.

[note]Populating all fields of the data object is not necessary. Populate only those of them that must initialize specific cells of a new row.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')