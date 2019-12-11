---
id: dxScheduler.Options.views.dropDownAppointmentTemplate
type: template
default: 'dropDownAppointment'
---
---
##### shortDescription
Specifies a custom template for appointments in the appointment collector's drop-down list.

##### param(itemData): Object
The current appointment's object.

##### param(itemIndex): Number
The current appointment's index.

##### param(itemElement): dxElement
#include common-ref-elementparam with { element: "appointment" }

##### return: String | Node | jQuery
A template name or container.

---

#####See Also#####
- [Appointment Collector](/concepts/05%20Widgets/Scheduler/030%20Appointments/080%20Appointment%20Collector.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Collector/')
- [Customize Individual Views](/concepts/05%20Widgets/Scheduler/060%20Views/020%20Customize%20Individual%20Views.md '/Documentation/Guide/Widgets/Scheduler/Views/Customize_Individual_Views/')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')