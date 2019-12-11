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
Summary item value with applied <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#valueFormat">format</a>.

##### return: String
Text to be displayed in the summary item.

---
This option accepts a function that must return the text to be displayed in the summary item. When you implement this function, you can access the summary item value using the fields of object passed to the function as its argument.