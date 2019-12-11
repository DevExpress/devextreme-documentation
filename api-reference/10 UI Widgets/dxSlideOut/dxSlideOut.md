---
module: ui/slide_out
export: default
inherits: ..\CollectionWidget\CollectionWidget.md
---
---
##### lib
dx.mobile.js, dx.all.js

##### shortDescription
The **SlideOut** widget is a classic slide-out menu paired with a view. An end user opens the menu by swiping away the view.

---
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#slideOut").dxSlideOut({
            dataSource: ['SuperLCD 42', 'SuperLED 42', 'SuperLED 50',
                        'SuperLCD 55', 'SuperLCD 70', 'DesktopLCD 19',
                        'DesktopLCD 21', 'DesktopLED 21'],
            onItemClick: function (e) {
                e.component.hideMenu();
            }
        });
    });

    <!--HTML-->
    <div id="slideOut"></div>

    <!--CSS-->#slideOut {
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-slide-out
        [dataSource]="displays"
        (onItemClick)="closeSlideOut($event)">
    </dx-slide-out>

    <!--TypeScript-->
    export class AppComponent {
        displays = [
            // ...
        ];
        closeSlideOut = function (e) {
            e.component.hideMenu();
        }
    }

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div id="slideOut" dx-slide-out="{
        dataSource: displays,
        onItemClick: closeSlideOut
    }"></div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.displays = [
                'SuperLCD 42', 'SuperLED 42', 'SuperLED 50',
                'SuperLCD 55', 'SuperLCD 70', 'DesktopLCD 19',
                'DesktopLCD 21', 'DesktopLED 21'  
            ];
            $scope.closeSlideOut = function (e) {
                e.component.hideMenu();
            }
        });

    <!--CSS-->#slideOut {
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div id="slideOut" data-bind="dxSlideOut: {
        dataSource: [
            'SuperLCD 42', 'SuperLED 42', 'SuperLED 50',
            'SuperLCD 55', 'SuperLCD 70', 'DesktopLCD 19',
            'DesktopLCD 21', 'DesktopLED 21'
        ],
        onItemClick: function (e) {
            e.component.hideMenu();
        }
    }"></div>

    <!--CSS-->#slideOut {
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }

#####[**ASP.NET MVC Controls**](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget')

    <!--Razor C#-->@(Html.DevExtreme().SlideOut()
        .ID("slideOut")
        .DataSource(new [] {
            "SuperLCD 42", "SuperLED 42", "SuperLED 50",
            "SuperLCD 55", "SuperLCD 70", "DesktopLCD 19",
            "DesktopLCD 21", "DesktopLED 21"
        })
        .OnItemClick(@<text>
            function (e) {
                e.component.hideMenu();
            }
        </text>)
    )

    <!--Razor VB-->@(Html.DevExtreme().SlideOut() _
        .ID("slideOut") _
        .DataSource({
            "SuperLCD 42", "SuperLED 42", "SuperLED 50",
            "SuperLCD 55", "SuperLCD 70", "DesktopLCD 19",
            "DesktopLCD 21", "DesktopLED 21"
        }) _
        .OnItemClick("slideOut_itemClick")
    )
    <script>
        function slideOut_itemClick(e) {
            e.component.hideMenu();
        }
    </script>

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationslideoutslideoutgroupingmenuitems/iphone/ios7/default/default"
}

#####See Also#####
- [SlideOut - Overview](/concepts/05%20Widgets/SlideOut/00%20Overview.md '/Documentation/Guide/Widgets/SlideOut/Overview/')