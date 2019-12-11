---
EventForAction: ..\4 Events\titleHold.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [titleHold](/api-reference/10%20UI%20Widgets/dxTabPanel/4%20Events/titleHold.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Events/#titleHold') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the item whose title is being held.

##### field(e.itemElement): jQuery
An HTML element of the item.

---
Assign a function to perform a custom action when the widget's collection item title is being held for a specified time period (see the [itemHoldTimeout](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemHoldTimeout.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#itemHoldTimeout') option).