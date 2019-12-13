A value indicator is a pointer that designates the [main value](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/value.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/#value') on the **LinearGauge**. There is a set of predefined value indicator types for this widget.

- [Circle](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/5%20Indicator%20Types/Circle '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Circle/')
- [RangeBar](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/5%20Indicator%20Types/RangeBar '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/RangeBar/')
- [Rectangle](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/5%20Indicator%20Types/Rectangle '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Rectangle/')
- [Rhombus](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/5%20Indicator%20Types/Rhombus '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/Rhombus/')
- [TextCloud](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/5%20Indicator%20Types/TextCloud '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/TextCloud/')
- [TriangleMarker](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/5%20Indicator%20Types/TriangleMarker '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/TriangleMarker/')

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/DifferentValueIndicatorTypesLinearGauge/"
}

In order to customize the appearance of a value indicator, use the [valueIndicator](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/1%20Configuration/valueIndicator '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Configuration/valueIndicator/') configuration object. Set its **type** option and then the required type-specific options. The type-specific options are listed within the widget's [Indicator Types](/api-reference/20%20Data%20Visualization%20Widgets/dxLinearGauge/5%20Indicator%20Types '/Documentation/ApiReference/Data_Visualization_Widgets/dxLinearGauge/Indicator_Types/') reference section. 

	<!--JavaScript-->var gaugeOptions = {
        valueIndicator: {
            type: 'rangeBar',
			// Set type-specific options here
        }
    };


