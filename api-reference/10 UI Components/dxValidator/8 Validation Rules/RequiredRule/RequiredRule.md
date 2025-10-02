---
id: RequiredRule
type: Object
module: common
export: RequiredRule
generateTypeLink: 
---
---
##### shortDescription
A validation rule that rejects empty and invalid values.

---
The following values break **RequiredRule**:

- [Falsy JavaScript values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) except `0`, `-0`, `0n`, and `NaN`.
- Invalid values for the target editor (e.g. a non-numeric string for the [NumberBox](/api-reference/10%20UI%20Components/dxNumberBox '/Documentation/ApiReference/UI_Components/dxNumberBox/') component).

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/"
}

#####See Also#####
- [Data Validation](/concepts/05%20UI%20Components/zz%20Common/05%20UI%20Widgets/20%20Data%20Validation '/Documentation/Guide/UI_Components/Common/UI_Widgets/Data_Validation/')
