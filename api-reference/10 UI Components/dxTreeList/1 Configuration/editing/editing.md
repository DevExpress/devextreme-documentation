---
id: dxTreeList.Options.editing
type: Object
---
---
##### shortDescription
Configures editing.

---
The UI component allows a user to edit data in several modes, which are detailed in the [mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#mode') property. To define what editing operations a user can perform, specify the  [allowAdding](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/editing/allowAdding.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowAdding'), [allowUpdating](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/editing/allowUpdating.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowUpdating') and [allowDeleting](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/editing/allowDeleting.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowDeleting') properties. Before enabling an operation, make sure that your data source supports it.

[note] Editing does not work with [hierarchical data sources](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/SimpleArrayHierarchicalStructure/) out of the box, but you can use the code sample from <a href="https://www.devexpress.com/Support/Center/Question/Details/T725094/treelist-how-to-perform-crud-operations-on-a-hierarchical-data-source" target="_blank">this KB</a> to implement it.


#####See Also#####
- [Editing](/concepts/05%20UI%20Components/TreeList/20%20Editing '/Documentation/Guide/UI_Components/TreeList/Editing/')