The **agenda** view lists all available appointments grouped by date. This view provides a compact representation of appointments, which is useful when displaying on narrow screens. If an appointment lasts for several days, it is displayed for every day it belongs to. If an appointment lasts all day, it is placed above other appointments of that day.

![Agenda View](/images/UiWidgets/Scheduler_Agenda_View.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Agenda/"
}

By default, the **agenda** view displays appointments for seven dates at a time from the [currentDate](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/currentDate.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#currentDate') onward. To change the number of dates, specify the [agendaDuration](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views/agendaDuration.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#agendaDuration') option. For details on individual views customization, see [this topic](/concepts/05%20Widgets/Scheduler/060%20Views/020%20Customize%20Individual%20Views.md '/Documentation/Guide/UI_Components/Scheduler/Views/Customize_Individual_Views/').

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#schedulerContainer").dxScheduler({
            // ...
            views: [{
                type: "agenda",
                agendaDuration: 5
            }]
        });
    });

#####Angular

    <!--HTML-->
    <dx-scheduler ...
        currentView="agenda">
        <dxi-view
            type="agenda"
            [agendaDuration]="5">
        </dxi-view>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler current-view="agenda">
            <DxView
                type="agenda"
                :agenda-duration="5" />
        </DxScheduler>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxScheduler, DxView } from 'devextreme-vue/scheduler';

    export default {
        components: {
            // ...
            DxScheduler,
            DxView
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Scheduler, View } from 'devextreme-react/scheduler';

    class App extends React.Component {
        render() {
            return (
                <Scheduler currentView="agenda">
                    <View
                        type="agenda"
                        agendaDuration={5} />
                </Scheduler>
            );
        }
    }
    export default App;

---

If you [group appointmetns by resources](/concepts/05%20Widgets/Scheduler/040%20Resources/030%20Group%20Appointments%20by%20Resources.md '/Documentation/Guide/UI_Components/Scheduler/Resources/Group_Appointments_by_Resources/'), the resource headers are located at the left side of the date scale.

![Resource Headers](/images/UiWidgets/Scheduler_Agenda_Resouce_Headers.png)

[note]The **agenda** view does not allow a user to add appointments or modify them by dragging.

#####See Also#####
- [Scheduler - Customize Individual Views](/concepts/05%20Widgets/Scheduler/060%20Views/020%20Customize%20Individual%20Views.md '/Documentation/Guide/UI_Components/Scheduler/Views/Customize_Individual_Views/')
- [Scheduler - Appointments](/concepts/05%20Widgets/Scheduler/030%20Appointments '/Documentation/Guide/UI_Components/Scheduler/Appointments/')
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Components/dxScheduler/')
