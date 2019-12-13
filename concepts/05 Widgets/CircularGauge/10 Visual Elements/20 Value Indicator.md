A value indicator is a pointer that designates the [main value](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/value.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/#value') on the **CircularGauge**. There is a set of predefined value indicator types for this widget.

- [RangeBar](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/5%20Indicator%20Types/RangeBar '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/RangeBar/')
- [RectangleNeedle](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/5%20Indicator%20Types/RectangleNeedle '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/RectangleNeedle/')
- [TextCloud](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/5%20Indicator%20Types/TextCloud '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TextCloud/')
- [TriangleMarker](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/5%20Indicator%20Types/TriangleMarker '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TriangleMarker/')
- [TriangleNeedle](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/5%20Indicator%20Types/TriangleNeedle '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TriangleNeedle/')
- [TwoColorNeedle](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/5%20Indicator%20Types/TwoColorNeedle '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/TwoColorNeedle/')

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/DifferentValueIndicatorTypes/"
}

In order to customize the appearance of a value indicator, use the [valueIndicator](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/1%20Configuration/valueIndicator '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/valueIndicator/') configuration object. Set its **type** option and then the required type-specific options. The type-specific options are listed within the widget's [Indicator Types](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/5%20Indicator%20Types '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Indicator_Types/') reference section. 

	<!--JavaScript-->var gaugeOptions = {
        valueIndicator: {
            type: 'rangeBar',
			// Set type-specific options here
        }
    };


