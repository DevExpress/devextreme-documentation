---
id: RangeRule
type: Object
---
---
##### shortDescription
A validation rule that demands the target value be within the specified value range (including the range's end points).

---
To specify the range that the validated value must match, set the rule's [min](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/RangeRule/min.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RangeRule/#min') and [max](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/RangeRule/max.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RangeRule/#max') configuration options. Note that the specified range can be on a date-time or numeric scale. To validate a value against a string length, use the [stringLength](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/StringLengthRule '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/StringLengthRule/') rule.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/"
}

#####See Also#####
- [Data Validation](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/')