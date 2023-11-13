---
id: dxScheduler.Options.views.offset
type: Number
default: 0
---
---
##### shortDescription
Specifies the minute offset within the view, indicating the starting point of a day.

---
The offset is a multiple of 5 and can range from -1440 minutes (-24 hours) to 1440 minutes (24 hours). For instance, if you set the offset to 240, the day starts at 04:00 AM instead of 00:00.

You can combine this property with [startDayHour](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#startDayHour), [endDayHour](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#endDayHour), and [cellDuration](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#cellDuration). For example, the following code uses all these properties, and as a result, the day starts at 4:40 AM and ends at 12:00 PM.

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $('#scheduler').dxScheduler({
            // ...
            views: [
                {
                    type: 'workWeek',
                    offset: -20,
                    startDayHour: 5,
                    endDayHour: 12,
                    cellDuration: 40,
                }
            ]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ... >
        <dxi-view ...
            type="workWeek"
            [offset]="-20"
            [startDayHour]="5"
            [endDayHour]="12"
            [cellDuration]="40"
        >
        </dxi-view>
    </dx-scheduler>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ... >
            <DxView
                type="workWeek"
                offset="-20"
                start-day-hour="5"
                end-day-hour="12"
                cell-duration="40" 
            />
        </DxScheduler>
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    export default function App() {
        return (
            <Scheduler ... >
                <View
                    type="workWeek"
                    offset="-20"
                    startDayHour="5"
                    endDayHour="12"
                    cellDuration="40"
                />
            </Scheduler>
        )
    }

---

[note] This property has no effect in the agenda view.