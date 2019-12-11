---
type: eventType
---
---
##### shortDescription
Fires after an item group element is rendered.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.groupData): object
The data that is bound to the group item.

##### field(e.groupElement): jQuery
An HTML element of the group.

##### field(e.groupIndex): number
Specifies the index of the rendered group.

---
Instead, you can use the [onGroupRendered](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onGroupRendered.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onGroupRendered') option to handle the event.

#####See Also#####
#include common-link-handleevents