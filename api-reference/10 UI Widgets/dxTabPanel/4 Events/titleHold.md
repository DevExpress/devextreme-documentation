---
type: eventType
---
---
##### shortDescription
Fires when the widget item title is being held for the time period specified by the [itemHoldTimeout](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemHoldTimeout.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#itemHoldTimeout') option.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the item whose title is being held.

##### field(e.itemElement): jQuery
An HTML element of the item.

---
Instead, you can use the [onTitleHold](/api-reference/10%20UI%20Widgets/dxTabPanel/1%20Configuration/onTitleHold.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#onTitleHold') option to handle the event.

#####See Also#####
#include common-link-handleevents