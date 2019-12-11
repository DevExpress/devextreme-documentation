---
EventForAction: ..\4 Events\customItemCreating.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [customItemCreating](/api-reference/10%20UI%20Widgets/dxSelectBox/4%20Events/customItemCreating.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Events/#customItemCreating') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.text): string
A text of the widget text field.

##### return: object|Promise
The item object or the jQuery Deferred object resolved when the item is created.

---
[note]This event fires only if the [acceptCustomValue](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/acceptCustomValue.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#acceptCustomValue') option is enabled. Note that your handler for the **customItemCreating** event should return an item or a Promise of jQuery Deferred object resolved when a custom item is created.