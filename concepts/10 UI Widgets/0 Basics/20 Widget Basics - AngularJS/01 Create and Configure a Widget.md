For operating with AngularJS, DevExtreme includes an [AngularJS module](https://docs.angularjs.org/api/angular.module) registered under the name *"dx"*. Add it to the list of [dependencies](https://docs.angularjs.org/guide/module#module-loading-dependencies) for your application module.

	<!--JavaScript-->angular.module('myApp', [ 'dx' ]);

The *"dx"* module contains [directives](https://docs.angularjs.org/guide/directive) that you use to create any DevExtreme widget. For instance, the `dx-button` directive creates a [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/') widget, `dx-range-slider` creates a [RangeSlider](/api-reference/10%20UI%20Widgets/dxRangeSlider '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/'), etc. Note that all DevExtreme directives satisfy the [AngularJS normalization rules](https://docs.angularjs.org/guide/directive#normalization): **dx-***widget-name*.

Any DevExtreme directive should be associated with a `<div>` HTML element, which plays the role of a container for the widget. For example, the following code creates a **Menu** widget in a `<div>` container.

    <!--HTML--><div dx-menu=""></div>

To configure a widget, pass an object to the widget directive. Note that the properties of this object mirror the options of the widget.

    <!--HTML--><div dx-menu='{ 
	    dataSource: [
            {
                text: "Guides",
                items: [
                    { text: "VS Integration" },
                    { text: "UI Widgets" },
                    { text: "Data Visualization" },
                    { text: "Data Layer" }
                ]
            },
            . . .
        ],
        selectByClick: true
	 }'></div>

#####See Also#####
- [Reference](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/') | **WidgetName** | **Configuration** - describes all options of a specific DevExtreme widget.

You can initialize widget options with the value of a [scope](https://docs.angularjs.org/guide/scope) property. For example, the following code declares the `menuItems` property within the scope of a controller. The `dataSource` option of a **Menu** is initialized with the value of this property.

    <!--JavaScript-->function Controller ($scope) {
		$scope.menuItems = [
            {
                text: "Guides",
                items: [
                    { text: "VS Integration" },
                    { text: "UI Widgets" },
                    { text: "Data Visualization" },
                    { text: "Data Layer" }
                ]
            },
            . . .
        ];
	}
    
<!---->

    <!--HTML--><div ng-controller="Controller">
		<div dx-menu="{
            dataSource: menuItems,
            selectByClick: true
        }"></div>
	</div>

[note]Initializing widget options in this manner does not mean that the widget option will be changed once its scope property is changed. If you are looking for this kind of data binding, refer to the [Change Options](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/05%20Change%20Options.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Change_Options') topic.

As an alternative, you can declare the whole object of widget options in the scope and pass it to the widget directive.

    <!--JavaScript-->function Controller($scope) {
		$scope.menuOptions = {
			dataSource: [
                {
                    text: "Guides",
                    items: [
                        { text: "VS Integration" },
                        { text: "UI Widgets" },
                        { text: "Data Visualization" },
                        { text: "Data Layer" }
                    ]
                },
                ...
            ],
            selectByClick: true
		};
	}

<!---->

    <!--HTML--><div ng-controller="Controller">
		<div dx-menu="menuOptions"></div>
	</div>