---
id: dxScheduler.Options.appointmentTooltipTemplate
type: template
default: 'appointmentTooltip'
---
---
##### shortDescription
Specifies a custom template for tooltips displayed when users click an appointment or [cell overflow indicator](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/080%20Cell%20Overflow%20Indicator.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Cell_Overflow_Indicator/').

##### param(model): Object
The data of the appointment for which the tooltip is displayed.

##### field(model.appointmentData): Object
The appointment's data object.

##### field(model.targetedAppointmentData): Object
The clicked appointment's data object.

##### param(itemIndex): Number
The appointment's index.

##### param(contentElement): DxElement
#include common-ref-elementparam with { element: "appointment tooltip" }

##### return: String | UserDefinedElement
A template name or container.

##### field(model.isButtonClicked): Boolean
Specifies whether you click a button or an appointment element.

---

If you want to change tooltip appearance, implement a custom template with the `appointmentTooltipTemplate` property. Refer to the [Customize Appointment Tooltip](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/060%20Customize%20Appointment%20Tooltip.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Customize_Appointment_Tooltip/') section for details.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/"
}

#####See Also#####
- **views[]**.[appointmentTooltipTemplate](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/appointmentTooltipTemplate.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#appointmentTooltipTemplate')
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')

<!-- import * from 'api-reference\10 UI Components\dxScheduler\1 Configuration\appointmentTemplate.md' -->