---
type: dxForm_Options
---
---
##### shortDescription
The form configuration object. Used only when the [editing mode](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode') is *"form"*.

---
Default form editors depend on the [columns' configuration](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/'). If the generated form does not meet your requirements, and you need to reorganize form items or set other [form parameters](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/'), specify the **form** option. To link a [form item](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/items.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items') with a grid column, assign identical values to the **form** | **items** | [dataField](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField') and **columns** | [dataField](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/dataField.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField') options.

[note]
 
There is a number of form parameters that you cannot specify using this option. They are the following.

- [template](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#template')        
- [readOnly](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/readOnly.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#readOnly')          
- [editorType](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType')        
- any [event](/api-reference/10%20UI%20Widgets/dxForm/4%20Events '/Documentation/ApiReference/UI_Widgets/dxForm/Events/') handler ([options](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/onContentReady.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onContentReady') whose name starts with *"on..."*); instead, handle the [editorPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/editorPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#editorPreparing') or [editorPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/editorPrepared.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#editorPrepared') event to customize the form editors.

[/note]

#####See Also#####
- [Form Guides](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/')