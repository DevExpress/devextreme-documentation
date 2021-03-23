---
id: dxLinearGauge.Options.subvalueIndicator
type: Object
inherits: GaugeIndicator
inheritAll: 
---
---
##### shortDescription
Specifies the appearance properties of subvalue indicators.

---
The LinearGauge UI component can display one main [value](/api-reference/10%20UI%20Components/BaseGauge/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/#value') and several [subvalues](/api-reference/10%20UI%20Components/BaseGauge/1%20Configuration/subvalues.md '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/#subvalues'). The gauge's main value and subvalues are indicated by special pointers. You can customize the appearance of these pointers using the [valueIndicator](/api-reference/10%20UI%20Components/dxLinearGauge/1%20Configuration/valueIndicator '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/valueIndicator/') and **subvalueIndicator** configuration objects correspondingly.

The subvalue indicator is a pointer, which designates an extra value on a scale. There are several types of subvalue indicators. Set the required one by using the [type](/api-reference/10%20UI%20Components/dxLinearGauge/1%20Configuration/subvalueIndicator/type.md '/Documentation/ApiReference/UI_Components/dxLinearGauge/Configuration/subvalueIndicator/#type') property, and then specify the properties that are specific to this type, if needed. To learn the properties that can be specified for a particular type, refer to one of the following sections.

- [Circle](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types/Circle '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/Circle/')
- [RangeBar](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types/RangeBar '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/RangeBar/')
- [Rectangle](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types/Rectangle '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/Rectangle/')
- [Rhombus](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types/Rhombus '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/Rhombus/')
- [TextCloud](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types/TextCloud '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/TextCloud/')
- [TriangleMarker](/api-reference/10%20UI%20Components/dxLinearGauge/5%20Indicator%20Types/TriangleMarker '/Documentation/ApiReference/UI_Components/dxLinearGauge/Indicator_Types/TriangleMarker/')

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/DifferentSubvalueIndicatorTypesLinearGauge/"
}