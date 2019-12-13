---
id: RequiredRule
type: Object
---
---
##### shortDescription
A validation rule that demands that a validated field has a value.

---
Use this rule type to ensure the target editor value is specified. The rule will be broken in the following cases.

- If the validated value is **null**, **false**, or **undefined**.
- If the specified value has a type that is not expected for the target field (e.g., a string for the [DateBox](/api-reference/10%20UI%20Widgets/dxDateBox '/Documentation/ApiReference/UI_Widgets/dxDateBox/') widget).

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/"
}

#####See Also#####
- [Data Validation](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation '/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/')
