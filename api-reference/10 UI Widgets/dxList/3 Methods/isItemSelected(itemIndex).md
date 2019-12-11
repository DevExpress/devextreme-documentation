---
##### shortDescription
Returns a Boolean value that indicates whether or not the specified item is selected.

##### param(itemIndex): Number|Object
The index number of the requested list item. If the list is grouped, pass an object with the required group and item indexes, e.g., { group: 0, item: 0 }.

##### return: boolean
A Boolean value specifying whether or not the requested item is selected.

---
To determine which items are currently selected, use the widget's [option](/api-reference/10%20UI%20Widgets/Component/3%20Methods/option(optionName).md '/Documentation/ApiReference/UI_Widgets/dxList/Methods/#optionoptionName') method, passing the [selectedItems](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/selectedItems.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectedItems') as a parameter.