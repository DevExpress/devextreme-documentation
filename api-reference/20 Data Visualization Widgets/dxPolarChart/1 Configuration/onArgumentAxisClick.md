---
EventForAction: ..\4 Events\argumentAxisClick.md
type: function(e) | String
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [argumentAxisClick](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/4%20Events/argumentAxisClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Events/#argumentAxisClick') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget's instance.

##### field(e.element): Object
The widget's container.

##### field(e.jQueryEvent): jQuery-event object
The jQuery event.

##### field(e.argument): Date|Number|String
The clicked label's value.

---
When implementing a handling function, use the object passed to it as the parameter. You can find the value of the clicked label among fields of this object.

Alternatively, you can navigate to a specific URL when the **argumentAxisClick** event fires. For this purpose, assign this URL to the **onArgumentAxisClick** option.