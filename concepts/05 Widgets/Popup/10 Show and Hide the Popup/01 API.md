[note] In this article, the [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') widget is used to demonstrate how to show and hide the **Popup**. This choice is made for purely demonstrational purposes, and you can do the same operations using another widget following the same guidelines.

To show or hide the **Popup** programmatically, call the [show()](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/show().md '/Documentation/ApiReference/UI_Widgets/dxPopup/Methods/#show') or [hide()](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/hide().md '/Documentation/ApiReference/UI_Widgets/dxPopup/Methods/#hide') method. The same thing can be done using the [toggle(showing)](/api-reference/10%20UI%20Widgets/dxOverlay/3%20Methods/toggle(showing).md '/Documentation/ApiReference/UI_Widgets/dxPopup/Methods/#toggleshowing') method. Pass **true** or **false** to this method to show or hide the **Popup**, respectively.

---

#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->$(function() {
        $("#popupContainer").dxPopup({
            title: "Popup Title",
            contentTemplate: function () {
                return $("<p />").text("Popup content");
            }
        });
        $("#showButton").dxButton({
            text: "Show the Popup", 
            onClick: function () {
                $("#popupContainer").dxPopup("show");
                // === or ===
                $("#popupContainer").dxPopup("toggle", true);
            } 
        });
        $("#hideButton").dxButton({
            text: "Hide the Popup", 
            onClick: function () {
                $("#popupContainer").dxPopup("hide");
                // === or ===
                $("#popupContainer").dxPopup("toggle", false);
            } 
        });
    });

#####[**ASP.NET MVC Controls**](/concepts/35%20ASP.NET%20MVC%20Controls/20%20Fundamentals/05%20Creating%20a%20Widget.md '/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget')

    <!--Razor C#-->
    @(Html.DevExtreme().Popup()
        .ID("popup")
        .Title("Popup Title")
        .ContentTemplate(@<text>
            <p>Popup content</p>
        </text>)
    )

    @(Html.DevExtreme().Button()
        .ID("showButton")
        .Text("Show the Popup")
        .OnClick(@<text>
            function () {
                $("#popup").dxPopup("show");
                // === or ===
                $("#popup").dxPopup("toggle", true);
            } 
        </text>)
    )

    @(Html.DevExtreme().Button()
        .ID("hideButton")
        .Text("Hide the Popup")
        .OnClick(@<text>
            function () {
                $("#popup").dxPopup("hide");
                // === or ===
                $("#popup").dxPopup("toggle", false);
            } 
        </text>)
    )

    <!--Razor VB-->@Code
        Html.DevExtreme().Popup() _
            .ID("popup") _
            .Title("Popup Title") _
            .ContentTemplate(Sub()
                @<text>
                    <p>Popup content</p>
                </text>
            End Sub).Render()
        Html.DevExtreme().Button() _
            .ID("showButton") _
            .Text("Show the Popup") _
            .OnClick("showButton_click").Render()
        Html.DevExtreme().Button() _
            .ID("hideButton") _
            .Text("Hide the Popup") _
            .OnClick("hideButton_click").Render()
    End Code

    <script>
        function showButton_click() {
            $("#popup").dxPopup("show");
            // === or ===
            $("#popup").dxPopup("toggle", true);
        }
        function hideButton_click() {
            $("#popup").dxPopup("hide");
            // === or ===
            $("#popup").dxPopup("toggle", false);
        }
    </script>

---

With AngularJS or Knockout, use a different technique. Bind the [visible](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#visible') property of the **Popup** widget to a scope property (in AngularJS) or an observable variable (in Knockout). After that, change this scope property or observable variable, and the **Popup** will appear or disappear.

---

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/') 

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-popup="{
            title: 'Popup Title',
            bindingOptions: {
                visible: 'isPopupVisible'
            }
        }">
            <p>Popup Content</p>
        </div>
        <div dx-button="{
            text: 'Show the Popup',
            onClick: showPopup
        }"></div>
        <div dx-button="{
            text: 'Hide the Popup',
            onClick: hidePopup
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.isPopupVisible = false;
            $scope.showPopup = function () {
                $scope.isPopupVisible = true;
            };
            $scope.hidePopup = function () {
                $scope.isPopupVisible = false;
            };
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <div data-bind="dxPopup: {
        title: 'Popup Title',
        visible: isPopupVisible
    }">
        <p>Popup Content</p>
    </div>
    <div data-bind="dxButton: {
        text: 'Show the Popup',
        onClick: function (e) {
            e.model.isPopupVisible(true);
        }
    }"></div>
    <div data-bind="dxButton: {
        text: 'Hide the Popup',
        onClick: function (e) {
            e.model.isPopupVisible(false);
        }
    }"></div>

    <!--JavaScript-->var viewModel = {
        isPopupVisible: ko.observable(false)
    };

    ko.applyBindings(viewModel);

---