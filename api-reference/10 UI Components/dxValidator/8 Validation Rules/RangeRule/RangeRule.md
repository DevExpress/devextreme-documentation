---
id: RangeRule
type: Object
module: common
export: RangeRule
---
---
##### shortDescription
A validation rule that demands the target value be within the specified value range (including the range's end points).

---
To specify the range that the validated value must match, set the rule's [min](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/RangeRule/min.md '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RangeRule/#min') and [max](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/RangeRule/max.md '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RangeRule/#max') configuration properties. Note that the specified range can be on a date-time or numeric scale. To validate a value against a string length, use the [stringLength](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/StringLengthRule '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/StringLengthRule/') rule.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/"
}

#####See Also#####
- [Data Validation](/concepts/05%20UI%20Components/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation '/Documentation/Guide/UI_Components/Common/UI_Widgets/Data_Validation/')