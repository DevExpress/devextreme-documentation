---
default: undefined
type: function(a, b)
---
---
##### shortDescription
Specifies how to sort the header items.

##### param(a): object
A header item.

##### field(a.value): string|number
A header item value.

##### field(a.children): array
An array of header item's children; available only when the item is expanded.

##### param(b): object
A header item.

##### field(b.value): string|number
A header item value.

##### field(b.children): array
An array of header item's children; available only when the item is expanded.

##### return: number
Indicates whether a comes before b.

---
You can order the header items per your requirements by specifying a comparison function. This function accepts two parameters that represent two header items and should return the value on which the order will be based. The value of these header items can be accessed using the **value** field. You can base your sorting method on the header item's children that are available in the **children** field.

The function returns a number that has one of three values listed below.

- *Less than zero*  
 The first function parameter comes before the second in the resulting order

- *Zero*  
 The first and the second parameters remain unchanged relative to each other

- *Greater than zero*  
 The second function parameter comes before the first in the resulting order