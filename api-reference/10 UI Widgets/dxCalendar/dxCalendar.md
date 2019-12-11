---
module: ui/calendar
export: default
inherits: ..\Editor\Editor.md
---
---
##### widgettree

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Calendar** is a widget that displays a calendar and allows an end user to select the required date within a specified date range.

---
You can create the widget using one of the following approaches.

- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML--><div id="calendar"></div>

        <!--JavaScript-->$(function () {
            $("#calendar").dxCalendar({
                min: new Date(2000, 1, 1),
                max: new Date(2029, 12, 31),
                firstDayOfWeek: 1,
                value: new Date()
            });
        });

- [**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <dx-calendar
            [min]="minDate"
            [max]="maxDate"
            [firstDayOfWeek]="1"
            [(value)]="currentDate">
        </dx-calendar>

        <!--JavaScript-->
        export class AppComponent {
            minDate = new Date(2000, 0, 1);
            maxDate = new Date(2029, 11, 31);
            currentDate = new Date();
        }

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-calendar="{
                min: minDate,
                max: maxDate,
                firstDayOfWeek: 1,
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

- [**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

        <!--HTML--><div data-bind="dxCalendar: {
            min: new Date(2000, 1, 1),
            max: new Date(2029, 12, 31),
            firstDayOfWeek: 1,
            value: currentDate
        }"></div>

        <!--JavaScript-->var viewModel = {
            currentDate: ko.observable(new Date())
        };
        ko.applyBindings(viewModel);

- [**ASP.NET MVC Wrappers**](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget')

        <!--Razor C#-->@(Html.DevExtreme().Calendar()
            .ID("calendar")
            .Min(new DateTime(2000, 1, 1))
            .Max(new DateTime(2029, 12, 31))
            .FirstDayOfWeek(FirstDayOfWeek.Monday)
            .Value(DateTime.Now)
        )

        <!--Razor VB-->@(Html.DevExtreme().Calendar() _
            .ID("calendar") _
            .Min(New DateTime(2000, 1, 1)) _
            .Max(New DateTime(2029, 12, 31)) _
            .FirstDayOfWeek(FirstDayOfWeek.Monday) _
            .Value(DateTime.Now)
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorscalendarcalendarcalendar/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=qB6_tMJfEjQ&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=29" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Calendar - Overview](/concepts/05%20Widgets/Calendar/00%20Overview.md '/Documentation/Guide/Widgets/Calendar/Overview/')