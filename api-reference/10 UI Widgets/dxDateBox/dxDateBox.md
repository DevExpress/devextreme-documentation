---
module: ui/date_box
export: default
inherits: ..\dxDropDownEditor\dxDropDownEditor.md
---
---
##### widgettree
opened: true

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **DateBox** is a widget that displays date and time in a specified format, and enables a user to pick or type in the required date/time value.

---
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#dateBox").dxDateBox({
            min: new Date(2000, 0, 1),
            max: new Date(2029, 11, 31),
            value: new Date()
        });
    });

    <!--HTML--><div id="dateBox"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-date-box
        [min]="minDate"
        [max]="maxDate"
        [(value)]="currentDate">
    </dx-date-box>

    <!--TypeScript-->
    export class AppComponent {
        minDate = new Date(2000, 0, 1);
        maxDate = new Date(2029, 11, 31);
        currentDate = new Date();
    }

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-date-box="{
            min: minDate,
            max: maxDate,
            bindingOptions: {
                value: 'currentDate'
            }
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.minDate = new Date(2000, 0, 1);
            $scope.maxDate = new Date(2029, 11, 31);
            $scope.currentDate = new Date();
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxDateBox: {
        min: new Date(2000, 0, 1),
        max: new Date(2029, 11, 31),
        value: currentDate
    }"></div>

    <!--JavaScript-->var viewModel = {
        currentDate: ko.observable(new Date())
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget')
    
    <!--Razor C#-->@(Html.DevExtreme().DateBox()
        .ID("dateBox")
        .Min(new DateTime(2000, 1, 1))
        .Max(new DateTime(2029, 12, 31))
        .Value(DateTime.Now)
    )

    <!--Razor VB-->@(Html.DevExtreme().DateBox() _
        .ID("dateBox") _
        .Min(New DateTime(2000, 1, 1)) _
        .Max(New DateTime(2029, 12, 31)) _
        .Value(DateTime.Now)
    )

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/editorsdateboxdateboxdatebox/"
}

#####See Also#####
- [DateBox - Overview](/concepts/05%20Widgets/DateBox/00%20Overview.md '/Documentation/Guide/Widgets/DateBox/Overview/')