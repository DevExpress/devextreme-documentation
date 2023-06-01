---
id: dxScheduler.Options.resources.allowMultiple
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether you can assign several resources of this kind to an appointment.

---

The appointment form displays the [SelectBox](/api-reference/10%20UI%20Components/dxSelectBox '/Documentation/ApiReference/UI_Components/dxSelectBox/') UI component to select a single resource. If the **allowMultiple** property is set to **true**, the appointment form displays the [TagBox](/api-reference/10%20UI%20Components/dxTagBox '/Documentation/ApiReference/UI_Components/dxTagBox/') UI component to select one or more resources.

Note that you should specify resources for appointments in your data source according to the **allowMultiple** property value:
- As a scalar value (allowMultiple=false, the default value).
- As an array of scalar values (allowMultiple=true).

<!-- -->

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#scheduler").dxScheduler({
            resources: [
            {
                fieldExpr: 'roomId',
                dataSource: rooms,
                label: 'Room',
            }, {
                fieldExpr: 'assigneeId',
                allowMultiple: true,
                dataSource: assignees,
                label: 'Assignee',
            }],
            //...
        });
    });

    <!-- tab: data.js -->
    const data = [
    {
        text: 'Website Re-Design Plan',
        roomId: 1,
        assigneeId: [3, 4],
        startDate: new Date('2021-04-26T16:30:00.000Z'),
        endDate: new Date('2021-04-26T18:30:00.000Z'),
    },
    // ...
    ];

