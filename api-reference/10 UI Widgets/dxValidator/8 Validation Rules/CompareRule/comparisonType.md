---
default: '=='
acceptValues: '==' | '!=' | '===' | '!==' | '>' | '>=' | '<' | '<='
type: String
---
---
##### shortDescription
Specifies the operator to be used for comparing the validated value with the [target](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/CompareRule/comparisonTarget.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CompareRule/#comparisonTarget').

---
When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), you can specify this option using the `ComparisonOperator` enum. This enum accepts the following values: `Equal`, `NotEqual`, `StrictEqual`, `NotStrictEqual`, `GreaterThan`, `GreaterThanOrEqual`, `LessThan` and `LessThanOrEqual`.