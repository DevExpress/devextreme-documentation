The **Scheduler** widget is designed to work with appointments - tasks, events and other similar data that should be scheduled in a timetable. Appointments can have different details, but the main details that allow appointments to be scheduled are the following.

- **text**  
This is a key information about an appointment.

- **startDate**  
The time (year/month/day/time) when an appointment start is scheduled.

- **endDate**  
The time (year/month/day/time) when an appointment end is scheduled.

These are the fields that must be exposed by the objects defining appointment for the **Scheduler** widget.

	<!--JavaScript-->var appointments = [
		{text: 'Meet with a customer', startDate: new Date(2015, 4, 10, 11, 0), endDate: new Date(2015, 4, 10, 13, 0)},
		{text: 'Discuss results', startDate: new Date(2015, 5, 11, 12, 0), endDate: new Date(2015, 4, 11, 13, 0)}
	]

[note]There can be more fields used to define an appointment. For details, refer to the [Default Item Template](/api-reference/10%20UI%20Widgets/dxScheduler/5%20Default%20Appointment%20Template '/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/') Reference section. 

To assign appointments to the **Scheduler** widget, use the widget's [dataSource](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource') option.

	<!--JavaScript-->var schedulerOptions = {
		dataSource: appointments
	}

The widget displays the assigned appointments as rectangles laying on the timetable of the scheduler area. The time cells it occupies correspond to its specified time interval.

![Scheduler Appointment](/images/UiWidgets/Scheduler_Appointment.png)

You can customize an appointment appearance. To learn more about Appointments as the widget's visual elements, refer to the **Visual Elements** | [Appointment](/concepts/05%20Widgets/Scheduler/10%20Visual%20Elements/010%20Appointment.md '/Documentation/Guide/Widgets/Scheduler/Visual_Elements/#Appointment') topic.

In this article, you will learn what possibilities are provided for adding, modifying and deleting appointments, and how to organize a data source for the widget so that all these operations are easily performed.