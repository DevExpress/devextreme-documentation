---
id: ColumnProperties.sortingMethod
type: function(value1, value2) | undefined
---
---
##### shortDescription
Specifies a custom comparison function for sorting. Applies only when sorting is performed on the client.

##### param(value1): any
A value to be compared.

##### param(value2): any
A value to be compared.

##### return: Number
Specifies whether *value1* goes before *value2*.

##### context: Column
The `this` keyword refers to the column's configuration.

---
This function accepts two cell values and should return a number indicating their sort order:

- *Less than zero*     
*value1* goes before *value2*.
- *Zero*   
*value1* and *value2* remain unchanged relative to each other.
- *Greater than zero*   
*value1* goes after *value2*.

The function performs a culture-insensitive string comparison.