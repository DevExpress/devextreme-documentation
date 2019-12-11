---
dep: 
default: 'onMovingComplete'
acceptValues: 'onMovingComplete' | 'onMoving'
type: String
---
---
##### deprecated
Use the [callValueChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/behavior/callValueChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/#callValueChanged') option instead.

##### shortDescription
Specifies when to call the [onSelectedRangeChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/onSelectedRangeChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#onSelectedRangeChanged') function.

---
When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ValueChangedCallMode` enum. This enum accepts the following values: `OnMoving` and `OnMovingComplete`.