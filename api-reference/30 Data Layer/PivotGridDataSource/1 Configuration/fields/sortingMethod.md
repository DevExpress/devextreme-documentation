---
default: undefined
type: function(a, b)
---
---
##### shortDescription
Specifies how to sort header items.

##### param(a): Object
A header item.

##### field(a.value): String|Number
A header item value.

##### field(a.children): Array
Children belonging to the header item; available only when the item is expanded.

##### param(b): Object
A header item.

##### field(b.value): String|Number
A header item value.

##### field(b.children): Array
Children belonging to the header item; available only when the item is expanded.

##### return: Number
Indicates whether a comes before b.

---
You can order header items by specifying a comparison function. This function accepts two parameters that represent two header items and should return a value on which the order will be based. The value of these header items can be accessed using the **value** field. You can access and compare children belonging to a header item using the **children** field. Within the function, you can get the field instance using the *this* keyword. 

    <!--JavaScript-->
    var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        // ...
        fields: [{
            // ...
            sortingMethod: function (a, b) {
                var fieldSortOrder = this.sortOrder;
                // Implement your logic here
            }
        }, // ...
        ]
    });

The function returns a number that has one of three values listed below.

- *Less than zero*  
 The first function parameter comes before the second in the resulting order

- *Zero*  
 The first and second parameters remain unchanged relative to each other

- *Greater than zero*  
 The second function parameter comes before the first in the resulting order