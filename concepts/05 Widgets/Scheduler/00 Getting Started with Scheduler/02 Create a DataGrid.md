---
##### jQuery

[Add DevExtreme to your jQuery application](/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/) and use the following code to create a **Scheduler**:

    <!-- tab: index.js --> 
    $(function() { 
        $("#scheduler").dx{WidgetName}({ 
            height: 600,
            startDayHour: 10,
            currentDate: new Date(2021, 4, 25),
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/20.2.3/css/dx.common.css" />
            <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/20.2.3/css/dx.light.css" />
            <script src="https://cdn3.devexpress.com/jslib/20.2.3/js/dx.all.js"></script>
            <script src="index.js"></script>
        </head>
        <body>
            <div id="scheduler"></div>
        </body>
    </html>

##### Angular 

[Add DevExtreme to your Angular application](/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/) and use the following code to create a **Scheduler**:

    <!-- tab: app.component.html --> 
    <dx-scheduler
        [height]="600"
        [startDayHour]="10"  
        [currentDate]="currentDate">
    </dx-scheduler> 

    <!-- tab: app.component.ts --> 
    import { Component } from '@angular/core'; 

    @Component({ 
        selector: 'app-root', 
        templateUrl: './app.component.html', 
        styleUrls: ['./app.component.css'] 
    }) 
    export class AppComponent { 
        currentDate: Date = new Date(2021, 4, 25);
    } 

    <!-- tab: app.module.ts --> 
    import { BrowserModule } from '@angular/platform-browser'; 
    import { NgModule } from '@angular/core'; 
    import { AppComponent } from './app.component'; 
    import { Dx{WidgetName}Module } from 'devextreme-angular'; 

    @NgModule({ 
        declarations: [ 
            AppComponent 
        ], 
        imports: [ 
            BrowserModule, 
            DxSchedulerModule
        ], 
        providers: [ ], 
        bootstrap: [AppComponent] 
    }) 
    export class AppModule { } 

##### Vue 

[Add DevExtreme to your Vue application](/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/) and use the following code to create a **Scheduler**:

    <!-- tab: App.vue --> 
    <template> 
        <DxScheduler
            :height="600"
            :start-day-hour="10"
            :current-date="currentDate">
        </DxScheduler>
    </template> 

    <script> 
    import 'devextreme/dist/css/dx.common.css'; 
    import 'devextreme/dist/css/dx.light.css'; 

    import DxScheduler from 'devextreme-vue/scheduler'; 

    export default { 
        components: {
            DxScheduler,
        },
        data() {
            return {
                currentDate: new Date(2021, 4, 25),
            };
        }
    } 
    </script> 

##### React 

[Add DevExtreme to your React application](/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/) and use the following code to create a **Scheduler**:

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        Scheduler
    } from 'devextreme-react/scheduler';

    function App() {
        return (
            <div className="App">
                <Scheduler id="scheduler"
                    height={600}
                    startDayHour={10}
                    defaultCurrentDate={currentDate}>
                </Scheduler>
            </div>
        );
    }

---