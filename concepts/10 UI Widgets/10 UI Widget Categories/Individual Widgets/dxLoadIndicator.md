<article data-show="Content/Applications/16_1/UIWidgets/dxLoadIndicator/markup.html,
        Content/Applications/16_1/UIWidgets/dxLoadIndicator/script.js,
        Content/Applications/16_1/UIWidgets/dxLoadIndicator/styles.css">

The [LoadIndicator](/api-reference/10%20UI%20Widgets/dxLoadIndicator '/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/') widget is a UI element displayed when the loading process is being executed.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationsloadindicatorloadindicatorloadindicator/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

You can control widget visibility using the [visible](/api-reference/10%20UI%20Widgets/Widget/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/Configuration/#visible') option.

Get the widget instance and call the [option(optionName, optionValue)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/option(optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/Methods/#optionoptionName_optionValue') method to update the **visible** option value.

    <!--JavaScript-->
    var showLoadIndicator = function(){
        var loadIndicator = $("#loadIndicatorContainer").dxLoadIndicator("instance");
        loadIndicator.option("visible", true);
    }
    var hideLoadIndicator = function(){
        var loadIndicator = $("#loadIndicatorContainer").dxLoadIndicator("instance");
        loadIndicator.option("visible", false);
    }

In **MVVM Approach**, provide two-way binding between the [visible](/api-reference/10%20UI%20Widgets/Component/3%20Methods/option(optionName_optionValue).md '/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/Methods/#optionoptionName_optionValue') option and the corresponding variable.

#####AngularJS Approach#####
  
    <!--JavaScript-->
    function Controller($scope) {
        $scope.visible = false;
        $scope.showLoadIndicator = function() {
            $scope.visible = true;
        };
        $scope.hideLoadIndicator = function() {
            $scope.visible = false;
        }
    }

<!---->

    <!--HTML-->
    <div ng-controller="Controller">
        <div dx-load-indicator="{ bindingOptions: { 'visible': 'indicatorVisible' } }"></div>
    </div>

#####Knockout Approach#####

    <!--JavaScript-->
    var viewModel = {
        indicatorVisible: ko.observable(false);
        showLoadIndicator: function(){
            this.indicatorVisible(true);
        },
        hideLoadIndicator: function(){
            this.indicatorVisible(false);
        }
    }
    ko.applyBindings(viewModel);

<!---->

    <!--HTML-->
    <div data-bind="dxLoadIndicator: { visible: indicatorVisible }"></div>


You can use a custom image as an indicator instead of the standard indicator icons. Assign the image path to the [indicatorSrc](/api-reference/10%20UI%20Widgets/dxLoadIndicator/1%20Configuration/indicatorSrc.md '/Documentation/ApiReference/UI_Widgets/dxLoadIndicator/Configuration/#indicatorSrc') option to specify the indicator image.

    <!--JavaScript-->
    var loadIndicatorOptions = {
        indicatorSrc: '/Content/Images/loadindicator-demo.gif'
    }
    
</article>