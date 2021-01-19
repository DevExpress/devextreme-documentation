---
id: dxCircularGauge.Options.subvalueIndicator
type: Object
inherits: GaugeIndicator
inheritAll: 
---
---
##### shortDescription
Specifies the appearance properties of subvalue indicators.

---
The **CircularGauge** UI component can display one main [value](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxCircularGauge/Configuration/#value') and several [subvalues](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/subvalues.md '/Documentation/ApiReference/UI_Components/dxCircularGauge/Configuration/#subvalues'). The gauge's main value and subvalues are indicated by special pointers. You can customize the appearance of these pointers using the [valueIndicator](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/1%20Configuration/valueIndicator '/Documentation/ApiReference/UI_Components/dxCircularGauge/Configuration/valueIndicator/') and **subvalueIndicator** configuration objects correspondingly.

The subvalue indicator is a pointer which designates an extra value on a scale. There are several types of subvalue indicators. Set the required one by using the [type](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/1%20Configuration/subvalueIndicator/type.md '/Documentation/ApiReference/UI_Components/dxCircularGauge/Configuration/subvalueIndicator/#type') property, and then specify the properties that are specific to this type, if needed. To learn about the properties that can be specified for a particular type, refer to one of the following sections.

- [RangeBar](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/5%20Indicator%20Types/RangeBar '/Documentation/ApiReference/UI_Components/dxCircularGauge/Indicator_Types/RangeBar/')
- [RectangleNeedle](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/5%20Indicator%20Types/RectangleNeedle '/Documentation/ApiReference/UI_Components/dxCircularGauge/Indicator_Types/RectangleNeedle/')
- [TextCloud](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/5%20Indicator%20Types/TextCloud '/Documentation/ApiReference/UI_Components/dxCircularGauge/Indicator_Types/TextCloud/')
- [TriangleMarker](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/5%20Indicator%20Types/TriangleMarker '/Documentation/ApiReference/UI_Components/dxCircularGauge/Indicator_Types/TriangleMarker/')
- [TriangleNeedle](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/5%20Indicator%20Types/TriangleNeedle '/Documentation/ApiReference/UI_Components/dxCircularGauge/Indicator_Types/TriangleNeedle/')
- [TwoColorNeedle](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/5%20Indicator%20Types/TwoColorNeedle '/Documentation/ApiReference/UI_Components/dxCircularGauge/Indicator_Types/TwoColorNeedle/')

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/DifferentSubvalueIndicatorTypes/"
}