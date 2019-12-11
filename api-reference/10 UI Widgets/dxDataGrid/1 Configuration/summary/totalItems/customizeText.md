---
type: function(itemInfo)
---
---
##### shortDescription
Customizes the text to be displayed in the summary item.

##### param(itemInfo): Object
Data of the summary item.

##### field(itemInfo.value): String|Number|Date
Summary item value as it was calculated.

##### field(itemInfo.valueText): String
Summary item value with applied [format](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/valueFormat.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#valueFormat').

##### return: String
Text to be displayed in the summary item.

---
This option accepts a function that must return the text to be displayed in the summary item. When you implement this function, you can access the summary item value using the fields of object passed to the function as its argument. 

#####See Also#####
- [Format Text and Value](/concepts/05%20Widgets/DataGrid/65%20Summaries/40%20Format%20Text%20and%20Value.md '/Documentation/Guide/Widgets/DataGrid/Summaries/Format_Text_and_Value/')