---
type: eventType
---
---
##### shortDescription
Fires when a user adds a custom item.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.text): string
A text of the widget text field.

##### return: object|Promise
The item object or the jQuery Deferred object resolved when the item is created.

---
Instead, you can use the [onCustomItemCreating](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/onCustomItemCreating.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#onCustomItemCreating') option to handle the event.

[note]This event fires only if the [acceptCustomValue](/api-reference/10%20UI%20Widgets/dxSelectBox/1%20Configuration/acceptCustomValue.md '/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#acceptCustomValue') option is enabled. Note that your handler for the **customItemCreating** event should return an item or a Promise of jQuery Deferred object resolved when a custom item is created.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')