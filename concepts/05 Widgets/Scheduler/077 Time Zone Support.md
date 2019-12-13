Appointments are displayed in the client time zone. The time-zone offset specified in the [startDate](/api-reference/_hidden/dxSchedulerAppointment/startDate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/dataSource/#startDate') or [endDate](/api-reference/_hidden/dxSchedulerAppointment/endDate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/dataSource/#endDate') is also taken into account (if there is any). You can force a time zone for an individual appointment via its [startDateTimeZone](/api-reference/_hidden/dxSchedulerAppointment/startDateTimeZone.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/dataSource/#startDateTimeZone') and [endDateTimeZone](/api-reference/_hidden/dxSchedulerAppointment/endDateTimeZone.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/dataSource/#endDateTimeZone') fields or for all appointments in the widget via its [timeZone](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/timeZone.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#timeZone') option. **timeZone** takes precedence over **start**/**endDateTimeZone**.

You can use the following formula to calculate an appointment's resulting time-zone offset:

    `resultingOffset` = `timeZoneOffset` - `clientOffset` (or `embeddedOffset` if there is any)

where

- `timeZoneOffset` is the offset of the **timeZone** or **start**/**endDateTimeZone**.
- `clientOffset` is the offset of the client side.
- `embeddedOffset` is the offset specified in the **start**/**endDate**.

The calculated offset is then added to the date-time value.

For example, if the **timeZone** is *"Europe/Berlin"* (UTC offset +1), and the client is in Tokyo (UTC offset +9), the calculated offset is 1 - 9 = -8. The time of all appointments is shifted back 8 hours: the appointment that started at `2019-01-01T12:00:00` starts at `2019-01-01T04:00:00`. The same applies when the time-zone offset is specified in the date-time value (`2019-01-01T12:00:00+09:00`), except that this offset is used instead of the client offset.

Add the following code to allow users to change an appointment's time zone: 

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#schedulerContainer").dxScheduler({
            // ...
            onAppointmentFormOpening: function(e) {
                e.form.itemOption("startDateTimeZone", { visible: true });
                e.form.itemOption("endDateTimeZone", { visible: true });
            }
        });
    })

#####Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ...
        (onAppointmentFormOpening)="showTimeZoneFields($event)">
    </dx-scheduler>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        showTimeZoneFields(e) {
            e.form.itemOption("startDateTimeZone", { visible: true });
            e.form.itemOption("endDateTimeZone", { visible: true });
        }
    }

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

#####Vue

    <!-- tab: App.vue -->
    <template> 
        <dx-scheduler ...
            @appointment-form-opening="showTimeZoneFields"
        />
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxScheduler from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler
        },
        data() {
            return { /* ... */ }
        },
        methods: {
            showTimeZoneFields: (e) => {
                e.form.itemOption("startDateTimeZone", { visible: true });
                e.form.itemOption("endDateTimeZone", { visible: true });
            }
        }
    }
    </script>

#####React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Scheduler from 'devextreme-react/scheduler';

    class App extends React.Component {
        render() {
            return (
                <Scheduler ...
                    onAppointmentFormOpening={this.showTimeZoneFields}
                />
            );
        }
        showTimeZoneFields(e) {
            e.form.itemOption("startDateTimeZone", { visible: true });
            e.form.itemOption("endDateTimeZone", { visible: true });
        }
    }
    export default App;

---

To allow a user to change the widget's time zone, implement a select box as shown in the [Time Zone Support](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/TimeZonesSupport) demo.
