---
id: dxList.Options.selectAllMode
type: Enums.SelectAllMode
default: 'page'
---
---
##### shortDescription
Specifies the mode in which all items are selected.

---
The **selectAllMode** specifies how records should be selected on clicking the "Select All" check box. The following modes are available: 

- *"page"*  
 Selects items on the currently rendered pages.

- *"allPages"*  
 Selects items on all pages.

[note]The **selectAllMode** applies only if the [selectionMode](/api-reference/10%20UI%20Components/dxList/1%20Configuration/selectionMode.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectionMode') is set to *all* and [the selection controls are shown](/api-reference/10%20UI%20Components/dxList/1%20Configuration/showSelectionControls.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#showSelectionControls').

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection/"
}

#####See Also#####
- [List - Selection - User Interaction](/concepts/05%20UI%20Components/List/25%20Selection/01%20User%20Interaction.md '/Documentation/Guide/UI_Components/List/Selection/#User_Interaction')