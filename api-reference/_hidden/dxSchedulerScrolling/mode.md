---
id: dxSchedulerScrolling.mode
acceptValues: 'standard' | 'virtual'
type: String
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
Appointments are loaded into the DOM when they get into the viewport and are then removed once they leave it; the grid is rendered within the current viewport only.

[note] Virtual mode is only available for *"day"*, *"week"*, and *"workWeek"* [views](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/).
