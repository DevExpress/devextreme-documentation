---
id: dxScheduler.Options.resources
type: Array<Object>
default: []
---
---
##### shortDescription
Specifies an array of resources available in the scheduler.

---
Each element of this array is an object that defines a resource kind - a room, a car or any other resource kind. A resource kind object must have at least the following fields.

- [dataSource](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/dataSource.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#dataSource')  
Specify the available resources of this kind (room1, room2, etc.).

- [fieldExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/fieldExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#fieldExpr')  
The name of the appointment object field that specifies a resource of this kind (e.g., "room").

There are more fields that can be specified within a resource kind object. They are listed below. For details on how to define a resource and assign it to scheduler appointments, refer to the [Resources](/concepts/05%20UI%20Components/Scheduler/040%20Resources/020%20Assign%20Appointments%20to%20Resources '/Documentation/Guide/UI_Components/Scheduler/Resources/Assign_Appointments_to_Resources/') article. The Scheduler does not support grouping resources by multiple data fields in the **agenda** view.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Resources/",
    name: "Resources"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/GroupOrientation/",
    name: "Grouping by Resources"
}