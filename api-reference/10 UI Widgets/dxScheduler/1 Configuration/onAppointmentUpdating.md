---
EventForAction: ..\4 Events\appointmentUpdating.md
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed before an appointment is updated in the data source.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.oldData): Object
The data of the appointment to be updated.

##### field(e.newData): Object
The appointment with new data.

##### field(e.cancel): Boolean | Promise<Boolean>
Allows you to prevent an appointment update.    
If you pass a Promise to this field, the appointment updating is continued or canceled once the Promise has been resolved.

---
