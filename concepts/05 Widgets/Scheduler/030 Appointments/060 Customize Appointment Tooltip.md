When a user clicks an appointment, the **Scheduler** shows a tooltip that can be customized using an [appointmentTooltipTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#appointmentTooltipTemplate) ([appointmentTooltipRender](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#appointmentTooltipRender) in React). Within the template, you can access appointment data and index:

---
##### jQuery

    <!--JavaScript-->
    var schedulerData = [{
        text: "His Girl Friday",
        year: 1940,
        img: "images/movies/HisGirlFriday.jpg",
        startDate: new Date(2016, 4, 24, 9, 10),
        endDate: new Date(2016, 4, 24, 11, 20)
    }, 
    // ...
    ];

    $(function () {
        $("#schedulerContainer").dxScheduler({
            dataSource: schedulerData,
            currentDate: new Date(2016, 4, 24),
            appointmentTooltipTemplate: function (model, index, element) {
                element.append("<i>" + model.appointmentData.text + "(" + model.appointmentData.year + ")</i>");
                element.append("<p><img style='height: 80px' src='" + model.appointmentData.img + "' /></p>");
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler 
        [dataSource]="schedulerData"
        appointmentTooltipTemplate="tooltipTemplate"
        [currentDate]="currentDate">
        <div *dxTemplate="let model of 'tooltipTemplate'">
            <i>{{model.appointmentData.text}} ({{model.appointmentData.year}})</i>
            <p><img src="{{model.appointmentData.img}}" style="height: 80px"></p>
        </div>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        schedulerData = [{
            text: "His Girl Friday",
            year: 1940,
            img: "images/movies/HisGirlFriday.jpg",
            startDate: new Date(2016, 4, 24, 9, 10),
            endDate: new Date(2016, 4, 24, 11, 20)
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
            appointment-tooltip-template="appointmentTooltipTemplate"
        >
            <template #appointmentTooltipTemplate="{ data }">
                <div style="height: 100px">
                    <i>{{data.appointmentData.text}} ({{data.appointmentData.year}})</i>
                    <p><img :src="data.appointmentData.img" style="height: 80px"></p>
                </div>
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
                    text: "His Girl Friday",
                    year: 1940,
                    img: "images/movies/HisGirlFriday.jpg",
                    startDate: new Date(2016, 4, 24, 9, 10),
                    endDate: new Date(2016, 4, 24, 11, 20)
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
        text: "His Girl Friday",
        year: 1940,
        img: "images/movies/HisGirlFriday.jpg",
        startDate: new Date(2016, 4, 24, 9, 10),
        endDate: new Date(2016, 4, 24, 11, 20)
    }, 
    // ...
    ];

    const renderAppointmentTooltip = (model) => {
        return (
            <div style={{height: '100px'}}>
                <i>{model.appointmentData.text} ({model.appointmentData.year})</i>
                <p><img src={model.appointmentData.img} style={{height: '80px'}}></p>
            </div>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <Scheduler
                    dataSource={appointments}
                    defaultCurrentDate={new Date(2016, 4, 25)}
                    appointmentTooltipRender={renderAppointmentTooltip}
                />
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/"
}

#####See Also#####
- [Scheduler - Customize Appointment](/concepts/05%20Widgets/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/')
- [Scheduler - Customize Appointment Details Form](/concepts/05%20Widgets/Scheduler/030%20Appointments/070%20Customize%20Appointment%20Details%20Form.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Details_Form/')
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')

[tags]scheduler, tooltip appearance, customize, templates
