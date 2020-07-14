The **Scheduler** widget allows you to assign appointments to a set of predefined resources. Consider the following example: in an educational center lectures are held in two rooms. In scheduling terms, a lecture is an appointment, a room is a resource instance, and all rooms are considered the resource kind.

To define resource kinds, assign an array of objects specifying them to the [resources](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/') option. Each object must have at least the following fields.

- [dataSource](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#dataSource')
    All available resource instances (for example, room101, room102). For information on different techniques that you can use to provide data for resources, see the [Data Binding](/concepts/05%20Widgets/Scheduler/020%20Data%20Binding '/Documentation/Guide/Widgets/Scheduler/Data_Binding/') topic.
- [fieldExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/fieldExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#fieldExpr')
    The data field that binds an appointment to a resource instance.

<!---->

---

##### jQuery

    <!--JavaScript-->
    var rooms = [
        // Resource instances
        {
            id: 1,              // Resource identifier
            text: "Room101",    // Resource name
            color: "red"        // Color for indicating appointments that use this resource
        },
        { id: 2, text: "Room102", color: "green" },
        // ...
    ];
    var teachers = [
        // Resource instances
        { guid: "6F96", name: "John Heart", clr: "yellow" },
        { guid: "3F32", name: "Sandra Johnson", clr: "blue" },
        // ...
    ];

    $(function() {
        $("#schedulerContainer").dxScheduler({
            // ...
            resources: [
                // Definition of the first resource kind
                {
                    dataSource: new DevExpress.data.DataSource({
                        store: {
                            type: "array",
                            data: rooms
                        },
                        paginate: false
                    }),
                    fieldExpr: "roomId",        // "roomId" is the data field in an appointment object that binds it to the resource
                    label: "Room"               // Label displayed for this resource kind in the appointment details form
                },
                // Definition of the second resource kind
                {
                    dataSource: new DevExpress.data.DataSource({
                        store: {
                            type: "array",
                            data: teachers
                        },
                        paginate: false
                    }),
                    fieldExpr: "teacherId",
                    valueExpr: "guid",          // Resource instance's field used instead of "id"
                    colorExpr: "clr",           // Resource instance's field used instead of "color"
                    displayExpr: "name",        // Resource instance's field used instead of "text"
                    label: "Teacher"
                }
            ]
        });
    });


##### Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent  {
        // ...
        rooms = new DataSource({
            store: {
                type: "array",
                data: [
                    // Resource instances
                    {
                        id: 1,              // Resource identifier
                        text: "Room101",    // Resource name
                        color: "red"        // Color for indicating appointments that use this resource
                    },
                    { id: 2, text: "Room102", color: "green" },
                    // ...
                ]
            },
            paginate: false
        });

        teachers = new DataSource({
            store: {
                type: "array",
                data: [
                    // Resource instances
                    { guid: "6F96", name: "John Heart", clr: "yellow" },
                    { guid: "3F32", name: "Sandra Johnson", clr: "blue" },
                    // ...
                ]
            },
            paginate: false
        });
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-scheduler ... >
        <!-- Definition of the first resource kind -->
        <dxi-resource
            fieldExpr="roomId"      <!-- "roomId" is the data field in an appointment object that binds it to the resource -->
            label="Room"            <!-- Label displayed for this resource kind in the appointment details form -->
            [dataSource]="rooms">
        </dxi-resource>

        <!-- Definition of the second resource kind -->
        <dxi-resource
            fieldExpr="teacherId"
            valueExpr="guid"            <!-- Resource instance's field used instead of "id" -->
            colorExpr="clr"             <!-- Resource instance's field used instead of "color" -->
            displayExpr="name"          <!-- Resource instance's field used instead of "text" -->
            label="Teacher"
            [dataSource]="teachers">
        </dxi-resource>
    </dx-scheduler>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ... >
            <!-- Definition of the first resource kind -->
            <DxResource
                field-expr="roomId"      <!-- "roomId" is the data field in an appointment object that binds it to the resource -->
                label="Room"             <!-- Label displayed for this resource kind in the appointment details form -->
                :data-source="rooms" />

            <!-- Definition of the second resource kind -->
            <DxResource
                field-expr="teacherId"
                value-expr="guid"            <!-- Resource instance's field used instead of "id" -->
                color-expr="clr"             <!-- Resource instance's field used instead of "color" -->
                display-expr="name"          <!-- Resource instance's field used instead of "text" -->
                label="Teacher"
                :data-source="teachers" />
        </DxScheduler>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataSource from 'devextreme/data/data_source';
    import { DxScheduler, DxResource } from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler,
            DxResource
        },
        data() {
            return {
                // ...
                rooms: new DataSource({
                    store: {
                        type: "array",
                        data: [
                            // Resource instances
                            {
                                id: 1,              // Resource identifier
                                text: "Room101",    // Resource name
                                color: "red"        // Color for indicating appointments that use this resource
                            },
                            { id: 2, text: "Room102", color: "green" },
                            // ...
                        ]
                    },
                    paginate: false
                }),
                teachers: new DataSource({
                    store: {
                        type: "array",
                        data: [
                            // Resource instances
                            { guid: "6F96", name: "John Heart", clr: "yellow" },
                            { guid: "3F32", name: "Sandra Johnson", clr: "blue" },
                            // ...
                        ]
                    },
                    paginate: false
                })
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataSource from 'devextreme/data/data_source';
    import { Scheduler, Resource } from 'devextreme-react/scheduler';

    const rooms = new DataSource({
        store: {
            type: 'array',
            data: [
                {/* Resource instances */}
                {
                    id: 1,              {/* Resource identifier */}
                    text: 'Room101',    {/* Resource name */}
                    color: 'red'        {/* Color for indicating appointments that use this resource */}
                },
                { id: 2, text: 'Room102', color: 'green' },
                {/* ... */}
            ]
        },
        paginate: false
    });

    const teachers = new DataSource({
        store: {
            type: 'array',
            data: [
                // Resource instances
                { guid: '6F96', name: 'John Heart', clr: 'yellow' },
                { guid: '3F32', name: 'Sandra Johnson', clr: 'blue' },
                // ...
            ]
        },
        paginate: false
    });

    class App extends React.Component {
        render() {
            return (
                <Scheduler>
                    {/* Definition of the first resource kind */}
                    <Resource
                        fieldExpr='roomId'      {/* 'roomId' is the data field in an appointment object that binds it to the resource */}
                        label='Room'            {/* Label displayed for this resource kind in the appointment details form */}
                        dataSource={rooms} />

                    {/* Definition of the second resource kind */}
                    <Resource
                        fieldExpr='teacherId'
                        valueExpr='guid'            {/* Resource instance's field used instead of 'id' */}
                        colorExpr='clr'             {/* Resource instance's field used instead of 'color' */}
                        displayExpr='name'          {/* Resource instance's field used instead of 'text' */}
                        label='Teacher'
                        dataSource={teachers} />
                </Scheduler>
            );
        }
    }
    export default App;

---

Note that every resource instance should have a special structure that includes *id*, *color* and *text* fields. If the structure of your resources differs, set the [valueExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#valueExpr'), [colorExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/colorExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#colorExpr') and [displayExpr](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#displayExpr') options as shown in the code above.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Resources/"
}

[tags]scheduler, appointment, resource, resource kind, resource structure, assign resource, fieldExpr
