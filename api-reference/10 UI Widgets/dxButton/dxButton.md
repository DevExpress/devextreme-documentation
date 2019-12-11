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
You can create the widget using one of the following approaches.

- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML--><div id="button"></div>

        <!--JavaScript-->$(function () {
            $("#button").dxButton({
                text: 'Click me',
                onClick: function() {
                    alert("The Button was clicked");
                }
            });
        });

- [**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <dx-button
            text="Click me"
            (onClick)="buttonClicked()">
        </dx-button>

        <!--JavaScript-->
        export class AppComponent {
            buttonClicked() {
                alert("The Button was clicked");
            }
        }

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-button="{
                text: 'Click me',
                onClick: buttonClicked
            }"></div>
        </div>

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.buttonClicked = function () {
                    alert("The Button was clicked");
                };
            });

- [**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

        <!--HTML--><div data-bind="dxButton: {
            text: 'Click me',
            onClick: function () {
                alert('The Button was clicked');
            }
        }"></div>

- [**ASP.NET MVC Wrappers**](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget')

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

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistsbuttonbuttonbutton/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Button - Overview](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/')