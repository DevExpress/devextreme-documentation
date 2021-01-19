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

- [dataSource](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#dataSource')  
Specify the available resources of this kind (room1, room2, etc.).

- [fieldExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/fieldExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#fieldExpr')  
The name of the appointment object field that specifies a resource of this kind (e.g., "room").

There are more fields that can be specified within a resource kind object. They are listed below. For details on how to define a resource and assign it to scheduler appointments, refer to the [Resources](/concepts/05%20Widgets/Scheduler/040%20Resources/020%20Assign%20Appointments%20to%20Resources '/Documentation/Guide/Widgets/Scheduler/Resources/Assign_Appointments_to_Resources/') article.

#####See Also#####
- **Demos**: [Resources](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Resources) | [Grouping by Resources](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/GroupedAppointments)
- [Resources](/concepts/05%20Widgets/Scheduler/040%20Resources/020%20Assign%20Appointments%20to%20Resources '/Documentation/Guide/Widgets/Scheduler/Resources/Assign_Appointments_to_Resources/')