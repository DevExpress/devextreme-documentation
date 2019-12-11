---
id: dxDataGrid.Options.summary.groupItems.customizeText
type: function(itemInfo)
---
---
##### shortDescription
Customizes the text to be displayed in the summary item.

##### param(itemInfo): Object
The summary item's data.

##### field(itemInfo.value): String | Number | Date
The summary item's value as it was calculated.

##### field(itemInfo.valueText): String
The summary item's [formatted](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/groupItems/valueFormat.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#valueFormat') value.

##### return: String
The text for the summary item to display.

---
This option accepts a function that must return the text to be displayed in the summary item. When you implement this function, you can access the summary item value using the fields of object passed to the function as its argument.

#####See Also#####
- [Format Text and Value](/concepts/05%20Widgets/DataGrid/65%20Summaries/40%20Format%20Text%20and%20Value.md '/Documentation/Guide/Widgets/DataGrid/Summaries/Format_Text_and_Value/')