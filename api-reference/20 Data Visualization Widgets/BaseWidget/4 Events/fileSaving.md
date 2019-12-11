---
type: event
---
---
##### shortDescription
Fires before a file with exported data is saved on the user's local storage.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="{basewidgetpath}/Methods/#instance">instance</a>.

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
- [Handle Events - jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events')
- [export](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export '{basewidgetpath}/Configuration/export') - configures client-side export and printing.
- [exporting](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/4%20Events/exporting.md '{basewidgetpath}/Events#exporting') - an event that fires before data from the widget is exported.
- [exported](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/4%20Events/exported.md '{basewidgetpath}/Events#exported') - an event that fires after data from the widget is exported.