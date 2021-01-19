---
id: dxTreeView.Options.selectionMode
acceptValues: 'multiple' | 'single'
type: String
default: 'multiple'
---
---
##### shortDescription
Specifies item selection mode. Applies only if selection is enabled.

---
To enable selection, set [selectByClick](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#selectByClick') to **true** or [showCheckBoxesMode](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/showCheckBoxesMode.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#showCheckBoxesMode') to *"normal"* or *"selectAll"*.

#include common-ref-enum with {
    enum: "`NavSelectionMode`",
    values: "`Single` and `Multiple`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/ItemSelectionAndCustomization/"
}