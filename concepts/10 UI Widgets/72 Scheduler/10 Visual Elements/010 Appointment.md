An [appointment](/concepts/10%20UI%20Widgets/72%20Scheduler/20%20Appointments '/Documentation/Guide/UI_Widgets/Scheduler/Appointments/') in the **Scheduler** widget is displayed as a rectangle lying on the timetable of the scheduler area. The time cells it occupies correspond to its scheduled time interval.

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
Indicates the appointment as a [recurring appointment](/concepts/10%20UI%20Widgets/72%20Scheduler/30%20Appointment%20Types/030%20Recurring%20Appointments.md '/Documentation/Guide/UI_Widgets/Scheduler/Appointment_Types/#Recurring_Appointments').
- **recurrenceException**  
Specifies exceptions for the current recurring appointment.
- **endDateTimeZone**  
Specifies the timezone of the appointment end date.
- **startDateTimeZone**  
Specifies the timezone of the appointment start date.


You can customize the appearance of appointments. For instance, they may consist of several text blocks with images. To define a custom appearance, specify a custom appointment template for the widget using the [appointmentTemplate](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/appointmentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#appointmentTemplate') or [onAppointmentRendered](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentRendered.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentRendered') option. For details, refer to the [Customize an Item Appearance](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance') topic.

When the appointment is clicked, the tooltip is displayed. 

![Scheduler Tooltip](/images/UiWidgets/Scheduler_tooltip.png)

When the appointment is double-clicked, the popup window with the information about the selected appointment appears.

![Scheduler Popup window](/images/UiWidgets/Scheduler_popup.png)