---
EventForAction: ..\4 Events\pageLoading.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [pageLoading](/api-reference/10%20UI%20Widgets/dxLookup/4%20Events/pageLoading.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Events/#pageLoading') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

---
Assign a function to perform a custom action before loading the next page in the lookup list if auto-paging is enabled.