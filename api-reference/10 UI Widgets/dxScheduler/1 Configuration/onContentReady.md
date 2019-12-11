---
EventForAction: ..\4 Events\contentReady.md
hidden: false
default: null
type: function
---
---
##### shortDescription
A handler for the [contentReady](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/contentReady.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#contentReady') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

---
If data displayed by the widget is specified using a [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') instance, the **contentReady** event fires each time the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method of the DataSource instance is called, as well as when the widget content is ready or an appointment is modified.