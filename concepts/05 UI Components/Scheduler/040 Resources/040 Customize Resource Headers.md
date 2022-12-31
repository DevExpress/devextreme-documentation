---

##### Angular

    Use the [dxTemplate](/Documentation/ApiReference/UI_Components/Markup_Components/dxTemplate/) markup component designed by DevExpress.

    <!-- tab: app.component.html -->
    <dx-scheduler
        [dataSource]="schedulerData"
        [currentDate]="currentDate"
        [groups]="['roomId']"
        resourceCellTemplate="headerTemplate">
        <dxi-resource
            fieldExpr="roomId"
            [dataSource]="rooms" >
        </dxi-resource>
        <div *dxTemplate="let data of 'headerTemplate'">
            <i style="color: blue">{{data.text}}</i>
        </div>
    </dx-scheduler>

     <!-- tab: app.component.ts -->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        schedulerData = [{
            text: "Meeting",
            startDate: new Date("2016-04-24T09:10:00.000Z"),
            endDate: new Date("2016-04-24T11:20:00.000Z"),
            roomId: 1
        }, // ... ];
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

Implement a Vue template and assign it to the [resourceCellTemplate](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#resourceCellTemplate) property.

    <!-- tab: App.vue -->
    <template>
        <DxScheduler
            :data-source="schedulerData"
            :current-date="currentDate"
            :groups="['roomId']"
            resource-cell-template="resource-cell">
            <DxResource
                field-expr="roomId"
                :data-source="rooms" />
            <template #resource-cell="{ data }">
                <i style="color: blue">{{ data.text }}</i>
            </template>
        </DxScheduler>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxScheduler, { DxResource } from 'devextreme-vue/scheduler';

    export default {
        components: {
            DxScheduler,
            DxResource
        },
        data() {
            return {
                schedulerData: [{
                    text: "Meeting",
                    startDate: new Date("2016-04-24T09:10:00.000Z"),
                    endDate: new Date("2016-04-24T11:20:00.000Z"),
                    roomId: 1
                },
                // ...
                ],
                rooms: [
                    { id: 1, text: 'Room101', color: 'green' },
                    { id: 2, text: 'Room102', color: 'red' },
                    // ...
                ],
                currentDate: new Date(2016, 4, 24)
            }
        }
    }
    </script>

##### React

    Implement a callback function with custom template and assign it to the [resourceCellRender](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#resourceCellRender) property.

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Scheduler, { Resource } from 'devextreme-react/scheduler';

    const schedulerData = [{
        text: 'His Girl Friday',
        year: 1940,
        img: 'images/movies/HisGirlFriday.jpg',
        startDate: new Date("2016-04-24T09:10:00.000Z"),
        endDate: new Date("2016-04-24T11:20:00.000Z")
    }, // ... ];
    
    const rooms = [
        { id: 1, text: 'Room101', color: 'green' },
        { id: 2, text: 'Room102', color: 'red' },
        // ...
    ];
    
    const groups = ['roomId'];

    const renderResourceCell = (model) => {
        return (
            <i style={{color: "blue"}}>{model.data.text}</i>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    dataSource={schedulerData}
                    defaultCurrentDate={new Date(2016, 4, 24)}
                    groups={groups}
                    resourceCellRender={renderResourceCell}
                >
                    <Resource
                      fieldExpr="roomId"
                      dataSource={rooms}
                    />
              </Scheduler>
            );
        }
    }
    export default App;

##### jQuery

    Specify the [resourceCellTemplate](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#resourceCellTemplate) callback function. Combine HTML markup with jQuery’s <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a>.

    <!-- tab: index.js -->
    var schedulerData = [{
        text: "Meeting",
        startDate: new Date("2016-04-24T09:10:00.000Z"),
        endDate: new Date("2016-04-24T11:20:00.000Z"),
        roomId: 1
    }, // ... ];

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

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CellTemplates/"
}

In addition, you can use a 3rd-party template engine to customize UI component appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/UI_Components/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [Scheduler - Customize Appointment](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Customize_Appointment/')
- [Scheduler - Customize Timetable](/concepts/05%20UI%20Components/Scheduler/050%20Timetable.md '/Documentation/Guide/UI_Components/Scheduler/Timetable/')
- [Scheduler API Reference](/api-reference/10%20UI%20Components/dxScheduler '/Documentation/ApiReference/UI_Components/dxScheduler/')

[tags]scheduler, tooltip appearance, customize, templates
