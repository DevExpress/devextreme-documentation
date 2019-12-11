---
EventForAction: ..\4 Events\exported.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [exported](/api-reference/20%20Data%20Visualization%20Widgets/BaseSparkline/4%20Events/exported.md '{basewidgetpath}/Events#exported') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="{basewidgetpath}/Methods/#instance"></a> instance.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

---
To perform a custom action after data from the widget is exported, assign a function to this option. For example, this function can notify the user that the exporting has been completed. Within this function, you can use the object passed to it as the parameter.

#####See Also#####
- [onExporting](/api-reference/20%20Data%20Visualization%20Widgets/BaseSparkline/1%20Configuration/onExporting.md '{basewidgetpath}/Configuration#onExporting') - allows you to request exporting details and prevent exporting.
- [onFileSaving](/api-reference/20%20Data%20Visualization%20Widgets/BaseSparkline/1%20Configuration/onFileSaving.md '{basewidgetpath}/Configuration#onFileSaving') - allows you to access exported data and/or prevent it from being saved into a file on the user's local storage.