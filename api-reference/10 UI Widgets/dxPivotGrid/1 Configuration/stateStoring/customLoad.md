---
id: dxPivotGrid.Options.stateStoring.customLoad
type: function()
---
---
##### shortDescription
Specifies a function that is executed on state loading. Applies only if the [type](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/stateStoring/type.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#type') is *"custom"*.

##### return: Promise<Object>
The widget state. As a rule, it is a state that you save within the [customSave](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/stateStoring/customSave.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#customSave') function.

---
Use the **customSave** and **customLoad** functions to manually implement state storing: in **customSave**, save the state to a custom storage; in **customLoad**, load it. You can also adjust the state in both functions. See an example in the [customSave](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/stateStoring/customSave.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/stateStoring/#customSave') topic.