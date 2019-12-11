---
EventForAction: ..\4 Events\itemClick.md
default: null
type: function() | String
---
---
##### shortDescription
A handler for the [itemClick](/api-reference/10%20UI%20Widgets/CollectionWidget/4%20Events/itemClick.md '{basewidgetpath}/Events/#itemClick') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.itemData): object
The data that is bound to the clicked item.

##### field(e.itemElement): jQuery
An HTML element of the item.

##### field(e.itemIndex): number
Specifies the index of the clicked item.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

---
Assign a function to perform a custom action when a widget item is clicked.

To navigate to a specific URL when the **itemClick** event fires, assign that URL or the anchor part (#) of that URL directly to this option as a string.