---
id: dxScheduler.Options.allDayPanelMode
type: Enums.AllDayPanelMode
default: 'all'
---
---
##### shortDescription
Specifies the display mode for the **All day** panel.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/AllDayPanelMode/"
}

![allDayPanelMode set to 'all'](/images/Scheduler/scheduler-all-day-panel-mode.png)

To hide the **All day** panel, set this property to `hidden`. 

If you set the `allDayPanelMode` property to `allDay`, the **All day** panel displays only the appointments whose [allDay](/Documentation/ApiReference/UI_Components/dxScheduler/Interfaces/dxSchedulerAppointment/#allDay) property is set to `true`.

To also display appointments that have a duration equal to or more than 24 hours, assign `all` to this property.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#schedulerContainer").dxScheduler({
            // ...
            allDayPanelMode: 'all',
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ... 
        allDayPanelMode="all">
    </dx-scheduler>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxSchedulerModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxSchedulerModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ...
            all-day-panel-mode="all">
        </DxScheduler>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxScheduler } from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler
        },
        data() {
            return {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { Scheduler } from 'devextreme-react/scheduler';

    class App extends React.Component {
        render() {
            return (
                <Scheduler ...
                    allDayPanelMode="all"
                />
            );
        }
    }

    export default App;

---