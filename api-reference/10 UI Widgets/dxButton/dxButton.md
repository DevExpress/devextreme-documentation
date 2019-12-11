---
module: ui/button
export: default
inherits: ..\Widget\Widget.md
---
---
##### widgettree
icon: "favorites",
text: "Click"

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Button** widget is a simple button that performs specified commands when a user clicks it.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function () {
        $("#button").dxButton({
            text: "Click me",
            onClick: function() {
                alert("The Button was clicked");
            }
        });
    });

    <!--HTML--><div id="button"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-button
        text="Click me"
        (onClick)="buttonClicked()">
    </dx-button>

    <!--TypeScript-->
    import { DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        buttonClicked() {
            alert("The Button was clicked");
        }
    }
    @NgModule({
        imports: [
            // ...
            DxButtonModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-button="{
            text: 'Click me',
            onClick: buttonClicked
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.buttonClicked = function () {
                alert("The Button was clicked");
            };
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML--><div data-bind="dxButton: {
        text: 'Click me',
        onClick: function () {
            alert('The Button was clicked');
        }
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Button()
        .ID("button")
        .Text("Click me")
        .OnClick(@<text>
            function () {
                alert("The Button was clicked");
            }
        </text>)
    )

    <!--Razor VB-->@(Html.DevExtreme().Button() _
        .ID("button") _
        .Text("Click me") _
        .OnClick("button_click")
    )
    <script>
        function button_click() {
            alert("The Button was clicked");
        }
    </script>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistsbuttonbuttonbutton/"
}

#####See Also#####
- [Button - Overview](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/')