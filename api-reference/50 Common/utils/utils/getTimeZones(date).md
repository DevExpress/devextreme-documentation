---
id: utils.getTimeZones(date)
module: common/core/environment
export: getTimeZones
---
---
##### shortDescription
Gets the list of <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">IANA</a> time zone objects.

##### return: Array<SchedulerTimeZone>
A list of IANA time zone objects.

##### param(date): Date | undefined
A date for which to get time zone objects. If not passed, the current date is used.

---
This method can accept a specific date to get the list of time zone objects for that date. This is useful because these objects can be removed or added, and time zone offsets can change, for example, due to daylight savings.

The following code illustrates how to use this method:

---
##### jQuery

    <!-- tab: index.js -->
    const timeZones = DevExpress.utils.getTimeZones(new Date(2020, 6, 21));
    // ===== or when using modules =====
    import { getTimeZones } from 'devextreme/time_zone_utils';
    const timeZones = getTimeZones(new Date(2020, 6, 21));
    // The timeZones constant contains the following array:
    // [
    //      { offset: 2, title: "(GMT +02:00) Europe/Berlin", id: "Europe/Berlin" },
    //      { offset: 2, title: "(GMT +02:00) Europe/Amsterdam", id: "Europe/Amsterdam" }
    //      ...
    // ]

##### Angular

    <!-- tab: app.component.ts -->
    import { getTimeZones } from 'devextreme/time_zone_utils';
    const timeZones = getTimeZones(new Date(2020, 6, 21));
    // The timeZones constant contains the following array:
    // [
    //      { offset: 2, title: "(GMT +02:00) Europe/Berlin", id: "Europe/Berlin" },
    //      { offset: 2, title: "(GMT +02:00) Europe/Amsterdam", id: "Europe/Amsterdam" }
    //      ...
    // ]

##### Vue

    <!-- tab: App.vue -->
    import { getTimeZones } from 'devextreme/time_zone_utils';
    const timeZones = getTimeZones(new Date(2020, 6, 21));
    // The timeZones constant contains the following array:
    // [
    //      { offset: 2, title: "(GMT +02:00) Europe/Berlin", id: "Europe/Berlin" },
    //      { offset: 2, title: "(GMT +02:00) Europe/Amsterdam", id: "Europe/Amsterdam" }
    //      ...
    // ]

##### React

    <!-- tab: App.js -->
    import { getTimeZones } from 'devextreme/time_zone_utils';
    const timeZones = getTimeZones(new Date(2020, 6, 21));
    // The timeZones constant contains the following array:
    // [
    //      { offset: 2, title: "(GMT +02:00) Europe/Berlin", id: "Europe/Berlin" },
    //      { offset: 2, title: "(GMT +02:00) Europe/Amsterdam", id: "Europe/Amsterdam" }
    //      ...
    // ]

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/TimeZonesSupport"
}
