---
id: GridBaseColumn.validationRules
type: Array<RequiredRule, NumericRule, RangeRule, StringLengthRule, CustomRule, CompareRule, PatternRule, EmailRule, AsyncRule>
---
---
##### shortDescription
Specifies [validation rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/') to be checked when cell values are updated.

---
[note]You can use the **AsyncRule** only in the Form and Popup [editing modes](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'). Other modes do not support async validation.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/DataValidation/"
}

#####See Also#####
- [Data Validation](/concepts/05%20Widgets/DataGrid/20%20Editing/50%20Data%20Validation.md '/Documentation/Guide/Widgets/{WidgetName}/Editing/#Data_Validation')
- [rowValidating](/api-reference/10%20UI%20Widgets/GridBase/4%20Events/rowValidating.md '{basewidgetpath}/Events/#rowValidating')
