---
default: 'none'
acceptValues: 'none' | 'multiple' | 'single' | 'all'
type: string
---
---
##### shortDescription
Specifies item selection mode.

---
This option accepts the following values.

- *'none'*  
 Selection is disabled.

- *'single'*  
 A user can select only a single item.

- *'multiple'*  
 A user can select several items.

- *'all'*  
 The **multiple** mode with a check box that selects/unselects all items.  
 Note that if paging is enabled, the select all check box selects only items that have been already loaded.

 [note]The check box that selects/unselects all items is displayed only if the [showSelectionControls](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/showSelectionControls.md '{basewidgetpath}/Configuration/#showSelectionControls') option is enabled. Otherwise, the 'all' mode works as 'multiple'.