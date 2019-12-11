An [appointment](/concepts/05%20Widgets/Scheduler/20%20Appointments '/Documentation/Guide/Widgets/Scheduler/Appointments/') in the **Scheduler** widget is displayed as a rectangle lying on the timetable of the scheduler area. The time cells it occupies correspond to its scheduled time interval.

![Scheduler Appointment](/images/UiWidgets/Scheduler_Appointment.png)

The appointment displayed above uses a default template defined for the **Scheduler** widget. This template is based on a predefined set of fields in the widget [data source](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource'), requiring you to provide the required set of fields for your widget's data source, so that widget items are displayed using a default template. The following are the fields that are used in the default item template.

- **visible**  
Specifies whether or not the appointment is visible.
- **disabled**  
Specifies whether or not an appointment is displayed disabled.
- **html**  
Specifies the html code inserted into the appointment rectangle.
- **template**  
Specifies an item template that should be used to render this appointment only.
- **text**  
Specifies the subject inserted into the appointment element.
- **description**  
Specifies a detailed description of the appointment.
- **startDate**  
Specifies the appointment's start date inserted into the appointment element.
- **endDate**  
Specifies the appointment's end date inserted into the appointment element.
- **allDay**  
Specifies whether or not the appointment lasts all day.
- **recurrenceRule**  
Indicates the appointment as a [recurring appointment](/concepts/05%20Widgets/Scheduler/30%20Appointment%20Types/030%20Recurring%20Appointments.md '/Documentation/Guide/Widgets/Scheduler/Appointment_Types/#Recurring_Appointments').
- **recurrenceException**  
Specifies exceptions for the current recurring appointment.
- **endDateTimeZone**  
Specifies the timezone of the appointment end date.
- **startDateTimeZone**  
Specifies the timezone of the appointment start date.


You can customize the appearance of appointments. For instance, they may consist of several text blocks with images. To define a custom appearance, specify a custom appointment template for the widget using the [appointmentTemplate](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/appointmentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#appointmentTemplate') or [onAppointmentRendered](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentRendered.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentRendered') option.

#####See Also#####
- [template](/api-reference/50%20Common/Object%20Structures/template '/Documentation/ApiReference/Common/Object_Structures/template/')
- [Customize Widget Elemet Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance')
- [Customize Widget Elemet Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach')

When the appointment is clicked, the tooltip is displayed. 

![Scheduler Tooltip](/images/UiWidgets/Scheduler_tooltip.png)

When the appointment is double-clicked, the popup window with the information about the selected appointment appears.

![Scheduler Popup window](/images/UiWidgets/Scheduler_popup.png)