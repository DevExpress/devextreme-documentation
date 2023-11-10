---
id: dxScheduler.Options.appointmentPopupTemplate
type: template
default: 'appointmentPopup'
hidden: 
---
---
##### shortDescription
The template to be used for rendering an appointment details popup.

##### param(appointmentData): Object
The data of the appointment whose popup is rendered.

##### param(contentElement): DxElement
#include common-ref-elementparam with { element: "appointment" }

##### return: String | Element | jQuery
A template name or container.

---
A binding context of an appointment popup template is the data source object that corresponds to the currently rendered appointment.

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')