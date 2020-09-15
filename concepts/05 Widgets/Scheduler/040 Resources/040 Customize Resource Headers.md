To specify custom appearance for resource headers, define a [resourceCellTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#resourceCellTemplate) ([resourceCellRender](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#resourceCellRender) in React). Within the template, you can access resource header data and index. For example, the following code uses the template to color the headers blue:

---
##### jQuery

    <!--JavaScript-->
    var schedulerData = [{
        text: "Meeting",
        startDate: new Date(2016, 4, 24, 9, 10),
        endDate: new Date(2016, 4, 24, 11, 20),
        roomId: 1
    },
    // ...
    ];
    var roomResource = {
        fieldExpr: 'roomId',
        dataSource: [
            { id: 1, text: 'Room101', color: 'green' },
            { id: 2, text: 'Room102', color: 'red' },
            // ...
        ]
    };

    $(function () {
        $("#schedulerContainer").dxScheduler({
            dataSource: schedulerData,
            currentDate: new Date(2016, 4, 24),
            resources: [ roomResource ],
            groups: [ 'roomId' ],
            resourceCellTemplate: function (data, index, element) {
                element.append("<i style='color: blue'>" + data.text + "</i>");
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler
        [dataSource]="schedulerData"
        [currentDate]="currentDate"
        [groups]="['roomId']"
        resourceCellTemplate="headerTemplate">
        <dxi-resource
            fieldExpr="roomId"
            [dataSource]="rooms">
        </dxi-resource>
        <div *dxTemplate="let data of 'headerTemplate'; let i = index">
            <i style="color: blue">{{data.text}}</i>
        </div>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        schedulerData = [{
            text: "Meeting",
            startDate: new Date(2016, 4, 24, 9, 10),
            endDate: new Date(2016, 4, 24, 11, 20),
            roomId: 1
        },
        // ...
        ];
        rooms = [
            { id: 1, text: 'Room101', color: 'green' },
            { id: 2, text: 'Room102', color: 'red' },
            // ...
        ];
        currentDate = new Date(2016, 4, 24);
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
            :current-date="currentDate"
            :groups="groups"
            resource-cell-template="resourceCellTemplate"
        >
            <DxResource
              :data-source="resources"
              field-expr="roomId"
            />
            
            <template #resourceCellTemplate="{ data, index }">
                <i style="color: blue">{{data.text}}</i>
            </template>
        </DxScheduler>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxScheduler, DxResource } from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler,
            DxResource
        },
        data() {
            return {
                currentDate: new Date(2016, 4, 24),
                appointments: [{
                    text: "Meeting",
                    startDate: new Date(2016, 4, 24, 9, 10),
                    endDate: new Date(2016, 4, 24, 11, 20),
                    roomId: 1
                }, 
                // ...
                ],
                resources: [
                    { id: 1, text: "Room101", color: "green" },
                    { id: 2, text: "Room102", color: "red" },
                    // ...
                ],
                groups: ["roomId"]
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

    const appointments = [{
        text: 'His Girl Friday',
        year: 1940,
        img: 'images/movies/HisGirlFriday.jpg',
        startDate: new Date(2016, 4, 24, 9, 10),
        endDate: new Date(2016, 4, 24, 11, 20)
    }, 
    // ...
    ];
    
    const resources = [
        { id: 1, text: 'Room101', color: 'green' },
        { id: 2, text: 'Room102', color: 'red' },
        // ...
    ];
    
    const groups = ['roomId'];

    const renderResourceCell = (model, index) => {
        return (
            <i style={{color: "blue"}}>{model.data.text}</i>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    dataSource={appointments}
                    defaultCurrentDate={new Date(2016, 4, 24)}
                    groups={groups}
                    resourceCellRender={renderResourceCell}
                >
                    <Resource
                      fieldExpr="roomId"
                      dataSource={resources}
                    />
              </Scheduler>
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CellTemplates/"
}

#####See Also#####
- [Scheduler - Customize Appointment](/concepts/05%20Widgets/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/')
- [Scheduler - Customize Timetable](/concepts/05%20Widgets/Scheduler/050%20Timetable.md '/Documentation/Guide/Widgets/Scheduler/Timetable/')
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')

[tags]scheduler, tooltip appearance, customize, templates
