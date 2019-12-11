---
default: 'appointmentCollector'
type: template
---
---
##### shortDescription
Specifies an appointment collector's custom template.

##### param(data): Object
Information about the appointment collector.

##### field(data.appointmentCount): Number
The count of appointments aggregated in the appointment collector.

##### field(data.isCompact): Boolean
Indicates whether the appointment collector is compact. See an image below.

##### param(collectorElement): dxElement
The appointment collector's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### return: String|Node|jQuery
A template name or container.

---
![Scheduler Appointment Collector](/images/UiWidgets/Scheduler_Appointment_Collector.png)
![Scheduler Compact Appointment Collector](/images/UiWidgets/Scheduler_Appointment_Collector_Compact.png)

You can also set a [similar option](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/appointmentCollectorTemplate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#appointmentCollectorTemplate') for all views at once.

#####See Also#####
- [Appointment Collector](/concepts/05%20Widgets/Scheduler/030%20Appointments/080%20Appointment%20Collector.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Collector/')
- [Customize Individual Views](/concepts/05%20Widgets/Scheduler/060%20Views/020%20Customize%20Individual%20Views.md '/Documentation/Guide/Widgets/Scheduler/Views/Customize_Individual_Views/')
- [dropDownAppointmentTemplate](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views/dropDownAppointmentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#dropDownAppointmentTemplate')