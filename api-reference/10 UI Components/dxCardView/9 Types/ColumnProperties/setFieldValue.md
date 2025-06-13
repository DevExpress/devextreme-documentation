---
id: ColumnProperties.setFieldValue
type: function(newData, value, currentCardData)
---
---
##### shortDescription
Specifies a function to be invoked after the user has edited a field value, but before it is saved in the data source.

##### param(newData): Object
The data object where new data should be set.

##### param(value): any
The input value.

##### param(currentCardData): Object
Accesses the current card data in read-only mode.

##### return: void | Promise<void>
Return a promise for an asynchronous operation or return nothing.

##### context: Column
The `this` keyword refers to the column's configuration.

---
This function allows you to process user input before it is saved to the data source. It accepts the **newData**, **value**, and **currentRowData** parameters. **value** is the user input that you should assign to one of the **newData** fields. Fill the empty **newData** object with fields whose values should be saved in the current row's data object. You can use the read-only **currentCardData** parameter to access the current card's data.