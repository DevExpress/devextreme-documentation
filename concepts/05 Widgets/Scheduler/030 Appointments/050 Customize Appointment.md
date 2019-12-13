For a minor customization of **Scheduler** appointments, you can define [specific fields](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/dataSource '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/dataSource/') in appointment data objects. For example, the following code generates three appointments: the first is not customized, the second is hidden, and the third is disabled.

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

---

If you need a more flexible solution, define a custom template. For Angular, AngularJS and Knockout apps, DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. The following code shows how to use **dxTemplate** to define templates for appointments.

---

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

#####**AngularJS**

    <!--HTML--><div ng-controller="DemoController">
        <div dx-scheduler="{
            dataSource: schedulerData,
            appointmentTemplate: 'appointment',
            currentDate: currentDate,
        }" dx-item-alias="model">
            <div data-options="dxTemplate: { name: 'appointment' }">
                <i>{{model.appointmentData.movie}}</i>
                <p>Price: ${{model.appointmentData.price}}</p>
            </div>
        </div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.schedulerData = [{
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
            $scope.currentDate = new Date(2016, 4, 24); 
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML--><div data-bind="dxScheduler: {
        dataSource: schedulerData,
        appointmentTemplate: 'appointment',
        currentDate: currentDate
    }">
        <div data-options="dxTemplate: { name: 'appointment' }">
            <i data-bind="text: appointmentData.movie"></i>
            <p>Price: $<span data-bind="text: appointmentData.price"></span></p>
        </div>
    </div>

    <!--JavaScript-->var viewModel = {
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

---

If you use only jQuery, combine HTML markup for appointments manually with jQuery <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a>. To apply this markup, use the [appointmentTemplate](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/appointmentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#appointmentTemplate') callback function as shown in the following code.

[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')

    <!--JavaScript-->var schedulerData = [{
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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/"
}

You can also customize an individual appointment. For this purpose, declare a template for this appointment as a script and pass its `id` to the [template](/api-reference/_hidden/dxSchedulerAppointment/template.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/dataSource/#template') field of the appointment's data object.

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

In addition, you can use a 3rd-party template engine to customize the widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [Scheduler - Customize Appointment Tooltip](/concepts/05%20Widgets/Scheduler/030%20Appointments/060%20Customize%20Appointment%20Tooltip.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Tooltip/')
- [Scheduler - Customize Appointment Details Form](/concepts/05%20Widgets/Scheduler/030%20Appointments/070%20Customize%20Appointment%20Details%20Form.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Details_Form/')
- [Scheduler - Customize Resource Headers](/concepts/05%20Widgets/Scheduler/040%20Resources/040%20Customize%20Resource%20Headers.md '/Documentation/Guide/Widgets/Scheduler/Resources/Customize_Resource_Headers/')
- [Scheduler - Customize Timetable](/concepts/05%20Widgets/Scheduler/050%20Timetable.md '/Documentation/Guide/Widgets/Scheduler/Timetable/')
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')


[tags]scheduler, appointment appearance, customize, templates
