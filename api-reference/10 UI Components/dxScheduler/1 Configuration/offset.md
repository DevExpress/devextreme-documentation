---
id: dxScheduler.Options.offset
type: Number
default: 0
---
---
##### shortDescription
Specifies the minute offset within Scheduler, indicating the starting point of a day.

---
The offset is a multiple of 5 and can range from -1440 minutes (-24 hours) to 1440 minutes (24 hours). For instance, if you set the offset to 240, the day starts at 04:00 AM instead of 00:00.

You can combine this property with [startDayHour](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/startDayHour.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#startDayHour'), [endDayHour](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/endDayHour.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#endDayHour'), and [cellDuration](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/cellDuration.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#cellDuration'). For example, the following code snippet uses all these properties, and as a result, the day starts at 4:40 AM and ends at 12:00 PM.

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $('#scheduler').dxScheduler({
            // ...
            offset: -20,
            startDayHour: 5,
            endDayHour: 12,
            cellDuration: 40,
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ...
        [offset]="-20"
        [startDayHour]="5"
        [endDayHour]="12"
        [cellDuration]="40"
    >
    </dx-scheduler>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ...
            offset="-20"
            start-day-hour="5"
            end-day-hour="12"
            cell-duration="40"
        />
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    export default function App() {
        return (
            <Scheduler ...
                offset="-20"
                startDayHour="5"
                endDayHour="12"
                cellDuration="40"
            />
        )
    }

---

[note] This property has no effect on the agenda view.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/WorkShifts/"
}