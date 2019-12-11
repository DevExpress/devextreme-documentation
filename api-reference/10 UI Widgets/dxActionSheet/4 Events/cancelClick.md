---
type: eventType
---
---
##### shortDescription
Fires when the **Cancel** button is clicked.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
Indicates whether or not to cancel hiding the action sheet menu when clicking the Cancel button.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.cancel): boolean
Indicates whether or not to cancel hiding the action sheet when the Cancel button is clicked.

---
In the handling function, use the **cancel** field of the object passed as a handler parameter. Set this field to *true* to prohibit the hiding of the action sheet menu when an end user clicks the Cancel button on it.

Instead, you can use the [onCancelClick](/api-reference/10%20UI%20Widgets/dxActionSheet/1%20Configuration/onCancelClick.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#onCancelClick') option to handle the event.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')