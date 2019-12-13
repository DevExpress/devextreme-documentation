---
id: dxDataGrid.Options.selection.selectAllMode
acceptValues: 'allPages' | 'page'
type: String
default: 'allPages'
---
---
##### shortDescription
Specifies the mode in which all the records are selected. Applies only if **selection**.[allowSelectAll](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/selection/allowSelectAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll') is **true**.

---
**selectAllMode** specifies how records should be selected on clicking the ["Select All" check box](/concepts/05%20Widgets/DataGrid/50%20Selection/10%20User%20Interaction.md '/Documentation/Guide/Widgets/DataGrid/Selection/#User_Interaction') and by calling the [selectAll()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/selectAll().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#selectAll')/[deselectAll()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/deselectAll().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#deselectAll') methods. The following modes are available.

- *"page"*  
 Selects records on currently rendered pages.       
 
 [note]This mode is incompatible with [deferred selection](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/deferred.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred').

- *"allPages"*  
 Selects records on all pages.

#include common-ref-enum with {
    enum: "`SelectAllMode`",
    values: "`Page` and `AllPages`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MultipleRecordSelectionModes/"
} 


#####See Also#####
- [Selection - User Interaction](/concepts/05%20Widgets/DataGrid/50%20Selection/10%20User%20Interaction.md '/Documentation/Guide/Widgets/DataGrid/Selection/#User_Interaction')