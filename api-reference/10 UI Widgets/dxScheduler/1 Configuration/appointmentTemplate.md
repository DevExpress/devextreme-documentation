---
id: dxScheduler.Options.appointmentTemplate
type: template
default: 'item'
---
---
##### shortDescription
Specifies a custom template for appointments.

##### param(model): Object
The data of the appointment being customized.

##### field(model.appointmentData): Object
The appointment's data object.

##### field(model.targetedAppointmentData): Object
The appointment's data object.      
The difference between this and **appointmentData** fields is explained in the [onAppointmentClick](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentClick.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentClick') description.

##### param(itemIndex): Number
The appointment's index.

##### param(contentElement): dxElement
#include common-ref-elementparam with { element: "appointment" }

##### return: String | Element | jQuery
A template name or container.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/"
}

#####See Also#####
- [Customize Appointment](/concepts/05%20Widgets/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')