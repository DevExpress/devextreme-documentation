---
EventForAction: ..\4 Events\cellClick.md
default: null
type: function() | String
---
---
##### shortDescription
A handler for the [cellClick](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/cellClick.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#cellClick') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.cellData): object
An object associated with the clicked cell.

##### field(e.cellElement): jQuery
An HTML element of the clicked cell.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

##### field(e.cancel): Boolean
Indicates whether or not to cancel execution of the default cell click handler.

---
Assign a function to perform a custom action after a view cell has been clicked.