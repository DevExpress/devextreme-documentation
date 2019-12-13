---
id: dxTreeList.Options.editing
type: Object
---
---
##### shortDescription
Configures editing.

---
The widget allows a user to edit data in several modes, which are detailed in the [mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#mode') option. To define what editing operations a user can perform, specify the  [allowAdding](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/editing/allowAdding.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#allowAdding'), [allowUpdating](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/editing/allowUpdating.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#allowUpdating') and [allowDeleting](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/editing/allowDeleting.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#allowDeleting') options. Before enabling an operation, make sure that your data source supports it.

[note] Editing does not work with [hierarchical data sources](/concepts/05%20Widgets/TreeList/05%20Data%20Binding/015%20Use%20Hierarchical%20Data.md '/Documentation/Guide/Widgets/TreeList/Data_Binding/Use_Hierarchical_Data/') out of the box, but you can use the code sample from <a href="https://www.devexpress.com/Support/Center/Question/Details/T725094/treelist-how-to-perform-crud-operations-on-a-hierarchical-data-source" target="_blank">this KB</a> to implement it.


#####See Also#####
- [Editing](/concepts/05%20Widgets/TreeList/20%20Editing '/Documentation/Guide/Widgets/TreeList/Editing/')