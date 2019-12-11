---
type: EVENT
---
---
##### shortDescription
Fires before a file with exported data is saved on the user's local storage.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="{basewidgetpath}/Methods/#instance"></a> instance.

##### field(e.element): jQuery
The widget's container.

##### field(e.fileName): string
The name of the file to be saved.

##### field(e.format): string
The format of the file to be saved.<br/>
Possible Values: 'PNG' | 'PDF' | 'JPEG' | 'SVG' | 'GIF'

##### field(e.data): blob
Exported data as a BLOB.

##### field(e.cancel): boolean
Assign <i>true</i> to this field if you need to prevent the file from being saved.

---
To perform a custom action before a file with exported data is saved on the user's local storage, implement a handler for this event. Within this handler, you can use the object passed to it as the parameter. For example, using the **cancel** field of this object, you can cancel file saving.

#####See Also#####
- [exporting](/api-reference/20%20Data%20Visualization%20Widgets/BaseSparkline/4%20Events/exporting.md '{basewidgetpath}/Events#exporting') - an event that fires before data from the widget is exported.
- [exported](/api-reference/20%20Data%20Visualization%20Widgets/BaseSparkline/4%20Events/exported.md '{basewidgetpath}/Events#exported') - an event that fires after data from the widget is exported.