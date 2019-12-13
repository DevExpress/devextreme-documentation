---
id: dxTreeListRowObject.rowType
type: String
---
---
##### shortDescription
The row's type.

---
This field accepts the following values.

- *"data"*  
    A row containing data.  
- *"detail"*  
    A row shown in the detail section when a user edits the row in the *"form"* editing [mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/editing/#mode').  
- *"detailAdaptive"*  
    A row shown in the detail section of the adaptive column. This column appears when the widget adapts to the screen or container size.  
- *"header"*  
    The row containing column headers.
- *"filter"*  
    The [filter row](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/filterRow/').

Properties available in the row object depend on the row type. For example, the [data](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#data) and [key](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row/key.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#key') properties are available only for *detail*, *detailAdaptive* and *data* rows. To get information on a particular property, see its description.