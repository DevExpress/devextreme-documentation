---
id: dxTreeView.Options.showCheckBoxesMode
acceptValues: 'none' | 'normal' | 'selectAll'
type: String
default: 'none'
---
---
##### shortDescription
Specifies the current check boxes display mode.

---
The option accepts the following values.

- "none"  
 The widget does not display check boxes.

- "normal"  
 The widget displays a check box for each item.

- "selectAll"  
 The widget displays a check box for each item and the "select all" check box at the top of the widget.

#include common-ref-enum with {
    enum: "`TreeViewCheckBoxMode`",
    values: "`None`, `Normal`, and `SelectAll`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/ItemSelectionAndCustomization/"
}

#####See Also#####
- [Select Nodes - User Interaction](/concepts/05%20Widgets/TreeView/25%20Select%20Nodes/05%20User%20Interaction.md '/Documentation/Guide/Widgets/TreeView/Select_Nodes/#User_Interaction')