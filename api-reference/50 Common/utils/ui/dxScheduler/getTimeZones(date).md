---
id: ui.dxScheduler.getTimeZones(date)
module: ui/scheduler
export: dxScheduler.getTimeZones
---
---
##### shortDescription
Gets the list of time zone objects.

##### param(date): Date | undefined
Date to return time zone objects for. If no value is specified, current date is used.
You may want to pass a past date because the returned IANA time zones may be different from those of the current date.

##### return: Array<Object>
List of time zone objects.

Time zone object has the following fields:

* **id**: String
Time zone value from the IANA database.

* **offset**: Number
GMT Offset.

* **title**: String
Value that consists of the GMT offset and the IANA database value - as shown in the appointment's date editor.

---

The following example illustrates how to use this function:

    const timeZones = DevExpress.ui.dxScheduler.getTimeZones(new Date(2015, 4, 25));
    // ===== or when using modules =====
    import dxScheduler, { getTimeZones } from 'ui/scheduler/ui.scheduler';
    const timeZones = dxScheduler.getTimeZones(new Date(2015, 4, 25));

The `timeZones` variable is an array that consists of objects like `{offset: 2, title: "(GMT +02:00) Europe/Berlin", id: "Europe/Berlin"}`.
