Subvalue indicators are pointers that indicate extra values on the **LinearGauge**. These extra values are called *"subvalues"*. There is a set of predefined subvalue indicator types for the **LinearGauge** UI component.

- [Circle](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types/Circle '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/Circle/')
- [RangeBar](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types/RangeBar '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/RangeBar/')
- [Rectangle](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types/Rectangle '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/Rectangle/')
- [Rhombus](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types/Rhombus '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/Rhombus/')
- [TextCloud](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types/TextCloud '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/TextCloud/')
- [TriangleMarker](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types/TriangleMarker '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/TriangleMarker/')

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/DifferentSubvalueIndicatorTypesLinearGauge/"
}

In order to customize the appearance of the subvalue indicators, use the [subvalueIndicator](/api-reference/10%20UI%20Components/dxLinearGauge/1%20Configuration/subvalueIndicator '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/subvalueIndicator/') configuration object. Set its **type** option and then the required type-specific options. The type-specific options are listed within the UI component's [Indicator Types](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/') reference section. 

	<!--JavaScript-->var gaugeOptions = {
        subvalueIndicator: {
            type: 'textCloud',
			// Set type-specific options here
        }
    };

[note] Although the **LinearGauge** can indicate several subvalues at once, you cannot customize a particular subvalue indicator. The options specified by the **subvalueIndicator** object apply to all subvalue indicators.