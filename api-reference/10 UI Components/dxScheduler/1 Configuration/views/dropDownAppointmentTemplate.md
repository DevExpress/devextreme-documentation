---
id: dxScheduler.Options.views.dropDownAppointmentTemplate
type: template
default: 'dropDownAppointment'
dep: dxScheduler.Options.views.appointmentTooltipTemplate
---
---
##### shortDescription
Specifies a custom template for tooltips displayed when users click a [cell overflow indicator](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/080%20Cell%20Overflow%20Indicator.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Cell_Overflow_Indicator/') in this view.

##### param(itemData): Object
The appointment's object.

##### param(itemIndex): Number
The appointment's index.

##### param(contentElement): DxElement
#include common-ref-elementparam with { element: "appointment" }

##### return: String | Element | jQuery
A template name or container.

---

#####See Also#####
- [Customize Individual Views](/concepts/05%20UI%20Components/Scheduler/060%20Views/020%20Customize%20Individual%20Views.md '/Documentation/Guide/UI_Components/Scheduler/Views/Customize_Individual_Views/')
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')