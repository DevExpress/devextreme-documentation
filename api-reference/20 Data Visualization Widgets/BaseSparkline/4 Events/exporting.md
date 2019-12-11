---
type: EVENT
---
---
##### shortDescription
Fires before data from the widget is exported.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="{basewidgetpath}/Methods/#instance"></a> instance.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.fileName): string
The name of the file to which the widget is about to be exported.

##### field(e.cancel): boolean
Assign <i>true</i> to this field if you need to prevent exporting.

---
To perform a custom action before data from the widget is exported, implement a handler for this event. Within this handler, you can use the object passed to it as the parameter. For example, using the **cancel** field of this object, you can cancel exporting.

#####See Also#####
- [exported](/api-reference/20%20Data%20Visualization%20Widgets/BaseSparkline/4%20Events/exported.md '{basewidgetpath}/Events#exported') - an event that fires after data from the widget is exported.
- [fileSaving](/api-reference/20%20Data%20Visualization%20Widgets/BaseSparkline/4%20Events/fileSaving.md '{basewidgetpath}/Events#fileSaving') - an event that fires before a file with exported data is saved on the user's local storage.