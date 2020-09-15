---
id: dxScheduler.Options.timeZone
type: String
default: ''
---
---
##### shortDescription
Specifies the widget's time zone.

---
This option accepts values from the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">IANA time zone database</a>.

If this option is unspecified, appointments are displayed in the client's time zone.

Alternatively, you can specify the [startDateTimeZone](/api-reference/50%20Common/Object%20Structures/dxSchedulerAppointment/startDateTimeZone.md '/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#startDateTimeZone') and the [endDateTimeZone](/api-reference/50%20Common/Object%20Structures/dxSchedulerAppointment/endDateTimeZone.md '/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#endDateTimeZone') for individual appointments. Note that the **timeZone** option takes precedence over these options.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/TimeZonesSupport/"
}

#####See Also#####
- [Time Zone Support](/concepts/05%20Widgets/Scheduler/077%20Time%20Zone%20Support.md '/Documentation/Guide/Widgets/Scheduler/Time_Zone_Support/')
