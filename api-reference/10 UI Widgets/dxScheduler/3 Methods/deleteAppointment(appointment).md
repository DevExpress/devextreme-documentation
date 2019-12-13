---
id: dxScheduler.deleteAppointment(appointment)
---
---
##### shortDescription
Deletes an appointment from the timetable and its object from the data source.

##### param(appointment): Object
An appointment object from the [dataSource](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dataSource '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/dataSource/').

---
If you delete a recurring appointment from the data source, all its occurrences are also deleted from the timetable:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var appointments = [{
            text: "Website Re-Design Plan",
            startDate: new Date(2018, 4, 25, 9, 00),
            endDate: new Date(2018, 4, 25, 9, 30),
            recurrenceRule: "FREQ=DAILY;COUNT=10"
        }, 
        // ...
        ];

        var scheduler = $("#schedulerContainer").dxScheduler({
            dataSource: appointments,
            currentDate: new Date(2018, 4, 25)
        }).dxScheduler("instance");

        $("#deleteButton").dxButton({
            text: "Delete",
            onClick: function () {
                scheduler.deleteAppointment(appointments[0]);
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-button
        text="Delete"
        (onClick)="deleteAppointment()">
    </dx-button>
    <dx-scheduler
        [(dataSource)]="appointments"
        [currentDate]="currentDate">
    </dx-scheduler>

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from "@angular/core";
    import { Appointment, Service } from './app.service';
    import { DxSchedulerComponent } from "devextreme-angular";
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent  {
        @ViewChild(DxSchedulerComponent, { static: false }) scheduler: DxSchedulerComponent;
        // Prior to Angular 8
        // @ViewChild(DxSchedulerComponent) scheduler: DxSchedulerComponent;
        currentDate: Date = new Date(2018, 4, 25);
        appointments: Appointment[];

        constructor(service: Service) {
            this.appointments = service.getAppointments();
        }

        deleteAppointment() {
            this.scheduler.instance.deleteAppointment(this.appointments[0]);
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from "@angular/core";

    export class Appointment {
        text: string;
        startDate: Date;
        endDate: Date;
        recurrenceRule?: string;
    }

    let appointments: Appointment[] = [{
        text: "Website Re-Design Plan",
        startDate: new Date(2018, 4, 25, 9, 0),
        endDate: new Date(2018, 4, 25, 9, 30),
        recurrenceRule: "FREQ=DAILY;COUNT=10"
    }, 
    // ...
    ];

    @Injectable()
    export class Service {
        getAppointments(): Appointment[] {
            return appointments;
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { 
        DxButtonModule, 
        DxSchedulerModule
    } from "devextreme-angular";

    import { Service } from './app.service';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxButtonModule,
            DxSchedulerModule
        ],
        providers: [
            Service
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

#####Vue 

    <!-- tab: App.vue -->
    <template>
        <div>
            <dx-button 
                text="Delete" 
                @click="deleteAppointment" />
            <dx-scheduler :ref="schedulerRef"
                :data-source="dataSource"
                :current-date="currentDate" />
        </div>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxScheduler from 'devextreme-vue/scheduler';
    import DxButton from 'devextreme-vue/button';
    import { appointments } from './data.js';

    const schedulerRef = "scheduler";

    export default {
        components: {
            DxScheduler,
            DxButton
        },
        data() {
            return {
                schedulerRef,
                currentDate: new Date(2018, 4, 25),
                dataSource: appointments
            };
        },
        methods: {
            deleteAppointment() {
                this.scheduler.deleteAppointment(appointments[0]);
            } 
        },
        computed: {
            scheduler: function() {
                return this.$refs[schedulerRef].instance;
            }
        }
    };
    </script>

    <!--tab: data.js-->
    export const appointments = [{
        text: "Website Re-Design Plan",
        startDate: new Date(2018, 4, 25, 9, 0),
        endDate: new Date(2018, 4, 25, 9, 30),
        recurrenceRule: "FREQ=DAILY;COUNT=10"
    }, 
    // ...
    ];

#####React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import Scheduler from 'devextreme-react/scheduler';
    import Button from 'devextreme-react/button';
    import { appointments } from './data.js';

    const currentDate = new Date(2018, 4, 25);

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.schedulerRef = React.createRef();

            this.deleteAppointment = () => {
                this.scheduler.deleteAppointment(appointments[0]);
            }
        }

        get scheduler() {
            return this.schedulerRef.current.instance;
        }

        render() {
            return (
                <div>
                    <Button text="Delete" onClick={this.deleteAppointment} />
                    <Scheduler ref={this.schedulerRef}
                        dataSource={appointments}
                        defaultCurrentDate={currentDate} />
                </div>
            );
        }
    }
    export default App;

    <!--tab: data.js-->
    export const appointments = [{
        text: "Website Re-Design Plan",
        startDate: new Date(2018, 4, 25, 9, 0),
        endDate: new Date(2018, 4, 25, 9, 30),
        recurrenceRule: "FREQ=DAILY;COUNT=10"
    }, 
    // ...
    ];

---


#####See Also#####
#include common-link-callmethods
- [onAppointmentDeleting](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentDeleting.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentDeleting')
- [onAppointmentDeleted](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentDeleted.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentDeleted')