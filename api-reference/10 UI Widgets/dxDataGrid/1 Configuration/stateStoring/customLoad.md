---
type: function()
---
---
##### shortDescription
Specifies a callback function that performs specific actions on state loading.

##### return: deferred object
A grid state.

---
If you chose the *custom* state storing [type](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/stateStoring/type.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#type'), use the functions assigned to the **customSave** and **customLoad** options for handling state changes. The function assigned to the **customLoad** option is called when a state is restored. This function should return an object representing a grid state. Normally, it is the object saved within the [customSave](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/stateStoring/customSave.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/#customSave') function.