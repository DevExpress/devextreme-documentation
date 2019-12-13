---
id: dxMenuBase.Options.selectionMode
acceptValues: 'none' | 'single'
type: String
default: none
---
---
##### shortDescription
Specifies the selection mode supported by the menu.

---
To select an item on click and to visually display the selection, set the [selectByClick](/api-reference/10%20UI%20Widgets/dxMenuBase/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#selectByClick') option to **true**. Note that in this case the **selectionMode** should be *"single"*.

#include common-ref-enum with {
    enum: "`MenuSelectionMode`",
    values: "`Single` and `None`"
}