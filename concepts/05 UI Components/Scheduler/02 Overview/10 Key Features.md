- **Event creation and management**    
DevExtreme Scheduler supports the following operations with appointments:
    - [Add](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/020%20Add%20Appointments '/Documentation/Guide/UI_Components/Scheduler/Appointments/Add_Appointments/')
    - [Update](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/030%20Update%20Appointments '/Documentation/Guide/UI_Components/Scheduler/Appointments/Update_Appointments/')
    - [Delete](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/040%20Delete%20Appointments '/Documentation/Guide/UI_Components/Scheduler/Appointments/Delete_Appointments/')
    - [Drag-and-drop](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/appointmentDragging '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/appointmentDragging/') (both within the component and outside it)
    - [Resize](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing/allowResizing.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowResizing')

- **Recurring appointments**    
Scheduler allows you to create appointments that [repeat at a specified interval](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/015%20Appointment%20Types/030%20Recurring%20Appointments.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Appointment_Types/#Recurring_Appointments').

- **Variety of views**     
This Scheduler component includes multiple view types:
    - [Day](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types/010%20Day%20View.md '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/#Day_View')
    - [Week and work week](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types/020%20Week%20and%20WorkWeek%20Views.md '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/#Week_and_WorkWeek_Views')
    - [Month](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types/030%20Month%20View.md '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/#Month_View')
    - [Timeline](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types/040%20Timeline%20Views.md '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/#Timeline_Views')
    - [Agenda](/concepts/05%20UI%20Components/Scheduler/060%20Views/010%20View%20Types/050%20Agenda%20View.md '/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/#Agenda_View')

- **Customization**    
You can customize a variety of Scheduler elements:
    - [Appointment](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Customize_Appointment/')
    - [Appointment tooltip](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/060%20Customize%20Appointment%20Tooltip.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Customize_Appointment_Tooltip/')
    - [Appointment details form](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/onAppointmentFormOpening.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentFormOpening')
    - [View](/concepts/05%20UI%20Components/Scheduler/060%20Views/020%20Customize%20Individual%20Views.md '/Documentation/Guide/UI_Components/Scheduler/Views/Customize_Individual_Views/')
    - [Resource headers](/concepts/05%20UI%20Components/Scheduler/040%20Resources/040%20Customize%20Resource%20Headers.md '/Documentation/Guide/UI_Components/Scheduler/Resources/Customize_Resource_Headers/')

- **Lazy loading**    
If Scheduler performance suffers due to a high number of appointments, you can [lazy load data](/concepts/05%20UI%20Components/Scheduler/085%20Optimize%20Scheduler%20Performance%20with%20Lazy%20Loading.md '/Documentation/Guide/UI_Components/Scheduler/Optimize_Scheduler_Performance_with_Lazy_Loading/').

- **Disable Date/Time Ranges**    
[Disable](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CellTemplates/) certain days, dates, and times to prevent scheduling conflicts.

- **Virtual Scrolling**    
Enabling [virtual scrolling](/api-reference/_hidden/dxSchedulerScrolling/mode.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/scrolling/#mode') in Scheduler speeds up load times by displaying only visible appointments. Ideal for large datasets.

- **Work Shifts**    
Set up multiple work shifts in Scheduler using the [offset](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/offset.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#offset') property to define when the day begins. Combine with [startDayHour](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/startDayHour.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#startDayHour'), [endDayHour](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/endDayHour.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#endDayHour'), and [cellDuration](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/cellDuration.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#cellDuration') for preferred display outcomes.