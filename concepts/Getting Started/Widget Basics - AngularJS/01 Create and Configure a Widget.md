Make sure you linked all the required resources before creating a widget:

- **Link Resources**: [Local Scripts](/concepts/Common/Distribution%20Channels/15%20ZIP%20Archive.md '/Documentation/Guide/Common/Distribution_Channels/ZIP_Archive/') | [CDN Services](/concepts/Common/Distribution%20Channels/05%20CDN '/Documentation/Guide/Common/Distribution_Channels/CDN/') | [NuGet Package](/concepts/Common/Distribution%20Channels/10%20NuGet.md '/Documentation/Guide/Common/Distribution_Channels/NuGet/') | [npm Package](/concepts/Common/Distribution%20Channels/01%20npm.md '/Documentation/Guide/Common/Distribution_Channels/npm/')

For operating with AngularJS, DevExtreme includes an <a href="https://docs.angularjs.org/api/ng/function/angular.module" target="_blank">AngularJS module</a> registered under the name *"dx"*. Add it to the list of <a href="https://docs.angularjs.org/guide/module#module-loading-dependencies" target="_blank">dependencies</a> for your application module.

    <!--JavaScript-->angular.module('myApp', [ 'dx' ]);

The *"dx"* module contains <a href="http://docs.angularjs.org/guide/directive" target="_blank">directives</a> that you use to create any DevExtreme widget. For instance, the `dx-button` directive creates a [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/') widget, `dx-range-slider` creates a [RangeSlider](/api-reference/10%20UI%20Widgets/dxRangeSlider '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/'), etc. Note that all DevExtreme directives satisfy the <a href="https://docs.angularjs.org/guide/directive#normalization" target="_blank">AngularJS normalization rules</a>: **dx-***widget-name*.

Any DevExtreme directive should be associated with a `<div>` HTML element, which plays the role of a container for the widget. For example, the following code creates a [Chart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/') widget in a `<div>` container.

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

You can initialize widget options with the value of a <a href="http://docs.angularjs.org/guide/scope" target="_blank">scope</a> property. For example, the following code declares the `fruitsData` property within the scope of a controller. The **dataSource** option of a dxChart is initialized with the value of this property.

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

[note]Initializing widget options in this manner does not mean that the widget option will be changed once its scope property is changed. If you are looking for this kind of data binding, refer to the [Change Options](/concepts/Getting%20Started/Widget%20Basics%20-%20AngularJS/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Change_Options') topic.

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

#####See Also#####
- **API Reference**.**WidgetName**.**Configuration**, for example, **API Reference**.[Chart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart').[Configuration](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/')
- [Change Options](/concepts/Getting%20Started/Widget%20Basics%20-%20AngularJS/05%20Change%20Options.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Change_Options')

[tags]basics, angularjs, create, configure, initialize, design time, scope properties
