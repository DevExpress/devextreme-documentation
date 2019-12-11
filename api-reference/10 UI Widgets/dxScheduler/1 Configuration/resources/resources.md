---
default: []
type: Array
---
---
##### shortDescription
Specifies an array of resources available in the scheduler.

---
Each element of this array is an object that defines a resource kind - a room, a car or any other resource kind. A resource kind object must have at least the following fields.

- [dataSource](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#dataSource')  
Specify the available resources of this kind (room1, room2, etc.).

- [field](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/field.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#field')  
The name of the [appointment data source](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource') field specifying a resource of this kind (e.g., 'room').

There are more fields that can be specified within a resource kind object. They are listed below. For details on how to define a resource and assign it to scheduler appointments, refer to the [Resources](/concepts/10%20UI%20Widgets/72%20Scheduler/40%20Resources '/Documentation/Guide/UI_Widgets/Scheduler/Resources/') article.