---
id: CompareRule
type: Object
---
---
##### shortDescription
A validation rule that demands that a validated editor has a value that is equal to a specified expression.

---
To specify the expression that the validated field must match, set the rule's [comparisonTarget](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/CompareRule/comparisonTarget.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CompareRule/#comparisonTarget') configuration option. Assign a function to this option. The validated value will be compared to the function's return value. The comparison will be performed by using the operator that is set for the [comparisonType](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/CompareRule/comparisonType.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CompareRule/#comparisonType') option.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/"
}

#####See Also#####
- [Data Validation](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/')