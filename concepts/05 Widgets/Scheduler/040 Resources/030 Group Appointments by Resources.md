To group appointments by resources, assign an array to the [groups](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/groups.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#groups') option. Each element of this array is **fieldExpr** of a resource kind. Note that the resource headers' order depends on the resources' order in the [resources](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resources '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/') array.

---

##### jQuery

    <!--JavaScript-->
    var appointments = [{
        roomId: 1,
        teacherId: 2,
        text: "Meeting",
        // ...
    },
    // ...
    ];

    var resources = [
        { fieldExpr: 'roomId', dataSource: roomsDataSource },
        { fieldExpr: 'teacherId', dataSource: teachersDataSource }
    ];

    $(function(){
        $("#schedulerContainer").dxScheduler({
            dataSource: appointments,
            resources: resources,
            // Groups appointments by rooms and by teachers
            groups: ['roomId', 'teacherId']
            //...
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler
        [dataSource]="appointments"
        [groups]="['roomId', 'teacherId']"> <!-- Groups appointments by rooms and by teachers -->
        <dxi-resource
            fieldExpr="roomId"
            [dataSource]="roomResources">
        </dxi-resource>
        <dxi-resource
            fieldExpr="teacherId"
            [dataSource]="teacherResources">
        </dxi-resource>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        // ...
        appointments = [{
            roomId: 1,
            teacherId: 2,
            text: "Meeting",
            // ...
        },
        // ...
        ];
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
        <DxScheduler
            :data-source="appointments"
            :groups="groups" <!-- Groups appointments by rooms and by teachers -->
        >
            <DxResource
                field-expr="roomId"
                :data-source="roomResources"/>
            <DxResource
                field-expr="teacherId"
                :data-source="teacherResources"/>
        </DxScheduler>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxScheduler, { DxResource } from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler,
            DxResource
        },
        data() {
            return {
                groups: ['roomId', 'teacherId'],
                appointments: [{
                    roomId: 1,
                    teacherId: 2,
                    text: "Meeting",
                    // ...
                },
                // ...
                ]
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Scheduler, { Resource } from 'devextreme-react/scheduler';

    const groups = ['roomId', 'teacherId'];
    const appointments = [{
            roomId: 1,
            teacherId: 2,
            text: "Meeting",
            // ...
        },
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    dataSource={appointments}
                    groups={groups}>

                    <Resource
                        fieldExpr="roomId"
                        dataSource={roomResources} />
                    <Resource
                        fieldExpr="teacherId"
                        dataSource={teacherResources} />

                </Scheduler>
            );
        }
    }
    export default App;

---

![Scheduler Grouping by Resources](/images/UiWidgets/Scheduler_ResourceGroups.png)

You can change resource headers' orientation in an individual view using the **views**.[groupOrientation](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views/groupOrientation.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#groupOrientation') option. In the following code, the orientation in the **day** view is *"vertical"*, so that resource headers are arranged in a column:

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#schedulerContainer").dxScheduler({
            // ...
            views: ["month", {
                type: "day",
                groupOrientation: "vertical"
            }]
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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

        <dxi-view type="month">
        </dxi-view>

        <dxi-view
            type="day"
            groupOrientaion="vertical">
        </dxi-view>

    </dx-scheduler>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler ... >
            <DxView type="month" />

            <DxView
                type="day"
                groupOrientaion="vertical" />

        </DxScheduler>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxScheduler, { DxView } from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler,
            DxView
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

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Scheduler, { View } from 'devextreme-react/scheduler';

    class App extends React.Component {
        render() {
            return (
                <Scheduler ... >

                    <View type="month" />

                    <View
                        type="day"
                        groupOrientaion="vertical" />

                </Scheduler>
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/GroupOrientation/"
}

#####See Also#####
- [Assign Appointments to Resources](/concepts/05%20Widgets/Scheduler/040%20Resources/020%20Assign%20Appointments%20to%20Resources '/Documentation/Guide/Widgets/Scheduler/Resources/Assign_Appointments_to_Resources/')
- [Customize Individual Views](/concepts/05%20Widgets/Scheduler/060%20Views/020%20Customize%20Individual%20Views.md '/Documentation/Guide/Widgets/Scheduler/Views/Customize_Individual_Views/')
- [Customize Resource Headers](/concepts/05%20Widgets/Scheduler/040%20Resources/040%20Customize%20Resource%20Headers.md '/Documentation/Guide/Widgets/Scheduler/Resources/Customize_Resource_Headers/')
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')

[tags]scheduler, resources, group by resources
