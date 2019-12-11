---
module: ui/load_panel
export: default
inherits: ..\dxOverlay\dxOverlay.md
---
---
##### widgettree
visible: true

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **LoadPanel** is an overlay widget notifying the viewer that loading is in progress.

---
You can create the widget using one of the following approaches.

- [**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <div id="loadPanel"></div>

        <!--JavaScript-->$(function () {
            $("#loadPanel").dxLoadPanel({
                closeOnOutsideClick: true,
                visible: true
            });
        });

- [**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

        <!--HTML-->
        <dx-load-panel
            [closeOnOutsideClick]="true"
            [(visible)]="isLoadPanelVisible">
        </dx-load-panel>

        <!--JavaScript-->
        export class AppComponent {
            isLoadPanelVisible = true;
        }

- [**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-load-panel="{
                closeOnOutsideClick: true,
                bindingOptions: {
                    visible: 'isLoadPanelVisible'
                }
            }"></div>
        </div>

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller('DemoController', function DemoController($scope) {
                $scope.isLoadPanelVisible = true;
            });

- [**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

        <!--HTML--><div data-bind="dxLoadPanel: {
            closeOnOutsideClick: true,
            visible: isLoadPanelVisible
        }"></div>

        <!--JavaScript-->var viewModel = {
            isLoadPanelVisible: ko.observable(true)
        };
        ko.applyBindings(viewModel);

- [**ASP.NET MVC Wrappers**](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget')

        <!--Razor C#-->@(Html.DevExtreme().LoadPanel()
            .ID("loadPanel")
            .CloseOnOutsideClick(true)
            .Visible(true)
        )

        <!--Razor VB-->@(Html.DevExtreme().LoadPanel() _
            .ID("loadPanel") _
            .CloseOnOutsideClick(True) _
            .Visible(True)
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/concepts/00%20Getting%20Started/01%20Installation/01%20Local%20Scripts.md '/Documentation/Guide/Getting_Started/Installation/Local_Scripts/') section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationsloadpanelloadpanelloadpanel/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [LoadPanel - Overview](/concepts/05%20Widgets/LoadPanel/00%20Overview.md '/Documentation/Guide/Widgets/LoadPanel/Overview/')
- [LoadPanel - Show and Hide Using the API](/concepts/05%20Widgets/LoadPanel/05%20Show%20and%20Hide%20Using%20the%20API.md '/Documentation/Guide/Widgets/LoadPanel/Show_and_Hide_Using_the_API/')