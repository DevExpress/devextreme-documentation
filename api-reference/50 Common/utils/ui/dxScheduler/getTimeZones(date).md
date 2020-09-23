---
id: ui.dxScheduler.getTimeZones(date)
module: ui/scheduler
export: dxScheduler.getTimeZones
---
---
##### shortDescription
Gets the list of time zones.

##### param(date): Date | undefined
A date for which to get time zones. If undefined, the current date is used.

##### return: Array<Object>
A list of time zones.

---

Each time zone is an object with the following fields:

* **id**: String
A time zone text string from the IANA database.

* **offset**: Number
A GMT offset.

* **title**: String
A formatted time zone representation. Includes the **id** and **offset** values.

`getTimeZones` accepts a past date to get a list of time zones valid at a particular moment. This is because time zones change due to daylight savings or other reasons.

The following example illustrates how to use the method:

    const timeZones = DevExpress.ui.dxScheduler.getTimeZones(new Date(2020, 6, 21));
    // ===== or when using modules =====
    import dxScheduler, { getTimeZones } from 'ui/scheduler/ui.scheduler';
    const timeZones = dxScheduler.getTimeZones(new Date(2020, 6, 21));
    // The timeZones array has the summer-time offsets:
    // [
    //      { offset: 2, title: "(GMT +02:00) Europe/Berlin", id: "Europe/Berlin" },
    //      { offset: 2, title: "(GMT +02:00) Europe/Amsterdam", id: "Europe/Amsterdam" }
    //      ...
    // ]
