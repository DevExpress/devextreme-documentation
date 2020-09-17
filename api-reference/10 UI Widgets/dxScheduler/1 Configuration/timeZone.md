---
id: dxScheduler.Options.timeZone
type: String
default: ''
---
---
##### shortDescription
Specifies the time zone for the Scheduler's grid. Accepts values from the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">IANA time zone database</a>.

---
If no time zone is specified, the grid displays appointments in the client's time zone.
 
You can also specify the [startDateTimeZone](/api-reference/50%20Common/Object%20Structures/dxSchedulerAppointment/startDateTimeZone.md '/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#startDateTimeZone') and [endDateTimeZone](/api-reference/50%20Common/Object%20Structures/dxSchedulerAppointment/endDateTimeZone.md '/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#endDateTimeZone') options for individual appointments.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/TimeZonesSupport/"
}

#####See Also#####
- [Time Zone Support](/concepts/05%20Widgets/Scheduler/077%20Time%20Zone%20Support.md '/Documentation/Guide/Widgets/Scheduler/Time_Zone_Support/')
