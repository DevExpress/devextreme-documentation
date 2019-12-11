---
type: Object
---
---
##### shortDescription
Specifies options of runtime selection.

---
**DataGrid** provides users with the capability of selecting grid records at runtime. End-users can perform selection in a single or multiple mode. To specify the required mode, use the [mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#mode') property of the **selection** configuration object. You can disable selection completely using the same property.

When the multiple selection mode is specified, a user is capable of selecting all grid records at once using the main check box or the CTRL + A shortcut. To disable this feature, set the [allowSelectAll](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/selection/allowSelectAll.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll') option to *false*.

Furthermore, you can perform specific actions when a grid record has been selected/deselected. For additional information, refer to the [onSelectionChanged](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onSelectionChanged') option description.

#####See Also#####
- [DataGrid - Selection](/concepts/05%20Widgets/DataGrid/017%20Selection/010%20Selection.md '/Documentation/Guide/Widgets/DataGrid/Selection/')

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridselectionsingleselection/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>