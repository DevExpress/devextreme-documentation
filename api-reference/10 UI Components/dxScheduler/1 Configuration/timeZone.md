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
 
You can also specify the [startDateTimeZone](/api-reference/10%20UI%20Components/dxScheduler/7%20Interfaces/dxSchedulerAppointment/startDateTimeZone.md '/Documentation/ApiReference/UI_Components/dxScheduler/Interfaces/dxSchedulerAppointment/#startDateTimeZone') and [endDateTimeZone](/api-reference/10%20UI%20Components/dxScheduler/7%20Interfaces/dxSchedulerAppointment/endDateTimeZone.md '/Documentation/ApiReference/UI_Components/dxScheduler/Interfaces/dxSchedulerAppointment/#endDateTimeZone') properties for individual appointments.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/TimeZonesSupport/"
}

#####See Also#####
- [Time Zone Support](/concepts/05%20UI%20Components/Scheduler/077%20Time%20Zone%20Support.md '/Documentation/Guide/UI_Components/Scheduler/Time_Zone_Support/')
