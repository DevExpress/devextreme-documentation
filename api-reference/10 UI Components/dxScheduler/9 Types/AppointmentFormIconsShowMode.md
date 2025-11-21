---
id: Enums.AppointmentFormIconsShowMode
acceptValues: 'both' | 'main' | 'recurrence' | 'none'
type: Union
references: dxScheduler.Options.editing.form.iconsShowMode
---
---
##### shortDescription
Specifies icon visibility within the Appointment Edit Form.

---
The Scheduler Appointment Edit Form consists of two parts: a general information group and a recurrence settings group. Implement **AppointmentFormIconsShowMode** values in **editing**.**form**.[iconsShowMode](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/form/#iconsShowMode) to configure icon visibility as follows:

- *"both"*    
Display icons in both general information and recurrence settings groups.
- *"main"*    
Display icons in the general information group only.
- *"recurrence"*    
Display icons in the recurrence settings group only.
- *"none"*    
Hide icons in both groups.
