---
id: utils.getTimeZones(date, timeZones)
module: common/core/environment
export: getTimeZones
---
---
##### shortDescription
Gets a list of time zone objects from the <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">IANA time zone database</a>.

##### return: Array<SchedulerTimeZone>
A list of IANA time zone objects.

##### param(date): Date | undefined
A date for which to get time zone objects. Leave undefined to use the current date.

##### param(timeZones): Array<String> | undefined
A list of time zones to get time zone objects. Use an array of TZ identifiers from the IANA time zone database. If not passed, the method returns all available IANA time zone objects.

---
The **getTimeZones** method returns time zone data that is accurate for a specific date. Implement the method to get historical daylight savings data.

If you do not pass the **timeZones** parameter, the method returns the entire list of IANA time zone objects, which includes almost 600 time zones. To get a list of specific time zones, pass a string array to the **timeZones** property with TZ identifiers. For example, `["America/Los_Angeles"]` returns data for the Los Angeles time zone.

The following code illustrates how to use this method:

---
##### jQuery

    <!-- tab: index.js -->
    const timeZonesToday = DevExpress.utils.getTimeZones();
    // An array of all 593 time zones on the IANA time zone database
    const timeZonesSpecific = DevExpress.utils.getTimeZones(new Date(2025, 1, 1), ["America/Los_Angeles"]);
    // [ {id: 'America/Los_Angeles', title: '(GMT -08:00) America - Los Angeles', offset: -8} ]
    // ===== or when using modules =====
    import { getTimeZones } from "devextreme/common/core/environment";
    const timeZonesToday = getTimeZones();
    const timeZonesSpecific = getTimeZones(new Date(2025, 1, 1), ["America/Los_Angeles"]);

##### Angular

    <!-- tab: app.component.ts -->
    import { getTimeZones } from "devextreme-angular/common/core/environment";
    const timeZonesToday = getTimeZones();
    // An array of all 593 time zones on the IANA time zone database
    const timeZonesSpecific = getTimeZones(new Date(2025, 1, 1), ["America/Los_Angeles"]);
    // [ {id: 'America/Los_Angeles', title: '(GMT -08:00) America - Los Angeles', offset: -8} ]

##### Vue

    <!-- tab: App.vue -->
    import { getTimeZones } from "devextreme-vue/common/core/environment";
    const timeZonesToday = getTimeZones();
    // An array of all 593 time zones on the IANA time zone database
    const timeZonesSpecific = getTimeZones(new Date(2025, 1, 1), ["America/Los_Angeles"]);
    // [ {id: 'America/Los_Angeles', title: '(GMT -08:00) America - Los Angeles', offset: -8} ]

##### React

    <!-- tab: App.js -->
    import { getTimeZones } from "devextreme-react/common/core/environment";
    const timeZonesToday = getTimeZones();
    // An array of all 593 time zones on the IANA time zone database
    const timeZonesSpecific = getTimeZones(new Date(2025, 1, 1), ["America/Los_Angeles"]);
    // [ {id: 'America/Los_Angeles', title: '(GMT -08:00) America - Los Angeles', offset: -8} ]

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/TimeZonesSupport/"
}
