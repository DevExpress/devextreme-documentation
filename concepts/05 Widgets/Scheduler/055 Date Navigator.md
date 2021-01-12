The date navigator is an element that allows you to change the date displayed on the view.

![Scheduler Date Navigator](/images/UiWidgets/Scheduler_Date_Navigator.png)

You can specify the range of available dates in the [min](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/min.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#min') and [max](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#max') properties:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#schedulerContainer").dxScheduler({
            // ...
            min: new Date(2018, 2, 3),
            max: new Date(2018, 4, 3)
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ...
        [min]="minDate"
        [max]="maxDate">
    </dx-scheduler>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        minDate: Date = new Date(2018, 2, 3);
        maxDate: Date = new Date(2018, 4, 3);
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
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler
            :min="min"
            :max="max"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxScheduler } from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler
        },
        data() {
            return {
                min: new Date(2018, 2, 3),
                max: new Date(2018, 4, 3)
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Scheduler from 'devextreme-react/scheduler';
    
    const min = new Date(2018, 2, 3);

    const max = new Date(2018, 4, 3);

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    min={min}
                    max={max}
                />
            );
        }
    }
    export default App;

---

Use the [customizeDateNavigatorText](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/customizeDateNavigatorText.md 'Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#customizeDateNavigatorText') function to customize the navigator's text. Refer to the function's description for an example.
