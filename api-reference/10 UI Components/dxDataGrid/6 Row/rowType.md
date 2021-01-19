---
id: dxDataGridRowObject.rowType
type: String
---
---
##### shortDescription
The row's type.

---
This field can have one of the following values:

- *"data"*      
A row containing data.  

- *"detail"*    
A row that shows detail data. It appears when a user expands a [master row](/concepts/05%20Widgets/DataGrid/60%20Master-Detail%20Interface '/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/') or edits a row in [*"form"* editing mode](/concepts/05%20Widgets/DataGrid/20%20Editing/10%20User%20Interaction/40%20Form%20Mode.md '/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Form_Mode'). To identify whether it is one or another, check the [isEditing](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/isEditing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#isEditing') field's value. It is **true** while the editing takes place.

- *"detailAdaptive"*    
An [adaptive detail row](/concepts/05%20Widgets/DataGrid/15%20Columns/50%20Adaptability.md '/Documentation/Guide/Widgets/DataGrid/Columns/Adaptability/').

- *"group"*     
A [group row](/concepts/05%20Widgets/DataGrid/45%20Grouping/10%20User%20Interaction/20%20Expand%20and%20Collapse%20Groups.md '/Documentation/Guide/Widgets/DataGrid/Grouping/#User_Interaction/Expand_and_Collapse_Groups').        

- *"groupFooter"*       
A row in a group footer that shows the group summary.

- *"header"*    
The row containing [column headers](/concepts/05%20Widgets/DataGrid/15%20Columns/15%20Customize%20Column%20Headers.md '/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Column_Headers/').

- *"filter"*    
The [filter row](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/1%20Filter%20Row.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Filter_Row').

- *"totalFooter"*   
The row that shows the [total summary](/concepts/05%20Widgets/DataGrid/65%20Summaries/10%20Total%20Summary '/Documentation/Guide/Widgets/DataGrid/Summaries/Total_Summary/').

[note] Available row properties depend on the row type. For example, the [data](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/data.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#data') and [key](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/key.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#key') properties are undefined for *header*, *filter* and *totalFooter* rows, but have values for the other row types. Refer to a particular property's description for more information.