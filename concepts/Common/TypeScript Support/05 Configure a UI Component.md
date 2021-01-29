The following code example shows how to declare a UI component configuration object using TypeScript.

    window.onload = () => {
        var properties: DevExpress.viz.charts.dxChartOptions;
        options = {
            dataSource: [
                { fruit: 'Oranges', total: 10 },
                { fruit: 'Apples', total: 15 },
                { fruit: 'Bananas', total: 9 }
            ],
            series: { argumentField: 'fruit', valueField: 'total' }
        };  
    };

Any configuration object should have a specific type. In this example, the `options` object has the `dxChartOptions` type, which configures the **Chart** UI component. Type names are formed by concatenating the UI component name (in this example, `dxChart`) and `Options`.

The part that preceeds the type is its namespace. DevExtreme UI components are declared in the following namespaces.

- `DevExpress.viz.charts` - [dxChart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/UI_Components/dxChart/'), [dxPieChart](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart '/Documentation/ApiReference/UI_Components/dxPieChart/') and [dxPolarChart](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart '/Documentation/ApiReference/UI_Components/dxPolarChart/')
- `DevExpress.viz.treeMap` - [dxTreeMap](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap '/Documentation/ApiReference/UI_Components/dxTreeMap/')
- `DevExpress.viz.gauges` - [dxCircularGauge](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge '/Documentation/ApiReference/UI_Components/dxCircularGauge/'), [dxLinearGauge](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge '/Documentation/ApiReference/UI_Components/dxLinearGauge/') and [dxBarGauge](/api-reference/20%20Data%20Visualization%20Widgets/dxBarGauge '/Documentation/ApiReference/UI_Components/dxBarGauge/')
- `DevExpress.viz.rangeSelector` - [dxRangeSelector](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector '/Documentation/ApiReference/UI_Components/dxRangeSelector/')
- `DevExpress.viz.sparklines` - [dxSparkline](/api-reference/20%20Data%20Visualization%20Widgets/dxSparkline '/Documentation/ApiReference/UI_Components/dxSparkline/') and [dxBullet](/api-reference/20%20Data%20Visualization%20Widgets/dxBullet '/Documentation/ApiReference/UI_Components/dxBullet/')
- `DevExpress.viz.map` - [dxVectorMap](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap '/Documentation/ApiReference/UI_Components/dxVectorMap/')
- `DevExpress.ui` - [all other UI components](/api-reference/10%20UI%20Widgets '/Documentation/ApiReference/UI_Components/')

After you have declared a configuration object, pass it to the [jQuery plugin](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/01%20Create%20and%20Configure%20a%20Component.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Create_and_Configure_a_Component') ...

    $("#chartContainer").dxChart(options);  

... [Knockout binding](/concepts/Getting%20Started/Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget') ...

    var viewModel = {
        chartOptions: options
	};

	ko.applyBindings(viewModel);

<!---->

    <!--HTML--><div data-bind="dxChart: chartOptions"></div>

... or [AngularJS directive](/concepts/Getting%20Started/Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget').

    function Controller($scope) {
		$scope.chartOptions = options;
	}

<!---->

    <!--HTML--><div ng-controller="Controller">
		<div dx-chart="chartOptions"></div>
	</div>

[note]TypeScript is only for _declaring_ a UI component configuration. You still need to use jQuery, Knockout or AngularJS to _apply_ this configuration.


#####See Also#####
- **API Reference**.**WidgetName**.**Configuration**, for example, **API Reference**.[Chart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/UI_Components/dxChart').[Configuration](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration '/Documentation/ApiReference/UI_Components/dxChart/Configuration/')

[tags]typescript support, configure, initialize, type definitions, namespaces