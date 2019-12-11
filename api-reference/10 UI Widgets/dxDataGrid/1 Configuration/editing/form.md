---
type: Form options
---
---
##### shortDescription
The form configuration object. Used only when the [editing mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode') is *"form"*.

---
Use the [dataField](/api-reference/10%20UI%20Widgets/dxForm/5%20Simple%20Item/dataField.md '/Documentation/ApiReference/UI_Widgets/dxForm/Simple_Item/#dataField') option to link a form [item](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/items.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items') with the corresponding grid column.

[note]There is a number of **Form** properties that you cannot specify using this option. Those are the following.

- [template](/api-reference/10%20UI%20Widgets/dxForm/5%20Simple%20Item/template.md '/Documentation/ApiReference/UI_Widgets/dxForm/Simple_Item/#template')        
- [editorType](/api-reference/10%20UI%20Widgets/dxForm/5%20Simple%20Item/editorType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Simple_Item/#editorType')        
- any [event](/api-reference/10%20UI%20Widgets/dxForm/4%20Events '/Documentation/ApiReference/UI_Widgets/dxForm/Events/') handler ([options](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/onContentReady.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onContentReady') whose name starts with *"on..."*); instead, handle the [editorPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/editorPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#editorPreparing') or [editorPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/editorPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#editorPrepared') event to customize the form editors.