---
type: event
---
---
##### shortDescription
Fires before a master or group row is collapsed in the grid.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.key): any
The key of the group or master row.

##### field(e.cancel): boolean
Indicates whether to cancel collapsing the row.

---
Instead, you can use the [onRowCollapsing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onRowCollapsing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowCollapsing') option to handle the event.

Handle this event to prevent collapsing of a specific row.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')