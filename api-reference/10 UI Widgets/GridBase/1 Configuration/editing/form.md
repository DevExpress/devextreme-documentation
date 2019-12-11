---
type: dxForm_Options
---
---
##### shortDescription
Configures the form. Used only if **editing**.[mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode') is *"form"* or *"popup"*.

---
Default form editors depend on the [columns' configuration](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns '{basewidgetpath}/Configuration/columns/'). If the generated form does not meet your requirements, and you need to reorganize form items or set other [form options](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/'), specify it in the **form** object. To link a [form item](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/items.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items') with a grid column, assign identical values to the **form**.**items**.[dataField](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField') and **columns**.[dataField](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/dataField.md '{basewidgetpath}/Configuration/columns/#dataField') options.

[note]

You cannot specify the following options in the **form** object:

- [template](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#template'); instead, use a column's [editCellTemplate](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/editCellTemplate.md '{basewidgetpath}/Configuration/columns/#editCellTemplate')        
- [readOnly](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/readOnly.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#readOnly'); instead, use [allowEditing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/allowEditing.md '{basewidgetpath}/Configuration/columns/#allowEditing')          
- [editorType](/api-reference/10%20UI%20Widgets/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType'); instead, use [onEditorPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onEditorPreparing.md '{basewidgetpath}/Configuration/#onEditorPreparing')        
- any [event](/api-reference/10%20UI%20Widgets/dxForm/4%20Events '/Documentation/ApiReference/UI_Widgets/dxForm/Events/') handler ([options](/api-reference/10%20UI%20Widgets/Widget/1%20Configuration/onContentReady.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onContentReady') whose name starts with *"on..."*); instead, handle the [editorPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/editorPreparing.md '{basewidgetpath}/Events/#editorPreparing') or [editorPrepared](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/editorPrepared.md '{basewidgetpath}/Events/#editorPrepared') event to customize the form editors.

Also, the [colCount](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/colCount.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#colCount') option defaults to 2, but it can be redefined.

[/note]

#include widgets-config-object-option-note

If you need to customize an individual form item, use the [formItem](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/formItem.md '{basewidgetpath}/Configuration/columns/#formItem') object.

#####See Also#####
- [Form Guides](/concepts/05%20Widgets/Form/05%20Configure%20Simple%20Items '/Documentation/Guide/Widgets/Form/Configure_Simple_Items/')