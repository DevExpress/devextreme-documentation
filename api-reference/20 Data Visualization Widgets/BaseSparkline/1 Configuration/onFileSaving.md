---
EventForAction: ..\4 Events\fileSaving.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [fileSaving](/api-reference/20%20Data%20Visualization%20Widgets/BaseSparkline/4%20Events/fileSaving.md '{basewidgetpath}/Events#fileSaving') event.

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
To perform a custom action before a file with exported data is saved on the user's local storage, assign a function to this option. Within this function, you can use the object passed to it as the parameter. For example, using the **cancel** field of this object, you can cancel file saving.

#####See Also#####
- [onExporting](/api-reference/20%20Data%20Visualization%20Widgets/BaseSparkline/1%20Configuration/onExporting.md '{basewidgetpath}/Configuration#onExporting') - allows you to request exporting details and prevent exporting.
- [onExported](/api-reference/20%20Data%20Visualization%20Widgets/BaseSparkline/1%20Configuration/onExported.md '{basewidgetpath}/Configuration#onExported') - allows you to notify an end user when exporting is completed.