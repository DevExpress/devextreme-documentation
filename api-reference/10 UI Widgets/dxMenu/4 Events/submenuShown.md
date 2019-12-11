---
type: eventType
---
---
##### shortDescription
Fires when the submenu is displayed.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.rootItem): jQuery
A jQuery object of the root menu element for which the submenu is displayed.

---
Instead, you can use the [onSubmenuShown](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/onSubmenuShown.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#onSubmenuShown') option to handle the event.

#####See Also#####
#include common-link-handleevents