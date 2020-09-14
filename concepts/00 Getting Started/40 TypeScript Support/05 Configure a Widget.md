The following code example shows how to declare a widget configuration object using TypeScript.

    window.onload = () => {
        var options: DevExpress.viz.charts.dxChartOptions;
        options = {
            dataSource: [
                { fruit: 'Oranges', total: 10 },
                { fruit: 'Apples', total: 15 },
                { fruit: 'Bananas', total: 9 }
            ],
            series: { argumentField: 'fruit', valueField: 'total' }
        };  
    };

Any configuration object should have a specific type. In this example, the `options` object has the `dxChartOptions` type, which configures the **Chart** widget. Type names are formed by concatenating the widget name (in this example, `dxChart`) and `Options`.

The part that preceeds the type is its namespace. DevExtreme widgets are declared in the following namespaces.

- `DevExpress.viz.charts` - [dxChart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/'), [dxPieChart](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/') and [dxPolarChart](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/')
- `DevExpress.viz.treeMap` - [dxTreeMap](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/')
- `DevExpress.viz.gauges` - [dxCircularGauge](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/'), [dxLinearGauge](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/') and [dxBarGauge](/api-reference/20%20Data%20Visualization%20Widgets/dxBarGauge '/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/')
- `DevExpress.viz.rangeSelector` - [dxRangeSelector](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/')
- `DevExpress.viz.sparklines` - [dxSparkline](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/') and [dxBullet](/api-reference/20%20Data%20Visualization%20Widgets/dxBullet '/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/')
- `DevExpress.viz.map` - [dxVectorMap](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/')
- `DevExpress.ui` - [all other widgets](/api-reference/10%20UI%20Widgets '/Documentation/ApiReference/UI_Widgets/')

After you have declared a configuration object, pass it to the [jQuery plugin](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget') ...

    $("#chartContainer").dxChart(options);  

... [Knockout binding](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget') ...

    var viewModel = {
        chartOptions: options
	};

	ko.applyBindings(viewModel);

<!---->

    <!--HTML--><div data-bind="dxChart: chartOptions"></div>

... or [AngularJS directive](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget').

    function Controller($scope) {
		$scope.chartOptions = options;
	}

<!---->

    <!--HTML--><div ng-controller="Controller">
		<div dx-chart="chartOptions"></div>
	</div>

[note]TypeScript is only for _declaring_ a widget configuration. You still need to use jQuery, Knockout or AngularJS to _apply_ this configuration.


#####See Also#####
- **API Reference**.**WidgetName**.**Configuration**, for example, **API Reference**.[Chart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart').[Configuration](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/')

[tags]typescript support, configure, initialize, type definitions, namespaces