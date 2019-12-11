---
default: 'none'
acceptValues: 'none' | 'multiple' | 'single' | 'all'
type: String
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

 When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ListSelectionMode` enum. This enum accepts the following values: `Single`, `Multiple`, `All` and `None`.

#####See Also#####
- [List - Selection - User Interaction](/concepts/05%20Widgets/List/25%20Selection/01%20User%20Interaction.md '/Documentation/Guide/Widgets/List/Selection/#User_Interaction')

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>