---
id: utils.getTimeZones(date)
module: utils
export: getTimeZones
---
---
##### shortDescription
Gets the list of IANA time zones.

##### return: Array<dxSchedulerTimeZone>
A list of time zone objects.

##### param(date): Date | undefined
A date for which to get time zones. If undefined, the current date is used.

---
An example of a time zone object:

    { offset: 2, title: "(GMT +02:00) Europe/Berlin", id: "Europe/Berlin" }

The following code illustrates how to use this method:

    const timeZones = DevExpress.utils.getTimeZones(new Date(2020, 6, 21));
    // ===== or when using modules =====
    import timeZoneUtils from 'devextreme/time_zone_utils';
    const timeZones = timeZoneUtils.getTimeZones(new Date(2020, 6, 21));
