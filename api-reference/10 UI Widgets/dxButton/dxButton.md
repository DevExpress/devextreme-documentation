---
module: ui/button
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

- **jQuery**  
 Use the `dxButton` jQuery plug-in.

        <!--HTML-->
        <div id="button"></div>

    <!---->

        <!--JavaScript-->
        $("#button").dxButton({
            text: 'Click me',
            onClick: function() {
                alert('Button clicked');
            }
        });

- **Knockout**  
 Add a div element and apply the `dxButton` binding to this element.

        <!--JavaScript-->
        var myViewModel = {
            buttonClicked: function() {
                alert('Button clicked');
            }
        }
        ko.applyBindings(myViewModel);

    <!---->

        <!--HTML-->
        <div data-bind="dxButton: {
            text: 'Click me',
            onClick: buttonClicked
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-button` directive to this element.

        <!--JavaScript-->
        var myApp = angular.module('myApp', ['dx']);
        myApp.controller("demoController", function ($scope) {
            $scope.buttonClicked = function () {
                alert('Button clicked');
            };
        });
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['myApp']);
        });

    <!---->

        <!--HTML-->
        <div dx-button="{
            text: 'Click me',
            onClick: buttonClicked
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

You can find the detailed information on principles of working with the widget in the [dxButton section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/Individual%20Widgets/dxButton.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/#dxButton') of the [Individual Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/Individual%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistsbuttonbuttonbutton/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>