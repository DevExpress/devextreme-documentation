---
id: dxPivotGrid.Options.stateStoring.savingTimeout
type: Number
default: 2000
---
---
##### shortDescription
Specifies the delay between the last change of a grid state and the operation of saving this state in milliseconds.

---
When using the **PivotGrid** widget, a number of settings may be changed at runtime. When these changes are being made one after another, there is no need to save the grid state after each change. Instead, specify the **savingTimeout** option, which dictates how much time should pass between the last change of the state and the operation of saving this state.

[note] If a long timeout is specified, the grid state may be lost, e.g., if the user closes the browser before the timeout is over. Hence, be mindful when specifying the **savingTimeout** option.