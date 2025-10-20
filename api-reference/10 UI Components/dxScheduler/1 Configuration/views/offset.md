---
id: dxScheduler.Options.views.offset
type: Number
default: 0
---
---
##### shortDescription
Specifies the minute offset applied to configured day durations in the view.

---
This property shifts the interval between [startDayHour](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/startDayHour.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#startDayHour') and [endDayHour](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/endDayHour.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#endDayHour'). The **offset** value can be between `-1440` (24 hours back) and `1440` (24 hours forward).

You can implement **offset** along with different **startDayHour**, **endDayHour**, and [cellDuration](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/views/cellDuration.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#cellDuration') combinations to customize the view. The following code snippet integrates these properties to configure days from 4:40 AM to 11:40 AM and a 40-minute cell duration:

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

##### React

    <!-- tab: App.tsx -->
    import { Scheduler } from 'devextreme-react/scheduler';
    
    function App() {
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

[note]

- This property has no effect in the agenda view.
- The **offset** value must be a multiple of 5.

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/WorkShifts/"
}