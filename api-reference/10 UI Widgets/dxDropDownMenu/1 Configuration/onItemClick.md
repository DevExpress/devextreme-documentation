---
EventForAction: ..\4 Events\itemClick.md
default: null
type: function() | String
---
---
##### shortDescription
A handler for the **itemClick** event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the clicked item.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number
The index of the clicked item.

---
Assign a function to perform a custom action when the menu item is clicked.

To navigate to a specific URL when the **itemClick** event fires, assign that URL or the anchor part (#) of that URL directly to this option as a string.