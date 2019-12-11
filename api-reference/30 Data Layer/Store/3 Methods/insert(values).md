---
##### shortDescription
Adds an item to the data associated with this Store.

##### param(values): object
An object representing the new item.

##### return: Promise
A Promise of the jQuery.Deferred object resolved after the item has been inserted.

---
<!--JavaScript-->
    store.insert({
            id: 5,
            name: "item1",
            value: 10
        })
        .done(function(values, key) {
            //'values' contains the inserted item values
            //'key' contains the inserted item key
        })
        .fail(function(error) {
            //handle error
        });

[note] If data already contains an object with the same key property value as the object being inserted, the insertion fails.