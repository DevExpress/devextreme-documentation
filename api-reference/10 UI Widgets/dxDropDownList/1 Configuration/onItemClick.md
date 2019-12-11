---
EventForAction: ..\4 Events\itemClick.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **itemClick** event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the clicked item.

##### field(e.itemElement): object
An HTML element of the item.

##### field(e.itemIndex): number | object
The index of the clicked item. If the widget items are grouped, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

---
Assign a function to perform a custom action when a widget item is clicked.

To navigate to a specific URL when the **itemClick** event fires, assign that URL directly to this option.