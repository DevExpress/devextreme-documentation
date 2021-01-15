The **Scheduler** UI component allows you to customize its timetable. You can specify the time period and a single cell's duration via the [startDayHour](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/startDayHour.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#startDayHour'), [endDayHour](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/endDayHour.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#endDayHour'), and [cellDuration](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/cellDuration.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#cellDuration') options. Using the [firstDayOfWeek](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/firstDayOfWeek.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#firstDayOfWeek') option, you can define the weekday that is shown first.

---

#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: [{
                text: "Website Re-Design Plan",
                startDate: new Date(2016, 4, 25, 9, 30),
                endDate: new Date(2016, 4, 25, 11, 30)
            }, {
                text: "Book Flights to San Fran for Sales Trip",
                startDate: new Date(2016, 4, 25, 12, 0),
                endDate: new Date(2016, 4, 25, 13, 0)
            }, 
            // ...
            ],
            currentDate: new Date(2016, 4, 25),
            startDayHour: 8,
            endDayHour: 19,
            cellDuration: 60,
            firstDayOfWeek: 1
        });
    });

#####Angular

    <!--HTML-->
    <dx-scheduler
        [dataSource]="schedulerData"
        [currentDate]="currentDate"
        [startDayHour]="8"
        [endDayHour]="19"
        [cellDuration]="60"
        [firstDayOfWeek]="1">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        schedulerData = [{
            text: "Website Re-Design Plan",
            startDate: new Date(2016, 4, 25, 9, 30),
            endDate: new Date(2016, 4, 25, 11, 30)
        }, {
            text: "Book Flights to San Fran for Sales Trip",
            startDate: new Date(2016, 4, 25, 12, 0),
            endDate: new Date(2016, 4, 25, 13, 0)
        }, 
        // ...
        ];
        currentDate = new Date(2016, 4, 25);
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
            :data-source="dataSource"
            :current-date="currentDate"
            :start-day-hour="8"
            :end-day-hour="19"
            :cell-duration="60"
            :first-day-of-week="1"
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
                dataSource: [{
                    text: 'Website Re-Design Plan',
                    startDate: new Date(2016, 4, 25, 9, 30),
                    endDate: new Date(2016, 4, 25, 11, 30)
                }, {
                    text: 'Book Flights to San Fran for Sales Trip',
                    startDate: new Date(2016, 4, 25, 12, 0),
                    endDate: new Date(2016, 4, 25, 13, 0)
                },
                // ...
                ],
                currentDate: new Date(2016, 4, 25)
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Scheduler } from 'devextreme-react/scheduler';

    const dataSource = [{
        text: 'Website Re-Design Plan',
        startDate: new Date(2016, 4, 25, 9, 30),
        endDate: new Date(2016, 4, 25, 11, 30)
    }, {
        text: 'Book Flights to San Fran for Sales Trip',
        startDate: new Date(2016, 4, 25, 12, 0),
        endDate: new Date(2016, 4, 25, 13, 0)
    },
    // ...
    ];

    const currentDate = new Date(2016, 4, 25);

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    dataSource={dataSource}
                    defaultCurrentDate={currentDate}
                    startDayHour={8}
                    endDayHour={19}
                    cellDuration={60}
                    firstDayOfWeek={1}
                />
            );
        }
    }

    export default App;

---

You can also adjust cells' size in the table and around it using the DevExtreme CSS classes. For example, the `.dx-scheduler-cell-sizes-horizontal` and `.dx-scheduler-cell-sizes-vertical` classes specify the cells' width and height, respectively. These classes apply if the [crossScrollingEnabled](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/crossScrollingEnabled.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#crossScrollingEnabled') option is set to **true**.

    <!--CSS-->
    #yourSchedulerID .dx-scheduler-cell-sizes-horizontal {
        width: 200px;
    }
    #yourSchedulerID .dx-scheduler-cell-sizes-vertical {
        height: 200px;
    }

For a more detailed customization, define custom templates for cells, time scales, and date scales. DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Components/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Components/Markup_Components/dxTemplate/') markup component for Angular, AngularJS and Knockout apps. The following code shows how to use **dxTemplate** to define templates for timetable parts:

