---
id: dxScheduler.deleteRecurrence(appointment, date, recurrenceEditMode)
---
---
##### shortDescription
Deletes a recurring appointment occurrence.

##### param(appointmentData): dxSchedulerAppointment
The initial appointment.

##### param(date): Date | String
A date for which to delete a recurrence.

##### param(recurrenceEditMode): Enums.RecurrenceEditMode
An edit mode for recurring appointments.

---

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const appointments = [{
            text: "Website Re-Design Plan",
            startDate: new Date(2018, 4, 25, 9, 00),
            endDate: new Date(2018, 4, 25, 9, 30),
            recurrenceRule: "FREQ=DAILY;COUNT=10"
        }, 
        // ...
        ];

        const scheduler = $("#schedulerContainer").dxScheduler({
            dataSource: appointments,
            // ...
            onAppointmentClick: function(e) {
                if (condition){
                    e.component.deleteRecurrence(e.appointmentData, e.targetedAppointmentData.startDate, 'occurrence');
                }
            }
        }).dxScheduler("instance");
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ...
        [dataSource]="appointments"
        (onAppointmentClick)="deleteRecurrence($event)">
    </dx-scheduler>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";
    import { Appointment, Service } from './app.service';
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent  {
        appointments: Appointment[];

        constructor(service: Service) {
            this.appointments = service.getAppointments();
        }

        deleteAppointment(e) {
            e.component.deleteRecurrence(e.appointmentData, e.targetedAppointmentData.startDate, 'occurrence');
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

    import { DxSchedulerModule } from "devextreme-angular";

    import { Service } from './app.service';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxSchedulerModule
        ],
        providers: [
            Service
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue 

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ...
            :data-source="dataSource"
            @appointment-click="deleteRecurrence"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxScheduler from 'devextreme-vue/scheduler';
    import { appointments } from './data.js';

    export default {
        components: {
            DxScheduler
        },
        data() {
            return {
                dataSource: appointments
            };
        },
        methods: {
            deleteRecurrence(e) {
                e.component.deleteRecurrence(e.appointmentData, e.targetedAppointmentData.startDate, 'occurrence');
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

##### React

    <!-- tab: App.js -->
    import React, { useCallback } from 'react';
    import Scheduler from 'devextreme-react/scheduler';
    import { appointments } from './data.js';

    function App() {
        const deleteRecurrence = useCallback((e) => { 
            e.component.deleteRecurrence(e.appointmentData, e.targetedAppointmentData.startDate, 'occurrence');
        }, []);

        return (
            <Scheduler ...
                dataSource={appointments}
                onAppointmentClick={deleteRecurrence} 
            />
        );
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

