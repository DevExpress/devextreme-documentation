---
##### merge

---
The option accepts the following values.

- "useButtons"  
 Enables an end-user to apply the selected value or cancel the selection using the Apply and Cancel buttons respectively.

- "instantly"  
 Applies the selected value immediately after a user clicks the required value in the drop-down menu. This mode cannot be used if the [pickerType](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/pickerType.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#pickerType') is *"rollers"* or the [type](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#type') is *"datetime"*.

#include common-ref-enum with {
    enum: "`EditorApplyValueMode`",
    values: "`Instantly` and `UseButtons`"
}