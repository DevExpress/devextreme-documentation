A value indicator is a pointer that designates the [main value](/api-reference/10%20UI%20Components/BaseGauge/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/#value') on the **LinearGauge**. There is a set of predefined value indicator types for this UI component.

- [Circle](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types/Circle '/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/'Circle/')
- [RangeBar](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types/RangeBar '/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/'RangeBar/')
- [Rectangle](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types/Rectangle '/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/'Rectangle/')
- [Rhombus](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types/Rhombus '/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/'Rhombus/')
- [TextCloud](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types/TextCloud '/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/'TextCloud/')
- [TriangleMarker](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types/TriangleMarker '/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/'TriangleMarker/')

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/DifferentValueIndicatorTypesLinearGauge/"
}

In order to customize the appearance of a value indicator, use the [valueIndicator](/api-reference/10%20UI%20Components/dxLinearGauge/1%20Configuration/valueIndicator '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/valueIndicator/') configuration object. Set its **type** property and then the required type-specific properties. The type-specific properties are listed within the UI component's [Indicator Types](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/') reference section. 

	<!--JavaScript-->var gaugeOptions = {
        valueIndicator: {
            type: 'rangeBar',
			// Set type-specific properties here
        }
    };


