Appointments are aggregated in an appointment collector when the [limit of full-sized appointments per cell](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/maxAppointmentsPerCell.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#maxAppointmentsPerCell') is exceeded. Users should click on it to open a drop-down list of appointments. 

![Scheduler Appointment Collector and Drop-Down List](/images/UiWidgets/Scheduler_Appointment_Collector_and_Drop-Down_List.png)

Use the [appointmentCollectorTemplate](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/appointmentCollectorTemplate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#appointmentCollectorTemplate') and [dropDownAppointmentTemplate](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dropDownAppointmentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dropDownAppointmentTemplate') options to customize the elements. 

In the following code, the compact and non-compact appointment collectors have different texts, and a custom button that opens a details form is added near each appointment:

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#schedulerContainer").dxScheduler({
            // ...
            dropDownAppointmentTemplate: function (data, index, element) {
                var container = $("<div>" + data.text + "</div>");
                var button = $("<span class='edit'>").dxButton({ icon: "event" });
                element.append(container.append(button));
            },
            appointmentCollectorTemplate: function(data, element) {
                if(data.isCompact) {
                    element[0].innerText = data.appointmentCount;
                } else {
                    element[0].innerText = "Total: " + data.appointmentCount;
                }
                element.addClass("collector");
            }
        });
    });

    <!--CSS-->
    .edit{
        margin-left: 10px;
    }
    .collector {
        font-style: italic;
        color: aliceblue;
    }

##### Angular

    <!--HTML-->
    <dx-scheduler  ...
        dropDownAppointmentTemplate="ddAppointment"
        appointmentCollectorTemplate="collectorTemplate">
        <div *dxTemplate="let item of 'ddAppointment'">
            <div>
                {{item.text}}
                <span class="edit"><dx-button icon="event"></dx-button></span>
            </div>
        </div>
        <div *dxTemplate="let data of 'collectorTemplate'" class="collector">
            <div *ngIf="data.isCompact">{{data.appointmentCount}}</div>
            <div *ngIf="!data.isCompact">Total: {{data.appointmentCount}}</div>
        </div>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule,
            DxButtonModule
        ],
        // ...
    })

    <!--CSS-->
    ::ng-deep .edit {
        margin-left: 10px;
    }
    ::ng-deep .collector {
        font-style: italic;
        color: aliceblue;
    }

#####AngularJS

    <!--HTML--><div ng-controller="DemoController">
        <div dx-scheduler="{
            ...
            dropDownAppointmentTemplate: 'ddAppointment',
            appointmentCollectorTemplate: 'collectorTemplate'
        }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'ddAppointment' }">
                <div>
                    {{item.text}}
                    <span class="edit" dx-button="{ icon: 'event' }</span>
                </div>
            </div>
            <div data-options="dxTemplate: { name: 'collectorTemplate' }" class="collector">
                <div ng-if="item.isCompact">{{item.appointmentCount}}</div>
                <div ng-if="!item.isCompact">Total: {{item.appointmentCount}}</div>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            // ...
        });

    <!--CSS-->
    .edit {
        margin-left: 10px;
    }
    .collector {
        font-style: italic;
        color: aliceblue;
    }

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####Knockout

    <!--HTML--><div data-bind="dxScheduler: {
        ...
        dropDownAppointmentTemplate: 'ddAppointment',
        appointmentCollectorTemplate: 'collectorTemplate'
    }">
        <div data-options="dxTemplate: { name: 'ddAppointment' }">
            <div>
                <span data-bind="text: text"></span>
                <span class="edit" data-bind="dxButton: { icon: 'event' }"></span>
            </div>
        </div>
        <div data-options="dxTemplate: { name: 'collectorTemplate' }" class="collector">
                <div data-bind="if: isCompact">
                    <span data-bind="text: appointmentCount"></span>
                </div>
                <div data-bind="if: !isCompact">
                    Total: <span data-bind="text: appointmentCount"></span>
                </div>
        </div>
    </div>

    <!--CSS-->
    .edit {
        margin-left: 10px;
    }
    .collector {
        font-style: italic;
        color: aliceblue;
    }

---

In case of jQuery, you can also use a 3rd-party template engine to customize the widget's appearance. See the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article for more information.

#####See Also#####
- [Customize Appointment](/concepts/05%20Widgets/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/')
- [Customize Appointment Details Form](/concepts/05%20Widgets/Scheduler/030%20Appointments/070%20Customize%20Appointment%20Details%20Form.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Details_Form/')
- [Customize Appointment Tooltip](/concepts/05%20Widgets/Scheduler/030%20Appointments/060%20Customize%20Appointment%20Tooltip.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Tooltip/')

[tags]scheduler, drop-down list, customize, templates, dropDownAppointmentTemplate
