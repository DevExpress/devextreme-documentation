---
id: dxList.Options.selectionMode
acceptValues: 'all' | 'multiple' | 'none' | 'single'
type: String
default: 'none'
---
---
##### shortDescription
Specifies item selection mode.

---
This option accepts the following values.

- *"none"*  
 Selection is disabled.

- *"single"*  
 A user can select only a single item.

- *"multiple"*  
 A user can select several items.

- *"all"*  
 The **multiple** mode with a check box that selects/unselects all items.  
 If paging is enabled, the select all check box selects only items that have been already loaded.

 [note]The check box that selects/unselects all items is displayed only if the [showSelectionControls](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/showSelectionControls.md '{basewidgetpath}/Configuration/#showSelectionControls') option is enabled. Otherwise, the "all" mode works as "multiple".

#include common-ref-enum with {
    enum: "`ListSelectionMode`",
    values: "`Single`, `Multiple`, `All`, and `None`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection/"
}

#####See Also#####
- [List - Selection - User Interaction](/concepts/05%20Widgets/List/25%20Selection/01%20User%20Interaction.md '/Documentation/Guide/Widgets/List/Selection/#User_Interaction')