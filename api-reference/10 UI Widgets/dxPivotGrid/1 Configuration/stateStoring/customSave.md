---
type: function(state)
---
---
##### shortDescription
Specifies a callback function that performs specific actions on state saving.

##### param(state): object
The current pivot grid state.

---
If you chose the *custom* state storing [type](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/stateStoring/type.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#type'), use the functions assigned to the **customSave** and [customLoad](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/stateStoring/customLoad.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#customLoad') options for handling state changes. The function assigned to the **customSave** option is called every time a pivot grid state is changed. You can access the currently changed pivot grid state using the function's first parameter. The state is represented by an [opaque data object](https://en.wikipedia.org/wiki/Opaque_data_type).