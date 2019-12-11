---
EventForAction: ..\4 Events\groupRendered.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **groupRendered** event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.groupData): object
The data that is bound to the group item.

##### field(e.groupElement): jQuery
An HTML element of the group.

##### field(e.groupIndex): number
Specifies the index of the rendered group.

---
Assign a function to perform a custom action after an item group element is rendered.