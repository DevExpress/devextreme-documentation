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

Any configuration object should have a specific type. In this example, the `options` object has the `dxChartOptions` type, which configures the **Chart** widget. Available types along with their namespaces are listed below.

- `DevExpress.viz.charts.dxChartOptions` - [Chart](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')
- `DevExpress.viz.charts.dxPieChartOptions` - [PieChart](/api-reference/20%20Data%20Visualization%20Widgets/15%20dxPieChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/')
- `DevExpress.viz.charts.dxPolarChartOptions` - [PolarChart](/api-reference/20%20Data%20Visualization%20Widgets/17%20dxPolarChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/')
- `DevExpress.viz.treeMap.dxTreeMapOptions` - [TreeMap](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/')
- `DevExpress.viz.gauges.dxCircularGaugeOptions` - [CircularGauge](/api-reference/20%20Data%20Visualization%20Widgets/35%20dxCircularGauge '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/')
- `DevExpress.viz.gauges.dxLinearGaugeOptions` - [LinearGauge](/api-reference/20%20Data%20Visualization%20Widgets/40%20dxLinearGauge '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/')
- `DevExpress.viz.gauges.dxBarGaugeOptions` - [BarGauge](/api-reference/20%20Data%20Visualization%20Widgets/45%20dxBarGauge '/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/')
- `DevExpress.viz.rangeSelector.dxRangeSelectorOptions` - [RangeSelector](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/')
- `DevExpress.viz.sparklines.dxSparklineOptions` - [Sparkline](/api-reference/20%20Data%20Visualization%20Widgets/60%20dxSparkline '/Documentation/ApiReference/Data_Visualization_Widgets/dxSparkline/')
- `DevExpress.viz.sparklines.dxBulletOptions` - [Bullet](/api-reference/20%20Data%20Visualization%20Widgets/55%20dxBullet '/Documentation/ApiReference/Data_Visualization_Widgets/dxBullet/')
- `DevExpress.viz.map.dxVectorMapOptions` - [VectorMap](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/')

After you have declared a configuration object, pass it to the [jQuery plugin](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Create_and_Configure_a_Widget') ...

    $('#chartContainer').dxChart(options);  

... [Knockout binding](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Create_and_Configure_a_Widget') ...

    var viewModel = {
        chartOptions: options
	};

	ko.applyBindings(viewModel);

<!---->

    <!--HTML--><div data-bind="dxChart: chartOptions"></div>

... or [AngularJS directive](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Create_and_Configure_a_Widget').

    function Controller($scope) {
		$scope.chartOptions = options;
	}

<!---->

    <!--HTML--><div ng-controller="Controller">
		<div dx-chart="chartOptions"></div>
	</div>

[note]TypeScript is only for _declaring_ a widget configuration. You still need to use jQuery, Knockout or AngularJS to _apply_ this configuration.