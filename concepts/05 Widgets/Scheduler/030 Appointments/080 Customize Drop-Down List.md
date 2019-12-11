When the full-sized appointment [limit](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/maxAppointmentsPerCell.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#maxAppointmentsPerCell') per cell is exceeded, appointments are aggregated in an appointment collector. Clicking it displays a customizable drop-down list with appointments. Use the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component to customize this list in Angular, AngularJS and Knockout apps.

---
##### Angular

    <!--HTML-->
    <dx-scheduler  ...
        [dataSource]="schedulerData"
        dropDownAppointmentTemplate="ddAppointment">
        <div *dxTemplate="let item of 'ddAppointment'">
            <div class="drop-down-appointment">
                <div class="drop-down-appointment-content">{{item.text}}</div>
                <div class="edit"><dx-button icon="event"></dx-button></div>
            </div>
        </div>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        schedulerData = [{
            text: "Website Re-Design Plan",
            startDate: new Date(2017, 4, 22, 9, 30),
            endDate: new Date(2017, 4, 22, 11, 30)
        },
        // ...
        ];
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
    .drop-down-appointment {
        border-bottom: 1px solid lightsteelblue;
        display: flex;
        padding: 10px;
        width: 300px
    }
    .drop-down-appointment-content {
        vertical-align: middle;
        margin: 8px;
    }
    .edit {
        float: right;
        height: 35px;
        position: absolute;
        right: 10px;
    }

#####AngularJS

    <!--HTML--><div ng-controller="DemoController">
        <div dx-scheduler="{
            ...
            dataSource: schedulerData,
            dropDownAppointmentTemplate: 'ddAppointment'
        }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'ddAppointment' }">
                <div class="drop-down-appointment">
                    <div class="drop-down-appointment-content">{{item.text}}</div>
                    <div class="edit" dx-button="{ icon: 'event' }"></div>
                </div>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.schedulerData = [{
                text: "Website Re-Design Plan",
                startDate: new Date(2017, 4, 22, 9, 30),
                endDate: new Date(2017, 4, 22, 11, 30)
            },
            // ...
            ];
        });

    <!--CSS-->
    .drop-down-appointment {
        border-bottom: 1px solid lightsteelblue;
        display: flex;
        padding: 10px;
        width: 300px
    }
    .drop-down-appointment-content {
        vertical-align: middle;
        margin: 8px;
    }
    .edit {
        float: right;
        height: 35px;
        position: absolute;
        right: 10px;
    }

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####Knockout

    <!--HTML--><div data-bind="dxScheduler: {
        ...
        dataSource: schedulerData,
        dropDownAppointmentTemplate: 'ddAppointment'
    }">
        <div data-options="dxTemplate: { name: 'ddAppointment' }">
            <div class="drop-down-appointment">
                <div class="drop-down-appointment-content" data-bind="text: text"></div>
                <div class="edit" data-bind="dxButton: { icon: 'event' }"></div>
            </div>
        </div>
    </div>
    
    <!--JavaScript-->var viewModel= {
        schedulerData: [{
            text: "Website Re-Design Plan",
            startDate: new Date(2017, 4, 22, 9, 30),
            endDate: new Date(2017, 4, 22, 11, 30)
        },
        // ...
        ]
    };

    ko.applyBindings(viewModel);

    <!--CSS-->
    .drop-down-appointment {
        border-bottom: 1px solid lightsteelblue;
        display: flex;
        padding: 10px;
        width: 300px
    }
    .drop-down-appointment-content {
        vertical-align: middle;
        margin: 8px;
    }
    .edit {
        float: right;
        height: 35px;
        position: absolute;
        right: 10px;
    }

---

If you use only jQuery, manually combine HTML markup for the drop-down list using jQuery [DOM manipulation methods](https://api.jquery.com/category/manipulation). To apply this markup, use the [dropDownAppointmentTemplate](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dropDownAppointmentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dropDownAppointmentTemplate') callback function as shown in the following code:

    <!--JavaScript-->var schedulerData = [{
        text: "Website Re-Design Plan",
        startDate: new Date(2017, 4, 22, 9, 30),
        endDate: new Date(2017, 4, 22, 11, 30)
    }, 
    // ...
    ];

    $(function () {
        $("#schedulerContainer").dxScheduler({
            dataSource: [{
                text: "Website Re-Design Plan",
                startDate: new Date(2017, 4, 22, 9, 30),
                endDate: new Date(2017, 4, 22, 11, 30)
            },
            // ...
            ],
            dropDownAppointmentTemplate: function (data, index, element) {
                var markup =  $("<div class='drop-down-appointment'>" + 
                                "<div class='drop-down-appointment-content'>" + data.text + "</div>"  + 
                                "<div class='edit'></div>" +
                                "</div>");  
                markup.find(".edit").dxButton({ icon: "event" });
                return markup;
            }
        });
    });

    <!--CSS-->
    .drop-down-appointment {
        border-bottom: 1px solid lightsteelblue;
        display: flex;
        padding: 10px;
        width: 300px
    }
    .drop-down-appointment-content {
        vertical-align: middle;
        margin: 8px;
    }
    .edit {
        float: right;
        height: 35px;
        position: absolute;
        right: 10px;
    }

You can also use a 3rd-party template engine to customize the widget appearance. See the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article for more information.

#####See Also#####
- [Scheduler - Customize Appointment](/concepts/05%20Widgets/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/')
- [Scheduler - Customize Appointment Details Form](/concepts/05%20Widgets/Scheduler/030%20Appointments/070%20Customize%20Appointment%20Details%20Form.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Details_Form/')
- [Scheduler - Customize Appointment Tooltip](/concepts/05%20Widgets/Scheduler/030%20Appointments/060%20Customize%20Appointment%20Tooltip.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Tooltip/')

[tags]scheduler, drop-down list, customize, templates, dropDownAppointmentTemplate
