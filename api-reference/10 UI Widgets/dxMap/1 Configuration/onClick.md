---
EventForAction: ..\4 Events\click.md
default: null
type: function | string
---
---
##### shortDescription
A handler for the [click](/api-reference/10%20UI%20Widgets/dxMap/4%20Events/click.md '/Documentation/ApiReference/UI_Widgets/dxMap/Events/#click') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.location): object
Specifies the location of the clicked point on the map (if the 'google' or 'bing' provider is used).

##### field(e.jQueryEvent): jQueryEvent
The jQuery event that caused action execution (if a static google provider is used).

---
Assign a function to perform a custom action when the map is clicked.

To navigate to a specific URL when the **click** event fires, assign that URL or the anchor part (#) of that URL directly to this option as a string.