---
type: eventType
---
---
##### shortDescription
Fires after a widget item title is rendered.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the item whose title should be rendered.

##### field(e.itemElement): jQuery
An HTML element of the item.

---
Instead, you can use the [onTitleRendered](/api-reference/10%20UI%20Widgets/dxTabPanel/1%20Configuration/onTitleRendered.md '/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#onTitleRendered') option to handle the event.

#####See Also#####
#include common-link-handleevents