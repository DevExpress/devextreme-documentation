---
id: dxScheduler.Options.offset
type: Number
default: 0
---
---
##### shortDescription
Specifies the minute offset within Scheduler, indicating the starting point of a day. 

---
The offset is a multiple of 5 and can range from -1440 to 1440. For instance, if you set the offset to 240, the day starts at 04:00 AM instead of 00:00.

You can combine this property with [startDayHour](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#startDayHour), [endDayHour](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#endDayHour), and [cellDuration](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#cellDuration). For example, the following code uses all these properties, and as a result the day starts at 4:40 and ends at 12:00.

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
        offset="-20"
        startDayHour="5"
        endDayHour="12"
        cellDuration="40"
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

[note] This property has no effect in the agenda view.