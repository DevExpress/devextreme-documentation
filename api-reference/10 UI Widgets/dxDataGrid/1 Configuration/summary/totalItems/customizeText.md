---
type: function(itemInfo)
---
---
##### shortDescription
Customizes the text to be displayed in the summary item.

##### param(itemInfo): object
Data of the summary item.

##### field(itemInfo.value): string|number|date
Summary item value as it was calculated.

##### field(itemInfo.valueText): string
Summary item value with applied <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#valueFormat">format</a>.

##### return: string
Text to be displayed in the summary item.

---
This option accepts a function that must return the text to be displayed in the summary item. When you implement this function, you can access the summary item value using the fields of object passed to the function as its argument.