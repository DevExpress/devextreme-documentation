---
id: dxTreeView.Options.showCheckBoxesMode
acceptValues: 'none' | 'normal' | 'selectAll'
type: String
default: 'none'
---
---
##### shortDescription
Specifies the checkbox display mode.

---
The option accepts the following values:

- *"none"*    
The UI component does not display checkboxes.

- *"normal"*        
The UI component displays one checkbox per item.

- *"selectAll"*       
The UI component displays one checkbox per item and one "Select All" checkbox at the top of the UI component. The [selectionMode](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#selectionMode') should be *"multiple"*.

#include common-ref-enum with {
    enum: "`TreeViewCheckBoxMode`",
    values: "`None`, `Normal`, and `SelectAll`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/ItemSelectionAndCustomization/"
}

#####See Also#####
- [selectByClick](/api-reference/10%20UI%20Components/dxTreeView/1%20Configuration/selectByClick.md '/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#selectByClick')