---
id: utils.getTimeZones(date)
module: time_zone_utils
export: getTimeZones
---
---
##### shortDescription
Gets the list of <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">IANA</a> time zone objects.

##### return: Array<dxSchedulerTimeZone>
A list of IANA time zone objects.

##### param(date): Date | undefined
A date for which to get time zone objects. If not passed, the current date is used.

---
This method can accept a specific date to get the list of time zone objects for that date. This is useful because these objects can be removed or added, and time zone offsets can change, for example, due to daylight savings.

The following code illustrates how to use this method:

    const timeZones = DevExpress.utils.getTimeZones(new Date(2020, 6, 21));
    // ===== or when using modules =====
    import timeZoneUtils from 'devextreme/time_zone_utils';
    const timeZones = timeZoneUtils.getTimeZones(new Date(2020, 6, 21));
    // The timeZones constant contains the following array:
    // [
    //      { offset: 2, title: "(GMT +02:00) Europe/Berlin", id: "Europe/Berlin" },
    //      { offset: 2, title: "(GMT +02:00) Europe/Amsterdam", id: "Europe/Amsterdam" }
    //      ...
    // ]

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/TimeZonesSupport"
}
