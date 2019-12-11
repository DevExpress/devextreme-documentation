A pivot grid can be bound only to an existing chart. 

#####See Also#####
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/') - information on working with widgets with jQuery approach
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/') - information on working with widgets with AngularJS approach
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/') - information on working with widgets with Knockout approach

For example, assume you have the following code that creates a pivot grid in the `pivotGridWidget` container and a chart in the `chartWidget` container.

    <!--HTML-->
    <!-- for jQuery -->
    <div id="pivotGridWidget" style="height:400px; max-width:700px"></div>
    <div id="chartWidget" style="height:400px; max-width:700px"></div>

    <!-- for Knockout -->
    <div id="pivotGridWidget" style="height:400px; max-width:700px" data-bind="dxPivotGrid: pivotGridOptions"></div>
    <div id="chartWidget" style="height:400px; max-width:700px" data-bind="dxChart: chartOptions"></div>

    <!-- for AngularJS -->
    <div ng-controller="widgetController">
        <div id="pivotGridWidget" style="height:400px; max-width:700px" dx-pivot-grid="pivotGridOptions"></div>
        <div id="chartWidget" style="height:400px; max-width:700px" dx-chart="chartOptions"></div>
    </div>

<!--------->

    <!--JavaScript-->// for jQuery
    $(function () {
        $("#pivotGridWidget").dxPivotGrid({ ... });
        $("#chartWidget").dxChart({ ... });
    });

    // for Knockout
    var viewModel = {
        pivotGridOptions: { ... },
        chartOptions: { ... }
    };

    ko.applyBindings(viewModel);

    // for AngularJS
    angular
        .module('myApp', ['dx']);
        .controller("widgetController", function ($scope) {
            $scope.pivotGridOptions = { ... };
            $scope.chartOptions = { ... };
        });

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['myApp']);
    });

To bind these two widgets together without changing the default integration options, call the `bindChart(chart, integrationOptions)` using one of the following constructions.

    <!--JavaScript-->// Passing the chart instance
    var chartInstance = $("#chartWidget").dxChart("instance");
    var pivotGridInstance = $("#pivotGridWidget").dxPivotGrid("instance");
    pivotGridInstance.bindChart(chartInstance);

<!--------->

    <!--JavaScript-->// Passing the selector of the chart container
    var pivotGridInstance = $("#pivotGridWidget").dxPivotGrid("instance");
    pivotGridInstance.bindChart('#chartWidget');

<!--------->

    <!--JavaScript-->// Passing the jQuery element
    var pivotGridInstance = $("#pivotGridWidget").dxPivotGrid("instance");
    pivotGridInstance.bindChart($('#chartWidget'));

This method can be called at any point of the application flow. For example, you can bind the chart once it is initialized.

    <!--JavaScript-->// for jQuery
    $(function () {
        $("#pivotGridWidget").dxPivotGrid({ ... });
        $("#chartWidget").dxChart({
            // ...
            onInitialized: function (e) {
                var pivotGridInstance = $("#pivotGridWidget").dxPivotGrid("instance");
                pivotGridInstance.bindChart('#chartWidget');
            }
        });
    });

    // for Knockout
    var viewModel = {
        pivotGridOptions: { ... },
        chartOptions: { 
            // ...
            onInitialized: function (e) {
                var pivotGridInstance = $("#pivotGridWidget").dxPivotGrid("instance");
                pivotGridInstance.bindChart('#chartWidget');
            }
        }
    };

    ko.applyBindings(viewModel);

    // for AngularJS
    angular
        .module('myApp', ['dx']);
        .controller("widgetController", function ($scope) {
            $scope.pivotGridOptions = { ... };
            $scope.chartOptions = {
                // ...
                onInitialized: function (e) {
                    var pivotGridInstance = $("#pivotGridWidget").dxPivotGrid("instance");
                    pivotGridInstance.bindChart('#chartWidget');
                }
            };
        });

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['myApp']);
    });

The `bindChart(chart, integrationOptions)` method returns a function that unbinds the chart. If the method has returned *null*, the binding failed.

    <!--JavaScript-->var unbindChart = pivotGridInstance.bindChart('#chartWidget');
    // ...
    if (unbindChart)
        unbindChart();

The next topic shows how **PivotGrid** transforms its data before sending it to **Chart** and how you can govern this process.