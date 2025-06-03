---
id: ColumnProperties.calculateFilterExpression
type: function(filterValue, selectedFilterOperation, target)
---
---
##### shortDescription
Specifies the column's custom rules to filter data.

##### param(filterValue): any
A user input value.             
Contains an array if the `selectedFilterOperation` is one of the following: *"between"*, *"anyof"*, *"noneof"*.

##### param(selectedFilterOperation): String | null
A selected filter operation.

##### param(target): String
A UI element used to filter data.     
Possible values: [*"headerFilter"*](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/headerFilter.md '{basewidgetpath}/Configuration/headerFilter/'), [*"filterBuilder"*](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/filterBuilder.md '{basewidgetpath}/Configuration/#filterBuilder'), [*"search"*](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/searchPanel.md '{basewidgetpath}/Configuration/searchPanel/').

##### return: String | Array<any> | function()
A filter expression.

##### context: Column
The `this` keyword refers to the column's configuration.

---
<!-- Description goes here -->