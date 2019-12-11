---
default: 'appointmentTooltip'
type: template
---
---
##### shortDescription
The template to be used for rendering an appointment tooltip.

##### param(appointmentData): object
The appointment object whose tooltip should be rendered.

##### param(contentElement): jQuery
An HTML element of the appointment tooltip to be rendered.

##### return: string|jQuery
A template name or a template container.

---
A binding context of an appointment tooltip template is the data source object that corresponds to the currently rendered appointment.

So, in **Knockout approach**, you can bind template elements to the appointment object's fields directly. To access another binding context within an appointment tooltip template, use [Knockout](https://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access appointment object fields within a template, use a variable whose name is assigned to the **dx-item-alias** directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, appointment object fields are beyond reach. To access another binding context within an appointment tooltip template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [Customize Widget Element Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')