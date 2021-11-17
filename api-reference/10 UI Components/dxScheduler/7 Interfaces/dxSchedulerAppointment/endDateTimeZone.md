---
id: dxSchedulerAppointment.endDateTimeZone
type: String
---
---
##### shortDescription
Specifies the time zone for an appointment's [endDate](/api-reference/50%20Common/Object%20Structures/dxSchedulerAppointment/endDate.md '/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#endDate'). Accepts values from the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">IANA time zone database</a>.

---

Users can view and edit the specified time zone in the appointment details form if you enable the [editing](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/').[allowTimeZoneEditing](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/editing/allowTimeZoneEditing.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowTimeZoneEditing') property.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/TimeZonesSupport/"
}

#####See Also#####
- [Time Zone Support](/concepts/05%20UI%20Components/Scheduler/077%20Time%20Zone%20Support.md '/Documentation/Guide/UI_Components/Scheduler/Time_Zone_Support/')
