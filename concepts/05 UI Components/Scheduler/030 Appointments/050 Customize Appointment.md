For a minor customization of Scheduler appointments, you can define [specific fields](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#dataSource') in appointment data objects. For example, the following code generates three appointments: the first is not customized, the second is hidden, and the third is disabled.

---

##### jQuery

    <!-- tab: index.js -->
    var appointments = [{
        text: "Website Re-Design Plan",
        startDate: new Date("2016-04-25T09:30:00.000Z"),
        endDate: new Date("2016-04-25T11:30:00.000Z")
    }, {
        text: "Book Flights to San Fran for Sales Trip",
        startDate: new Date("2016-04-25T12:00:00.000Z"),
        endDate: new Date("2016-04-25T13:00:00.000Z"),
        hidden: true
    }, {
        text: "Annual Meeting in Berlin",
        startDate: new Date("2016-04-26T11:00:00.000Z"),
        endDate: new Date("2016-04-26T13:00:00.000Z"),
        disabled: true
    }
    // ...
    ];

    $(function () { 
        $("#schedulerContainer").dxScheduler({
            dataSource: appointments,
            currentDate: new Date(2016, 4, 25)
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        appointments = [{
            text: "Website Re-Design Plan",
            startDate: new Date("2016-04-25T09:30:00.000Z"),
            endDate: new Date("2016-04-25T11:30:00.000Z")
        }, {
            text: "Book Flights to San Fran for Sales Trip",
            startDate: new Date("2016-04-25T12:00:00.000Z"),
            endDate: new Date("2016-04-25T13:00:00.000Z"),
            hidden: true
        }, {
            text: "Annual Meeting in Berlin",
            startDate: new Date("2016-04-26T11:00:00.000Z"),
            endDate: new Date("2016-04-26T13:00:00.000Z"),
            disabled: true
        }
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

    <!-- tab: app.component.html -->
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
                    startDate: new Date("2016-04-25T09:30:00.000Z"),
                    endDate: new Date("2016-04-25T11:30:00.000Z")
                }, {
                    text: "Book Flights to San Fran for Sales Trip",
                    startDate: new Date("2016-04-25T12:00:00.000Z"),
                    endDate: new Date("2016-04-25T13:00:00.000Z"),
                    hidden: true
                }, {
                    text: "Annual Meeting in Berlin",
                    startDate: new Date("2016-04-26T11:00:00.000Z"),
                    endDate: new Date("2016-04-26T13:00:00.000Z"),
                    disabled: true
                }
                // ...
                ];
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Scheduler from 'devextreme-react/scheduler';

    const appointments = [{
        text: "Website Re-Design Plan",
        startDate: new Date("2016-04-25T09:30:00.000Z"),
        endDate: new Date("2016-04-25T11:30:00.000Z")
    }, {
        text: "Book Flights to San Fran for Sales Trip",
        startDate: new Date("2016-04-25T12:00:00.000Z"),
        endDate: new Date("2016-04-25T13:00:00.000Z"),
        hidden: true
    }, {
        text: "Annual Meeting in Berlin",
        startDate: new Date("2016-04-26T11:00:00.000Z"),
        endDate: new Date("2016-04-26T13:00:00.000Z"),
        disabled: true
    }
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

---

##### jQuery

If you need a more flexible solution, combine HTML markup for appointments manually with jQuery <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a>. To apply this markup, use the [appointmentTemplate](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/appointmentTemplate.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#appointmentTemplate') callback function as shown in the following code.

    <!-- tab: index.js -->
    var schedulerData = [{
        movie: "His Girl Friday",
        price: 5,
        startDate: new Date("2016-04-24T09:10:00.000Z"),
        endDate: new Date("2016-04-24T11:20:00.000Z")
    }, {
        movie: "Royal Wedding",
        price: 10,
        startDate: new Date("2016-04-24T10:05:00.000Z"),
        endDate: new Date("2016-04-24T11:30:00.000Z")
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

You can also customize an individual appointment. For this purpose, declare a template for this appointment as a script and pass its `id` to the [template](/Documentation/ApiReference/UI_Components/dxScheduler/Interfaces/dxSchedulerAppointment/#template) field of the appointment's data object.

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    var schedulerData = [{
        movie: "Royal Wedding",
        startDate: new Date("2016-04-24T10:05:00.000Z"),
        endDate: new Date("2016-04-24T11:30:00.000Z"),
        template: $("#individualTemplate")
    }, {
        // ...
    }];

##### Angular

If you need a more flexible solution, define a custom template. The following code shows how to use [dxTemplate](/api-reference/10%20UI%20Components/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Components/Markup_Components/dxTemplate/') to define templates for appointments.

    <!-- tab: app.component.html -->
    <dx-scheduler 
        [dataSource]="schedulerData"
        appointmentTemplate="appointmentTemplate"
        [currentDate]="currentDate">
        <div *dxTemplate="let model of 'appointmentTemplate'">
            <i>{{model.appointmentData.movie}}</i>
            <p>Price: ${{model.appointmentData.price}}</p>
        </div>
    </dx-scheduler>

    <!-- tab: app.component.ts -->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        schedulerData = [{
            movie: "His Girl Friday",
            price: 5,
            startDate: new Date("2016-04-24T09:10:00.000Z"),
            endDate: new Date("2016-04-24T11:20:00.000Z")
        }, {
            movie: "Royal Wedding",
            price: 10,
            startDate: new Date("2016-04-24T10:05:00.000Z"),
            endDate: new Date("2016-04-24T11:30:00.000Z")
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

If you need a more flexible solution, define a custom template. The following code shows how to define templates for appointments.

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
                    startDate: new Date("2016-04-24T09:10:00.000Z"),
                    endDate: new Date("2016-04-24T11:20:00.000Z")
                }, {
                    movie: "Royal Wedding",
                    price: 10,
                    startDate: new Date("2016-04-24T10:05:00.000Z"),
                    endDate: new Date("2016-04-24T11:30:00.000Z")
                }, 
                // ...
                ];
            }
        }
    }
    </script>

##### React

If you need a more flexible solution, define a rendering function. The following code shows how to define a rendering function for appointments.

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Scheduler from 'devextreme-react/scheduler';

    const appointments = [{
        movie: "His Girl Friday",
        price: 5,
        startDate: new Date("2016-04-24T09:10:00.000Z"),
        endDate: new Date("2016-04-24T11:20:00.000Z")
    }, {
        movie: "Royal Wedding",
        price: 10,
        startDate: new Date("2016-04-24T10:05:00.000Z"),
        endDate: new Date("2016-04-24T11:30:00.000Z")
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

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/"
}

In addition, you can use a 3rd-party template engine to customize the UI component appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/UI_Components/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [Scheduler - Customize Appointment Tooltip](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/060%20Customize%20Appointment%20Tooltip.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Customize_Appointment_Tooltip/')
- [Scheduler - Customize Appointment Details Form](/concepts/05%20UI%20Components/Scheduler/030%20Appointments/070%20Customize%20Appointment%20Details%20Form.md '/Documentation/Guide/UI_Components/Scheduler/Appointments/Customize_Appointment_Details_Form/')
- [Scheduler - Customize Resource Headers](/concepts/05%20UI%20Components/Scheduler/040%20Resources/040%20Customize%20Resource%20Headers.md '/Documentation/Guide/UI_Components/Scheduler/Resources/Customize_Resource_Headers/')
- [Scheduler - Customize Timetable](/concepts/05%20UI%20Components/Scheduler/050%20Timetable.md '/Documentation/Guide/UI_Components/Scheduler/Timetable/')
- [Scheduler API Reference](/api-reference/10%20UI%20Components/dxScheduler '/Documentation/ApiReference/UI_Components/dxScheduler/')


[tags]scheduler, appointment appearance, customize, templates
