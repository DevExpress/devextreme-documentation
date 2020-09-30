The **Scheduler** displays appointments according to the client machine's time zone. If you want to override client settings, use the [timeZone](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#timeZone) option.

You can specify different time zones for an individual appointment. To do this, use the [startDateTimeZone](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#startDateTimeZone) and [endDateTimeZone](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#endDateTimeZone) options in the appointment's data object. When the **Scheduler** positions appointments in the timetable, it sums up the offsets of individual time zones and the **Scheduler**'s time zone. Users can view and edit individual time zones in the appointment details form if you enable the [editing](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/editing/).[allowTimeZoneEditing](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/editing/#allowTimeZoneEditing) option.

The **timeZone**, **startDateTimeZone**, and **endDateTimeZone** options accept values from the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">IANA time zone database</a>. <a href="https://en.wikipedia.org/wiki/Daylight_saving_time" target="_blank">Daylight saving time</a> is taken into account.

[important] When setting an appointment's date and time, we recommend that you use ISO 8601 strings instead of JS Date objects. Date objects set time in the client machine's time zone. ISO 8601 strings are independent of time zones because they represent the date and time in Coordinated Universal Time (UTC).

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/TimeZonesSupport"
}
