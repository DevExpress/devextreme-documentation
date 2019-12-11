For operating with AngularJS, DevExtreme includes an [AngularJS module](https://docs.angularjs.org/api/angular.module) registered under the name *"dx"*. Add it to the list of [dependencies](https://docs.angularjs.org/guide/module#module-loading-dependencies) for your application module.

	<!--JavaScript-->angular.module('myApp', [ 'dx' ]);

The *"dx"* module contains [directives](https://docs.angularjs.org/guide/directive) that you use to create any DevExtreme widget. For instance, the `dx-chart` directive creates a [Chart](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/') widget, `dx-range-selector` creates a [RangeSelector](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/'), etc. Note that all DevExtreme directives satisfy the [AngularJS normalization rules](https://docs.angularjs.org/guide/directive#normalization): **dx-***widget-name*.

Any DevExtreme directive should be associated with a `<div>` HTML element, which plays the role of a container for the widget. For example, the following code creates a **Chart** widget in a `<div>` container.

    <!--HTML--><div dx-chart=""></div>

To configure a widget, pass an object to the widget directive. Note that the properties of this object mirror the options of the widget.

    <!--HTML--><div dx-chart="{ 
	    dataSource: [
            { fruit: 'Oranges', total: 10 },
            { fruit: 'Apples', total: 15 },
            { fruit: 'Bananas', total: 9 }
		],
		series: { argumentField: 'fruit', valueField: 'total' }
	 }"></div>

#####See Also#####
- [Reference](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/') | **WidgetName** | **Configuration** - describes all options of a specific DevExtreme widget.

You can initialize a widget option with the value of a [scope](https://docs.angularjs.org/guide/scope) property. For example, the following code declares the `fruitsData` property within the scope of a controller. The `dataSource` option of a **Chart** is initialized with the value of this property.

    <!--JavaScript-->function Controller ($scope) {
		$scope.fruitsData = [
            { fruit: 'Oranges', total: 10 },
            { fruit: 'Apples', total: 15 },
            { fruit: 'Bananas', total: 9 }
        ];
	}
    
<!---->

    <!--HTML--><div ng-controller="Controller">
		<div dx-chart="{
            dataSource: fruitsData,
            series: { argumentField: 'fruit', valueField: 'total' }
        }"></div>
	</div>

[note]Initializing widget options in this manner does not mean that the widget option will be changed once its scope property is changed. If you are looking for this kind of data binding, refer to the [Change Options](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/05%20Change%20Options.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Change_Options') topic.

As an alternative, you can declare the whole object of widget options in the scope and pass it to the widget directive.

    <!--JavaScript-->function Controller($scope) {
		$scope.chartOptions = {
			dataSource: [
                { fruit: 'Oranges', total: 10 },
                { fruit: 'Apples', total: 15 },
                { fruit: 'Bananas', total: 9 }
            ],
            series: { argumentField: 'fruit', valueField: 'total' }
		};
	}

<!---->

    <!--HTML--><div ng-controller="Controller">
		<div dx-chart="chartOptions"></div>
	</div>