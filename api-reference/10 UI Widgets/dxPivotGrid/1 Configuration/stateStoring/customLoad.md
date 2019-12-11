---
type: function()
---
---
##### shortDescription
Specifies a callback function that performs specific actions on state loading.

##### return: deferred object
A pivot grid state.

---
If you chose the *custom* state storing [type](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/stateStoring/type.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#type'), use the functions assigned to the [customSave](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/stateStoring/customSave.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#customSave') and **customLoad** options for handling state changes. The function assigned to the **customLoad** option is called when a state is restored. This function should return an object representing a pivot grid state. Normally, it is the object saved within the [customSave](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/stateStoring/customSave.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#customSave') function.