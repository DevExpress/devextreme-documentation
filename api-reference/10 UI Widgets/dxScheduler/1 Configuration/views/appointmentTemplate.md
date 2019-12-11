---
default: 'item'
type: template
---
---
##### shortDescription
Specifies a custom template for appointments.

##### param(itemData): Object
The current appointment's data.

##### param(itemIndex): Number
The current appointment's index.

##### param(itemElement): dxElement
The current appointment's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### return: String|Node|jQuery
A template name or container.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/jQuery/Light/"
}

#####See Also#####
- [Customize Individual Views](/concepts/05%20Widgets/Scheduler/060%20Views/020%20Customize%20Individual%20Views.md '/Documentation/Guide/Widgets/Scheduler/Views/Customize_Individual_Views/')
- [Customize Appointment](/concepts/05%20Widgets/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')