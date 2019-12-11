---
module: ui/date_box
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

- **jQuery**  
 Use the `dxDateBox` jQuery plug-in.

        <!--HTML-->
        <div id="dateBox"></div>

    <!---->

        <!--JavaScript-->
        $("#dateBox").dxDateBox({
            min: new Date(2000,0,1),
            max: new Date(2029,11,31),
            value: new Date()
        });

- **Knockout**  
 Add a div element and apply the `dxDateBox` binding to this element.

        <!--JavaScript-->
        var myViewModel = {
            minDate: new Date(2000,0,1),
            maxDate: new Date(2029,11,31),
            currentValue: new Date()
        }
        ko.applyBindings(myViewModel);

    <!---->

        <!--HTML-->
        <div data-bind="dxDateBox: {
            min: minDate,
            max: maxDate,
            value: currentValue
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-date-box` directive to this element.

        <!--JavaScript-->
        var myApp = angular.module('myApp', ['dx']);
        myApp.controller("demoController", function ($scope) {
            $scope.minDate = new Date(2000,0,1);
            $scope.maxDate = new Date(2029,11,31);
            $scope.currentValue = new Date();
        });
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['myApp']);
        });

    <!---->

        <!--HTML-->
        <div dx-date-box="{
            min: minDate,
            max: maxDate,
            bindingOptions: {
                value: 'currentValue'
            }
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/10%20UI%20Widgets/0%20Basics/01%20Installation '/Documentation/Guide/UI_Widgets/Basics/Installation/') article.

You can find detailed information on principles of working with the widget in the [dxDateBox section](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets/List%20of%20Editor%20Widgets/dxDateBox.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#List_of_Editor_Widgets/dxDateBox') of the [Editor Widgets](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/20%20Editor%20Widgets '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorsdateboxdateboxdatebox/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>