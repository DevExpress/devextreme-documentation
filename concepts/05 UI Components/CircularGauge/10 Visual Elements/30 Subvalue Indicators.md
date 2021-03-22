Subvalue indicators are pointers that indicate extra values on the CircularGauge. These extra values are called *"subvalues"*. There is a set of predefined subvalue indicator types for the CircularGauge UI component.

- [RangeBar](/api-reference/10%20UI%20Components/dxCircularGauge/5%20Indicator%20Types/RangeBar '/Documentation/ApiReference/UI_Components/dxCircularGauge/Indicator_Types/RangeBar/')
- [RectangleNeedle](/api-reference/10%20UI%20Components/dxCircularGauge/5%20Indicator%20Types/RectangleNeedle '/Documentation/ApiReference/UI_Components/dxCircularGauge/Indicator_Types/RectangleNeedle/')
- [TextCloud](/api-reference/10%20UI%20Components/dxCircularGauge/5%20Indicator%20Types/TextCloud '/Documentation/ApiReference/UI_Components/dxCircularGauge/Indicator_Types/TextCloud/')
- [TriangleMarker](/api-reference/10%20UI%20Components/dxCircularGauge/5%20Indicator%20Types/TriangleMarker '/Documentation/ApiReference/UI_Components/dxCircularGauge/Indicator_Types/TriangleMarker/')
- [TriangleNeedle](/api-reference/10%20UI%20Components/dxCircularGauge/5%20Indicator%20Types/TriangleNeedle '/Documentation/ApiReference/UI_Components/dxCircularGauge/Indicator_Types/TriangleNeedle/')
- [TwoColorNeedle](/api-reference/10%20UI%20Components/dxCircularGauge/5%20Indicator%20Types/TwoColorNeedle '/Documentation/ApiReference/UI_Components/dxCircularGauge/Indicator_Types/TwoColorNeedle/')

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/DifferentSubvalueIndicatorTypes/"
}

In order to customize the appearance of the subvalue indicators, use the [subvalueIndicator](/api-reference/10%20UI%20Components/dxCircularGauge/1%20Configuration/subvalueIndicator '/Documentation/ApiReference/UI_Components/dxCircularGauge/Configuration/subvalueIndicator/') configuration object. Set its **type** property and then the required type-specific properties. The type-specific properties are listed within the UI component's [Indicator Types](/api-reference/10%20UI%20Components/dxCircularGauge/5%20Indicator%20Types '/Documentation/ApiReference/UI_Components/dxCircularGauge/Indicator_Types/') reference section. 

	<!--JavaScript-->var gaugeOptions = {
        subvalueIndicator: {
            type: 'textCloud',
			// Set type-specific properties here
        }
    };

[note] Although the CircularGauge can indicate several subvalues at once, you cannot customize a particular subvalue indicator. The properties specified by the **subvalueIndicator** object apply to all subvalue indicators.