---
type: eventType
---
---
##### shortDescription
Fires before data from the widget is exported.

##### param(e): object
Information about the event.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.fileName): string
The name of the file to which the widget is about to be exported.

##### field(e.cancel): boolean
Assign **true** to this field if you need to prevent exporting.

##### field(e.format): string
The resulting file format. One of PNG, PDF, JPEG, SVG and GIF.

---
To perform a custom action before data from the widget is exported, implement a handler for this event. Within this handler, you can use the object passed to it as the parameter. For example, using the **cancel** field of this object, you can cancel exporting.

#####See Also#####
#include common-link-handleevents
- [export](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export '{basewidgetpath}/Configuration/export') - configures client-side export and printing.
- [exported](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/4%20Events/exported.md '{basewidgetpath}/Events#exported') - an event that fires after data from the widget is exported.
- [fileSaving](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/4%20Events/fileSaving.md '{basewidgetpath}/Events#fileSaving') - an event that fires before a file with exported data is saved on the user's local storage.