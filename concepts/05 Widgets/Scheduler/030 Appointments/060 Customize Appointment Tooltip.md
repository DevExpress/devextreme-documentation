When a user clicks an appointment, the **Scheduler** shows a tooltip that can be customized. For Angular, AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/'). The following code shows how you can use **dxTemplate** to define templates for tooltips.

---

##### Angular

    <!--HTML-->
    <dx-scheduler 
        [dataSource]="schedulerData"
        appointmentTooltipTemplate="tooltipTemplate"
        [currentDate]="currentDate">
        <div *dxTemplate="let item of 'tooltipTemplate'">
            <i>{{item.text}} ({{item.year}})</i>
            <p><img src="{{item.img}}" style="height: 80px"></p>
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

#####**AngularJS**

    <!--HTML--><div ng-controller="DemoController">
        <div dx-scheduler="{
            dataSource: schedulerData,
            appointmentTooltipTemplate: 'tooltip',
            currentDate: currentDate,
        }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'tooltip' }">
                <div style="height: 100px">
                    <i>{{item.text}} ({{item.year}})</i>
                    <p><img src="{{item.img}}" style="height: 80px"></p>
                </div>
            </div>
        </div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.schedulerData = [{
                text: "His Girl Friday",
                year: 1940,
                img: "images/movies/HisGirlFriday.jpg",
                startDate: new Date(2016, 4, 24, 9, 10),
                endDate: new Date(2016, 4, 24, 11, 20)
            }, 
            // ...
            ];
            $scope.currentDate = new Date(2016, 4, 24); 
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML--><div data-bind="dxScheduler: {
        dataSource: schedulerData,
        appointmentTooltipTemplate: 'tooltip',
        currentDate: currentDate
    }">
        <div style="height: 100px" data-options="dxTemplate: { name: 'tooltip' }">
            <i> <span data-bind="text: text"></span>(<span data-bind="text: year"></span>)</i>
            <p><img style="height: 80px" data-bind="attr: { src: img }" /></p>
        </div>
    </div>
    
    <!--JavaScript-->var viewModel= {
        schedulerData: [{
            text: "His Girl Friday",
            year: 1940,
            img: "images/movies/HisGirlFriday.jpg",
            startDate: new Date(2016, 4, 24, 9, 10),
            endDate: new Date(2016, 4, 24, 11, 20)
        }, 
        // ...
        ],
        currentDate: new Date(2016, 4, 24)
    };

    ko.applyBindings(viewModel);

---

If you use only jQuery, combine HTML markup for tooltips manually with jQuery [DOM manipulation methods](https://api.jquery.com/category/manipulation). To apply this markup, use the [appointmentTooltipTemplate](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/appointmentTooltipTemplate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#appointmentTooltipTemplate') callback function as shown in the following code.

    <!--JavaScript-->var schedulerData = [{
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
            appointmentTooltipTemplate: function (data, element) {
                element.append("<i>" + data.text + "(" + data.year + ")</i>");
                element.append("<p><img style='height: 80px' src='" + data.img + "' /></p>");
            }
        });
    });

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/"
}

In addition, you can use a 3rd-party template engine to customize the widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [Scheduler - Customize Appointment](/concepts/05%20Widgets/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/')
- [Scheduler - Customize Appointment Details Form](/concepts/05%20Widgets/Scheduler/030%20Appointments/070%20Customize%20Appointment%20Details%20Form.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Details_Form/')
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')

[tags]scheduler, tooltip appearance, customize, templates
