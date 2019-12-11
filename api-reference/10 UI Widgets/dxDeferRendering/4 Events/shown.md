---
type: eventType
---
---
##### shortDescription
Fires when widget content is shown and animation has completed.

##### param(e): object
Provides function parameters.

##### field(e.component): object
A root element of the shown markup.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

---
Instead, you can use the [onShown](/api-reference/10%20UI%20Widgets/dxDeferRendering/1%20Configuration/onShown.md '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#onShown') option to handle the event.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')