For a minor customization of **Scheduler** appointments, you can define [specific fields](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource') in appointment data objects. For example, the following code generates three appointments: the first is not customized, the second is hidden, and the third is disabled.

---

##### jQuery

    <!--JavaScript-->var appointments = [{
        text: "Website Re-Design Plan",
        startDate: new Date(2016, 4, 25, 9, 30),
        endDate: new Date(2016, 4, 25, 11, 30)
    }, {
        text: "Book Flights to San Fran for Sales Trip",
        startDate: new Date(2016, 4, 25, 12, 0),
        endDate: new Date(2016, 4, 25, 13, 0),
        hidden: true
    }, 
    // ...
    ];

    $(function () { 
        $("#schedulerContainer").dxScheduler({
            dataSource: appointments,
            currentDate: new Date(2016, 4, 25)
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        appointments = [{
            text: "Website Re-Design Plan",
            startDate: new Date(2016, 4, 25, 9, 30),
            endDate: new Date(2016, 4, 25, 11, 30)
        }, {
            text: "Book Flights to San Fran for Sales Trip",
            startDate: new Date(2016, 4, 25, 12, 0),
            endDate: new Date(2016, 4, 25, 13, 0),
            hidden: true
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

    <!--HTML-->
    <dx-scheduler
        [dataSource]="appointments"
        [currentDate]="currentDate">
    </dx-scheduler>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler
            :data-source="appointments"
            :current-date="currentDate"
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
                currentDate: new Date(2016, 4, 25),
                appointments: [{
                    text: "Website Re-Design Plan",
                    startDate: new Date(2016, 4, 25, 9, 30),
                    endDate: new Date(2016, 4, 25, 11, 30)
                }, {
                    text: "Book Flights to San Fran for Sales Trip",
                    startDate: new Date(2016, 4, 25, 12, 0),
                    endDate: new Date(2016, 4, 25, 13, 0),
                    hidden: true
                }, 
                // ...
                ];
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

    const appointments = [{
        text: "Website Re-Design Plan",
        startDate: new Date(2016, 4, 25, 9, 30),
        endDate: new Date(2016, 4, 25, 11, 30)
    }, {
        text: "Book Flights to San Fran for Sales Trip",
        startDate: new Date(2016, 4, 25, 12, 0),
        endDate: new Date(2016, 4, 25, 13, 0),
        hidden: true
    }, 
    // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    dataSource={appointments}
                    defaultCurrentDate={new Date(2016, 4, 25)} 
                />
            );
        }
    }
    export default App;

---

If you need a more flexible solution, define an [appointmentTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#appointmentTemplate) ([appointmentRender](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#appointmentRender) in React). Within the template, you can access appointment data and index:

---
##### jQuery

    <!--JavaScript-->
    var schedulerData = [{
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
    ];

    $(function () {
        $("#schedulerContainer").dxScheduler({
            dataSource: schedulerData,
            appointmentTemplate: function (model, index, element) {
                element.append("<i>" + model.appointmentData.movie + "</i>");
                element.append("<p>Price: $" + model.appointmentData.price + "</p>");
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler 
        [dataSource]="schedulerData"
        appointmentTemplate="appointmentTemplate"
        [currentDate]="currentDate">
        <div *dxTemplate="let model of 'appointmentTemplate'">
            <i>{{model.appointmentData.movie}}</i>
            <p>Price: ${{model.appointmentData.price}}</p>
        </div>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        schedulerData = [{
            movie: "His Girl Friday",
            price: 5,
            startDate: new Date(2016, 4, 24, 9, 10),
            endDate: new Date(2016, 4, 24, 11, 20)
        }, {
            movie: "Royal Wedding",
            price: 10,
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxScheduler
            :data-source="appointments"
            :current-date="currentDate"
            appointment-template="appointment"
        >
            <template #appointment="{ data }">
                <i>{{data.appointmentData.movie}}</i>
                <p>Price: ${{data.appointmentData.price}}</p>
            </template>
        </DxScheduler>
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
                currentDate: new Date(2016, 4, 25),
                appointments: [{
                    movie: "His Girl Friday",
                    price: 5,
                    startDate: new Date(2016, 4, 24, 9, 10),
                    endDate: new Date(2016, 4, 24, 11, 20)
                }, {
                    movie: "Royal Wedding",
                    price: 10,
                    startDate: new Date(2016, 4, 24, 10, 5),
                    endDate: new Date(2016, 4, 24, 11, 30)
                }, 
                // ...
                ];
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

    const appointments = [{
        movie: "His Girl Friday",
        price: 5,
        startDate: new Date(2016, 4, 24, 9, 10),
        endDate: new Date(2016, 4, 24, 11, 20)
    }, {
        movie: "Royal Wedding",
        price: 10,
        startDate: new Date(2016, 4, 24, 10, 5),
        endDate: new Date(2016, 4, 24, 11, 30)
    }, 
    // ...
    ];

    const renderAppointment = (model) => {
        return (
            <React.Fragment>
                <i>{{model.appointmentData.movie}}</i>
                <p>Price: ${{model.appointmentData.price}}</p>
            </React.Fragment>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    dataSource={appointments}
                    defaultCurrentDate={new Date(2016, 4, 25)} 
                    appointmentRender={renderAppointment}
                />
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/"
}

You can also customize an individual appointment. For this purpose, declare a template for this appointment as a script and pass its `id` to the [template](/api-reference/50%20Common/Object%20Structures/dxSchedulerAppointment/template.md '/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#template') field of the appointment's data object.

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->var schedulerData = [{
        movie: "Royal Wedding",
        startDate: new Date(2016, 4, 24, 10, 05),
        endDate: new Date(2016, 4, 24, 11, 30),
        template: $("#individualTemplate")
    }, {
        // ...
    }];

#####See Also#####
- [Scheduler - Customize Appointment Tooltip](/concepts/05%20Widgets/Scheduler/030%20Appointments/060%20Customize%20Appointment%20Tooltip.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Tooltip/')
- [Scheduler - Customize Appointment Details Form](/concepts/05%20Widgets/Scheduler/030%20Appointments/070%20Customize%20Appointment%20Details%20Form.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Details_Form/')
- [Scheduler - Customize Resource Headers](/concepts/05%20Widgets/Scheduler/040%20Resources/040%20Customize%20Resource%20Headers.md '/Documentation/Guide/Widgets/Scheduler/Resources/Customize_Resource_Headers/')
- [Scheduler - Customize Timetable](/concepts/05%20Widgets/Scheduler/050%20Timetable.md '/Documentation/Guide/Widgets/Scheduler/Timetable/')
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')


[tags]scheduler, appointment appearance, customize, templates
