---
id: dxSchedulerScrolling.mode
type: Enums.ScrollMode
default: 'standard'
---
---
##### shortDescription
Specifies the scrolling mode.

---
The following scrolling modes are available:

- **Standard**       
All appointments are simultaneously loaded into the DOM, and the whole grid is rendered.

- **Virtual**          
Appointments are loaded into the DOM when they get into the viewport and are then removed once they leave it; the grid is rendered within the current viewport only. [View Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/VirtualScrolling/).

[note] Virtual mode is available for all [views](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/') except *"agenda"*.
