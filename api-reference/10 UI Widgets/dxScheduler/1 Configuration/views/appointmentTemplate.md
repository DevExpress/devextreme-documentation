---
default: 'item'
type: template
---
---
##### shortDescription
The template to be used for rendering appointments.

##### param(itemData): object
The appointment object to be rendered.

##### param(itemIndex): number
The index of the appointment to be rendered.

##### param(itemElement): jQuery
An HTML element of the appointment to be rendered.

##### return: string|Node|jQuery
A template name or a template container.

---
A binding context of an appointment template is the data source object that corresponds to the currently rendered appointment.

So, in **Knockout approach**, you can bind template elements to the appointment object fields. To access another binding context within an appointment template, use [Knockout](https://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access appointment object fields within a template, use a variable whose name is assigned to the **dx-item-alias** directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, appointment object fields are beyond reach. To access another binding context within an appointment template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

#####AngularJS Approach#####

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-scheduler="{
            dataSource: schedulerData,
            currentDate: currentDate,
            views: views
        }" dx-item-alias="appItem">
            <div data-options="dxTemplate: {name: 'appointmentTemplate'}" style="padding: 0;">
                <div class="appointment-header">{{appItem.text}}</div>
                <div class="appointment-time">{{appItem.startDate}} - {{appItem.endDate}}</div>
            </div>
        </div>
    </div>

<!---->

    <!--JavaScript-->
    var appointements = [
        {
            text: "Website Re-Design Plan",
            priorityId: 2,
            startDate: new Date(2015, 4, 25, 9, 0),
            endDate: new Date(2015, 4, 25, 11, 30)
        }, // . . .
    ];

    var DemoApp = angular.module('DemoApp', ['dx']);
    DemoApp.controller('DemoController', function DemoController($scope) {
        $scope.currentDate: new Date(2015, 4, 25);
        $scope.schedulerData = appointements;
        $scope.views = [
            "day",
            { type: "workWeek", appointmentTemplate: "appointmentTemplate" }
        ];
    });

#####See Also#####
- [Customize Widget Element Appearance](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/30%20Customize%20Widget%20Element%20Appearance '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/')
- [Customize Widget Element Appearance - MVVM Approach](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/35%20Customize%20Widget%20Element%20Appearance%20-%20MVVM%20Approach '/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/')