---

#####Angular

    <!--HTML-->
    <dx-scheduler
        [dataSource]="schedulerData"
        [currentDate]="currentDate"
        [showAllDayPanel]="false"
        currentView="week"
        dataCellTemplate="dataCellTemplate"
        dateCellTemplate="dateCellTemplate"
        timeCellTemplate="timeCellTemplate">
        <div *dxTemplate="let data of 'dataCellTemplate'">
            <div style="width: 100%; height: 40px; background-color: rgba(86, 202, 133, 0.1);"></div>
        </div>
        <div *dxTemplate="let date of 'dateCellTemplate'">
            <b style="color: green">{{date.text}}</b>
        </div>
        <div *dxTemplate="let time of 'timeCellTemplate'">
            <i style="color: green">{{time.text}}</i>
        </div>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        schedulerData = [{
            text: "His Girl Friday",
            startDate: new Date(2016, 4, 24, 9, 10),
            endDate: new Date(2016, 4, 24, 11, 20)
        }, {
            text: "Royal Wedding",
            startDate: new Date(2016, 4, 24, 10, 5),
            endDate: new Date(2016, 4, 24, 11, 30)
        }, 
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

#####**AngularJS**

    <!--HTML--><div ng-controller="DemoController">
        <div dx-scheduler="{
            dataSource: schedulerData,
            currentDate: currentDate,
            showAllDayPanel: false,
            currentView: 'week',
            dataCellTemplate: 'dataCellTemplate',
            dateCellTemplate: 'dateCellTemplate',
            timeCellTemplate: 'timeCellTemplate'
        }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'dataCellTemplate' }">
                <div style="width: 100%; height: 40px; background-color: rgba(86, 202, 133, 0.1);"></div>
            </div>
            <div data-options="dxTemplate: { name: 'dateCellTemplate' }">
                <b style="color: green">{{item.text}}</b>
            </div>
            <div data-options="dxTemplate: { name: 'timeCellTemplate' }">
                <i style="color: green">{{item.text}}</i>
            </div>
        </div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.schedulerData = [{
                text: "His Girl Friday",
                startDate: new Date(2016, 4, 24, 9, 10),
                endDate: new Date(2016, 4, 24, 11, 20)
            }, {
                text: "Royal Wedding",
                startDate: new Date(2016, 4, 24, 10, 05),
                endDate: new Date(2016, 4, 24, 11, 30)
            }, 
            // ...
            ];
            $scope.currentDate = new Date(2016, 4, 24); 
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML--><div data-bind="dxScheduler: {
        dataSource: schedulerData,
        currentDate: currentDate,
        showAllDayPanel: false,
        currentView: 'week',
        dataCellTemplate: 'dataCellTemplate',
        dateCellTemplate: 'dateCellTemplate',
        timeCellTemplate: 'timeCellTemplate'
    }">
        <div data-options="dxTemplate: { name: 'dataCellTemplate' }">
            <div style="width: 100%; height: 40px; background-color: rgba(86, 202, 133, 0.1);"></div>
        </div>
        <div data-options="dxTemplate: { name: 'dateCellTemplate' }">
            <b style="color: green" data-bind="text: text"></b>
        </div>
        <div data-options="dxTemplate: { name: 'timeCellTemplate' }">
            <i style="color: green" data-bind="text: text"></i>
        </div>
    </div>

    <!--JavaScript-->var viewModel= {
        schedulerData: [{
            movie: "His Girl Friday",
            price: 5,
            startDate: new Date(2016, 4, 24, 9, 10),
            endDate: new Date(2016, 4, 24, 11, 20)
        }, {
            movie: "Royal Wedding",
            price: 10,
            startDate: new Date(2016, 4, 24, 10, 05),
            endDate: new Date(2016, 4, 24, 11, 30)
        }, 
        // ...
        ],
        currentDate: new Date(2016, 4, 24)
    };

    ko.applyBindings(viewModel);

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler
            :data-source="schedulerData"
            :current-date="currentDate"
            :show-all-day-panel="false"
            data-cell-template="dataCellTemplate"
            date-cell-template="dateCellTemplate"
            time-cell-template="timeCellTemplate"
            current-view="week"
        >
            <template #dataCellTemplate>
                <div v-bind:style="styles"></div>
            </template>
            <template #dateCellTemplate="{ data }">
                <b v-bind:style="{ color: 'green' }">{{data.text}}</b>     
            </template>
            <template #timeCellTemplate="{ data }">
                <b v-bind:style="{ color: 'green' }">{{data.text}}</b>     
            </template>
        </DxScheduler>
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
                currentDate: new Date(2016, 4, 24),
                styles: {
                    'background-color': 'rgba(86, 202, 133, 0.1)',
                    width: '100%',
                    height: '40px'
                }
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Scheduler } from 'devextreme-react/scheduler';

    const currentDate = new Date(2016, 4, 24);

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    dataSource={schedulerData}
                    defaultCurrentDate={currentDate}
                    showAllDayPanel={false}
                    dataCellRender={this.renderDataCell}
                    dateCellRender={this.renderDateCell}
                    timeCellRender={this.renderTimeCell}
                    defaultCurrentView="week"
                />
            );
        }

        renderDataCell(data, index, element) {
            return <div style={{ width: '100%', height: 40, backgroundColor: 'rgba(86, 202, 133, 0.1)' }}></div>;
        }
        renderDateCell(data, index, element) {
            return <b style={{ color: 'green', fontWeight: 'bold' }}><p>{data.text}</p></b>;
        }
        renderTimeCell(data, index, element) {
            return <b style={{ color: 'green', fontWeight: 'bold' }}><p>{data.text}</p></b>;
        }
    }

    export default App;

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for time scales and date scales. To apply this markup, use the [timeCellTemplate](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/timeCellTemplate.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#timeCellTemplate'), [dateCellTemplate](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/dateCellTemplate.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#dateCellTemplate') and [dataCellTemplate](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/dataCellTemplate.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#dataCellTemplate') callback functions as shown in the following code:

    <!--JavaScript-->var schedulerData = [{
        text: "His Girl Friday",
        startDate: new Date(2016, 4, 24, 9, 10),
        endDate: new Date(2016, 4, 24, 11, 20)
    }, {
        text: "Royal Wedding",
        startDate: new Date(2016, 4, 24, 10, 05),
        endDate: new Date(2016, 4, 24, 11, 30)
    }, 
    // ...
    ];

    $(function () {
        $("#schedulerContainer").dxScheduler({
            dataSource: schedulerData,
            currentDate: new Date(2016, 4, 24),
            showAllDayPanel: false,
            currentView: 'week',
            dataCellTemplate: function(data, index, element) {
                return $("<div />")
                            .css('width', '100%')
                            .css('height', '40px')
                            .css('background-color', 'rgba(86, 202, 133, 0.1)');
            },
            dateCellTemplate: function(data, index, element) {
                element.text(data.text)
                        .css('color', 'green')
                        .css('font-weight', 'bold');
            },
            timeCellTemplate: function(data, index, element) {
                element.text(data.text)
                        .css('color', 'green')
                        .css('font-style', 'italic');
            }
        });
    });

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CellTemplates/"
}

You can also use a 3rd-party template engine to customize UI component appearance. See the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article for more information.

#####See Also#####
- [Scheduler - Customize Appointment](/concepts/05%20Widgets/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/')
- [Scheduler - Customize Resource Headers](/concepts/05%20Widgets/Scheduler/040%20Resources/040%20Customize%20Resource%20Headers.md '/Documentation/Guide/Widgets/Scheduler/Resources/Customize_Resource_Headers/')
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview)
- [Scheduler API Reference](/api-reference/10%20UI%20Components/dxScheduler '/Documentation/ApiReference/UI_Components/dxScheduler/')

[tags]scheduler, timetable, template, start hour, end hour, cell duration, timeCellTemplate, dateCellTemplate, dataCellTemplate
