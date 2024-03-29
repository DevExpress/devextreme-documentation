---
id: dxScheduler.Options.remoteFiltering
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether filtering is performed on the server or client side.

---
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/WebAPIService/",
    name: "Web API Service"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/SignalRService/",
    name: "SignalR Service"
}

[note]If you use the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') as a data source and the **remoteFiltering** property is set to **false**, the parameter of the [load](/api-reference/30%20Data%20Layer/CustomStore/3%20Methods/load(options).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#loadoptions') method does not contain the filter field.