##### Angular

    <!-- tab: app.component.html -->
    <dx-scheduler ... >
        <dxi-resource
            fieldExpr="roomId"
            label="Room"
            [dataSource]="rooms" >
        </dxi-resource>
        <dxi-resource
            fieldExpr="assigneeId"
            label="Assignee"
            [dataSource]="assignees"
            [allowMultiple]="true" >
        </dxi-resource>
        <!-- ... -->
    </dx-scheduler>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        rooms: Room[];
        assignees: Assignee[];
        // ...

        constructor(service: Service) {
            this.assignees = service.getAssignees();
            this.rooms = service.getRooms();
            // ...
        }        
    }    

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxSchedulerModule } from 'devextreme-angular';
    import { Service, Assignee, Room,... } from './app.service';

    @NgModule({
        imports: [
            BrowserModule,
            DxSchedulerModule
        ],        
        declarations: [AppComponent],
        providers: [Service],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    const appointments: Appointment[] = [
    {
        text: 'Website Re-Design Plan',
        assigneeId: [3, 4],
        roomId: 1,
        startDate: new Date('2021-04-26T16:30:00.000Z'),
        endDate: new Date('2021-04-26T18:30:00.000Z'),
    },
    // ...   
    ]; 

    @Injectable()
    export class Service {
        getAssignees(): Assignee[] {
            return assignees;
        }

        getRooms(): Room[] {
            return rooms;
        }
        // ...
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler 
            :data-source="dataSource"
        >
            <DxResource
                :data-source="rooms"
                field-expr="roomId"
                label="Room"
            />
            <DxResource
                :data-source="assignees"
                field-expr="assigneeId"
                label="Assignee"
                :allow-multiple="true"
            />
            <!-- ... -->
        </DxScheduler>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';
        import 'devexpress-scheduler/dist/dx-gantt.css'; 

        import { 
            DxScheduler, 
            DxResource, 
            // ... 
        } from 'devextreme-vue/scheduler';
        import { 
            data, assignees, rooms, 
            // ... 
        } from './data.js';
        
        export default {
            components: { 
                DxScheduler, 
                DxResource, 
                // ... 
            },
            data() {
                return { 
                    dataSource: data,
                    assignees,
                    rooms, 
                    // ... 
                };
            }
        };
    </script>

    <!-- tab: data.js -->
    export const data = [{
        text: 'Website Re-Design Plan',
        assigneeId: [3, 4],
        roomId: 1,
        startDate: new Date('2021-04-26T16:30:00.000Z'),
        endDate: new Date('2021-04-26T18:30:00.000Z'),
    },
    // ...
    ];

    export const assignees = [
    {
        text: 'Samantha Bright',
        id: 1,
        color: '#727bd2',
    }, 
    // ...
    ];

    export const rooms = [
    {
        text: 'Room 1',
        id: 1,
        color: '#00af2c',
    }, 
    // ...
    ];    
	
##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';
    import 'devexpress-scheduler/dist/dx-scheduler.css'; 

    import Scheduler, { 
        Resource, 
        // ... 
    } from 'devextreme-react/scheduler';

    import { 
        data, assignees, rooms, 
        // ... 
    } from './data.js';

    const App = () => {
        return (
            <Scheduler 
                dataSource={data}
                {/* ... */}
            >
                <Resource 
                    dataSource={rooms}
                    fieldExpr="roomId"
                    label="Room"
                />
                <Resource
                    dataSource={assignees}
                    allowMultiple={true}
                    fieldExpr="assigneeId"
                    label="Assignee"
                />
            </Scheduler>
        );
    };

    export default App;
    
    <!-- tab: data.js -->
    export const data = [{
        text: 'Website Re-Design Plan',
        assigneeId: [3, 4],
        roomId: 1,
        startDate: new Date('2021-04-26T16:30:00.000Z'),
        endDate: new Date('2021-04-26T18:30:00.000Z'),
    },
    // ...
    ];

    export const assignees = [
    {
        text: 'Samantha Bright',
        id: 1,
        color: '#727bd2',
    }, 
    // ...
    ];

    export const rooms = [
    {
        text: 'Room 1',
        id: 1,
        color: '#00af2c',
    }, 
    // ...
    ];   

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Scheduler()
        .DataSource(Model.Appointments)
        .Resources(res => {
            res.Add()
                .FieldExpr("RoomId")
                .ValueExpr("Id")
                .ColorExpr("Color")
                .Label("Room")
                .DisplayExpr("Text")
                .DataSource(Model.Rooms);
            res.Add()
                .FieldExpr("AssigneeId")
                .ValueExpr("Id")
                .ColorExpr("Color")
                .Label("Assignee")
                .DisplayExpr("Text")
                .AllowMultiple(true)
                .DataSource(Model.Assignees);
        })                
        // ...
    )
    <!-- C# -->
    public partial class SampleData {
        public static readonly IEnumerable<AppointmentWithResources> AppointmentsWithResources = new[] {
            new AppointmentWithResources {
                Text = "Website Re-Design Plan",
                AssigneeId = [3, 4], RoomId = 1, 
                StartDate = "2021-04-26T16:30:00.000Z",
                EndDate = "2021-04-26T18:30:00.000Z"
            },
            // ...
        }         
        // ...
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Scheduler()
        .DataSource(Model.Appointments)
        .Resources(res => {
            res.Add()
                .FieldExpr("RoomId")
                .ValueExpr("Id")
                .ColorExpr("Color")
                .Label("Room")
                .DisplayExpr("Text")
                .DataSource(Model.Rooms);
            res.Add()
                .FieldExpr("AssigneeId")
                .ValueExpr("Id")
                .ColorExpr("Color")
                .Label("Assignee")
                .DisplayExpr("Text")
                .AllowMultiple(true)
                .DataSource(Model.Assignees);
        })                
        // ...
    )
    <!-- C# -->
    public partial class SampleData {
        public static readonly IEnumerable<AppointmentWithResources> AppointmentsWithResources = new[] {
            new AppointmentWithResources {
                Text = "Website Re-Design Plan",
                AssigneeId = [3, 4], RoomId = 1, 
                StartDate = "2021-04-26T16:30:00.000Z",
                EndDate = "2021-04-26T18:30:00.000Z"
            },
            // ...
        }         
        // ...
    }

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Resources/"
}