---
id: ColumnProperties.customizeText
type: function(fieldInfo)
---
---
##### shortDescription
Customizes text displayed in field values.

##### return: String
The text the field value should display.

##### context: Column
The `this` keyword refers to the column's configuration.

##### param(fieldInfo): Object
Information on the current field.

##### field(fieldInfo.groupInterval): String | Number
Indicates how header filter values were combined into groups. Available if **target** is *"headerFilter"*. 

##### field(fieldInfo.target): String
The UI element where the **customizeText** function was called: *"card"*, *"headerFilter"*, *"search"*, *"filterPanel"*, or *"filterBuilder"*.

##### field(fieldInfo.value): any
The field value.

##### field(fieldInfo.valueText): String
The [formatted](/Documentation/ApiReference/UI_Components/dxCardView/Configuration/columns/#format) value converted to a string.

---
<!-- Description goes here -->