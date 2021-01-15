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
    A row shown in the detail section when a user edits the row in the *"form"* editing [mode](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/editing/mode.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#mode').  
- *"detailAdaptive"*  
    A row shown in the detail section of the adaptive column. This column appears when the UI component adapts to the screen or container size.  
- *"header"*  
    The row containing column headers.
- *"filter"*  
    The [filter row](/api-reference/10%20UI%20Components/dxTreeList/1%20Configuration/filterRow '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterRow/').

Properties available in the row object depend on the row type. For example, the [node](/api-reference/10%20UI%20Components/dxTreeList/6%20Row/node.md '/Documentation/ApiReference/UI_Components/dxTreeList/Row/#node') and [key](/api-reference/10%20UI%20Components/dxTreeList/6%20Row/key.md '/Documentation/ApiReference/UI_Components/dxTreeList/Row/#key') properties are available only for *"detail"*, *"detailAdaptive"* and *"data"* rows. To get information on a particular property, see its description.