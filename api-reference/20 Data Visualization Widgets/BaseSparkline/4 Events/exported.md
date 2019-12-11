---
type: EVENT
---
---
##### shortDescription
Fires after data from the widget is exported.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="{basewidgetpath}/Methods/#instance"></a> instance.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in Knockout and AngularJS approaches.

---
To perform a custom action after data from the widget is exported, implement a handler for this event. For example, this handler can notify the user that the exporting has been completed. Within this handler, you can use the object passed to it as the parameter.

#####See Also#####
- [exporting](/api-reference/20%20Data%20Visualization%20Widgets/BaseSparkline/4%20Events/exporting.md '{basewidgetpath}/Events#exporting') - an event that fires before data from the widget is exported.
- [fileSaving](/api-reference/20%20Data%20Visualization%20Widgets/BaseSparkline/4%20Events/fileSaving.md '{basewidgetpath}/Events#fileSaving') - an event that fires before a file with exported data is saved on the user's local storage.