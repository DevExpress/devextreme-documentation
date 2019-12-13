---
id: AsyncRule
type: Object
---
---
##### shortDescription
A custom validation rule that is checked asynchronously. Use async rules for server-side validation.

---
To specify the async rule, set the [type](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/AsyncRule/type.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/AsyncRule/#type') to *"async"* and declare the [validationCallback](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/CustomRule/validationCallback.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/CustomRule/#validationCallback') function.

You can also set a custom [message](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/AsyncRule/message.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/AsyncRule/#message'), specify whether [empty values are valid](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/AsyncRule/ignoreEmptyValue.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/AsyncRule/#ignoreEmptyValue'), and whether the rule should be [re-evaluated](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/AsyncRule/reevaluate.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/AsyncRule/#reevaluate'), even if the target value is the same.

Validation rules are checked in the following order: All the synchronous rules are checked in the same order as in the [validationRules](/api-reference/10%20UI%20Widgets/dxValidator/1%20Configuration/validationRules.md '/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules') array. Then, all the async rules are checked simultaneously.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/"
}

#####See Also#####
- [Data Validation](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/')
