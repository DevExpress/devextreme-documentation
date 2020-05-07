To customize individual views, assign an array of configuration objects to the **views** option. Each object contains the [type](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views/type.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#type') option that defines which view is customized. Refer to the [API Reference](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/') for a list of options.

The following code defines three views: the first is not customized, the second has a specific cell duration and a custom template for the time scale, and the third is grouped by resources.

---
#####jQuery

    <!--JavaScript-->
    var data = [{
        text: "Google AdWords Strategy",
        ownerId: [2],
        startDate: new Date(2016, 1, 1, 9, 0),
        endDate: new Date(2016, 1, 1, 10, 30)
    }, {
        text: "New Brochures",
        ownerId: [1],
        startDate: new Date(2016, 1, 1, 11, 30),
        endDate: new Date(2016, 1, 1, 14, 15)
    },
    // ...
    ];

    var resources = [
        { text: "Samantha Bright", id: 1, color: "#cb6bb2" },
        { text: "John Heart", id: 2, color: "#56ca85" }
    ];

    $(function(){
        $("#schedulerContainer").dxScheduler({
            dataSource: data,
            currentDate: new Date(2016, 1, 1),
            views: ["month", {
                type: "day",
                cellDuration: 60,
                timeCellTemplate: function(data, index, element) {
                    element.text(data.text)
                            .css('color', 'green')
                            .css('font-style', 'italic');
                }
            }, {
                type: "workWeek",
                groups: ["ownerId"]
            }],
            resources: [{ fieldExpr: "ownerId", dataSource: resources }]
        });
    });

#####Angular

    <!--HTML-->
    <dx-scheduler
        [dataSource]="schedulerData"
        [currentDate]="currentDate"
        [views]="views"
        [resources]="resources"
        timeCellTemplate="timeCellTemplate">
        <div *dxTemplate="let appointment of 'timeCellTemplate'">
            <i style="color: green">{{appointment.text}}</i>
        </div>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        schedulerData = [{
            text: "Google AdWords Strategy",
            ownerId: [2],
            startDate: new Date(2016, 1, 1, 9, 0),
            endDate: new Date(2016, 1, 1, 10, 30)
        }, {
            text: "New Brochures",
            ownerId: [1],
            startDate: new Date(2016, 1, 1, 11, 30),
            endDate: new Date(2016, 1, 1, 14, 15)
        },
        // ...
        ];
        currentDate = new Date(2016, 1, 1);
        views = [
            "month",
            { type: "day", cellDuration: 60, timeCellTemplate: 'timeCellTemplate' },
            { type: "workWeek", groups: ["ownerId"] }
        ];
        resources = [{
            fieldExpr: "ownerId",
            dataSource: [
                { text: "Samantha Bright", id: 1, color: "#cb6bb2" },
                { text: "John Heart", id: 2, color: "#56ca85" }
            ]
        }];
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
            :data-source="schedulerData"
            :current-date="currentDate"
            :views="views"
            :resources="resources"
            time-cell-template="TimeCellTemplateSlot">

            <template #TimeCellTemplateSlot="appointment">
                <i style="color: green">{{appointment.text}}</i>
            </template>
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
            return {
                schedulerData: [{
                    text: "Google AdWords Strategy",
                    ownerId: [2],
                    startDate: new Date(2016, 1, 1, 9, 0),
                    endDate: new Date(2016, 1, 1, 10, 30)
                }, {
                    text: "New Brochures",
                    ownerId: [1],
                    startDate: new Date(2016, 1, 1, 11, 30),
                    endDate: new Date(2016, 1, 1, 14, 15)
                },
                // ...
                ],
                currentDate: new Date(2016, 1, 1),
                views: [
                    "month",
                    { type: "day", cellDuration: 60, timeCellTemplate: 'timeCellTemplate' },
                    { type: "workWeek", groups: ["ownerId"] }
                ],
                resources: [{
                    fieldExpr: "ownerId",
                    dataSource: [
                        { text: "Samantha Bright", id: 1, color: "#cb6bb2" },
                        { text: "John Heart", id: 2, color: "#56ca85" }
                    ]
                }]
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Scheduler from 'devextreme-react/scheduler';

    const schedulerData = [{
        text: 'Google AdWords Strategy',
        ownerId: [2],
        startDate: new Date(2016, 1, 1, 9, 0),
        endDate: new Date(2016, 1, 1, 10, 30)
    }, {
        text: 'New Brochures',
        ownerId: [1],
        startDate: new Date(2016, 1, 1, 11, 30),
        endDate: new Date(2016, 1, 1, 14, 15)
    },
    // ...
    ];
    const currentDate = new Date(2016, 1, 1);
    const views = [
        'month',
        { type: 'day', cellDuration: 60, timeCellTemplate: 'timeCellTemplate' },
        { type: 'workWeek', groups: ['ownerId'] }
    ];
    const resources = [{
        fieldExpr: 'ownerId',
        dataSource: [
            { text: 'Samantha Bright', id: 1, color: '#cb6bb2' },
            { text: 'John Heart', id: 2, color: '#56ca85' }
        ]
    }];
    const renderTimeCell = function(appointment) {
        return <i style='color: green'>{appointment.text}</i>;
    }

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    dataSource={schedulerData}
                    currentDate={currentDate}
                    views={views}
                    resources={resources}
                    timeCellRender='renderTimeCell' />
            );
        }
    }
    export default App;

---

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomizeIndividualViews/",
    name: "Customize Individual Views"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/IncreaseViewDuration/",
    name: "Increase View Duration"
}

#####See Also#####
- [Scheduler - View Types](/concepts/05%20Widgets/Scheduler/060%20Views/010%20View%20Types '/Documentation/Guide/Widgets/Scheduler/Views/View_Types/')
- [Scheduler - Customize Appointment](/concepts/05%20Widgets/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/')
- [Scheduler - Customize Timetable](/concepts/05%20Widgets/Scheduler/050%20Timetable.md '/Documentation/Guide/Widgets/Scheduler/Timetable/')
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')

[tags]scheduler, customize individual view
