---
id: dxScheduler.Options.offset
type: Number
default: 0
---
---
##### shortDescription
Specifies the minute offset applied to configured day durations in all views.

---
This property shifts the interval between [startDayHour](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/startDayHour.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#startDayHour') and [endDayHour](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/endDayHour.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#endDayHour'). The **offset** value can range from `-1440` (24 hours behind) to `1440` (24 hours ahead). 

You can implement **offset** with different **startDayHour**, **endDayHour**, and [cellDuration](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/cellDuration.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#cellDuration') combinations. The following code snippet integrates these properties to configure days from 4:40 AM (4:40) to 11:40 PM (23:40):

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

##### React

    <!-- tab: App.tsx -->
    import { Scheduler } from 'devextreme-react/scheduler';

    function App() {
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

[note]

- This property has no effect in the agenda view.
- The **offset** value must be a multiple of 5.

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/WorkShifts/"
}