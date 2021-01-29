Appointments are displayed in the client time zone. The time-zone offset specified in the [startDate](/api-reference/50%20Common/Object%20Structures/dxSchedulerAppointment/startDate.md '/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#startDate') or [endDate](/api-reference/50%20Common/Object%20Structures/dxSchedulerAppointment/endDate.md '/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#endDate') is also taken into account (if there is any). You can force a time zone for an individual appointment via its [startDateTimeZone](/api-reference/50%20Common/Object%20Structures/dxSchedulerAppointment/startDateTimeZone.md '/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#startDateTimeZone') and [endDateTimeZone](/api-reference/50%20Common/Object%20Structures/dxSchedulerAppointment/endDateTimeZone.md '/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#endDateTimeZone') fields or for all appointments via its [timeZone](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/timeZone.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#timeZone') property. **timeZone** takes precedence over **start**/**endDateTimeZone**.

You can use the following formula to calculate an appointment's resulting time-zone offset:

    `resultingOffset` = `timeZoneOffset` - `clientOffset` (or `embeddedOffset` if there is any)

where

- `timeZoneOffset` is the offset of the **timeZone** or **start**/**endDateTimeZone**.
- `clientOffset` is the offset of the client side.
- `embeddedOffset` is the offset specified in the **start**/**endDate**.

The calculated offset is then added to the date-time value.

For example, if the **timeZone** is *"Europe/Berlin"* (UTC offset +1), and the client is in Tokyo (UTC offset +9), the calculated offset is 1 - 9 = -8. The time of all appointments is shifted back 8 hours: the appointment that started at `2019-01-01T12:00:00` starts at `2019-01-01T04:00:00`. The same applies when the time-zone offset is specified in the date-time value (`2019-01-01T12:00:00+09:00`), except that this offset is used instead of the client offset.

To allow users to change appointment time zones, enable the **editing**.[allowTimeZoneEditing](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/editing/allowTimeZoneEditing.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowTimeZoneEditing') property.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/TimeZonesSupport"
}
