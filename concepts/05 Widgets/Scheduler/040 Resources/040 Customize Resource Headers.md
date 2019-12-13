For AngularJS and Knockout apps, DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. The following code shows how to use **dxTemplate** to define custom templates for resource headers.

---

#####Angular

    <!--HTML-->
    <dx-scheduler 
        [dataSource]="schedulerData"
        [currentDate]="currentDate"
        [groups]="['roomId']"
        resourceCellTemplate="headerTemplate">
        <dxi-resource
            fieldExpr="roomId"
            [dataSource]="rooms" >
        </dxi-resource>
        <div *dxTemplate="let appointment of 'headerTemplate'">
            <i style="color: blue">{{appointment.text}}</i>
        </div>
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        schedulerData = [{ 
            text: "Meeting",
            startDate: new Date(2016, 4, 24, 9, 10),
            endDate: new Date(2016, 4, 24, 11, 20),
            roomId: 1
        }, 
        // ...
        ];
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

#####**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-scheduler="{
            dataSource: schedulerData,
            currentDate: currentDate,
            resources: [ roomResource ],
            groups: [ 'roomId' ],
            resourceCellTemplate: 'header'
        }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'header' }">
                <i style="color: blue">{{item.text}}</i>
            </div>
        </div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.schedulerData = [{
                text: "Meeting",
                startDate: new Date(2016, 4, 24, 9, 10),
                endDate: new Date(2016, 4, 24, 11, 20),
                roomId: 1
            }, 
            // ...
            ];
            $scope.roomResource = { 
                fieldExpr: 'roomId', 
                dataSource: [
                    { id: 1, text: 'Room101', color: 'green' },
                    { id: 2, text: 'Room102', color: 'red' },
                    // ...
                ] 
            };
            $scope.currentDate = new Date(2016, 4, 24); 
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML--><div data-bind="dxScheduler: {
        dataSource: schedulerData,
        currentDate: currentDate,
        resources: [ roomResource ],
        groups: [ 'roomId' ],
        resourceCellTemplate: 'header'
    }">
        <div data-options="dxTemplate: { name: 'header' }">
            <i style="color: blue" data-bind="text: text"></i>
        </div>
    </div>
    
    <!--JavaScript-->var viewModel= {
        schedulerData: [{
            text: "Meeting",
            startDate: new Date(2016, 4, 24, 9, 10),
            endDate: new Date(2016, 4, 24, 11, 20),
            roomId: 1
        }, 
        // ...
        ],
        roomResource: { 
            fieldExpr: 'roomId', 
            dataSource: [
                { id: 1, text: 'Room101', color: 'green' },
                { id: 2, text: 'Room102', color: 'red' },
                // ...
            ] 
        },
        currentDate: new Date(2016, 4, 24)
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for resource headers. To apply this markup, use the [resourceCellTemplate](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/resourceCellTemplate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#resourceCellTemplate') callback function as shown in the following code.

    <!--JavaScript-->var schedulerData = [{
        text: "Meeting",
        startDate: new Date(2016, 4, 24, 9, 10),
        endDate: new Date(2016, 4, 24, 11, 20),
        roomId: 1
    }, 
    // ...
    ];
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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CellTemplates/"
}

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [Scheduler - Customize Appointment](/concepts/05%20Widgets/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/')
- [Scheduler - Customize Timetable](/concepts/05%20Widgets/Scheduler/050%20Timetable.md '/Documentation/Guide/Widgets/Scheduler/Timetable/')
- [Scheduler API Reference](/api-reference/10%20UI%20Widgets/dxScheduler '/Documentation/ApiReference/UI_Widgets/dxScheduler/')

[tags]scheduler, tooltip appearance, customize, templates